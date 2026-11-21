const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Load environment variables from .env
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}
loadEnv();

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const DATA_FILE = path.join(__dirname, 'data.json');

// Upload buffer to Supabase Storage bucket
function uploadToSupabase(buffer, mimeType, originalName) {
  return new Promise((resolve, reject) => {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    const bucket = process.env.SUPABASE_BUCKET || 'test1';

    if (!supabaseUrl || !supabaseKey) {
      return reject(new Error('Supabase credentials not configured'));
    }

    let ext = path.extname(originalName);
    if (!ext) {
      if (mimeType.includes('png')) ext = '.png';
      else if (mimeType.includes('webp')) ext = '.webp';
      else if (mimeType.includes('mp4')) ext = '.mp4';
      else if (mimeType.includes('webm')) ext = '.webm';
      else if (mimeType.includes('quicktime') || mimeType.includes('mov')) ext = '.mov';
      else ext = '.jpg';
    }
    const cleanExt = ext.startsWith('.') ? ext : `.${ext}`;
    const cleanName = path.basename(originalName || 'gear', ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const remotePath = `items/${Date.now()}-${cleanName}${cleanExt}`;

    const parsed = new URL(supabaseUrl);
    const options = {
      hostname: parsed.hostname,
      path: `/storage/v1/object/${bucket}/${remotePath}`,
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': mimeType || 'image/jpeg',
        'Content-Length': buffer.length,
        'x-upsert': 'true'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const publicUrl = `${supabaseUrl}/storage/v1/object/public/${bucket}/${remotePath}`;
          resolve({
            publicUrl,
            path: remotePath,
            bucket
          });
        } else {
          reject(new Error(`Supabase upload failed (${res.statusCode}): ${body}`));
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.write(buffer);
    req.end();
  });
}

function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch (err) {
    console.error("Data load err:", err);
  }
  return { users: [], handoverSpots: [], listings: [], reservations: [], reviews: [] };
}

function saveData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error("Data save err:", err);
  }
}

let db = loadData();

// SSE (Server-Sent Events) clients
const sseClients = new Set();

function broadcastEvent(eventType, payload) {
  const data = JSON.stringify({ type: eventType, data: payload, timestamp: new Date().toISOString() });
  for (const client of sseClients) {
    try {
      client.write(`data: ${data}\n\n`);
    } catch (e) {
      sseClients.delete(client);
    }
  }
}

// Request Body Parser Helper
function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch (e) {
        resolve({});
      }
    });
  });
}

// MIME types helper
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.jsx': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.ogv': 'video/ogg'
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // SSE Stream endpoint
  if (pathname === '/api/events' && method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    res.write(`data: ${JSON.stringify({ type: 'CONNECTED' })}\n\n`);
    sseClients.add(res);

    req.on('close', () => {
      sseClients.delete(res);
    });
    return;
  }

  // API: Get complete app state
  if (pathname === '/api/state' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(db));
  }

  // API: Get filtered listings
  if (pathname === '/api/listings' && method === 'GET') {
    const { category, semester, search, type } = parsedUrl.query;
    let results = [...db.listings];

    if (category && category !== 'All') {
      results = results.filter(item => item.category === category);
    }
    if (semester && semester !== 'All') {
      results = results.filter(item => item.targetSemester.toString() === semester.toString());
    }
    if (type && type !== 'All') {
      results = results.filter(item => item.type === 'Both' || item.type.toLowerCase() === type.toLowerCase());
    }
    if (search) {
      const q = search.toLowerCase();
      results = results.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.targetCourse.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(results));
  }

  // API: Upload picture or video directly to Supabase Storage
  if (pathname === '/api/upload' && method === 'POST') {
    try {
      const body = await parseBody(req);
      let buffer;
      let filename = body.filename || `gear-${Date.now()}.jpg`;
      let mimeType = body.mimeType;

      if (body.dataUrl && typeof body.dataUrl === 'string' && body.dataUrl.startsWith('data:')) {
        const semicolonIdx = body.dataUrl.indexOf(';');
        const commaIdx = body.dataUrl.indexOf(',');
        if (semicolonIdx > 5 && commaIdx > semicolonIdx) {
          mimeType = body.dataUrl.substring(5, semicolonIdx);
          buffer = Buffer.from(body.dataUrl.substring(commaIdx + 1), 'base64');
        } else {
          buffer = Buffer.from(body.dataUrl, 'base64');
        }
      } else if (body.base64) {
        buffer = Buffer.from(body.base64, 'base64');
      } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Missing media data (dataUrl or base64)' }));
      }

      // Infer correct mimeType from filename extension if not specified
      if (!mimeType || mimeType === 'application/octet-stream') {
        const ext = path.extname(filename).toLowerCase();
        if (ext === '.mp4') mimeType = 'video/mp4';
        else if (ext === '.webm') mimeType = 'video/webm';
        else if (ext === '.mov') mimeType = 'video/quicktime';
        else if (ext === '.png') mimeType = 'image/png';
        else if (ext === '.webp') mimeType = 'image/webp';
        else mimeType = 'image/jpeg';
      }

      const result = await uploadToSupabase(buffer, mimeType, filename);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        success: true,
        publicUrl: result.publicUrl,
        path: result.path,
        bucket: result.bucket,
        storage: 'supabase',
        mimeType
      }));
    } catch (err) {
      console.error('Supabase upload error:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        success: false,
        error: err.message
      }));
    }
  }

  // API: Create new listing with 50% Rental Cap Enforcement
  if (pathname === '/api/listings' && method === 'POST') {
    const body = await parseBody(req);
    const owner = db.users.find(u => u.studentId === body.ownerId || u.id === body.ownerId) || db.users[0];

    const originalPrice = parseFloat(body.originalPrice) || 500;
    const maxRentalFee = Math.floor(originalPrice * 0.5); // 50% Cap Rule!
    let requestedRent = parseFloat(body.rentalFee || body.price) || 180;
    if (requestedRent > maxRentalFee) {
      requestedRent = maxRentalFee; // Enforce max 50% cap
    }

    const buyPrice = parseFloat(body.buyPrice) || Math.round(originalPrice * 0.55);
    const deposit = parseFloat(body.deposit) || Math.round(originalPrice * 0.4);

    const newListing = {
      id: `item-${Date.now()}`,
      title: body.title || 'Campus Equipment',
      description: body.description || 'Verified course equipment in great working condition.',
      category: body.category || 'Drawing/Lab Gear',
      department: body.department || owner.department || 'Engineering & Sciences',
      targetCourse: body.targetCourse || 'General Engineering',
      targetSemester: parseInt(body.targetSemester) || 1,
      type: body.type || 'Both',
      originalPrice: originalPrice,
      price: requestedRent,
      rentalFee: requestedRent,
      buyPrice: buyPrice,
      priceUnit: 'per semester',
      deposit: deposit,
      condition: body.condition || 'Excellent',
      ownerId: owner.studentId || owner.id,
      ownerName: owner.name,
      ownerRole: owner.role || 'Senior',
      ownerAvatar: owner.avatar,
      ownerRating: owner.rating || 5.0,
      campusHandoverSpot: body.campusHandoverSpot || (db.handoverSpots && db.handoverSpots[0]) || 'Central Campus Library - North Portico',
      status: 'Available',
      image: body.image || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      video: body.video || null,
      createdAt: new Date().toISOString()
    };

    db.listings.unshift(newListing);
    saveData(db);
    broadcastEvent('NEW_LISTING', newListing);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newListing));
  }

  // API: Cart Checkout (Batch or Single Item Checkout)
  if (pathname === '/api/checkout' && method === 'POST') {
    const body = await parseBody(req);
    const items = body.items || [];
    const borrowerId = body.borrowerId || 'CSE-2026-1042';
    const borrower = db.users.find(u => u.studentId === borrowerId || u.id === borrowerId) || db.users[0];
    const paymentMethod = body.paymentMethod || 'upi'; // 'upi' or 'wallet'
    const paymentDetails = body.paymentDetails || {};

    const createdReservations = [];
    let totalImmediateDeduct = 0;
    let totalDepositsHeld = 0;

    for (const cartItem of items) {
      const listing = db.listings.find(l => l.id === cartItem.id);
      if (!listing) continue;

      const isRent = cartItem.mode === 'rent';
      const itemPrice = isRent ? (listing.rentalFee || listing.price) : (listing.buyPrice || Math.round(listing.originalPrice * 0.55));
      const deposit = isRent ? (listing.deposit || 200) : 0;
      const convenienceFee = 0;
      const platformFee = 15; // Flat ₹15 platform fee for all orders

      listing.status = isRent ? 'Reserved' : 'Sold';

      // Find full seller information from user database
      const seller = db.users.find(u => u.studentId === listing.ownerId || u.id === listing.ownerId) || {
        name: listing.ownerName,
        department: listing.department || 'Civil Engineering',
        courseSemester: 'CE Sem 5',
        role: listing.ownerRole || 'Senior',
        rating: listing.ownerRating || 4.8,
        avatar: listing.ownerAvatar
      };

      const sellerHandle = `@${(listing.ownerName || 'senior').toLowerCase().replace(/\s+/g, '_')}`;
      const sellerEmail = `${(listing.ownerName || 'senior').toLowerCase().replace(/\s+/g, '.')}@campus.edu`;

      const reservation = {
        id: `res-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        listingId: listing.id,
        listingTitle: listing.title,
        listingImage: listing.image,
        targetCourse: listing.targetCourse,
        borrowerId: borrower.studentId || borrower.id,
        borrowerName: borrower.name,
        lenderId: listing.ownerId,
        lenderName: listing.ownerName,
        sellerDetails: {
          id: listing.ownerId,
          name: listing.ownerName,
          role: listing.ownerRole || seller.role || 'Senior',
          department: seller.department || listing.department || 'Engineering',
          courseSemester: seller.courseSemester || 'Sem 5',
          handle: sellerHandle,
          email: seller.email || sellerEmail,
          phone: '+91 98765 43210',
          campusChatPin: `#${Math.floor(1000 + Math.random() * 9000)}`,
          rating: listing.ownerRating || seller.rating || 4.8,
          avatar: listing.ownerAvatar || seller.avatar
        },
        type: isRent ? 'Rent' : 'Buy',
        rentAmount: isRent ? itemPrice : 0,
        buyPrice: isRent ? 0 : itemPrice,
        depositAmount: deposit,
        convenienceFee: 0,
        platformFee: 15,
        walletDiscount: paymentMethod === 'wallet' ? 10 : 0,
        totalPaid: Math.max(0, itemPrice + deposit + 15 - (paymentMethod === 'wallet' ? 10 : 0)),
        paymentMethod: paymentMethod,
        paymentDetails: paymentDetails,
        handoverSpot: listing.campusHandoverSpot,
        handoverDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        status: isRent ? 'Reserved' : 'Purchased',
        depositStatus: isRent ? 'Escrow Held Securely (100% Refundable)' : 'Direct Ownership Transferred',
        createdAt: new Date().toISOString()
      };

      if (isRent) {
        totalImmediateDeduct += itemPrice + 15;
        totalDepositsHeld += deposit;
      } else {
        totalImmediateDeduct += itemPrice + 15;
      }

      db.reservations.unshift(reservation);
      createdReservations.push(reservation);
      broadcastEvent('ITEM_RESERVED', { reservation, listing });
    }

    // Process wallet deduction if payment was made via Campus Wallet (with flat ₹10 discount applied)
    if (borrower) {
      if (paymentMethod === 'wallet') {
        const totalPayable = Math.max(0, (totalImmediateDeduct + totalDepositsHeld) - 10);
        borrower.walletBalance = Math.max(0, Math.round(((borrower.walletBalance || 0) - totalPayable) * 100) / 100);
      }
      if (totalDepositsHeld > 0) {
        borrower.escrowHeld = (borrower.escrowHeld || 0) + totalDepositsHeld;
      }
    }

    saveData(db);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ 
      success: true, 
      reservations: createdReservations,
      newWalletBalance: borrower ? borrower.walletBalance : undefined,
      newEscrowHeld: borrower ? borrower.escrowHeld : undefined
    }));
  }

  // API: Top Up Campus Wallet with 5% Reload Bonus (₹X credits ₹X * 1.05)
  if (pathname === '/api/wallet/topup' && method === 'POST') {
    const body = await parseBody(req);
    const studentId = body.studentId || 'CSE-2026-1042';
    const amount = parseFloat(body.amount) || 0;

    if (amount <= 0) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Please specify a valid top-up amount' }));
    }

    const student = db.users.find(u => u.studentId === studentId || u.id === studentId) || db.users[0];
    if (!student) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Student not found' }));
    }

    // No bonus on wallet recharge: wallet is recharged with exactly the amount specified
    const bonus = 0;
    const credited = amount;
    student.walletBalance = Math.round(((student.walletBalance || 0) + credited) * 100) / 100;

    saveData(db);
    broadcastEvent('WALLET_TOPPED_UP', {
      studentId: student.studentId,
      amount,
      bonus: 0,
      credited,
      newBalance: student.walletBalance
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      success: true,
      amount,
      bonus: 0,
      credited,
      newBalance: student.walletBalance
    }));
  }

  // API: Order & Deal Lifecycle Action (Mark Delivered, Return Safe with Refund Choice, Damage Forfeit)
  if (pathname.startsWith('/api/reservations/') && pathname.endsWith('/action') && method === 'POST') {
    const parts = pathname.split('/');
    const resId = parts[3];
    const body = await parseBody(req);
    const action = body.action;

    const reservation = db.reservations.find(r => r.id === resId);
    if (!reservation) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Order / deal not found' }));
    }

    const borrower = db.users.find(u => u.studentId === reservation.borrowerId || u.id === reservation.borrowerId);
    const lender = db.users.find(u => u.studentId === reservation.lenderId || u.id === reservation.lenderId);
    const listing = db.listings.find(l => l.id === reservation.listingId);

    if (action === 'mark_delivered') {
      // For purchases: releases seller payout minus platform commission and updates order status
      reservation.status = 'Delivered & Completed';
      reservation.deliveryConfirmedAt = new Date().toISOString();
      const buyPrice = reservation.buyPrice || 260;
      const platformFee = reservation.platformFee !== undefined ? reservation.platformFee : 15;
      const sellerPayout = Math.max(0, buyPrice - platformFee);
      reservation.sellerPayout = sellerPayout;
      reservation.payoutStatus = `₹${sellerPayout} Released to Seller (${reservation.lenderName})`;

      if (lender) {
        lender.walletBalance = Math.round(((lender.walletBalance || 0) + sellerPayout) * 100) / 100;
      }
      if (listing) {
        listing.status = 'Sold';
      }

      saveData(db);
      broadcastEvent('DEAL_UPDATED', reservation);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ 
        success: true, 
        reservation, 
        sellerPayout,
        platformFee,
        message: `Delivered! ₹${sellerPayout} payout released to seller after ₹${platformFee} flat platform fee.` 
      }));
    }

    if (action === 'return_safe') {
      // For rentals: refunds the Security Deposit back to the buyer with choice of Campus Wallet or Bank Account
      const refundMethod = body.refundMethod || 'wallet'; // 'wallet' or 'bank'
      const depositRefunded = reservation.depositAmount || 0;

      reservation.status = 'Returned & Refunded';
      reservation.returnedAt = new Date().toISOString();
      reservation.refundMethod = refundMethod;
      reservation.depositStatus = refundMethod === 'bank'
        ? `₹${depositRefunded} Security Deposit Redeemed to Bank Account`
        : `₹${depositRefunded} Security Deposit Refunded to Campus Wallet`;

      if (borrower) {
        borrower.escrowHeld = Math.max(0, (borrower.escrowHeld || 0) - depositRefunded);
        if (refundMethod === 'wallet') {
          borrower.walletBalance = Math.round(((borrower.walletBalance || 0) + depositRefunded) * 100) / 100;
        }
      }

      // Rent fee is released to seller
      if (lender) {
        lender.walletBalance = Math.round(((lender.walletBalance || 0) + (reservation.rentAmount || 180)) * 100) / 100;
      }
      if (listing) {
        listing.status = 'Available';
      }

      if (body.rating) {
        db.reviews.unshift({
          id: `rev-${Date.now()}`,
          listingTitle: reservation.listingTitle,
          reviewerName: reservation.borrowerName,
          targetName: reservation.lenderName,
          rating: body.rating || 5,
          comment: body.comment || 'Item returned in great shape! Security deposit unlocked.',
          date: new Date().toISOString().split('T')[0]
        });
      }

      saveData(db);
      broadcastEvent('DEAL_UPDATED', reservation);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        success: true,
        reservation,
        refundMethod,
        depositRefunded,
        newBuyerBalance: borrower ? borrower.walletBalance : undefined,
        message: refundMethod === 'bank'
          ? `₹${depositRefunded} security deposit redeemed to bank account ending in 4108!`
          : `₹${depositRefunded} security deposit refunded directly to your Campus Wallet!`
      }));
    }

    if (action === 'damage_claim') {
      // For rentals: forfeits the Security Deposit + Rental Fee to the seller and shows settlement summary
      const depositForfeited = reservation.depositAmount || 0;
      const rentRetained = reservation.rentAmount || 0;
      const totalSettlement = depositForfeited + rentRetained;

      reservation.status = 'Settled - Security Deposit Forfeited (Damage Claim)';
      reservation.damageClaimedAt = new Date().toISOString();
      reservation.depositStatus = `Forfeited to Seller (₹${depositForfeited} damage indemnity)`;
      reservation.damageDetails = {
        reason: body.reason || 'Item returned broken or heavily damaged',
        depositForfeited,
        rentRetained,
        totalSettlementToSeller: totalSettlement,
        settledDate: new Date().toISOString().split('T')[0]
      };

      if (borrower) {
        borrower.escrowHeld = Math.max(0, (borrower.escrowHeld || 0) - depositForfeited);
      }

      // Seller receives both rent fee and forfeited deposit as indemnity
      if (lender) {
        lender.walletBalance = Math.round(((lender.walletBalance || 0) + totalSettlement) * 100) / 100;
      }
      if (listing) {
        listing.status = 'Damaged / Retired';
      }

      saveData(db);
      broadcastEvent('DEAL_UPDATED', reservation);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        success: true,
        reservation,
        settlement: reservation.damageDetails,
        message: `Settlement complete: ₹${depositForfeited} deposit + ₹${rentRetained} rent retained by seller for item damage compensation.`
      }));
    }

    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Unknown action specified' }));
  }

  // API: Single Reservation
  if (pathname === '/api/reservations' && method === 'POST') {
    const body = await parseBody(req);
    const listing = db.listings.find(l => l.id === body.listingId);

    if (!listing) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Item not found' }));
    }
    if (listing.status !== 'Available') {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Item is not currently available' }));
    }

    const borrower = db.users.find(u => u.studentId === body.borrowerId || u.id === body.borrowerId) || db.users[0];
    const isRent = body.mode !== 'buy';
    listing.status = isRent ? 'Reserved' : 'Sold';

    const itemPrice = isRent ? (listing.rentalFee || listing.price) : (listing.buyPrice || 260);
    const deposit = isRent ? (listing.deposit || 200) : 0;
    const fee = isRent ? 8 : Math.round(itemPrice * 0.05);

    const reservation = {
      id: `res-${Date.now()}`,
      listingId: listing.id,
      listingTitle: listing.title,
      borrowerId: borrower.studentId || borrower.id,
      borrowerName: borrower.name,
      lenderId: listing.ownerId,
      lenderName: listing.ownerName,
      type: isRent ? 'Rent' : 'Buy',
      rentAmount: isRent ? itemPrice : 0,
      buyPrice: isRent ? 0 : itemPrice,
      depositAmount: deposit,
      convenienceFee: isRent ? fee : 0,
      platformFee: isRent ? 0 : fee,
      totalPaid: itemPrice + deposit + fee,
      handoverSpot: body.handoverSpot || listing.campusHandoverSpot,
      handoverDate: body.handoverDate || new Date(Date.now() + 86400000).toISOString().split('T')[0],
      status: isRent ? 'Reserved' : 'Purchased',
      depositStatus: isRent ? 'Escrow Held Securely (100% Refundable)' : 'Direct Ownership Transferred',
      createdAt: new Date().toISOString()
    };

    if (isRent && borrower) {
      borrower.escrowHeld = (borrower.escrowHeld || 0) + deposit;
    }

    db.reservations.unshift(reservation);
    saveData(db);
    broadcastEvent('ITEM_RESERVED', { reservation, listing });

    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(reservation));
  }

  // API: Update reservation status (Handed Over / Returned & Refunded)
  if (pathname.startsWith('/api/reservations/') && pathname.endsWith('/status') && method === 'PATCH') {
    const parts = pathname.split('/');
    const resId = parts[3];
    const body = await parseBody(req);

    const reservation = db.reservations.find(r => r.id === resId);
    if (!reservation) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Reservation not found' }));
    }

    reservation.status = body.status;

    if (body.status === 'Handed Over') {
      reservation.depositStatus = 'Escrow Active (Item with Borrower)';
      const listing = db.listings.find(l => l.id === reservation.listingId);
      if (listing) listing.status = 'In Use';
    } else if (body.status === 'Returned & Refunded') {
      reservation.depositStatus = `₹${reservation.depositAmount} Escrow Deposit Refunded`;
      const listing = db.listings.find(l => l.id === reservation.listingId);
      if (listing) listing.status = 'Available';

      const borrower = db.users.find(u => u.studentId === reservation.borrowerId || u.id === reservation.borrowerId);
      if (borrower) {
        borrower.escrowHeld = Math.max(0, (borrower.escrowHeld || 0) - reservation.depositAmount);
      }
      const lender = db.users.find(u => u.studentId === reservation.lenderId || u.id === reservation.lenderId);
      if (lender) {
        lender.walletBalance = (lender.walletBalance || 0) + (reservation.rentAmount || reservation.buyPrice || 180);
      }

      if (body.rating) {
        db.reviews.unshift({
          id: `rev-${Date.now()}`,
          listingTitle: reservation.listingTitle,
          reviewerName: reservation.borrowerName,
          targetName: reservation.lenderName,
          rating: body.rating,
          comment: body.comment || 'Smooth campus handover, item in pristine shape! Escrow deposit refunded seamlessly.',
          date: new Date().toISOString().split('T')[0]
        });
      }
    }

    saveData(db);
    broadcastEvent('RESERVATION_UPDATED', reservation);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(reservation));
  }

  // SPA Route Handling
  const knownSPARoutes = ['/', '/login', '/marketplace', '/wallet', '/how-it-works', '/list', '/checkout', '/orders'];
  const hasExt = path.extname(pathname) !== '';

  if (!hasExt || knownSPARoutes.includes(pathname)) {
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    fs.readFile(indexPath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading application shell: ' + err.message);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
      }
    });
    return;
  }

  // Static File Serving
  const filePath = path.join(PUBLIC_DIR, pathname);
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(PUBLIC_DIR, 'index.html'), (indexErr, indexContent) => {
          if (!indexErr) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(indexContent);
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          }
        });
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error: ' + err.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Hand It Down server running at http://localhost:${PORT}`);
});
