const { useState, useEffect, useMemo, useRef } = React;

// ==========================================================================
// Hand It Down - Peer-to-Peer College Book & Semester Gear Exchange
// Custom Modern Editorial SVG Icon Suite
// ==========================================================================

const Icons = {
  Book: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
      <path d="M6 6h10"/><path d="M6 10h10"/>
    </svg>
  ),
  Drafting: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
  Calculator: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2"/>
      <line x1="8" x2="16" y1="6" y2="6"/>
      <line x1="16" x2="16" y1="14" y2="18"/>
      <path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>
    </svg>
  ),
  LabKit: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/>
      <path d="M8.5 2h7"/><path d="M7 16h10"/>
    </svg>
  ),
  ShieldCheck: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  Search: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  ),
  ArrowRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  ),
  Handshake: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.6-6.6a2 2 0 0 0 0-2.8l-3.2-3.2a2 2 0 0 0-2.8 0L13 8.4"/>
      <path d="m3 11 6.6-6.6a2 2 0 0 1 2.8 0l3.2 3.2a2 2 0 0 1 0 2.8L9 17"/>
      <path d="m11 11-4 4a2 2 0 0 0 0 2.8l1.2 1.2a2 2 0 0 0 2.8 0l4-4"/>
    </svg>
  ),
  Wallet: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/>
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>
    </svg>
  ),
  ShoppingCart: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
  ),
  Star: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  MapPin: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  CheckCircle: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  Plus: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="M12 5v14"/>
    </svg>
  ),
  User: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Menu: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  ),
  X: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  ),
  RefreshCw: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
      <path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
      <path d="M8 16H3v5"/>
    </svg>
  ),
  Tag: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 2 3.5 3.5L7 14l-5-5L12 2z"/>
      <path d="m14 7 3 3L8.5 18.5 4 14"/>
    </svg>
  ),
  Sparkles: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/>
    </svg>
  ),
  ChevronDown: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  ),
  ChevronRight: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  LogOut: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  ),
  Percent: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" x2="5" y1="5" y2="19"/>
      <circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
    </svg>
  ),
  QrCode: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="6" height="6" x="3" y="3" rx="1"/>
      <rect width="6" height="6" x="15" y="3" rx="1"/>
      <rect width="6" height="6" x="3" y="15" rx="1"/>
      <path d="M21 15h-3a2 2 0 0 0-2 2v4"/>
      <path d="M21 21v.01"/>
      <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
      <path d="M3 12h.01"/>
      <path d="M12 3h.01"/>
      <path d="M12 16v.01"/>
      <path d="M16 12h1"/>
      <path d="M21 12v.01"/>
      <path d="M12 21v-1"/>
    </svg>
  ),
  Bot: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/>
      <path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
    </svg>
  ),
  Building: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2"/>
      <path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
    </svg>
  ),
  AlertCircle: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
  Clock: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Send: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  Check: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  MessageSquare: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  CreditCard: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
    </svg>
  ),
  Camera: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  ),
  Upload: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/>
      <line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  ),
  Image: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
      <circle cx="9" cy="9" r="2"/>
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
  ),
  Link: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  Trash2: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      <line x1="10" y1="11" x2="10" y2="17"/>
      <line x1="14" y1="11" x2="14" y2="17"/>
    </svg>
  ),
  Video: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
    </svg>
  ),
  Play: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  )
};

// ==========================================================================
// Hand It Down Logo Mark Component
// ==========================================================================
const BrandLogo = ({ onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-center gap-3 cursor-pointer group select-none"
  >
    <div className="w-9 h-9 rounded-md bg-[#141416] flex items-center justify-center text-white border border-[#141416] shadow-sm group-hover:bg-[#FF5A1F] group-hover:border-[#FF5A1F] transition-colors duration-200">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
        <path d="M6 6h9"/>
        <path d="M6 10h9"/>
        <path d="M12 14v4"/>
        <path d="m9.5 16 2.5 2.5 2.5-2.5"/>
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="font-editorial text-xl font-bold tracking-tight text-[#141416] leading-none group-hover:text-[#FF5A1F] transition-colors">
        Hand It Down
      </span>
      <span className="text-[11px] font-medium text-[#5E5D59] tracking-wider uppercase mt-1">
        Peer College Gear Exchange
      </span>
    </div>
  </div>
);

// ==========================================================================
// LocalStorage Persistence Keys
// ==========================================================================
const STUDENT_STORAGE_KEY = 'hand_it_down_student';
const CART_STORAGE_KEY = 'hand_it_down_cart';

const getSavedStudentSession = () => {
  try {
    const raw = localStorage.getItem(STUDENT_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Failed to parse student session:', e);
  }
  return null;
};

const getSavedCart = () => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Failed to parse cart:', e);
  }
  return [];
};

// ==========================================================================
// Main Application Component
// ==========================================================================
function App() {
  // Navigation & Routing State
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Student Session State
  const [currentUser, setCurrentUser] = useState(() => getSavedStudentSession());

  // Cart State (Slide-over Cart Drawer)
  const [cart, setCart] = useState(() => getSavedCart());
  const [isCartOpen, setIsCartOpen] = useState(false);

  // App Data State
  const [users, setUsers] = useState([]);
  const [listings, setListings] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [handoverSpots, setHandoverSpots] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Marketplace Filters (Books, Drawing/Lab Gear, Electronics)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSemester, setSelectedSemester] = useState('All');
  const [selectedDealType, setSelectedDealType] = useState('All'); // 'All', 'Rent', 'Buy'
  const [sortBy, setSortBy] = useState('savings');

  // Modals & User Feedback
  const [selectedListing, setSelectedListing] = useState(null);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Floating AI Assistant: CampusBot State (Accessible from ANY screen)
  const [isCampusBotOpen, setIsCampusBotOpen] = useState(false);
  const [campusBotUnread, setCampusBotUnread] = useState(false);
  const [campusBotMessages, setCampusBotMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      type: 'text',
      timestamp: 'Just now',
      text: "👋 Hi! I'm **CampusBot**, your college peer exchange AI assistant. I can help coordinate campus meetups, check our strict 50% rental fee cap rule, and verify 100% refundable escrow deposits. Ask me anything!"
    }
  ]);

  // CampusBot: Generate contextual AI responses
  const generateCampusBotReply = (userQuery) => {
    const q = (userQuery || '').toLowerCase();
    let reply = "";

    if (q.includes('library') || q.includes('main library steps')) {
      reply = "🏛️ **Meetup Spot Confirmed: Main Library Steps**\n\n• **Exact Location**: Under the North Portico by the wide stone study benches.\n• **Security & Perks**: Well-lit, high campus footfall, covered study benches, and 24/7 CCTV surveillance.\n• **Handover Checklist**:\n  1. Meet near the covered portico benches.\n  2. Verify your Chat PIN with the senior.\n  3. Inspect textbook or test calculator keys/tools.\n  4. Tap **'Mark as Delivered'** in your **Active Deal Tracker** to release escrow!";
    } else if (q.includes('canteen') || q.includes('courtyard')) {
      reply = "☕ **Meetup Spot Confirmed: Canteen Courtyard**\n\n• **Exact Location**: Student Union Breezeway, Table 4 near the campus coffee kiosk.\n• **Convenience**: 5-minute fast swap between lectures or during lunch breaks.\n• **Handover Checklist**:\n  1. Grab a seat at Table 4.\n  2. Verify senior identity with your Chat PIN.\n  3. Inspect items and complete handover in your **Active Deal Tracker**!";
    } else if (q.includes('lawn') || q.includes('central lawn') || q.includes('clocktower')) {
      reply = "🌳 **Meetup Spot Confirmed: Central Lawn**\n\n• **Exact Location**: Main Clocktower Walkway midway between Science Quad & Engineering Hall.\n• **Open Landmark**: Broad daylight, easy central landmark accessible from any department.\n• **Handover Checklist**:\n  1. Meet by the Clocktower walkway benches.\n  2. Confirm Chat PIN and inspect gear.\n  3. Tap **'Mark as Delivered'** in your **Active Deal Tracker** once handed over!";
    } else if (q.includes('meet') || q.includes('spot') || q.includes('where') || q.includes('location')) {
      reply = "📍 **Top Recommended Campus Meetup Spots**:\n\n1. **Main Library Steps** (North Portico) — High footfall, covered benches, CCTV monitored, ideal for inspecting textbooks or testing drafting tools.\n2. **Canteen Courtyard** (Student Union Breezeway Table 4) — Convenient 5-minute coffee & exchange spot between lectures.\n3. **Central Lawn** (Clocktower Walkway) — Neutral, easily accessible open area between Science Quad & Engineering Hall.\n\n*Tap any spot button below or select a spot card in your order details above!*";
    } else if (q.includes('fee') || q.includes('platform') || q.includes('commission')) {
      reply = "💰 **Hand It Down Platform Fees & Pricing Policy**:\n\n• **Flat Platform Fee**: Exactly **₹15 flat** per order for all purchases and rentals.\n• **Campus Wallet Perk**: Flat **₹10 discount** on all marketplace orders paid using Campus Wallet!\n• **50% Rental Cap**: Rental fees are capped to **≤ 50% of the original bookstore MRP**.\n• **100% Refundable Escrow**: Security deposits are locked in escrow and refunded in full upon return.";
    } else if (q.includes('cap') || q.includes('50%') || q.includes('rule') || q.includes('mrp')) {
      reply = "💰 **50% Rental Cap Protection Policy**:\n\nTo keep semester gear affordable, Hand It Down strictly caps all rental fees to **≤ 50% of the item's original bookstore MRP**. E.g., an original ₹500 T-scale cannot rent for more than ₹250. This prevents senior markups and ensures freshers save 60–80% every term!";
    } else if (q.includes('escrow') || q.includes('deposit') || q.includes('refund') || q.includes('safe') || q.includes('return')) {
      reply = "🛡️ **Refundable Escrow Guarantee**:\n\nYour security deposit is locked in campus escrow when you checkout. When your semester concludes, meet the senior to hand back the gear, click **'Item Returned Safely'** in your deal tracker, and 100% of your deposit is refunded instantly to your **Campus Wallet** or redeemed directly to your **Bank Account**!";
    } else if (q.includes('bonus') || q.includes('top up') || q.includes('reload') || q.includes('wallet') || q.includes('discount')) {
      reply = "💳 **Campus Wallet Flat ₹10 Discount Perk**:\n\n• **Flat ₹10 OFF**: Pay using Campus Wallet at checkout to receive an automatic **flat ₹10 discount** on your order!\n• **Direct Recharges**: Reload any amount (e.g. ₹100, ₹200, ₹500) with zero deductions or bonuses — your exact funds are always available.\n• **Instant Escrow Refunds**: Security deposits unlock instantly back to your wallet once gear is returned.";
    } else if (q.includes('damage') || q.includes('broken') || q.includes('destroy')) {
      reply = "⚠️ **Item Condition & Damage Protocol**:\n\nIf gear is accidentally damaged or broken during the semester, use the **'Item Damaged / Destroyed'** button in the deal tracker. The security deposit and rental fee are forfeited to the senior to compensate for repair or replacement.";
    } else {
      reply = "🤖 I'm here to assist your peer college gear exchange! Feel free to ask about:\n\n• **Campus Meetup Spots** (Library Steps, Canteen Courtyard, Central Lawn)\n• **50% Rental Cap Rule**\n• **Refundable Escrow Deposits**\n• **Flat ₹10 Wallet Purchase Discount**\n• **Handover Checklist & Return Inspections**";
    }

    setTimeout(() => {
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        type: 'text',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: reply
      };
      setCampusBotMessages(prev => [...prev, botMsg]);
    }, 550);
  };

  // CampusBot: Trigger verified Seller Handover details post-checkout
  const triggerCampusBotOrderMessage = (res) => {
    const seller = res.sellerDetails || {
      name: res.lenderName || 'Senior Lender',
      role: 'Senior',
      department: 'Civil Engineering',
      courseSemester: 'CE Sem 5',
      handle: `@${(res.lenderName || 'senior').toLowerCase().replace(/\s+/g, '_')}`,
      email: `${(res.lenderName || 'senior').toLowerCase().replace(/\s+/g, '.')}@campus.edu`,
      phone: '+91 98765 43210',
      campusChatPin: '#8821',
      rating: 4.8
    };

    const handoverMsg = {
      id: `order-msg-${Date.now()}`,
      sender: 'bot',
      type: 'order_handover',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      orderData: {
        reservationId: res.id,
        itemTitle: res.listingTitle,
        type: res.type,
        totalPaid: res.totalPaid,
        handoverSpot: res.handoverSpot,
        seller: seller,
        meetupSpots: [
          {
            name: 'Main Library Steps',
            detail: 'Under the North Portico — wide open, CCTV covered, and study benches available to inspect items.',
            icon: '🏛️'
          },
          {
            name: 'Canteen Courtyard',
            detail: 'Student Union Breezeway Table 4 — quick 5-min coffee & exchange zone between lectures.',
            icon: '☕'
          },
          {
            name: 'Central Lawn',
            detail: 'Clocktower Walkway between Science Quad & Engineering Hall — central, accessible location.',
            icon: '🌳'
          }
        ]
      }
    };

    setCampusBotMessages(prev => [...prev, handoverMsg]);
    setIsCampusBotOpen(true);
    setCampusBotUnread(true);
  };

  // CampusBot: Handle interactive selection of an on-campus meetup spot
  const handleMeetupSpotChosen = (spot, orderData) => {
    const spotName = spot.name || spot;
    const seller = (orderData && orderData.seller) || {
      name: 'Rohan Sen',
      role: 'Senior (Sem 3)',
      department: 'ECE',
      courseSemester: 'ECE Sem 3',
      campusChatPin: '#1139'
    };
    const sellerName = seller.name || 'Senior Seller';
    const sellerDept = seller.department || 'Campus Department';
    const chatPin = seller.campusChatPin || '#1139';
    const itemTitle = (orderData && orderData.itemTitle) || 'your reserved gear';

    // 1. Post user message in chat
    const userMsg = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      type: 'text',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: `📍 I'd like to meet at ${spotName} for the handover.`
    };

    // 2. Determine bot reply based on spot
    let botReplyText = "";
    if (spotName.includes('Library')) {
      botReplyText = `🏛️ **Meetup Spot Confirmed: Main Library Steps**\n\n• **Exact Location**: Under the North Portico by the wide stone study benches.\n• **Seller Status**: Handover notification dispatched to **${sellerName}** (${sellerDept}).\n• **Handover Checklist**:\n  1. Meet near the covered portico benches (high CCTV & well-lit safety zone).\n  2. Verify your Chat PIN **${chatPin}** with the senior.\n  3. Inspect **${itemTitle}** to ensure condition matches listing.\n  4. Once physically received, open your **Active Deal Tracker** below and tap **'Mark as Delivered'** to release escrow payout!`;
    } else if (spotName.includes('Canteen')) {
      botReplyText = `☕ **Meetup Spot Confirmed: Canteen Courtyard**\n\n• **Exact Location**: Student Union Breezeway, Table 4 (near the espresso stall).\n• **Seller Status**: Handover notification dispatched to **${sellerName}** (${sellerDept}).\n• **Handover Checklist**:\n  1. Grab a seat at Table 4 (ideal 5-min swap between lectures or at lunch).\n  2. Exchange your Chat PIN **${chatPin}** with the senior.\n  3. Test components and check condition on the table.\n  4. Head to your **Active Deal Tracker** and confirm delivery!`;
    } else {
      botReplyText = `🌳 **Meetup Spot Confirmed: Central Lawn**\n\n• **Exact Location**: Clocktower Walkway benches (midpoint between Science Quad & Engineering Hall).\n• **Seller Status**: Handover notification dispatched to **${sellerName}** (${sellerDept}).\n• **Handover Checklist**:\n  1. Meet by the Clocktower open-air landmark in broad daylight.\n  2. Confirm Chat PIN **${chatPin}** and inspect **${itemTitle}**.\n  3. Tap **'Mark as Delivered'** in your **Active Deal Tracker** to complete the deal!`;
    }

    setCampusBotMessages(prev => {
      const updated = prev.map(m => {
        if (m.type === 'order_handover' && m.orderData) {
          return {
            ...m,
            orderData: {
              ...m.orderData,
              selectedSpot: spotName
            }
          };
        }
        return m;
      });
      return [...updated, userMsg];
    });

    setTimeout(() => {
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        type: 'text',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: botReplyText,
        selectedSpotAction: spotName
      };
      setCampusBotMessages(prev => [...prev, botMsg]);
    }, 400);

    showToast(`📍 Meetup spot set to ${spotName}! Notified ${sellerName}.`);
  };

  // Sync Cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  // Helper: Show toast notification
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4200);
  };

  // Synchronize client-side routing with browser URL
  const navigateTo = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setCurrentPath(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Fetch initial app state from backend
  const fetchState = async () => {
    try {
      const res = await fetch('/api/state');
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || []);
        setListings(data.listings || []);
        setReservations(data.reservations || []);
        setHandoverSpots(data.handoverSpots || []);
        setReviews(data.reviews || []);

        if (!currentUser && !localStorage.getItem(STUDENT_STORAGE_KEY)) {
          const defaultDemo = (data.users && data.users[0]) || {
            name: "Aarav Sharma",
            studentId: "CSE-2026-1042",
            course: "CSE",
            semester: 1,
            courseSemester: "CSE Sem 1",
            walletBalance: 210,
            escrowHeld: 0,
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
            verified: true,
            isLoggedIn: true
          };
          setCurrentUser(defaultDemo);
          try {
            localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(defaultDemo));
          } catch (e) {}
        }
      }
    } catch (err) {
      console.error('Failed to load marketplace state:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchState();

    let evtSource = null;
    try {
      evtSource = new EventSource('/api/events');
      evtSource.onmessage = (e) => {
        try {
          const payload = JSON.parse(e.data);
          if (payload.type === 'ITEM_RESERVED' || payload.type === 'RESERVATION_UPDATED' || payload.type === 'NEW_LISTING') {
            fetchState();
          }
        } catch (err) {}
      };
    } catch (e) {}

    return () => {
      if (evtSource) evtSource.close();
    };
  }, []);

  // Student Login Handler
  const handleStudentLogin = (studentData) => {
    const student = {
      id: studentData.studentId || `STU-${Date.now()}`,
      name: studentData.name || 'Aarav Sharma',
      studentId: studentData.studentId || 'CSE-2026-1042',
      course: studentData.course || 'CSE',
      semester: studentData.semester || 1,
      courseSemester: studentData.courseSemester || `${studentData.course || 'CSE'} Sem ${studentData.semester || 1}`,
      walletBalance: typeof studentData.walletBalance === 'number' ? studentData.walletBalance : 0,
      escrowHeld: studentData.escrowHeld || 0,
      department: studentData.department || 'Engineering & Technology',
      avatar: studentData.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      verified: true,
      isLoggedIn: true
    };

    setCurrentUser(student);
    try {
      localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(student));
    } catch (e) {}

    showToast(`Welcome, ${student.name}! Logged in as ${student.studentId} (${student.courseSemester}). ₹${student.walletBalance} Campus Wallet credited.`);
    navigateTo('/marketplace');
  };

  // Student Logout Handler
  const handleStudentLogout = () => {
    try {
      localStorage.removeItem(STUDENT_STORAGE_KEY);
    } catch (e) {}
    setCurrentUser(null);
    showToast('Logged out of student session.');
    navigateTo('/login');
  };

  // Cart: Add to Cart (Rent or Buy mode)
  const handleAddToCart = (item, mode = 'rent') => {
    const existingIndex = cart.findIndex(c => c.id === item.id);
    if (existingIndex >= 0) {
      // Toggle or update mode
      const updated = [...cart];
      updated[existingIndex].mode = mode;
      setCart(updated);
      showToast(`Updated "${item.title}" mode to ${mode === 'rent' ? 'Semester Rent' : 'Buy'}.`);
    } else {
      const cartItem = {
        id: item.id,
        title: item.title,
        category: item.category,
        targetCourse: item.targetCourse,
        originalPrice: item.originalPrice || 500,
        rentalFee: item.rentalFee || item.price || 180,
        buyPrice: item.buyPrice || 260,
        deposit: item.deposit || 200,
        image: item.image,
        campusHandoverSpot: item.campusHandoverSpot,
        mode: mode, // 'rent' or 'buy'
        convenienceFee: 0,
        platformFee: 15
      };
      setCart([...cart, cartItem]);
      showToast(`Added "${item.title}" (${mode === 'rent' ? 'Semester Rent' : 'Buy'}) to cart!`);
    }
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter(c => c.id !== itemId));
  };

  const handleToggleCartMode = (itemId, newMode) => {
    setCart(cart.map(c => c.id === itemId ? { ...c, mode: newMode } : c));
  };

  // Campus Wallet: Top Up (Direct 1:1 reload into wallet)
  const handleTopUpWallet = async (amount) => {
    if (!currentUser) {
      showToast('Please log in with your Student ID to top up your wallet.');
      navigateTo('/login');
      return false;
    }
    const numAmount = parseFloat(amount);
    if (!numAmount || numAmount <= 0) {
      showToast('Please enter a valid amount to top up.');
      return false;
    }

    try {
      const res = await fetch('/api/wallet/topup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: currentUser.studentId || currentUser.id,
          amount: numAmount
        })
      });

      if (res.ok) {
        const data = await res.json();
        const updatedUser = {
          ...currentUser,
          walletBalance: data.newBalance
        };
        setCurrentUser(updatedUser);
        try {
          localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(updatedUser));
        } catch (e) {}

        showToast(`🎉 Top-up successful! ₹${data.credited} credited to Campus Wallet.`);
        await fetchState();
        return data;
      }
    } catch (e) {
      showToast('Failed to top up wallet. Please try again.');
    }
    return false;
  };

  // Checkout Execution: Supports both UPI and Campus Wallet payment methods
  const handleExecuteCheckout = async (paymentMethod = 'upi', paymentDetails = {}) => {
    if (!currentUser) {
      showToast('Please log in with your Student ID to confirm checkout.');
      navigateTo('/login');
      return false;
    }

    if (cart.length === 0) {
      showToast('Your cart is empty. Add textbooks or gear first!');
      return false;
    }

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart,
          borrowerId: currentUser.studentId || currentUser.id,
          paymentMethod: paymentMethod,
          paymentDetails: paymentDetails
        })
      });

      if (res.ok) {
        const data = await res.json();
        const createdReservations = data.reservations || [];

        // Update local student user balance and escrow
        const updatedUser = {
          ...currentUser,
          walletBalance: data.newWalletBalance !== undefined ? data.newWalletBalance : currentUser.walletBalance,
          escrowHeld: data.newEscrowHeld !== undefined ? data.newEscrowHeld : currentUser.escrowHeld
        };
        setCurrentUser(updatedUser);
        try {
          localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(updatedUser));
        } catch (e) {}

        // Clear cart
        setCart([]);
        try {
          localStorage.removeItem(CART_STORAGE_KEY);
        } catch (e) {}
        setIsCartOpen(false);

        showToast(`Payment verified via ${paymentMethod === 'wallet' ? 'Campus Wallet' : 'UPI Gateway'}! Gear reserved & escrow locked.`);
        await fetchState();

        // Automatically open/focus CampusBot and post message revealing verified Seller details & meetup spots
        if (createdReservations.length > 0) {
          triggerCampusBotOrderMessage(createdReservations[0]);
        }

        // Navigate to /wallet with Active Deal Tracker panel
        navigateTo('/wallet');
        return true;
      } else {
        showToast('Checkout could not be processed. Please check details or balance.');
        return false;
      }
    } catch (e) {
      showToast('Network error during checkout.');
      return false;
    }
  };

  // Order & Deal Lifecycle Actions:
  // 1. Mark as Delivered (releases seller payout minus ₹15 flat platform fee)
  // 2. Item Returned Safely (refunds security deposit to Campus Wallet or Bank Account)
  // 3. Item Damaged / Destroyed (forfeits security deposit + rent fee to seller)
  const handleDealAction = async (dealId, action, params = {}) => {
    try {
      const res = await fetch(`/api/reservations/${dealId}/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action,
          ...params
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (action === 'mark_delivered') {
          showToast(`Order marked as delivered! ₹${data.sellerPayout} payout released to seller after ₹15 flat platform fee.`);
        } else if (action === 'return_safe') {
          if (data.newBuyerBalance !== undefined && currentUser) {
            const updatedUser = {
              ...currentUser,
              walletBalance: data.newBuyerBalance,
              escrowHeld: Math.max(0, (currentUser.escrowHeld || 0) - (data.depositRefunded || 0))
            };
            setCurrentUser(updatedUser);
            try {
              localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(updatedUser));
            } catch (e) {}
          }
          showToast(data.message || '100% of security deposit refunded safely!');
        } else if (action === 'damage_claim') {
          if (currentUser) {
            const updatedUser = {
              ...currentUser,
              escrowHeld: Math.max(0, (currentUser.escrowHeld || 0) - (params.depositAmount || 200))
            };
            setCurrentUser(updatedUser);
            try {
              localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(updatedUser));
            } catch (e) {}
          }
          showToast('Damage claim settled. Security deposit forfeited to seller as compensation.');
        }
        await fetchState();
        return true;
      } else {
        showToast('Action could not be completed.');
        return false;
      }
    } catch (e) {
      showToast('Network error while processing deal action.');
      return false;
    }
  };

  // Handle List Item Submission with 50% Rental Cap Enforcement
  const handleCreateListing = async (listingData) => {
    try {
      const res = await fetch('/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...listingData,
          ownerId: currentUser ? (currentUser.studentId || currentUser.id) : 'CE-2023-0198'
        })
      });

      if (res.ok) {
        showToast('Your gear has been listed for campus exchange with 50% fair rent cap verified!');
        setIsListModalOpen(false);
        await fetchState();
      }
    } catch (e) {
      alert('Failed to publish listing.');
    }
  };

  // Filtered & Sorted Listings
  const filteredListings = useMemo(() => {
    return listings.filter(item => {
      // Category Filter (Books, Drawing/Lab Gear, Electronics)
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Semester Filter
      if (selectedSemester !== 'All') {
        if (selectedSemester === '5+' && item.targetSemester < 5) return false;
        if (selectedSemester !== '5+' && item.targetSemester.toString() !== selectedSemester) return false;
      }
      // Deal Type Filter (Rent, Buy, All)
      if (selectedDealType !== 'All') {
        if (selectedDealType === 'Rent' && !item.rentalFee && item.type === 'Sell') return false;
        if (selectedDealType === 'Buy' && !item.buyPrice && item.type === 'Rent') return false;
      }
      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = (item.title || '').toLowerCase().includes(q);
        const matchDesc = (item.description || '').toLowerCase().includes(q);
        const matchCourse = (item.targetCourse || '').toLowerCase().includes(q);
        const matchCat = (item.category || '').toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchCourse && !matchCat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'lowest') return (a.rentalFee || a.price) - (b.rentalFee || b.price);
      if (sortBy === 'mrp') return b.originalPrice - a.originalPrice;
      if (sortBy === 'savings') {
        const savingsA = (a.originalPrice || 500) - (a.rentalFee || a.price);
        const savingsB = (b.originalPrice || 500) - (b.rentalFee || b.price);
        return savingsB - savingsA;
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [listings, selectedCategory, selectedSemester, selectedDealType, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141416] flex flex-col font-body">

      {/* ====================================================================
          TOP NAVBAR
          With Student Name, ID, Course/Semester, Wallet Balance ₹210, Cart Drawer Trigger
          ==================================================================== */}
      <nav className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <BrandLogo onClick={() => navigateTo('/')} />

          {/* Quick Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-[#141416]">
            <button 
              onClick={() => navigateTo('/how-it-works')} 
              className={`hover:text-[#FF5A1F] transition-colors py-1 ${currentPath === '/how-it-works' ? 'text-[#FF5A1F] font-semibold border-b-2 border-[#FF5A1F]' : ''}`}
            >
              How It Works
            </button>
            <button 
              onClick={() => navigateTo('/marketplace')} 
              className={`hover:text-[#FF5A1F] transition-colors py-1 ${currentPath === '/marketplace' ? 'text-[#FF5A1F] font-semibold border-b-2 border-[#FF5A1F]' : ''}`}
            >
              Books & Gear
            </button>
            <button 
              onClick={() => navigateTo('/wallet')} 
              className={`hover:text-[#FF5A1F] transition-colors py-1 ${currentPath === '/wallet' ? 'text-[#FF5A1F] font-semibold border-b-2 border-[#FF5A1F]' : ''}`}
            >
              Campus Wallet
            </button>
          </div>

          {/* Navbar Right Actions */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Campus Wallet Balance Pill in Header */}
            {currentUser && (
              <button 
                onClick={() => navigateTo('/wallet')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EAF7EE] border border-[#BCE7C8] hover:bg-[#DDF2E3] text-[#107E44] text-xs font-bold transition-all shadow-subtle group"
                title={`Campus Wallet: ₹${currentUser.walletBalance} available balance`}
              >
                <Icons.Wallet className="w-3.5 h-3.5 text-[#107E44]" />
                <span>₹{currentUser.walletBalance}</span>
              </button>
            )}

            {/* Cart Drawer Trigger Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-white border border-[#E8E5DF] hover:border-[#FF5A1F] text-[#141416] transition-all shadow-subtle"
              title="View Cart"
            >
              <Icons.ShoppingCart className="w-4 h-4" />
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#FF5A1F] text-white font-bold text-[10px] flex items-center justify-center shadow-sm animate-pulse">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Logged-In Student Profile Details & Dropdown */}
            {currentUser ? (
              <div className="relative group">
                <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white border border-[#E8E5DF] hover:border-[#FF5A1F] text-xs font-medium text-[#141416] transition-all shadow-subtle">
                  <img src={currentUser.avatar} alt={currentUser.name} className="w-6 h-6 rounded-full object-cover border border-[#DFDBD2]" />
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-[#141416] leading-tight text-xs">{currentUser.name}</span>
                      <Icons.ShieldCheck className="w-3.5 h-3.5 text-[#107E44]" title="Campus Verified Student ID" />
                    </div>
                    <span className="text-[10px] text-[#5E5D59] font-mono leading-tight">{currentUser.studentId} • {currentUser.courseSemester}</span>
                  </div>
                  <Icons.ChevronDown className="w-3.5 h-3.5 text-[#8E8B85] ml-0.5" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-72 bg-white border border-[#E8E5DF] rounded-xl shadow-card p-3 hidden group-hover:block animate-fade-in z-50">
                  <div className="pb-3 mb-2 border-b border-[#F0ECE4]">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-[#141416]">{currentUser.name}</p>
                      <span className="badge-pill bg-[#EAF7EE] text-[#107E44] text-[10px] font-bold">Active</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="badge-pill bg-[#F0ECE4] text-[#383633] text-[10px] font-mono font-bold">
                        {currentUser.studentId}
                      </span>
                      <span className="badge-pill bg-[#FFF0E8] text-[#FF5A1F] text-[10px] font-bold">
                        {currentUser.courseSemester}
                      </span>
                    </div>
                  </div>

                  <div 
                    onClick={() => navigateTo('/wallet')}
                    className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E8E5DF] hover:border-[#107E44] transition-all cursor-pointer mb-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#5E5D59]">Campus Wallet</span>
                      <span className="font-editorial text-base font-bold text-[#107E44]">₹{currentUser.walletBalance}</span>
                    </div>
                    <p className="text-[10px] text-[#8E8B85] mt-0.5">Click to view active escrow & loans</p>
                  </div>

                  <div className="space-y-1 text-xs">
                    <button 
                      onClick={() => navigateTo('/marketplace')}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-[#FAF8F5] font-semibold text-[#141416] flex items-center justify-between"
                    >
                      <span>Explore Books & Gear</span>
                      <Icons.Book className="w-3.5 h-3.5 text-[#5E5D59]" />
                    </button>
                    <button 
                      onClick={() => setIsListModalOpen(true)}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-[#FAF8F5] font-semibold text-[#141416] flex items-center justify-between"
                    >
                      <span>+ List Idle Gear</span>
                      <Icons.Plus className="w-3.5 h-3.5 text-[#FF5A1F]" />
                    </button>
                    <button 
                      onClick={handleStudentLogout}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-[#FFF0E8] font-semibold text-[#FF5A1F] flex items-center justify-between"
                    >
                      <span>Switch Account / Log Out</span>
                      <Icons.LogOut className="w-3.5 h-3.5 text-[#FF5A1F]" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => navigateTo('/login')}
                className="btn-primary !text-xs !py-2.5 !px-4"
              >
                <Icons.User className="w-3.5 h-3.5" />
                <span>Student Login</span>
              </button>
            )}

            {/* List Gear Button */}
            <button 
              onClick={() => setIsListModalOpen(true)}
              className="btn-secondary !text-xs !py-2 !px-3.5 flex items-center gap-1.5"
            >
              <Icons.Plus className="w-3.5 h-3.5" />
              <span>List Gear</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full bg-white border border-[#E8E5DF] text-[#141416]"
              title="Cart"
            >
              <Icons.ShoppingCart className="w-4 h-4" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FF5A1F] text-white text-[9px] font-bold flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            {currentUser ? (
              <button 
                onClick={() => navigateTo('/wallet')}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#EAF7EE] text-[#107E44] border border-[#BCE7C8] text-xs font-bold"
                title="Campus Wallet Balance"
              >
                <Icons.Wallet className="w-3.5 h-3.5" />
                <span>₹{currentUser.walletBalance}</span>
              </button>
            ) : (
              <button 
                onClick={() => navigateTo('/login')}
                className="btn-primary !text-xs !py-1.5 !px-3"
              >
                Get Started
              </button>
            )}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-[#E8E5DF] text-[#141416] hover:bg-[#F4F1EA]"
              title="Toggle Menu"
            >
              {mobileMenuOpen ? <Icons.X className="w-5 h-5" /> : <Icons.Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8E5DF] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 animate-fade-in">
            {currentUser && (
              <div 
                onClick={() => { setMobileMenuOpen(false); navigateTo('/wallet'); }}
                className="p-3 rounded-lg bg-white border border-[#E8E5DF] flex items-center justify-between cursor-pointer hover:border-[#107E44] transition-all"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-[#141416]">{currentUser.name}</p>
                    <Icons.ShieldCheck className="w-3.5 h-3.5 text-[#107E44]" />
                  </div>
                  <p className="text-[11px] text-[#5E5D59] font-mono">{currentUser.studentId} • {currentUser.courseSemester}</p>
                </div>
                <span className="badge-pill bg-[#EAF7EE] text-[#107E44] font-bold text-xs flex items-center gap-1">
                  <Icons.Wallet className="w-3 h-3" />
                  <span>₹{currentUser.walletBalance}</span>
                </span>
              </div>
            )}
            <div className="flex flex-col space-y-2 font-medium text-sm">
              <button onClick={() => { setMobileMenuOpen(false); navigateTo('/'); }} className="text-left py-2 px-3 rounded-md hover:bg-[#F4F1EA]">Home</button>
              <button onClick={() => { setMobileMenuOpen(false); navigateTo('/marketplace'); }} className="text-left py-2 px-3 rounded-md hover:bg-[#F4F1EA]">Books & Gear Marketplace</button>
              <button onClick={() => { setMobileMenuOpen(false); navigateTo('/how-it-works'); }} className="text-left py-2 px-3 rounded-md hover:bg-[#F4F1EA]">How It Works</button>
              <button onClick={() => { setMobileMenuOpen(false); navigateTo('/wallet'); }} className="text-left py-2 px-3 rounded-md hover:bg-[#F4F1EA]">Campus Wallet & Escrow</button>
              <button onClick={() => { setMobileMenuOpen(false); setIsCartOpen(true); }} className="text-left py-2 px-3 rounded-md hover:bg-[#F4F1EA] flex items-center justify-between">
                <span>View Cart</span>
                <span className="badge-pill bg-[#FF5A1F] text-white text-xs">{cart.length} items</span>
              </button>
              {currentUser ? (
                <button onClick={() => { setMobileMenuOpen(false); handleStudentLogout(); }} className="text-left py-2 px-3 rounded-md text-[#FF5A1F] font-semibold bg-[#FFF0E8] flex items-center justify-between">
                  <span>Switch Account / Log Out</span>
                  <Icons.LogOut className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={() => { setMobileMenuOpen(false); navigateTo('/login'); }} className="text-left py-2 px-3 rounded-md text-[#FF5A1F] font-semibold bg-[#FFF0E8]">Student Login (/login)</button>
              )}
              <button onClick={() => { setMobileMenuOpen(false); setIsListModalOpen(true); }} className="text-left py-2 px-3 rounded-md bg-[#141416] text-white flex items-center justify-between">
                <span>+ List Senior Gear</span>
                <Icons.Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ====================================================================
          ROUTE: STUDENT LOGIN VIEW (/login)
          ==================================================================== */}
      {currentPath === '/login' && (
        <StudentLoginView 
          currentUser={currentUser} 
          onLogin={handleStudentLogin}
          onBackHome={() => navigateTo('/marketplace')}
        />
      )}

      {/* ====================================================================
          ROUTE: CHECKOUT VIEW (/checkout)
          With simulated UPI and Campus Wallet (Flat ₹10 discount perk)
          ==================================================================== */}
      {currentPath === '/checkout' && (
        <CheckoutView 
          cart={cart}
          currentUser={currentUser}
          onPay={handleExecuteCheckout}
          onTopUpWallet={handleTopUpWallet}
          onRemoveFromCart={handleRemoveFromCart}
          onToggleCartMode={handleToggleCartMode}
          onBrowseMarketplace={() => navigateTo('/marketplace')}
          onLoginPrompt={() => navigateTo('/login')}
        />
      )}

      {/* ====================================================================
          ROUTE: HOW IT WORKS (/how-it-works)
          ==================================================================== */}
      {currentPath === '/how-it-works' && (
        <HowItWorksView onExploreGear={() => navigateTo('/marketplace')} />
      )}

      {/* ====================================================================
          ROUTE: CAMPUS WALLET & ACTIVE DEAL TRACKER (/wallet or /orders)
          ==================================================================== */}
      {(currentPath === '/wallet' || currentPath === '/orders') && (
        <CampusWalletView 
          currentUser={currentUser}
          reservations={reservations}
          onDealAction={handleDealAction}
          onTopUpWallet={handleTopUpWallet}
          onBrowse={() => navigateTo('/marketplace')}
        />
      )}

      {/* ====================================================================
          ROUTE: MARKETPLACE & HOME VIEW (/marketplace or /)
          ==================================================================== */}
      {(currentPath === '/' || currentPath === '/marketplace') && (
        <main className="flex-grow">
          
          {/* Hero Section on Landing Page */}
          {currentPath === '/' && (
            <HeroSection onGetStarted={() => navigateTo('/login')} onExplore={() => navigateTo('/marketplace')} />
          )}

          {/* ================================================================
              MARKETPLACE CORE SECTION
              Search, Category Filters (Books, Drawing/Lab Gear, Electronics),
              Course/Semester Filter, Original MRP, Buy vs Rent, 50% Cap Badge
              ================================================================ */}
          <section id="marketplace-section" className="py-12 sm:py-16 bg-[#FAF8F5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Marketplace Header Banner */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6 pb-6 border-b border-[#E8E5DF]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge-pill bg-[#FFF0E8] text-[#FF5A1F] border border-[#FFD4C2] text-xs font-bold uppercase tracking-wider">
                      Verified Peer Catalog
                    </span>
                    <span className="badge-pill bg-[#EAF7EE] text-[#107E44] border border-[#BCE7C8] text-xs font-semibold">
                      Max 50% Rental Cap Protected
                    </span>
                  </div>
                  <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#141416]">
                    Books & Semester Gear Marketplace
                  </h1>
                  <p className="text-xs sm:text-sm text-[#5E5D59] mt-1.5 max-w-2xl leading-relaxed">
                    Syllabus-matched textbooks, imperial drafters, T-scales, ClassWiz calculators, and lab coats passed down directly between college seniors and freshers.
                  </p>
                </div>

                {/* Right Header: "List an Item" Action Button */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsListModalOpen(true)}
                    className="btn-primary !text-xs !py-3 !px-5 shadow-sm flex items-center gap-2"
                  >
                    <Icons.Plus className="w-4 h-4" />
                    <span>List an Item</span>
                  </button>
                </div>
              </div>

              {/* Search Bar & Primary Filter Controls Bar */}
              <div className="space-y-4 mb-8">
                
                {/* Search Bar & Sort Dropdown */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search books, drafters, T-scale, Casio calculator, or course code (e.g., ENG-102, MATH-101)..."
                      className="w-full pl-11 pr-10 py-3 rounded-xl border border-[#E8E5DF] bg-white text-xs sm:text-sm font-medium text-[#141416] placeholder-[#8E8B85] focus:outline-none focus:border-[#FF5A1F] transition-all shadow-subtle"
                    />
                    <div className="absolute left-3.5 top-3.5 text-[#8E8B85]">
                      <Icons.Search className="w-4 h-4" />
                    </div>
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3.5 top-3 text-xs text-[#8E8B85] hover:text-[#141416]"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  {/* Sort Filter */}
                  <div className="flex items-center gap-2 bg-white border border-[#E8E5DF] rounded-xl px-3.5 py-2.5 text-xs font-semibold shadow-subtle shrink-0">
                    <span className="text-[#8E8B85]">Sort:</span>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-transparent font-bold text-[#141416] focus:outline-none cursor-pointer"
                    >
                      <option value="savings">Highest Savings vs MRP</option>
                      <option value="lowest">Lowest Rental Fee First</option>
                      <option value="mrp">Original MRP (High to Low)</option>
                      <option value="newest">Newest First</option>
                    </select>
                  </div>
                </div>

                {/* Filter Strip: Categories (Books, Drawing/Lab Gear, Electronics) & Course/Semester Filters */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white border border-[#E8E5DF] shadow-subtle">
                  
                  {/* Category Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#8E8B85] mr-1 hidden sm:inline">Category:</span>
                    {[
                      { label: 'All Gear', value: 'All' },
                      { label: 'Books', value: 'Books' },
                      { label: 'Drawing/Lab Gear', value: 'Drawing/Lab Gear' },
                      { label: 'Electronics', value: 'Electronics' }
                    ].map(cat => (
                      <button 
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${selectedCategory === cat.value ? 'bg-[#141416] text-white shadow-sm' : 'bg-[#FAF8F5] text-[#5E5D59] hover:bg-[#F0ECE4] border border-[#E8E5DF]'}`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Course / Semester & Option Filters */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs">
                    
                    {/* Deal Option Filter: All vs Rent Only vs Buy Only */}
                    <div className="flex items-center gap-1.5 bg-[#FAF8F5] border border-[#E8E5DF] rounded-lg px-2.5 py-1.5">
                      <span className="font-semibold text-[#8E8B85]">Deal:</span>
                      <select 
                        value={selectedDealType} 
                        onChange={(e) => setSelectedDealType(e.target.value)}
                        className="bg-transparent font-bold text-[#141416] focus:outline-none cursor-pointer"
                      >
                        <option value="All">Buy & Rent Options</option>
                        <option value="Rent">Semester Rent</option>
                        <option value="Buy">Buy Outright</option>
                      </select>
                    </div>

                    {/* Semester Filter */}
                    <div className="flex items-center gap-1.5 bg-[#FAF8F5] border border-[#E8E5DF] rounded-lg px-2.5 py-1.5">
                      <span className="font-semibold text-[#8E8B85]">Semester:</span>
                      <select 
                        value={selectedSemester} 
                        onChange={(e) => setSelectedSemester(e.target.value)}
                        className="bg-transparent font-bold text-[#141416] focus:outline-none cursor-pointer"
                      >
                        <option value="All">All Semesters</option>
                        <option value="1">Semester 1 (Freshers)</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5+">Semester 5+</option>
                      </select>
                    </div>

                    {/* Reset Button */}
                    {(selectedCategory !== 'All' || selectedSemester !== 'All' || selectedDealType !== 'All' || searchQuery) && (
                      <button 
                        onClick={() => { setSelectedCategory('All'); setSelectedSemester('All'); setSelectedDealType('All'); setSearchQuery(''); }}
                        className="text-xs text-[#FF5A1F] hover:underline font-semibold px-1"
                      >
                        Reset Filters
                      </button>
                    )}

                  </div>

                </div>

              </div>

              {/* 50% Rental Fee Rule Explainer Banner */}
              <div className="mb-8 p-3.5 rounded-xl bg-[#FFF5F0] border border-[#FFD4C2] flex items-center justify-between text-xs text-[#141416]">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-md bg-[#FF5A1F] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    <Icons.Percent className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold">Peer Protection Policy:</span>
                    <span className="text-[#5E5D59] ml-1.5">
                      Rental fees are capped at a maximum of <strong>50% of the item's original MRP</strong> (e.g., ₹500 T-scale = max ₹250 rent fee). Security deposits are 100% refundable upon post-exam return.
                    </span>
                  </div>
                </div>
                <span className="badge-pill bg-[#EAF7EE] text-[#107E44] border border-[#BCE7C8] font-bold text-[10px] hidden md:inline-flex">
                  Zero Overcharging
                </span>
              </div>

              {/* Marketplace Items Grid */}
              {filteredListings.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#D5D1C7] p-8">
                  <Icons.Search className="w-10 h-10 text-[#8E8B85] mx-auto mb-3" />
                  <h3 className="font-editorial text-lg font-bold text-[#141416]">No items found</h3>
                  <p className="text-xs text-[#5E5D59] mt-1 max-w-sm mx-auto">
                    Try adjusting your search query or reset category filters to view other available campus equipment.
                  </p>
                  <button 
                    onClick={() => { setSelectedCategory('All'); setSelectedSemester('All'); setSelectedDealType('All'); setSearchQuery(''); }}
                    className="btn-secondary !text-xs mt-4"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredListings.map(item => (
                    <MarketplaceItemCard 
                      key={item.id} 
                      item={item} 
                      onAddToCart={(mode) => handleAddToCart(item, mode)}
                      onViewDetails={() => setSelectedListing(item)}
                    />
                  ))}
                </div>
              )}

            </div>
          </section>

        </main>
      )}

      {/* ====================================================================
          SLIDE-OVER CART DRAWER & CHECKOUT BREAKDOWN
          Clear itemized math:
          - Buy: Buy price + Flat platform fee (₹15)
          - Rent: Rental fee (capped <= 50% MRP) + Security deposit + Flat platform fee (₹15)
          - Wallet: Flat ₹10 OFF discount applied at checkout
          ==================================================================== */}
      {isCartOpen && (
        <CartSlideOverDrawer 
          cart={cart}
          currentUser={currentUser}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={handleRemoveFromCart}
          onToggleMode={handleToggleCartMode}
          onCheckout={() => {
            setIsCartOpen(false);
            navigateTo('/checkout');
          }}
          onLoginPrompt={() => { setIsCartOpen(false); navigateTo('/login'); }}
        />
      )}

      {/* ====================================================================
          MODAL: LIST AN ITEM (With Live 50% Rental Cap Validation & Badge)
          ==================================================================== */}
      {isListModalOpen && (
        <ListItemModal 
          currentUser={currentUser}
          handoverSpots={handoverSpots}
          onClose={() => setIsListModalOpen(false)}
          onSubmit={handleCreateListing}
        />
      )}

      {/* ====================================================================
          MODAL: ITEM DETAIL VIEW
          ==================================================================== */}
      {selectedListing && (
        <ItemDetailModal 
          item={selectedListing} 
          currentUser={currentUser}
          onClose={() => setSelectedListing(null)}
          onAddToCart={(mode) => {
            handleAddToCart(selectedListing, mode);
            setSelectedListing(null);
          }}
        />
      )}

      {/* ====================================================================
          FOOTER
          ==================================================================== */}
      <footer className="bg-[#141416] text-[#FAF8F5] pt-14 pb-10 border-t border-[#262524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#262524]">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#FF5A1F] flex items-center justify-center text-white">
                  <Icons.Book className="w-4 h-4" />
                </div>
                <span className="font-editorial text-xl font-bold tracking-tight text-white">
                  Hand It Down
                </span>
              </div>
              <p className="text-xs text-[#B6B1A5] leading-relaxed max-w-sm">
                A sustainable, campus-verified peer marketplace connecting seniors and juniors to share textbooks, drafting boards, graphing calculators, and lab gear with fair 50% rental caps.
              </p>
              <div className="pt-1 text-xs text-[#8E8B85] flex items-center gap-2">
                <Icons.ShieldCheck className="w-4 h-4 text-[#107E44]" />
                <span>Zero bookstore markups • 100% Refundable Escrow • Campus Drop Zones</span>
              </div>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="font-editorial text-sm font-bold text-white uppercase tracking-wider">Catalog</h4>
              <ul className="space-y-2 text-xs text-[#B6B1A5]">
                <li><button onClick={() => { setSelectedCategory('Drawing/Lab Gear'); navigateTo('/marketplace'); }} className="hover:text-white transition-colors">T-Scales & Drafting Boards</button></li>
                <li><button onClick={() => { setSelectedCategory('Electronics'); navigateTo('/marketplace'); }} className="hover:text-white transition-colors">Scientific Calculators</button></li>
                <li><button onClick={() => { setSelectedCategory('Books'); navigateTo('/marketplace'); }} className="hover:text-white transition-colors">University Textbooks</button></li>
                <li><button onClick={() => { setSelectedCategory('Drawing/Lab Gear'); navigateTo('/marketplace'); }} className="hover:text-white transition-colors">Lab Coats & Safety Goggles</button></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h4 className="font-editorial text-sm font-bold text-white uppercase tracking-wider">Platform Rules</h4>
              <ul className="space-y-2 text-xs text-[#B6B1A5]">
                <li><span className="text-[#FF5A1F] font-semibold">50% Cap Rule:</span> Rental fee ≤ 50% of original MRP</li>
                <li><button onClick={() => navigateTo('/wallet')} className="hover:text-white transition-colors">Refundable Escrow Deposit Guarantee</button></li>
                <li><button onClick={() => navigateTo('/login')} className="hover:text-white transition-colors">Student Login (/login)</button></li>
                <li><button onClick={() => setIsListModalOpen(true)} className="hover:text-[#FF5A1F] transition-colors">+ List Your Idle Semester Gear</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E8B85]">
            <p>© {new Date().getFullYear()} Hand It Down. All rights reserved. Peer college exchange.</p>
            <div className="mt-3 sm:mt-0 flex items-center gap-4">
              <span>Warm Stone & Deep Ink</span>
              <span>•</span>
              <span className="text-[#FF5A1F]">Vibrant Accent</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          BUILT-IN FLOATING AI ASSISTANT: CAMPUS BOT (Accessible from ANY screen)
          ==================================================================== */}
      <CampusBotWidget 
        isOpen={isCampusBotOpen}
        onToggle={() => {
          setIsCampusBotOpen(!isCampusBotOpen);
          setCampusBotUnread(false);
        }}
        unread={campusBotUnread}
        messages={campusBotMessages}
        onSendMessage={(text) => {
          const userMsg = {
            id: `usr-${Date.now()}`,
            sender: 'user',
            type: 'text',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text
          };
          setCampusBotMessages(prev => [...prev, userMsg]);
          generateCampusBotReply(text);
        }}
        onSelectSpot={handleMeetupSpotChosen}
        onNavigate={navigateTo}
        showToast={showToast}
      />

      {/* ====================================================================
          TOAST NOTIFICATION (Centered bottom to avoid covering floating bot)
          ==================================================================== */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#141416] text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in border border-[#3D3C39] max-w-md w-max">
          <Icons.CheckCircle className="w-5 h-5 text-[#FF5A1F] shrink-0" />
          <p className="text-xs font-semibold">{toastMessage}</p>
        </div>
      )}

    </div>
  );
}

// ==========================================================================
// MARKETPLACE ITEM CARD
// Shows realistic original MRP, Rent Option (capped <= 50% MRP), Buy Option,
// 50% Fair Cap badge, and Add to Cart options
// ==========================================================================
function MarketplaceItemCard({ item, onAddToCart, onViewDetails }) {
  const originalMRP = item.originalPrice || 500;
  const maxRentCap = Math.floor(originalMRP * 0.5);
  const rentalFee = item.rentalFee || item.price || 180;
  const buyPrice = item.buyPrice || 260;
  const deposit = item.deposit || 200;

  // Selected mode state on card ('rent' vs 'buy')
  const [selectedMode, setSelectedMode] = useState('rent');

  const savings = Math.max(0, originalMRP - (selectedMode === 'rent' ? rentalFee : buyPrice));
  const savingsPct = Math.round((savings / originalMRP) * 100);

  return (
    <div className="editorial-card overflow-hidden flex flex-col justify-between group bg-white border border-[#E8E5DF] hover:border-[#FF5A1F] transition-all">
      
      {/* Top Image Section */}
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="badge-pill bg-[#141416] text-white text-[10px] font-bold">
              {item.category}
            </span>
            <span className="badge-pill bg-white/95 backdrop-blur-sm text-[#141416] border border-[#E8E5DF] text-[10px] font-bold">
              Sem {item.targetSemester}
            </span>
            {item.video && (
              <span className="badge-pill bg-[#FF5A1F] text-white text-[10px] font-bold flex items-center gap-1 shadow-sm">
                <Icons.Play className="w-2.5 h-2.5" />
                <span>Video Demo</span>
              </span>
            )}
          </div>

          <div className="absolute top-3 right-3">
            <span className="badge-pill bg-white/95 backdrop-blur-sm text-[#141416] border border-[#E8E5DF] text-[10px] font-semibold">
              {item.condition}
            </span>
          </div>

          {/* Original MRP & Savings Banner */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="badge-pill bg-[#107E44] text-white text-[10px] font-bold shadow-sm">
              Save {savingsPct}% vs MRP ₹{originalMRP}
            </span>
            <span className="badge-pill bg-white/90 backdrop-blur-sm text-[#5E5D59] text-[10px] font-semibold">
              MRP: ₹{originalMRP}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          
          {/* Course Syllabus Pill */}
          <div className="flex items-center gap-1.5">
            <span className="badge-pill badge-course text-[10px]">
              {item.targetCourse}
            </span>
          </div>

          {/* Item Title */}
          <h3 
            onClick={onViewDetails}
            className="font-editorial text-base font-bold text-[#141416] line-clamp-1 hover:text-[#FF5A1F] transition-colors cursor-pointer"
          >
            {item.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#5E5D59] line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* 50% Rental Cap Protection Pill */}
          <div className="p-2 rounded-lg bg-[#FAF8F5] border border-[#E8E5DF] flex items-center justify-between text-[11px]">
            <span className="text-[#5E5D59] flex items-center gap-1 font-semibold">
              <Icons.ShieldCheck className="w-3.5 h-3.5 text-[#107E44]" />
              <span>Rental Cap (≤50% MRP):</span>
            </span>
            <span className="badge-pill bg-[#EAF7EE] text-[#107E44] font-bold text-[10px]">
              ₹{rentalFee} ≤ Max ₹{maxRentCap}
            </span>
          </div>

          {/* Mode Selector Toggle (Rent vs Buy) */}
          <div className="pt-1">
            <div className="grid grid-cols-2 p-1 bg-[#FAF8F5] rounded-lg border border-[#E8E5DF] text-xs font-bold text-center">
              <button 
                type="button"
                onClick={() => setSelectedMode('rent')}
                className={`py-1.5 rounded-md transition-all ${selectedMode === 'rent' ? 'bg-[#FF5A1F] text-white shadow-sm' : 'text-[#5E5D59] hover:text-[#141416]'}`}
              >
                Rent (₹{rentalFee})
              </button>
              <button 
                type="button"
                onClick={() => setSelectedMode('buy')}
                className={`py-1.5 rounded-md transition-all ${selectedMode === 'buy' ? 'bg-[#141416] text-white shadow-sm' : 'text-[#5E5D59] hover:text-[#141416]'}`}
              >
                Buy (₹{buyPrice})
              </button>
            </div>
          </div>

          {/* Pricing Math Details */}
          <div className="p-2.5 rounded-lg bg-[#FAF8F5] text-xs space-y-1">
            {selectedMode === 'rent' ? (
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#5E5D59]">Semester Rent: <strong className="text-[#141416]">₹{rentalFee}</strong></span>
                <span className="text-[#107E44] font-semibold">+ ₹{deposit} refundable deposit</span>
              </div>
            ) : (
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#5E5D59]">Direct Buy Price: <strong className="text-[#141416]">₹{buyPrice}</strong></span>
                <span className="text-[#107E44] font-semibold">Save ₹{originalMRP - buyPrice}</span>
              </div>
            )}
          </div>

          {/* Lender Info & Campus Spot */}
          <div className="pt-2 flex items-center justify-between text-[11px] text-[#5E5D59] border-t border-[#F0ECE4]">
            <div className="flex items-center gap-1.5">
              <img src={item.ownerAvatar} alt={item.ownerName} className="w-4 h-4 rounded-full object-cover" />
              <span className="font-semibold text-[#141416]">{item.ownerName}</span>
              <div className="flex items-center text-[#FF5A1F]">
                <Icons.Star className="w-3 h-3" />
                <span className="ml-0.5 font-bold">{item.ownerRating}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[#8E8B85] truncate max-w-[120px]" title={item.campusHandoverSpot}>
              <Icons.MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{item.campusHandoverSpot.split(' - ')[0]}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Card Footer: Add to Cart Action */}
      <div className="px-5 py-4 bg-[#FAF8F5] border-t border-[#E8E5DF] flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold text-[#8E8B85] uppercase tracking-wider block">
            {selectedMode === 'rent' ? 'Semester Rent' : 'Buy Price'}
          </span>
          <span className="font-editorial text-xl font-bold text-[#141416]">
            ₹{selectedMode === 'rent' ? rentalFee : buyPrice}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={onViewDetails}
            className="px-2.5 py-2 text-xs font-semibold text-[#5E5D59] hover:text-[#141416] hover:bg-white rounded-lg border border-transparent hover:border-[#E8E5DF] transition-all"
          >
            Details
          </button>
          <button 
            onClick={() => onAddToCart(selectedMode)}
            className="btn-primary !text-xs !py-2 !px-3.5 shadow-sm flex items-center gap-1.5"
          >
            <Icons.ShoppingCart className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

    </div>
  );
}

// ==========================================================================
// SLIDE-OVER CART DRAWER & CHECKOUT
// Clear itemized math:
// - Buy: Buy price + Flat platform fee (₹15)
// - Rent: Rental fee (capped <= 50% MRP) + Security deposit + Flat platform fee (₹15)
// - Wallet: Flat ₹10 OFF discount applied at checkout
// ==========================================================================
function CartSlideOverDrawer({ cart, currentUser, onClose, onRemoveItem, onToggleMode, onCheckout, onLoginPrompt }) {
  // Compute Itemized Totals (Flat ₹15 platform fee)
  const { totalRentalFee, totalDeposit, totalBuyPrice, totalPlatformFee, grandTotal } = useMemo(() => {
    let rentFee = 0;
    let dep = 0;
    let buyP = 0;

    cart.forEach(item => {
      if (item.mode === 'rent') {
        rentFee += (item.rentalFee || 180);
        dep += (item.deposit || 200);
      } else {
        buyP += (item.buyPrice || 260);
      }
    });

    const platFee = cart.length > 0 ? 15 : 0; // Flat ₹15 platform fee for all orders
    const total = rentFee + dep + buyP + platFee;
    return {
      totalRentalFee: rentFee,
      totalDeposit: dep,
      totalBuyPrice: buyP,
      totalPlatformFee: platFee,
      grandTotal: total
    };
  }, [cart]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#141416]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-Over Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col z-50 animate-fade-in border-l border-[#E8E5DF]">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E8E5DF] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FF5A1F] text-white flex items-center justify-center">
              <Icons.ShoppingCart className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-editorial text-lg font-bold text-[#141416]">Campus Gear Cart</h2>
              <p className="text-[11px] text-[#5E5D59]">{cart.length} item{cart.length === 1 ? '' : 's'} ready for checkout</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#5E5D59] hover:text-[#141416] hover:bg-[#E8E5DF] transition-all"
          >
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-grow overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-[#5E5D59] space-y-3">
              <Icons.ShoppingCart className="w-12 h-12 text-[#8E8B85] mx-auto" />
              <h4 className="font-editorial text-base font-bold text-[#141416]">Your cart is empty</h4>
              <p className="text-xs max-w-xs mx-auto">Browse textbooks, drafting sets, calculators, and lab gear to add for this semester.</p>
            </div>
          ) : (
            cart.map(item => {
              const isRent = item.mode === 'rent';
              const maxCap = Math.floor((item.originalPrice || 500) * 0.5);

              return (
                <div key={item.id} className="p-4 rounded-xl border border-[#E8E5DF] bg-[#FAF8F5] space-y-3">
                  
                  {/* Item Header & Delete */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-cover border border-[#E8E5DF]" />
                      <div>
                        <span className="badge-pill badge-course text-[9px] mb-0.5">{item.targetCourse}</span>
                        <h4 className="font-editorial text-xs font-bold text-[#141416] line-clamp-1">{item.title}</h4>
                        <span className="text-[10px] text-[#8E8B85]">MRP ₹{item.originalPrice}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#8E8B85] hover:text-[#FF5A1F] p-1"
                      title="Remove Item"
                    >
                      <Icons.X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Mode Switcher Inside Cart */}
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-[#E8E5DF]/70">
                    <span className="text-[11px] font-bold text-[#5E5D59]">Mode:</span>
                    <div className="flex gap-1 bg-white p-0.5 rounded-lg border border-[#E8E5DF]">
                      <button
                        type="button"
                        onClick={() => onToggleMode(item.id, 'rent')}
                        className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${isRent ? 'bg-[#FF5A1F] text-white shadow-xs' : 'text-[#5E5D59]'}`}
                      >
                        Rent
                      </button>
                      <button
                        type="button"
                        onClick={() => onToggleMode(item.id, 'buy')}
                        className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${!isRent ? 'bg-[#141416] text-white shadow-xs' : 'text-[#5E5D59]'}`}
                      >
                        Buy
                      </button>
                    </div>
                  </div>

                  {/* Itemized Math for this Item */}
                  <div className="p-2.5 rounded-lg bg-white border border-[#E8E5DF] text-xs space-y-1.5">
                    {isRent ? (
                      <>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#5E5D59]">Semester Rental Fee:</span>
                          <span className="font-bold text-[#141416]">₹{item.rentalFee}</span>
                        </div>
                        <div className="text-[10px] text-[#107E44] font-semibold flex items-center gap-1">
                          <Icons.ShieldCheck className="w-3 h-3" />
                          <span>50% MRP rule verified (₹{item.rentalFee} ≤ ₹{maxCap})</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#5E5D59]">Refundable Escrow Deposit:</span>
                          <span className="font-bold text-[#107E44]">₹{item.deposit}</span>
                        </div>
                        <div className="pt-1 border-t border-[#F0ECE4] flex items-center justify-between font-bold text-xs">
                          <span>Item Subtotal:</span>
                          <span className="text-[#FF5A1F]">₹{item.rentalFee + item.deposit}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#5E5D59]">Item Buy Price:</span>
                          <span className="font-bold text-[#141416]">₹{item.buyPrice}</span>
                        </div>
                        <div className="pt-1 border-t border-[#F0ECE4] flex items-center justify-between font-bold text-xs">
                          <span>Item Subtotal:</span>
                          <span className="text-[#141416]">₹{item.buyPrice}</span>
                        </div>
                      </>
                    )}
                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer: Order Summary & Checkout Math */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#E8E5DF] bg-[#FAF8F5] space-y-3.5">
            
            {/* Itemized Math Summary */}
            <div className="space-y-1.5 text-xs">
              {totalRentalFee > 0 && (
                <div className="flex justify-between text-[#5E5D59]">
                  <span>Total Semester Rental Fees:</span>
                  <span className="font-bold text-[#141416]">₹{totalRentalFee}</span>
                </div>
              )}
              {totalDeposit > 0 && (
                <div className="flex justify-between text-[#107E44]">
                  <span className="flex items-center gap-1 font-semibold">
                    <Icons.ShieldCheck className="w-3.5 h-3.5" />
                    <span>Refundable Escrow Deposits:</span>
                  </span>
                  <span className="font-bold">₹{totalDeposit}</span>
                </div>
              )}
              {totalBuyPrice > 0 && (
                <div className="flex justify-between text-[#5E5D59]">
                  <span>Total Outright Purchases:</span>
                  <span className="font-bold text-[#141416]">₹{totalBuyPrice}</span>
                </div>
              )}
              {totalPlatformFee > 0 && (
                <div className="flex justify-between text-[#5E5D59]">
                  <span className="font-medium">Flat Platform Fee:</span>
                  <span className="font-bold text-[#141416]">₹{totalPlatformFee}.00</span>
                </div>
              )}
              <div className="p-2 rounded-lg bg-[#EAF7EE] border border-[#BCE7C8] flex items-center justify-between text-[11px] text-[#107E44]">
                <span className="flex items-center gap-1 font-semibold">
                  <Icons.Wallet className="w-3.5 h-3.5" />
                  <span>Campus Wallet Perk:</span>
                </span>
                <span className="font-bold">Flat ₹10 OFF at checkout</span>
              </div>

              <div className="pt-2 border-t border-[#E8E5DF] flex justify-between items-baseline">
                <span className="font-editorial text-sm font-bold text-[#141416]">Grand Total Payable:</span>
                <span className="font-editorial text-2xl font-bold text-[#FF5A1F]">₹{grandTotal}</span>
              </div>
            </div>

            {/* Refundable Escrow Callout */}
            {totalDeposit > 0 && (
              <div className="p-2.5 rounded-lg bg-[#EAF7EE] border border-[#BCE7C8] text-[11px] text-[#107E44] font-medium leading-relaxed">
                🛡️ <strong>₹{totalDeposit}</strong> will be held in secure campus escrow and refunded to your wallet upon returning the gear.
              </div>
            )}

            {/* Campus Wallet State Verification */}
            {currentUser ? (
              <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-white border border-[#E8E5DF]">
                <span className="text-[#5E5D59]">Logged In: <strong>{currentUser.name}</strong></span>
                <span className="font-bold text-[#107E44]">Wallet: ₹{currentUser.walletBalance}</span>
              </div>
            ) : (
              <div className="p-2.5 rounded-lg bg-[#FFF0E8] border border-[#FFD4C2] text-xs text-[#FF5A1F] flex items-center justify-between">
                <span>Not logged in with Student ID</span>
                <button onClick={onLoginPrompt} className="underline font-bold">Log In</button>
              </div>
            )}

            {/* Checkout Action Button */}
            <button 
              type="button"
              onClick={currentUser ? onCheckout : onLoginPrompt}
              className="w-full btn-primary !py-3 !text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>{currentUser ? `Proceed to Checkout (₹${grandTotal})` : 'Log In to Confirm Order'}</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

// ==========================================================================
// LIST AN ITEM MODAL
// With Live 50% Rental Cap Validation & Badge Enforcement
// ==========================================================================
function ListItemModal({ currentUser, handoverSpots, onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Drawing/Lab Gear');
  const [targetCourse, setTargetCourse] = useState('Engineering Graphics (ENG-102)');
  const [targetSemester, setTargetSemester] = useState('1');
  const [originalMRP, setOriginalMRP] = useState('500');
  const [dealType, setDealType] = useState('Both'); // 'Rent', 'Buy', 'Both'
  const [rentalFee, setRentalFee] = useState('180');
  const [buyPrice, setBuyPrice] = useState('260');
  const [deposit, setDeposit] = useState('200');
  const [condition, setCondition] = useState('Excellent');
  const [handoverSpot, setHandoverSpot] = useState(handoverSpots[0] || 'Central Campus Library - North Portico');
  const [description, setDescription] = useState('');

  // Picture / Photo state for sellers (Integrated with Supabase Storage)
  const [itemImage, setItemImage] = useState(''); // Base64 data URL or external URL
  const [imageInputMode, setImageInputMode] = useState('upload'); // 'upload' | 'preset' | 'url'
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [imageFileName, setImageFileName] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(''); // '' | 'supabase' | 'fallback'
  const fileInputRef = useRef(null);

  // Video Demo state for sellers (Integrated with Supabase Storage)
  const [itemVideo, setItemVideo] = useState(''); // Base64 or Supabase CDN URL
  const [videoFileName, setVideoFileName] = useState('');
  const [isVideoUploading, setIsVideoUploading] = useState(false);
  const [videoUploadStatus, setVideoUploadStatus] = useState(''); // '' | 'supabase' | 'fallback'
  const [videoInputMode, setVideoInputMode] = useState('upload'); // 'upload' | 'preset' | 'url'
  const [customVideoUrlInput, setCustomVideoUrlInput] = useState('');
  const [isVideoDragOver, setIsVideoDragOver] = useState(false);
  const videoFileInputRef = useRef(null);

  // Popular campus equipment quick-preset video demos (Hosted on Supabase Storage CDN)
  const campusVideoPresets = [
    {
      title: 'Casio fx-991EX Screen & Keys Test',
      category: 'Electronics',
      url: 'https://megjfasqtuokeffkjbdj.supabase.co/storage/v1/object/public/test1/items/sample-calculator-demo.mp4'
    },
    {
      title: 'Mini Drafter 360° Smooth Rotation Demo',
      category: 'Drawing/Lab Gear',
      url: 'https://megjfasqtuokeffkjbdj.supabase.co/storage/v1/object/public/test1/items/sample-drafter-demo.mp4'
    },
    {
      title: 'Digital Multimeter Continuity Buzzer Test',
      category: 'Electronics',
      url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
    }
  ];

  // Helper to upload video to Supabase Storage with correct mimeType
  const uploadVideoToStorage = async (dataUrl, fileName, mimeType) => {
    setIsVideoUploading(true);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dataUrl,
          filename: fileName,
          mimeType: mimeType || 'video/mp4'
        })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.publicUrl) {
          setItemVideo(json.publicUrl);
          setVideoUploadStatus('supabase');
          return;
        }
      }
      setVideoUploadStatus('fallback');
    } catch (err) {
      console.warn('Supabase video upload fallback:', err);
      setVideoUploadStatus('fallback');
    } finally {
      setIsVideoUploading(false);
    }
  };

  // Helper to read video file into Data URL + Supabase upload
  const handleVideoProcess = (file) => {
    if (!file) return;
    if (!file.type.startsWith('video/') && !file.name.match(/\.(mp4|webm|mov|m4v)$/i)) {
      alert('Please select a valid video file (MP4, WebM, MOV).');
      return;
    }
    if (file.size > 35 * 1024 * 1024) {
      alert('Video file exceeds 35MB limit. Please choose a short 10-30s inspection clip.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      setItemVideo(dataUrl);
      setVideoFileName(file.name);
      uploadVideoToStorage(dataUrl, file.name, file.type || 'video/mp4');
    };
    reader.readAsDataURL(file);
  };

  // Popular campus equipment quick-preset photos
  const campusPresets = [
    {
      title: '36" Acrylic T-Scale',
      category: 'Drawing/Lab Gear',
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Mini Drafter & Board',
      category: 'Drawing/Lab Gear',
      url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Casio fx-991EX Calculator',
      category: 'Electronics',
      url: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Digital Multimeter & Kit',
      category: 'Electronics',
      url: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Semester Textbooks & Notes',
      category: 'Books',
      url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'White Lab Coat & Specs',
      category: 'Drawing/Lab Gear',
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Helper to upload picture to Supabase Storage with instant local preview
  const uploadToStorage = async (dataUrl, fileName) => {
    setIsUploading(true);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dataUrl,
          filename: fileName
        })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.publicUrl) {
          setItemImage(json.publicUrl);
          setUploadStatus('supabase');
          return;
        }
      }
      setUploadStatus('fallback');
    } catch (err) {
      console.warn('Supabase upload fallback to local:', err);
      setUploadStatus('fallback');
    } finally {
      setIsUploading(false);
    }
  };

  // Helper to read & compress file into high-quality, lightweight Data URL + Supabase upload
  const handleFileProcess = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const compressed = canvas.toDataURL('image/jpeg', 0.85);
        setItemImage(compressed);
        setImageFileName(file.name);
        uploadToStorage(compressed, file.name);
      };
      img.onerror = () => {
        setItemImage(e.target.result);
        setImageFileName(file.name);
        uploadToStorage(e.target.result, file.name);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  // 50% Cap Rule Calculation
  const parsedMRP = parseFloat(originalMRP) || 0;
  const maxAllowedRent = Math.floor(parsedMRP * 0.5);
  const parsedRent = parseFloat(rentalFee) || 0;
  const isRentCappedExceeded = dealType !== 'Buy' && parsedMRP > 0 && parsedRent > maxAllowedRent;

  // Preset image mapping
  const imagePresets = {
    'Drawing/Lab Gear': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
    'Electronics': 'https://images.unsplash.com/photo-1611117775350-ac3950990985?auto=format&fit=crop&w=600&q=80',
    'Books': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter an item title.');
      return;
    }
    if (dealType !== 'Buy' && isRentCappedExceeded) {
      alert(`Rental fee cannot exceed 50% of the item original price (Max: ₹${maxAllowedRent}). Please adjust the rental fee.`);
      return;
    }

    const finalImage = itemImage || imagePresets[category] || imagePresets['Drawing/Lab Gear'];

    onSubmit({
      title,
      category,
      targetCourse,
      targetSemester: parseInt(targetSemester),
      type: dealType,
      originalPrice: parsedMRP,
      price: parsedRent,
      rentalFee: parsedRent,
      buyPrice: parseFloat(buyPrice) || 260,
      deposit: dealType === 'Buy' ? 0 : (parseFloat(deposit) || 200),
      condition,
      campusHandoverSpot: handoverSpot,
      description: description || 'Verified college equipment in fine shape with 50% fair rental rule verified.',
      image: finalImage,
      video: itemVideo || null
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content !max-w-xl" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="p-6 border-b border-[#F0ECE4] flex items-center justify-between">
          <div>
            <span className="badge-pill badge-accent text-[10px] font-bold uppercase">Campus Peer Listing</span>
            <h3 className="font-editorial text-xl font-bold text-[#141416] mt-1">List an Item for Buy or Rent</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-md text-[#5E5D59] hover:text-[#141416]">
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-[#141416] mb-1">Item Title *</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. 36-Inch Acrylic Drafting T-Scale or Casio fx-991EX"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E5DF] text-xs font-medium text-[#141416] focus:outline-none focus:border-[#FF5A1F]"
              required
            />
          </div>

          {/* Category & Semester */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#141416] mb-1">Category *</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E5DF] text-xs font-semibold text-[#141416] focus:outline-none focus:border-[#FF5A1F] bg-white cursor-pointer"
              >
                <option value="Drawing/Lab Gear">Drawing/Lab Gear</option>
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#141416] mb-1">Target Semester</label>
              <select 
                value={targetSemester}
                onChange={(e) => setTargetSemester(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E5DF] text-xs font-semibold text-[#141416] focus:outline-none focus:border-[#FF5A1F] bg-white cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                  <option key={s} value={s.toString()}>Semester {s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Course Syllabus Tag */}
          <div>
            <label className="block text-xs font-bold text-[#141416] mb-1">Course Syllabus Code</label>
            <input 
              type="text" 
              value={targetCourse}
              onChange={(e) => setTargetCourse(e.target.value)}
              placeholder="e.g. Architectural & Engg Graphics (ENG-102)"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E5DF] text-xs font-medium text-[#141416] focus:outline-none focus:border-[#FF5A1F]"
            />
          </div>

          {/* Item Photos / Pictures Section */}
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#141416] flex items-center gap-1.5">
                <Icons.Camera className="w-4 h-4 text-[#FF5A1F]" />
                <span>Item Photo / Pictures</span>
              </label>
              {itemImage ? (
                <button 
                  type="button" 
                  onClick={() => { setItemImage(''); setImageFileName(''); setCustomUrlInput(''); }}
                  className="text-[11px] text-[#DC2626] hover:underline flex items-center gap-1 font-semibold"
                >
                  <Icons.Trash2 className="w-3.5 h-3.5" />
                  <span>Remove Photo</span>
                </button>
              ) : (
                <span className="text-[10px] text-[#8E8B85]">Upload device photo or pick preset</span>
              )}
            </div>

            {itemImage ? (
              /* Active Image Preview Card */
              <div className="rounded-lg border border-[#E8E5DF] overflow-hidden bg-white p-3 flex items-center gap-3 shadow-xs">
                <div className="w-20 h-20 rounded-md overflow-hidden border border-[#D5D2CB] bg-[#FAF8F5] shrink-0 relative">
                  <img 
                    src={itemImage} 
                    alt="Item Preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 right-1">
                    <span className="w-4 h-4 rounded-full bg-[#107E44] text-white flex items-center justify-center text-[9px] shadow font-bold">
                      ✓
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap mb-1">
                    <span className="badge-pill bg-[#EAF7EE] text-[#107E44] font-bold text-[10px]">Photo Attached</span>
                    {uploadStatus === 'supabase' && (
                      <span className="badge-pill bg-[#E8F0FE] text-[#1A73E8] font-bold text-[10px] flex items-center gap-1" title="Stored permanently on Supabase Storage CDN">
                        <span>☁️ Supabase CDN</span>
                      </span>
                    )}
                    {isUploading && (
                      <span className="badge-pill bg-[#FFF8E1] text-[#B78103] font-bold text-[10px] flex items-center gap-1 animate-pulse">
                        <span>Uploading to Supabase...</span>
                      </span>
                    )}
                    {imageFileName && <span className="text-[11px] text-[#5E5D59] truncate max-w-[130px] font-mono">{imageFileName}</span>}
                  </div>
                  <p className="text-[11px] text-[#5E5D59] leading-tight">
                    {uploadStatus === 'supabase'
                      ? 'Securely stored on Supabase CDN for rapid campus browsing.'
                      : 'This picture will appear across the marketplace catalog, search results, and deal tracker.'}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                      className="text-[11px] font-bold text-[#FF5A1F] hover:underline flex items-center gap-1"
                    >
                      <Icons.Upload className="w-3 h-3" />
                      <span>Change Photo</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Photo Selector Tabs & Options */
              <div className="space-y-2.5">
                {/* Mode Selector Tabs */}
                <div className="flex items-center gap-1.5 border-b border-[#E8E5DF] pb-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setImageInputMode('upload')}
                    className={`py-1 px-2.5 rounded-md font-bold transition-all text-xs flex items-center gap-1.5 ${imageInputMode === 'upload' ? 'bg-[#FF5A1F] text-white shadow-xs' : 'text-[#5E5D59] hover:text-[#141416] bg-white border border-[#E8E5DF]'}`}
                  >
                    <Icons.Upload className="w-3.5 h-3.5" />
                    <span>Upload File</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageInputMode('preset')}
                    className={`py-1 px-2.5 rounded-md font-bold transition-all text-xs flex items-center gap-1.5 ${imageInputMode === 'preset' ? 'bg-[#FF5A1F] text-white shadow-xs' : 'text-[#5E5D59] hover:text-[#141416] bg-white border border-[#E8E5DF]'}`}
                  >
                    <Icons.Sparkles className="w-3.5 h-3.5" />
                    <span>Campus Presets</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageInputMode('url')}
                    className={`py-1 px-2.5 rounded-md font-bold transition-all text-xs flex items-center gap-1.5 ${imageInputMode === 'url' ? 'bg-[#FF5A1F] text-white shadow-xs' : 'text-[#5E5D59] hover:text-[#141416] bg-white border border-[#E8E5DF]'}`}
                  >
                    <Icons.Link className="w-3.5 h-3.5" />
                    <span>Web URL</span>
                  </button>
                </div>

                {/* Mode 1: Device File Upload & Drag-and-Drop */}
                {imageInputMode === 'upload' && (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all bg-white ${isDragOver ? 'border-[#FF5A1F] bg-[#FFF0E8]' : 'border-[#D5D2CB] hover:border-[#FF5A1F]'}`}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleFileProcess(e.target.files[0]);
                        }
                      }}
                      accept="image/*"
                      className="hidden"
                    />
                    <div className="w-9 h-9 mx-auto mb-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E5DF] flex items-center justify-center text-[#FF5A1F] shadow-xs">
                      <Icons.Camera className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-[#141416]">
                      Click to browse device or drag & drop photo
                    </p>
                    <p className="text-[10px] text-[#8E8B85] mt-0.5">
                      JPG, PNG, WebP (auto-optimized for fast campus loading)
                    </p>
                  </div>
                )}

                {/* Mode 2: Quick Campus Presets */}
                {imageInputMode === 'preset' && (
                  <div className="space-y-1.5">
                    <p className="text-[10px] text-[#5E5D59] font-medium">
                      Select common semester equipment photo:
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {campusPresets.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setItemImage(preset.url);
                            setImageFileName(preset.title);
                          }}
                          className="group p-1.5 rounded-lg border border-[#E8E5DF] bg-white hover:border-[#FF5A1F] hover:shadow-xs cursor-pointer transition-all text-left"
                        >
                          <div className="w-full h-12 rounded overflow-hidden bg-[#FAF8F5] mb-1">
                            <img src={preset.url} alt={preset.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                          </div>
                          <p className="text-[10px] font-bold text-[#141416] truncate leading-tight">{preset.title}</p>
                          <p className="text-[9px] text-[#8E8B85] truncate leading-tight">{preset.category}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mode 3: Web Image URL */}
                {imageInputMode === 'url' && (
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      placeholder="Paste image link (e.g. https://.../photo.jpg)"
                      className="flex-1 px-3 py-2 rounded-lg border border-[#E8E5DF] text-xs font-medium text-[#141416] focus:outline-none focus:border-[#FF5A1F] bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (customUrlInput.trim()) {
                          setItemImage(customUrlInput.trim());
                          setImageFileName('Web Image Link');
                        }
                      }}
                      className="px-3.5 py-2 bg-[#141416] text-white rounded-lg text-xs font-bold hover:bg-[#FF5A1F] transition-colors shrink-0"
                    >
                      Set Photo
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Equipment Working Video Demo Section (Photo + Video Support) */}
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#141416] flex items-center gap-1.5">
                <Icons.Video className="w-4 h-4 text-[#FF5A1F]" />
                <span>Working Video Demo</span>
                <span className="badge-pill bg-[#FFF0E8] text-[#FF5A1F] text-[9px] font-bold">Recommended</span>
              </label>
              {itemVideo ? (
                <button 
                  type="button" 
                  onClick={() => { setItemVideo(''); setVideoFileName(''); setCustomVideoUrlInput(''); }}
                  className="text-[11px] text-[#DC2626] hover:underline flex items-center gap-1 font-semibold"
                >
                  <Icons.Trash2 className="w-3.5 h-3.5" />
                  <span>Remove Video</span>
                </button>
              ) : (
                <span className="text-[10px] text-[#8E8B85]">Short 10-30s equipment demo clip</span>
              )}
            </div>

            {itemVideo ? (
              /* Active Video Preview Player */
              <div className="rounded-lg border border-[#E8E5DF] overflow-hidden bg-white p-3 flex flex-col sm:flex-row items-center gap-3 shadow-xs">
                <div className="w-full sm:w-36 h-24 rounded-md overflow-hidden border border-[#D5D2CB] bg-black shrink-0 relative">
                  <video 
                    key={itemVideo}
                    src={itemVideo} 
                    controls 
                    muted 
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  >
                    <source src={itemVideo} type="video/mp4" />
                  </video>
                </div>
                <div className="flex-1 min-w-0 w-full">
                  <div className="flex items-center gap-1.5 flex-wrap mb-1">
                    <span className="badge-pill bg-[#EAF7EE] text-[#107E44] font-bold text-[10px] flex items-center gap-1">
                      <Icons.Play className="w-2.5 h-2.5" />
                      <span>Video Attached</span>
                    </span>
                    {videoUploadStatus === 'supabase' && (
                      <span className="badge-pill bg-[#E8F0FE] text-[#1A73E8] font-bold text-[10px] flex items-center gap-1" title="Stored permanently on Supabase Storage CDN">
                        <span>☁️ Supabase Video CDN</span>
                      </span>
                    )}
                    {isVideoUploading && (
                      <span className="badge-pill bg-[#FFF8E1] text-[#B78103] font-bold text-[10px] flex items-center gap-1 animate-pulse">
                        <span>Uploading Video to Supabase...</span>
                      </span>
                    )}
                    {videoFileName && <span className="text-[11px] text-[#5E5D59] truncate max-w-[130px] font-mono">{videoFileName}</span>}
                  </div>
                  <p className="text-[11px] text-[#5E5D59] leading-tight">
                    Buyers can play this demo in the marketplace to verify button response, screen clarity, and moving parts.
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => videoFileInputRef.current && videoFileInputRef.current.click()}
                      className="text-[11px] font-bold text-[#FF5A1F] hover:underline flex items-center gap-1"
                    >
                      <Icons.Upload className="w-3 h-3" />
                      <span>Change Video</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Video Selector Tabs & Options */
              <div className="space-y-2.5">
                <div className="flex items-center gap-1.5 border-b border-[#E8E5DF] pb-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setVideoInputMode('upload')}
                    className={`py-1 px-2.5 rounded-md font-bold transition-all text-xs flex items-center gap-1.5 ${videoInputMode === 'upload' ? 'bg-[#FF5A1F] text-white shadow-xs' : 'text-[#5E5D59] hover:text-[#141416] bg-white border border-[#E8E5DF]'}`}
                  >
                    <Icons.Upload className="w-3.5 h-3.5" />
                    <span>Upload Video</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoInputMode('preset')}
                    className={`py-1 px-2.5 rounded-md font-bold transition-all text-xs flex items-center gap-1.5 ${videoInputMode === 'preset' ? 'bg-[#FF5A1F] text-white shadow-xs' : 'text-[#5E5D59] hover:text-[#141416] bg-white border border-[#E8E5DF]'}`}
                  >
                    <Icons.Sparkles className="w-3.5 h-3.5" />
                    <span>Demo Presets</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoInputMode('url')}
                    className={`py-1 px-2.5 rounded-md font-bold transition-all text-xs flex items-center gap-1.5 ${videoInputMode === 'url' ? 'bg-[#FF5A1F] text-white shadow-xs' : 'text-[#5E5D59] hover:text-[#141416] bg-white border border-[#E8E5DF]'}`}
                  >
                    <Icons.Link className="w-3.5 h-3.5" />
                    <span>Web Video URL</span>
                  </button>
                </div>

                {/* Mode 1: Device File Upload & Drag-and-Drop */}
                {videoInputMode === 'upload' && (
                  <div
                    onDragOver={(e) => { e.preventDefault(); setIsVideoDragOver(true); }}
                    onDragLeave={() => setIsVideoDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsVideoDragOver(false);
                      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        handleVideoProcess(e.dataTransfer.files[0]);
                      }
                    }}
                    onClick={() => videoFileInputRef.current && videoFileInputRef.current.click()}
                    className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all bg-white ${isVideoDragOver ? 'border-[#FF5A1F] bg-[#FFF0E8]' : 'border-[#D5D2CB] hover:border-[#FF5A1F]'}`}
                  >
                    <input
                      type="file"
                      ref={videoFileInputRef}
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleVideoProcess(e.target.files[0]);
                        }
                      }}
                      accept="video/mp4,video/webm,video/quicktime,video/*"
                      className="hidden"
                    />
                    <div className="w-9 h-9 mx-auto mb-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E5DF] flex items-center justify-center text-[#FF5A1F] shadow-xs">
                      <Icons.Video className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-[#141416]">
                      Click to browse or drag & drop equipment video
                    </p>
                    <p className="text-[10px] text-[#8E8B85] mt-0.5">
                      MP4, WebM, MOV (Max 25MB - automatically streamed to Supabase CDN)
                    </p>
                  </div>
                )}

                {/* Mode 2: Quick Campus Video Presets */}
                {videoInputMode === 'preset' && (
                  <div className="space-y-1.5">
                    <p className="text-[10px] text-[#5E5D59] font-medium">
                      Select sample equipment inspection video demo:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {campusVideoPresets.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setItemVideo(preset.url);
                            setVideoFileName(preset.title);
                            setVideoUploadStatus('supabase');
                          }}
                          className="group p-2 rounded-lg border border-[#E8E5DF] bg-white hover:border-[#FF5A1F] hover:shadow-xs cursor-pointer transition-all text-left flex flex-col justify-between"
                        >
                          <div className="flex items-center gap-1.5 mb-1 text-[#FF5A1F]">
                            <Icons.Play className="w-3.5 h-3.5" />
                            <span className="text-[9px] font-bold uppercase">{preset.category}</span>
                          </div>
                          <p className="text-[10px] font-bold text-[#141416] line-clamp-2 leading-tight">{preset.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mode 3: Web Video URL */}
                {videoInputMode === 'url' && (
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={customVideoUrlInput}
                      onChange={(e) => setCustomVideoUrlInput(e.target.value)}
                      placeholder="Paste MP4/WebM video URL"
                      className="flex-1 px-3 py-2 rounded-lg border border-[#E8E5DF] text-xs font-medium text-[#141416] focus:outline-none focus:border-[#FF5A1F] bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (customVideoUrlInput.trim()) {
                          setItemVideo(customVideoUrlInput.trim());
                          setVideoFileName('Web Video Link');
                        }
                      }}
                      className="px-3.5 py-2 bg-[#141416] text-white rounded-lg text-xs font-bold hover:bg-[#FF5A1F] transition-colors shrink-0"
                    >
                      Set Video
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Original MRP with 50% Rental Rule Info */}
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-[#141416]">Original Price / MRP (₹) *</label>
              <span className="text-[10px] text-[#8E8B85]">Used to enforce 50% max rent rule</span>
            </div>
            <input 
              type="number" 
              value={originalMRP}
              onChange={(e) => setOriginalMRP(e.target.value)}
              placeholder="500"
              className="w-full px-3.5 py-2 rounded-lg border border-[#E8E5DF] text-xs font-bold text-[#141416] focus:outline-none focus:border-[#FF5A1F] bg-white"
              required
            />
            {parsedMRP > 0 && (
              <div className="flex items-center justify-between text-[11px] pt-1">
                <span className="text-[#5E5D59]">Enforced Max Rental Cap (50%):</span>
                <span className="badge-pill bg-[#EAF7EE] text-[#107E44] font-bold">
                  Max ₹{maxAllowedRent} / semester
                </span>
              </div>
            )}
          </div>

          {/* Buy Price (If Buy or Both) */}
          {dealType !== 'Rent' && (
            <div>
              <label className="block text-xs font-bold text-[#141416] mb-1">Direct Buy Outright Price (₹) *</label>
              <input 
                type="number" 
                value={buyPrice}
                onChange={(e) => setBuyPrice(e.target.value)}
                placeholder="260"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E5DF] text-xs font-bold text-[#141416] focus:outline-none focus:border-[#FF5A1F]"
                required
              />
            </div>
          )}

          {/* Condition & Pickup Spot */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#141416] mb-1">Condition</label>
              <select 
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E8E5DF] text-xs font-medium text-[#141416] focus:outline-none bg-white cursor-pointer"
              >
                <option value="Like New">Like New</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#141416] mb-1">Campus Drop Point</label>
              <select 
                value={handoverSpot}
                onChange={(e) => setHandoverSpot(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E8E5DF] text-xs font-medium text-[#141416] focus:outline-none bg-white cursor-pointer"
              >
                {handoverSpots.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button 
              type="submit"
              disabled={isRentCappedExceeded}
              className={`w-full btn-primary !text-sm !py-3 shadow-md flex items-center justify-center gap-2 ${isRentCappedExceeded ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span>Publish Listing to Marketplace</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

// ==========================================================================
// STUDENT LOGIN VIEW COMPONENT (/login)
// Student enters Name & Student ID, optional Course & Semester dropdowns
// Includes 1-Click "Quick Demo Student Login" button that auto-fills & logs in
// Persists details + simulated Campus Wallet balance: ₹210 in state/localStorage
// Redirects to /marketplace upon login
// ==========================================================================
function StudentLoginView({ currentUser, onLogin, onBackHome }) {
  const [studentName, setStudentName] = useState(currentUser ? currentUser.name : '');
  const [studentId, setStudentId] = useState(currentUser ? currentUser.studentId : '');
  const [courseSemester, setCourseSemester] = useState(currentUser ? currentUser.courseSemester : 'CSE Sem 1');
  const [errorMsg, setErrorMsg] = useState('');

  const courseSemesterOptions = [
    { label: 'CSE Sem 1 (Freshers - Default)', value: 'CSE Sem 1', course: 'CSE', sem: 1, dept: 'Computer Science & Engineering' },
    { label: 'CSE Sem 2', value: 'CSE Sem 2', course: 'CSE', sem: 2, dept: 'Computer Science & Engineering' },
    { label: 'CSE Sem 3', value: 'CSE Sem 3', course: 'CSE', sem: 3, dept: 'Computer Science & Engineering' },
    { label: 'ECE Sem 1', value: 'ECE Sem 1', course: 'ECE', sem: 1, dept: 'Electronics & Communication' },
    { label: 'ECE Sem 3', value: 'ECE Sem 3', course: 'ECE', sem: 3, dept: 'Electronics & Communication' },
    { label: 'ME Sem 1', value: 'ME Sem 1', course: 'ME', sem: 1, dept: 'Mechanical Engineering' },
    { label: 'ME Sem 3', value: 'ME Sem 3', course: 'ME', sem: 3, dept: 'Mechanical Engineering' },
    { label: 'CE Sem 1', value: 'CE Sem 1', course: 'CE', sem: 1, dept: 'Civil Engineering' },
    { label: 'CE Sem 5', value: 'CE Sem 5', course: 'CE', sem: 5, dept: 'Civil Engineering' },
    { label: 'IT Sem 1', value: 'IT Sem 1', course: 'IT', sem: 1, dept: 'Information Technology' },
    { label: 'IT Sem 2', value: 'IT Sem 2', course: 'IT', sem: 2, dept: 'Information Technology' },
    { label: 'EE Sem 2', value: 'EE Sem 2', course: 'EE', sem: 2, dept: 'Electrical Engineering' },
    { label: 'EE Sem 4', value: 'EE Sem 4', course: 'EE', sem: 4, dept: 'Electrical Engineering' },
    { label: 'CHE Sem 1', value: 'CHE Sem 1', course: 'CHE', sem: 1, dept: 'Chemical Engineering' },
    { label: 'MATH Sem 1', value: 'MATH Sem 1', course: 'MATH', sem: 1, dept: 'Mathematics & Computing' }
  ];

  // 1-Click "Quick Demo Student Login" Action
  const handleQuickDemoLogin = () => {
    const sampleStudent = {
      name: "Aarav Sharma",
      studentId: "CSE-2026-1042",
      course: "CSE",
      semester: 1,
      courseSemester: "CSE Sem 1",
      department: "Computer Science & Engineering",
      walletBalance: 210, // ₹210 starting balance!
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    };

    onLogin(sampleStudent);
  };

  const handlePresetSelect = (preset) => {
    onLogin(preset);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setErrorMsg('Please enter your Student Name.');
      return;
    }
    if (!studentId.trim()) {
      setErrorMsg('Please enter your Student ID (e.g. CSE-2026-1042).');
      return;
    }

    const selectedOpt = courseSemesterOptions.find(o => o.value === courseSemester) || courseSemesterOptions[0];

    const student = {
      name: studentName.trim(),
      studentId: studentId.trim().toUpperCase(),
      course: selectedOpt.course,
      semester: selectedOpt.sem,
      courseSemester: selectedOpt.value,
      department: selectedOpt.dept,
      walletBalance: 0, // Starts at ₹0; flat ₹10 off on wallet purchases
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    };

    onLogin(student);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex-grow flex flex-col justify-center animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <button 
          onClick={onBackHome}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E5D59] hover:text-[#141416] transition-colors"
        >
          <Icons.ArrowRight className="w-3.5 h-3.5 rotate-180" />
          <span>Back to Marketplace</span>
        </button>
        <span className="badge-pill bg-[#EAF7EE] text-[#107E44] border border-[#BCE7C8] text-xs font-bold">
          ⚡ Instant Testing Enabled
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#FF5A1F] flex items-center justify-center text-white shadow-md">
            <Icons.Book className="w-6 h-6" />
          </div>
          <h1 className="font-editorial text-3xl font-bold text-[#141416] leading-tight">
            Student Login
          </h1>
          <p className="text-xs text-[#5E5D59] leading-relaxed">
            Enter your Name and Student ID to access textbooks, drawing gear, lab instruments, and your Campus Wallet (with flat ₹10 discount on orders).
          </p>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FFF5F0] via-[#FAF8F5] to-white border-2 border-[#FFD4C2] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="badge-pill badge-accent text-[10px] font-bold uppercase tracking-wider">
                Demo Profile Only
              </span>
              <span className="badge-pill bg-[#EAF7EE] text-[#107E44] border border-[#BCE7C8] text-[11px] font-bold">
                ₹210 Demo Profile Only
              </span>
            </div>
            <div>
              <h4 className="font-editorial text-sm font-bold text-[#141416]">
                Quick Demo Student Login
              </h4>
              <p className="text-[11px] text-[#5E5D59] mt-0.5 leading-relaxed">
                Pre-fills the demo evaluator profile (Aarav Sharma • CSE Sem 1) pre-loaded with ₹210 demo credits exclusively for evaluation testing.
              </p>
            </div>
            <button 
              type="button"
              onClick={handleQuickDemoLogin}
              className="w-full btn-primary !text-xs !py-3 !px-4 shadow-md flex items-center justify-center gap-2 group"
            >
              <Icons.Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
              <span>⚡ Quick Demo Student Login</span>
              <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E8E5DF] space-y-2.5 shadow-subtle">
            <p className="text-[11px] font-bold text-[#8E8B85] uppercase tracking-wider">Other Sample Students:</p>
            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() => handlePresetSelect({
                  name: "Maya Patel",
                  studentId: "ME-2026-0814",
                  course: "ME",
                  semester: 1,
                  courseSemester: "ME Sem 1",
                  department: "Mechanical Engineering",
                  walletBalance: 0,
                  avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
                })}
                className="w-full p-2 rounded-lg border border-[#E8E5DF] hover:border-[#FF5A1F] hover:bg-[#FFF0E8] transition-all flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#E8E5DF] flex items-center justify-center text-[10px] font-bold text-[#FF5A1F]">MP</div>
                  <div>
                    <p className="text-xs font-bold text-[#141416] group-hover:text-[#FF5A1F]">Maya Patel</p>
                    <p className="text-[10px] text-[#8E8B85]">ME-2026-0814 • ME Sem 1</p>
                  </div>
                </div>
                <span className="badge-pill bg-[#EAF7EE] text-[#107E44] text-[10px] font-bold">Flat ₹10 OFF</span>
              </button>

              <button
                type="button"
                onClick={() => handlePresetSelect({
                  name: "Rohan Sen",
                  studentId: "ECE-2024-0312",
                  course: "ECE",
                  semester: 3,
                  courseSemester: "ECE Sem 3",
                  department: "Electronics & Communication",
                  walletBalance: 210,
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                })}
                className="w-full p-2 rounded-lg border border-[#E8E5DF] hover:border-[#FF5A1F] hover:bg-[#FFF0E8] transition-all flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#E8E5DF] flex items-center justify-center text-[10px] font-bold text-[#FF5A1F]">RS</div>
                  <div>
                    <p className="text-xs font-bold text-[#141416] group-hover:text-[#FF5A1F]">Rohan Sen</p>
                    <p className="text-[10px] text-[#8E8B85]">ECE-2024-0312 • ECE Sem 3</p>
                  </div>
                </div>
                <span className="badge-pill bg-[#EAF7EE] text-[#107E44] text-[10px] font-bold">₹210</span>
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 editorial-card p-6 sm:p-8 bg-white border border-[#E8E5DF] relative">
          <div className="mb-6">
            <span className="badge-pill bg-[#F0ECE4] text-[#383633] text-[11px] font-bold mb-2">
              Credentials
            </span>
            <h2 className="font-editorial text-2xl font-bold text-[#141416]">
              Enter Student Details
            </h2>
            <p className="text-xs text-[#5E5D59] mt-1">
              Your session will be saved locally. Users get an instant flat ₹10 discount on all orders paid via Campus Wallet.
            </p>
          </div>

          {errorMsg && (
            <div className="mb-4 p-3 rounded-lg bg-[#FFF0E8] border border-[#FFD4C2] text-xs font-semibold text-[#FF5A1F] flex items-center gap-2">
              <Icons.ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#141416] mb-1">
                Student Name <span className="text-[#FF5A1F]">*</span>
              </label>
              <input 
                type="text" 
                value={studentName}
                onChange={(e) => { setStudentName(e.target.value); setErrorMsg(''); }}
                placeholder="e.g. Aarav Sharma or Rohan Sen"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E5DF] text-xs font-medium text-[#141416] focus:outline-none focus:border-[#FF5A1F] bg-[#FAF8F5] focus:bg-white transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#141416] mb-1">
                Student ID <span className="text-[#FF5A1F]">*</span>
              </label>
              <input 
                type="text" 
                value={studentId}
                onChange={(e) => { setStudentId(e.target.value); setErrorMsg(''); }}
                placeholder="e.g. CSE-2026-1042 or STU-2026-8841"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E5DF] text-xs font-mono font-medium text-[#141416] focus:outline-none focus:border-[#FF5A1F] bg-[#FAF8F5] focus:bg-white transition-all uppercase"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-[#141416]">
                  Course & Semester (Optional with sensible defaults)
                </label>
                <span className="text-[10px] text-[#8E8B85]">Default: CSE Sem 1</span>
              </div>
              <select 
                value={courseSemester}
                onChange={(e) => setCourseSemester(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E5DF] text-xs font-semibold text-[#141416] focus:outline-none focus:border-[#FF5A1F] bg-[#FAF8F5] cursor-pointer"
              >
                {courseSemesterOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-3.5 rounded-xl bg-[#EAF7EE]/60 border border-[#BCE7C8] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#107E44] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Icons.Wallet className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-[#141416]">Campus Wallet Top-Up Perk</p>
                    <span className="badge-pill bg-[#107E44] text-white text-[9px] font-bold py-0.5 px-1.5">Flat ₹10 OFF</span>
                  </div>
                  <p className="text-[11px] text-[#5E5D59] mt-0.5">
                    Students paying with Campus Wallet get a <strong>flat ₹10 discount on every order</strong>.
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0 pl-2">
                <span className="font-editorial text-sm font-bold text-[#107E44] block">-₹10 OFF</span>
                <span className="text-[9px] text-[#5E5D59]">on wallet orders</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full btn-primary !text-sm !py-3 shadow-md flex items-center justify-center gap-2"
              >
                <span>Log In & Explore Marketplace</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-center text-[#8E8B85] pt-1">
              Persists in your browser (React state + localStorage) across page refreshes.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

// ==========================================================================
// ITEM DETAIL MODAL
// ==========================================================================
function ItemDetailModal({ item, currentUser, onClose, onAddToCart }) {
  const originalMRP = item.originalPrice || 500;
  const maxRentCap = Math.floor(originalMRP * 0.5);
  const rentalFee = item.rentalFee || item.price || 180;
  const buyPrice = item.buyPrice || 260;
  const deposit = item.deposit || 200;

  const [detailMode, setDetailMode] = useState('rent');
  const [mediaTab, setMediaTab] = useState(item.video ? 'video' : 'photo'); // Default to video if available, else photo

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-[#E8E5DF] flex items-center justify-center text-[#141416] hover:bg-white shadow-sm"
        >
          <Icons.X className="w-4 h-4" />
        </button>

        {/* Media Switcher Tab (Photo vs Video Demo) */}
        {item.video && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-black/65 backdrop-blur-md p-1 rounded-lg border border-white/20 shadow-md">
            <button
              type="button"
              onClick={() => setMediaTab('photo')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all flex items-center gap-1.5 ${mediaTab === 'photo' ? 'bg-[#FF5A1F] text-white shadow' : 'text-white/80 hover:text-white'}`}
            >
              <Icons.Camera className="w-3.5 h-3.5" />
              <span>Photo</span>
            </button>
            <button
              type="button"
              onClick={() => setMediaTab('video')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all flex items-center gap-1.5 ${mediaTab === 'video' ? 'bg-[#FF5A1F] text-white shadow' : 'text-white/80 hover:text-white'}`}
            >
              <Icons.Play className="w-3.5 h-3.5" />
              <span>Watch Video Demo</span>
            </button>
          </div>
        )}

        {mediaTab === 'video' && item.video ? (
          <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
            <video 
              key={item.video}
              src={item.video} 
              controls 
              autoPlay 
              muted 
              playsInline
              preload="auto"
              className="w-full h-full object-contain"
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1.5 border border-white/10">
              <Icons.Video className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Verified Working Equipment Inspection Video</span>
            </div>
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full bg-[#FAF8F5]">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 flex gap-2">
              <span className="badge-pill bg-[#141416] text-white text-xs font-bold">
                {item.category}
              </span>
              <span className="badge-pill bg-white text-[#141416] text-xs font-bold">
                Semester {item.targetSemester}
              </span>
            </div>
            <div className="absolute bottom-3 right-3">
              <span className="badge-pill bg-[#107E44] text-white text-xs font-bold shadow-sm">
                Original MRP ₹{originalMRP}
              </span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="badge-pill badge-course text-xs">{item.targetCourse}</span>
              <span className="badge-pill bg-[#EAF7EE] text-[#107E44] text-xs font-bold">
                Max 50% Rent Cap Rule: ₹{rentalFee} ≤ ₹{maxRentCap}
              </span>
            </div>
            <h2 className="font-editorial text-2xl font-bold text-[#141416]">{item.title}</h2>
          </div>

          <div className="grid grid-cols-2 p-1 bg-[#FAF8F5] rounded-xl border border-[#E8E5DF] text-xs font-bold text-center">
            <button 
              type="button"
              onClick={() => setDetailMode('rent')}
              className={`py-2 rounded-lg transition-all ${detailMode === 'rent' ? 'bg-[#FF5A1F] text-white shadow-sm' : 'text-[#5E5D59]'}`}
            >
              Semester Rent: ₹{rentalFee}
            </button>
            <button 
              type="button"
              onClick={() => setDetailMode('buy')}
              className={`py-2 rounded-lg transition-all ${detailMode === 'buy' ? 'bg-[#141416] text-white shadow-sm' : 'text-[#5E5D59]'}`}
            >
              Buy Outright: ₹{buyPrice}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] space-y-2 text-xs">
            {detailMode === 'rent' ? (
              <>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#5E5D59]">Rental Fee (14-week term):</span>
                  <span className="font-editorial text-lg font-bold text-[#141416]">₹{rentalFee}</span>
                </div>
                <div className="flex justify-between items-center text-[#107E44]">
                  <span>Refundable Security Deposit (Held in Escrow):</span>
                  <span className="font-bold">₹{deposit}</span>
                </div>
                <div className="flex justify-between text-[#8E8B85]">
                  <span>Flat Platform Fee:</span>
                  <span>₹15</span>
                </div>
                <div className="pt-2 border-t border-[#E8E5DF] flex justify-between font-bold text-sm">
                  <span>Due Today:</span>
                  <span className="text-[#FF5A1F]">₹{rentalFee + deposit + 15}</span>
                </div>
                <p className="text-[11px] text-[#107E44] font-medium pt-1">
                  🛡️ Full ₹{deposit} deposit is unlocked and refunded upon gear return.
                </p>
              </>
            ) : (
              <>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#5E5D59]">Item Purchase Price:</span>
                  <span className="font-editorial text-lg font-bold text-[#141416]">₹{buyPrice}</span>
                </div>
                <div className="flex justify-between text-[#8E8B85]">
                  <span>Original Bookstore MRP:</span>
                  <span className="line-through">₹{originalMRP}</span>
                </div>
                <div className="flex justify-between text-[#8E8B85]">
                  <span>Flat Platform Fee:</span>
                  <span>₹15</span>
                </div>
                <div className="pt-2 border-t border-[#E8E5DF] flex justify-between font-bold text-sm">
                  <span>Total Payable:</span>
                  <span className="text-[#141416]">₹{buyPrice + 15}</span>
                </div>
              </>
            )}
          </div>

          <p className="text-xs text-[#5E5D59] leading-relaxed">
            {item.description}
          </p>

          <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DF] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Icons.MapPin className="w-4 h-4 text-[#FF5A1F]" />
              <span className="font-bold text-[#141416]">{item.campusHandoverSpot}</span>
            </div>
            <span className="text-[#8E8B85]">5-min safe zone</span>
          </div>

          <button 
            onClick={() => onAddToCart(detailMode)}
            className="w-full btn-primary !py-3 !text-sm shadow-md flex items-center justify-center gap-2"
          >
            <Icons.ShoppingCart className="w-4 h-4" />
            <span>Add to Cart ({detailMode === 'rent' ? `Rent for ₹${rentalFee}` : `Buy for ₹${buyPrice}`})</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================================================
// HOW IT WORKS VIEW COMPONENT (/how-it-works)
// ==========================================================================
function HowItWorksView({ onExploreGear }) {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow animate-fade-in">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F]">Campus Ecosystem</span>
        <h1 className="font-editorial text-4xl font-bold text-[#141416] mt-2">
          Transparent, Peer-to-Peer Semester Gear Sharing
        </h1>
        <p className="text-sm text-[#5E5D59] mt-3 leading-relaxed">
          How Hand It Down eliminates expensive bookstore markups and guarantees safe item returns with zero hassle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="editorial-card p-8 bg-white space-y-4">
          <div className="w-10 h-10 rounded-lg bg-[#FFF0E8] border border-[#FFD4C2] flex items-center justify-center text-[#FF5A1F]"><Icons.Plus className="w-5 h-5" /></div>
          <span className="badge-pill bg-[#FAF8F5] text-[#141416] border border-[#E8E5DF]">Seniors with Idle Tools</span>
          <h3 className="font-editorial text-2xl font-bold text-[#141416]">Earn Money from Gear You No Longer Need</h3>
          <p className="text-xs text-[#5E5D59] leading-relaxed">After exams finish, your imperial drafting board, Casio ClassWiz calculator, and thick physics textbooks will sit in your closet for years.</p>
          <ul className="space-y-2 text-xs text-[#141416] pt-2">
            <li className="flex items-start gap-2"><Icons.CheckCircle className="w-4 h-4 text-[#107E44] shrink-0 mt-0.5" /><span>Earn ₹200–₹500 per item each semester by renting to juniors</span></li>
            <li className="flex items-start gap-2"><Icons.CheckCircle className="w-4 h-4 text-[#107E44] shrink-0 mt-0.5" /><span>Refundable deposit protects against loss or damage</span></li>
          </ul>
        </div>

        <div className="editorial-card p-8 bg-white space-y-4">
          <div className="w-10 h-10 rounded-lg bg-[#EAF7EE] border border-[#BCE7C8] flex items-center justify-center text-[#107E44]"><Icons.Book className="w-5 h-5" /></div>
          <span className="badge-pill bg-[#FAF8F5] text-[#141416] border border-[#E8E5DF]">Freshers & Juniors</span>
          <h3 className="font-editorial text-2xl font-bold text-[#141416]">Save Thousands for a 14-Week Semester</h3>
          <p className="text-xs text-[#5E5D59] leading-relaxed">Why spend ₹1,200 on a mini drafter you will only use for 1st Year Engineering Drawing? Rent it from a senior in your department.</p>
          <ul className="space-y-2 text-xs text-[#141416] pt-2">
            <li className="flex items-start gap-2"><Icons.CheckCircle className="w-4 h-4 text-[#107E44] shrink-0 mt-0.5" /><span>Exact syllabus matches (ENG-102, MATH-101, PHYS-101)</span></li>
            <li className="flex items-start gap-2"><Icons.CheckCircle className="w-4 h-4 text-[#107E44] shrink-0 mt-0.5" /><span>100% of your security deposit returns to your wallet upon return</span></li>
          </ul>
        </div>
      </div>

      <div className="text-center pt-4">
        <button onClick={onExploreGear} className="btn-primary !text-sm !py-3.5 !px-8 shadow-md">
          <span>Explore Books & Gear Now</span>
          <Icons.ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ==========================================================================
// CHECKOUT VIEW COMPONENT (/checkout)
// Features:
// 1. UPI Payment (GPay, Paytm, PhonePe, BHIM - simulated QR & UPI ID with "Pay via UPI" button)
// 2. Campus Wallet Payment (balance display + Top Up Wallet widget + Flat ₹10 order discount)
// 3. Transparent Itemized Math & 100% Refundable Escrow Guarantees
// 4. Post-payment triggers CampusBot seller handover card & opens deal tracker
// ==========================================================================
function CheckoutView({ 
  cart, 
  currentUser, 
  onPay, 
  onTopUpWallet, 
  onRemoveFromCart, 
  onToggleCartMode, 
  onBrowseMarketplace, 
  onLoginPrompt 
}) {
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' or 'wallet'
  const [upiId, setUpiId] = useState('aarav@okaxis');
  const [upiApp, setUpiApp] = useState('gpay');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState('');

  // Top Up Wallet Widget State
  const [topUpPreset, setTopUpPreset] = useState(200);
  const [customTopUp, setCustomTopUp] = useState('');
  const [isToppingUp, setIsToppingUp] = useState(false);

  // Compute Itemized Totals (Flat ₹15 platform fee + Flat ₹10 wallet purchase discount)
  const { totalRentalFee, totalDeposit, totalBuyPrice, totalPlatformFee, baseTotal, walletDiscount, grandTotal } = useMemo(() => {
    let rentFee = 0;
    let dep = 0;
    let buyP = 0;

    cart.forEach(item => {
      if (item.mode === 'rent') {
        rentFee += (item.rentalFee || 180);
        dep += (item.deposit || 200);
      } else {
        buyP += (item.buyPrice || 260);
      }
    });

    const platFee = cart.length > 0 ? 15 : 0; // Flat ₹15 platform fee for all orders
    const base = rentFee + dep + buyP + platFee;
    const discount = (paymentMethod === 'wallet' && cart.length > 0) ? 10 : 0; // Flat ₹10 wallet purchase discount
    const total = Math.max(0, base - discount);

    return {
      totalRentalFee: rentFee,
      totalDeposit: dep,
      totalBuyPrice: buyP,
      totalPlatformFee: platFee,
      baseTotal: base,
      walletDiscount: discount,
      grandTotal: total
    };
  }, [cart, paymentMethod]);

  const walletBalance = currentUser ? (currentUser.walletBalance !== undefined ? currentUser.walletBalance : 210) : 210;
  const isWalletSufficient = walletBalance >= grandTotal;
  const walletShortfall = Math.max(0, grandTotal - walletBalance);
  const quickReloadNeeded = walletShortfall;

  const activeTopUpAmount = customTopUp ? parseFloat(customTopUp) || 0 : topUpPreset;
  const topUpBonus = 0; // No reload bonus
  const topUpCredited = activeTopUpAmount;

  // Handle Top Up Action
  const handleTopUpSubmit = async (amountToLoad) => {
    const amt = amountToLoad || activeTopUpAmount;
    if (!amt || amt <= 0) return;
    setIsToppingUp(true);
    await onTopUpWallet(amt);
    setIsToppingUp(false);
    setCustomTopUp('');
  };

  // Handle UPI Payment Execution
  const handleExecuteUPI = async () => {
    if (!currentUser) {
      onLoginPrompt();
      return;
    }
    setIsProcessing(true);
    setProcessingStatus('Connecting to UPI Gateway...');
    
    setTimeout(() => {
      setProcessingStatus('Verifying Student VPA & Locking Escrow...');
      setTimeout(async () => {
        setProcessingStatus('Payment Approved & Verified!');
        setTimeout(async () => {
          await onPay('upi', { upiId, upiApp });
          setIsProcessing(false);
        }, 400);
      }, 600);
    }, 600);
  };

  // Handle Campus Wallet Payment Execution
  const handleExecuteWallet = async () => {
    if (!currentUser) {
      onLoginPrompt();
      return;
    }
    if (!isWalletSufficient) return;

    setIsProcessing(true);
    setProcessingStatus('Authorizing Campus Wallet Escrow...');

    setTimeout(() => {
      setProcessingStatus(`Deducting ₹${grandTotal} from Student Balance...`);
      setTimeout(async () => {
        setProcessingStatus('Escrow Locked & Payment Complete!');
        setTimeout(async () => {
          await onPay('wallet');
          setIsProcessing(false);
        }, 400);
      }, 500);
    }, 500);
  };

  // Quick Top-up and Pay in 1 click
  const handleQuickTopUpAndPay = async () => {
    if (!currentUser) {
      onLoginPrompt();
      return;
    }
    setIsProcessing(true);
    setProcessingStatus(`Adding ₹${quickReloadNeeded} to Campus Wallet...`);
    const topupResult = await onTopUpWallet(quickReloadNeeded);
    
    if (topupResult) {
      setProcessingStatus('Campus Wallet Funded! Finalizing Escrow Checkout...');
      setTimeout(async () => {
        await onPay('wallet');
        setIsProcessing(false);
      }, 600);
    } else {
      setIsProcessing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center animate-fade-in text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#FFF0E8] text-[#FF5A1F] flex items-center justify-center mx-auto mb-4">
          <Icons.ShoppingCart className="w-8 h-8" />
        </div>
        <h1 className="font-editorial text-3xl font-bold text-[#141416]">Your Gear Cart is Empty</h1>
        <p className="text-sm text-[#5E5D59] mt-2 max-w-md mx-auto">
          Add textbooks, imperial drafting machines, scientific calculators, or lab coats from the marketplace to proceed with campus escrow checkout.
        </p>
        <div className="pt-6 flex justify-center gap-3">
          <button onClick={onBrowseMarketplace} className="btn-primary !text-sm !py-3 !px-6 shadow-md">
            <span>Explore Books & Gear</span>
            <Icons.ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow animate-fade-in">
      
      {/* Checkout Breadcrumb Header */}
      <div className="mb-8 pb-6 border-b border-[#E8E5DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8E8B85] mb-1">
            <button onClick={onBrowseMarketplace} className="hover:text-[#FF5A1F] transition-colors">Marketplace</button>
            <span>/</span>
            <span className="text-[#141416]">Secure Checkout & Escrow</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#141416]">
            Campus Order Checkout
          </h1>
          <p className="text-xs sm:text-sm text-[#5E5D59] mt-1">
            Peer-to-peer semester exchange protected by 100% refundable security deposits and campus meetups.
          </p>
        </div>

        {currentUser && (
          <div className="flex items-center gap-3 bg-white border border-[#E8E5DF] px-3.5 py-2 rounded-xl shadow-subtle shrink-0">
            <img src={currentUser.avatar} alt={currentUser.name} className="w-8 h-8 rounded-full object-cover border border-[#E8E5DF]" />
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-[#141416]">{currentUser.name}</span>
                <Icons.ShieldCheck className="w-3.5 h-3.5 text-[#107E44]" />
              </div>
              <span className="text-[10px] text-[#5E5D59] font-mono">{currentUser.studentId} • {currentUser.courseSemester}</span>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ==================================================================
            LEFT COLUMN: ORDER SUMMARY & ITEMIZED MATH BREAKDOWN
            ================================================================== */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="editorial-card p-6 bg-white border border-[#E8E5DF]">
            <div className="flex items-center justify-between pb-4 border-b border-[#F0ECE4]">
              <h3 className="font-editorial text-base font-bold text-[#141416] flex items-center gap-2">
                <Icons.Book className="w-4 h-4 text-[#FF5A1F]" />
                <span>Selected Gear ({cart.length})</span>
              </h3>
              <button onClick={onBrowseMarketplace} className="text-xs text-[#FF5A1F] hover:underline font-semibold">
                + Add more gear
              </button>
            </div>

            {/* Items List */}
            <div className="divide-y divide-[#F0ECE4] my-2">
              {cart.map(item => {
                const isRent = item.mode === 'rent';
                const maxCap = Math.floor((item.originalPrice || 500) * 0.5);

                return (
                  <div key={item.id} className="py-4 space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.title} className="w-14 h-14 rounded-lg object-cover border border-[#E8E5DF] shrink-0" />
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="badge-pill badge-course text-[9px]">{item.targetCourse}</span>
                            <span className="badge-pill bg-[#FAF8F5] text-[#5E5D59] text-[9px]">{item.category}</span>
                          </div>
                          <h4 className="font-editorial text-xs sm:text-sm font-bold text-[#141416] line-clamp-1">{item.title}</h4>
                          <span className="text-[11px] text-[#8E8B85]">Original MRP: ₹{item.originalPrice}</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => onRemoveFromCart(item.id)}
                        className="text-[#8E8B85] hover:text-[#FF5A1F] p-1"
                        title="Remove item"
                      >
                        <Icons.X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Rent vs Buy Mode Switcher on Item */}
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-lg border border-[#E8E5DF]">
                        <button 
                          type="button"
                          onClick={() => onToggleCartMode(item.id, 'rent')}
                          className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${isRent ? 'bg-[#FF5A1F] text-white shadow-xs' : 'text-[#5E5D59]'}`}
                        >
                          Rent (₹{item.rentalFee})
                        </button>
                        <button 
                          type="button"
                          onClick={() => onToggleCartMode(item.id, 'buy')}
                          className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${!isRent ? 'bg-[#141416] text-white shadow-xs' : 'text-[#5E5D59]'}`}
                        >
                          Buy (₹{item.buyPrice})
                        </button>
                      </div>

                      <span className="font-editorial text-sm font-bold text-[#141416]">
                        {isRent ? `₹${item.rentalFee + item.deposit}` : `₹${item.buyPrice}`}
                      </span>
                    </div>

                    {/* Item Math Note */}
                    <div className="text-[11px] text-[#5E5D59] bg-[#FAF8F5] p-2 rounded-lg border border-[#E8E5DF]/70">
                      {isRent ? (
                        <div className="flex items-center justify-between">
                          <span>Rent: <strong>₹{item.rentalFee}</strong> (≤50% Cap ✓) + ₹{item.deposit} Escrow Deposit</span>
                          <span className="text-[#107E44] font-semibold">100% Refundable Deposit</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <span>Outright Purchase: <strong>₹{item.buyPrice}</strong></span>
                          <span className="text-[#107E44] font-semibold">Save ₹{(item.originalPrice || 500) - item.buyPrice} vs MRP</span>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Itemized Calculation Summary */}
            <div className="pt-4 border-t border-[#F0ECE4] space-y-2 text-xs">
              {totalRentalFee > 0 && (
                <div className="flex justify-between text-[#5E5D59]">
                  <span>Total 14-Week Semester Rental Fees:</span>
                  <span className="font-bold text-[#141416]">₹{totalRentalFee}.00</span>
                </div>
              )}
              {totalDeposit > 0 && (
                <div className="flex justify-between text-[#107E44]">
                  <span className="flex items-center gap-1 font-semibold">
                    <Icons.ShieldCheck className="w-3.5 h-3.5" />
                    <span>Refundable Escrow Security Deposit:</span>
                  </span>
                  <span className="font-bold">₹{totalDeposit}.00</span>
                </div>
              )}
              {totalBuyPrice > 0 && (
                <div className="flex justify-between text-[#5E5D59]">
                  <span>Total Equipment Purchases:</span>
                  <span className="font-bold text-[#141416]">₹{totalBuyPrice}.00</span>
                </div>
              )}
              {totalPlatformFee > 0 && (
                <div className="flex justify-between text-[#5E5D59]">
                  <span className="font-medium">Flat Platform Fee (All Orders):</span>
                  <span className="font-bold text-[#141416]">+₹{totalPlatformFee}.00</span>
                </div>
              )}
              {paymentMethod === 'wallet' ? (
                <div className="flex justify-between text-[#107E44] bg-[#EAF7EE]/70 px-2.5 py-1.5 rounded-lg border border-[#BCE7C8]">
                  <span className="font-bold flex items-center gap-1">
                    <Icons.Check className="w-3.5 h-3.5 text-[#107E44]" />
                    <span>Campus Wallet Discount:</span>
                  </span>
                  <span className="font-bold">-₹10.00</span>
                </div>
              ) : (
                <div className="flex justify-between text-[#8E8B85] px-2.5 py-1.5 rounded-lg border border-dashed border-[#E8E5DF]">
                  <span>Campus Wallet Discount:</span>
                  <button 
                    type="button" 
                    onClick={() => setPaymentMethod('wallet')}
                    className="text-[11px] text-[#107E44] font-bold hover:underline"
                  >
                    Select Wallet to get -₹10.00 OFF →
                  </button>
                </div>
              )}

              <div className="pt-3 border-t border-[#E8E5DF] flex justify-between items-baseline">
                <div>
                  <span className="font-editorial text-base font-bold text-[#141416]">Total Payable Today:</span>
                  <p className="text-[10px] text-[#8E8B85]">All fees, taxes & escrow included</p>
                </div>
                <span className="font-editorial text-3xl font-bold text-[#FF5A1F]">₹{grandTotal}.00</span>
              </div>
            </div>

            {/* Escrow Guarantee Callout */}
            {totalDeposit > 0 && (
              <div className="mt-4 p-3 rounded-xl bg-[#EAF7EE] border border-[#BCE7C8] text-xs text-[#107E44] flex items-start gap-2.5">
                <Icons.ShieldCheck className="w-4 h-4 text-[#107E44] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">100% Refundable Escrow Guarantee:</span>
                  <p className="text-[11px] text-[#2F6B43] mt-0.5">
                    Your <strong>₹{totalDeposit}</strong> deposit is locked in student escrow. When exams end and gear is returned safely, it will be refunded instantly to your <strong>Campus Wallet</strong> or redeemed to your <strong>Bank Account</strong>.
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Handover Safety Promise */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] text-xs space-y-2 text-[#5E5D59]">
            <div className="flex items-center gap-2 text-[#141416] font-bold">
              <Icons.Handshake className="w-4 h-4 text-[#FF5A1F]" />
              <span>Campus Handover Protocol</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Payments are held securely. You and the senior meet at verified spots (e.g. <strong>Main Library Steps, Canteen Courtyard, Central Lawn</strong>). You inspect the gear condition firsthand before taking it to your dorm or lab.
            </p>
          </div>

        </div>

        {/* ==================================================================
            RIGHT COLUMN: PAYMENT METHODS (UPI vs CAMPUS WALLET with FLAT ₹10 DISCOUNT)
            ================================================================== */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="editorial-card p-6 bg-white border border-[#E8E5DF] relative overflow-hidden">
            
            {/* Payment Method Selector Tabs */}
            <div className="pb-5 border-b border-[#F0ECE4]">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#8E8B85]">Step 2 of 2</span>
              <h3 className="font-editorial text-lg font-bold text-[#141416] mt-0.5 mb-3">Select Payment Method</h3>
              
              <div className="grid grid-cols-2 p-1 bg-[#FAF8F5] rounded-xl border border-[#E8E5DF] text-xs font-bold text-center">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all ${paymentMethod === 'upi' ? 'bg-[#FF5A1F] text-white shadow-sm' : 'text-[#5E5D59] hover:text-[#141416]'}`}
                >
                  <Icons.QrCode className="w-4 h-4" />
                  <span>UPI Payment (₹{baseTotal})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('wallet')}
                  className={`py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all ${paymentMethod === 'wallet' ? 'bg-[#141416] text-white shadow-sm' : 'text-[#5E5D59] hover:text-[#141416]'}`}
                >
                  <Icons.Wallet className="w-4 h-4" />
                  <span>Campus Wallet (₹{Math.max(0, baseTotal - 10)})</span>
                  <span className="badge-pill bg-[#EAF7EE] text-[#107E44] text-[9px] font-bold">Flat ₹10 OFF</span>
                </button>
              </div>
            </div>

            {/* ==============================================================
                TAB 1: UPI PAYMENT (GPay, Paytm, PhonePe, BHIM)
                Simulated QR / UPI ID step with "Pay via UPI" button
                ============================================================== */}
            {paymentMethod === 'upi' && (
              <div className="pt-5 space-y-5">
                
                {/* Simulated QR Code Card */}
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] flex flex-col sm:flex-row items-center gap-5">
                  
                  {/* Vector Simulated QR Code */}
                  <div className="w-36 h-36 bg-white p-2.5 rounded-xl border border-[#E8E5DF] shadow-subtle shrink-0 flex flex-col items-center justify-center relative group">
                    <svg className="w-full h-full text-[#141416]" viewBox="0 0 100 100" fill="currentColor">
                      {/* Top-Left Position Square */}
                      <rect x="5" y="5" width="28" height="28" rx="4" />
                      <rect x="11" y="11" width="16" height="16" rx="2" fill="white" />
                      <rect x="15" y="15" width="8" height="8" rx="1" />

                      {/* Top-Right Position Square */}
                      <rect x="67" y="5" width="28" height="28" rx="4" />
                      <rect x="73" y="11" width="16" height="16" rx="2" fill="white" />
                      <rect x="77" y="15" width="8" height="8" rx="1" />

                      {/* Bottom-Left Position Square */}
                      <rect x="5" y="67" width="28" height="28" rx="4" />
                      <rect x="11" y="73" width="16" height="16" rx="2" fill="white" />
                      <rect x="15" y="77" width="8" height="8" rx="1" />

                      {/* Grid Pattern Dots */}
                      <rect x="38" y="8" width="6" height="6" rx="1" />
                      <rect x="48" y="14" width="8" height="6" rx="1" />
                      <rect x="40" y="24" width="12" height="6" rx="1" />
                      <rect x="10" y="40" width="8" height="8" rx="1" />
                      <rect x="24" y="44" width="6" height="6" rx="1" />
                      <rect x="38" y="40" width="16" height="6" rx="1" />
                      <rect x="60" y="38" width="8" height="8" rx="1" />
                      <rect x="74" y="42" width="6" height="6" rx="1" />
                      <rect x="86" y="40" width="8" height="8" rx="1" />
                      <rect x="42" y="52" width="8" height="8" rx="1" />
                      <rect x="56" y="50" width="14" height="6" rx="1" />
                      <rect x="76" y="54" width="8" height="6" rx="1" />
                      <rect x="40" y="68" width="8" height="8" rx="1" />
                      <rect x="54" y="66" width="6" height="6" rx="1" />
                      <rect x="66" y="68" width="12" height="6" rx="1" />
                      <rect x="84" y="68" width="10" height="8" rx="1" />
                      <rect x="44" y="82" width="8" height="12" rx="1" />
                      <rect x="58" y="78" width="8" height="6" rx="1" />
                      <rect x="72" y="80" width="12" height="8" rx="1" />
                      <rect x="88" y="82" width="6" height="10" rx="1" />
                    </svg>
                    
                    {/* Center Brand Badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-md bg-[#FF5A1F] text-white flex items-center justify-center shadow-md">
                        <Icons.Book className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-center sm:text-left">
                    <span className="badge-pill bg-[#EAF7EE] text-[#107E44] border border-[#BCE7C8] text-[10px] font-bold">
                      Instant QR Code
                    </span>
                    <h4 className="font-editorial text-sm font-bold text-[#141416]">Scan with any UPI App</h4>
                    <p className="text-[11px] text-[#5E5D59] leading-relaxed">
                      Scan using Google Pay, Paytm, PhonePe, or BHIM to authorize student escrow holding.
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 pt-1 justify-center sm:justify-start">
                      {['GPay', 'Paytm', 'PhonePe', 'BHIM', 'Cred'].map(app => (
                        <span key={app} className="px-2 py-0.5 rounded bg-white border border-[#E8E5DF] text-[10px] font-bold text-[#141416]">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Simulated UPI ID Input Step */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#141416] block">
                    Or Enter Student UPI ID (VPA)
                  </label>
                  <div className="relative">
                    <input 
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@okhdfcbank or 9876543210@paytm"
                      className="w-full pl-3.5 pr-20 py-2.5 rounded-xl border border-[#E8E5DF] bg-white text-xs font-medium text-[#141416] focus:outline-none focus:border-[#FF5A1F] shadow-subtle font-mono"
                    />
                    <span className="absolute right-3 top-2.5 text-[10px] font-bold text-[#107E44] bg-[#EAF7EE] px-2 py-0.5 rounded">
                      Verified VPA
                    </span>
                  </div>

                  {/* Quick VPA Presets */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                    <span className="text-[#8E8B85] font-semibold text-[10px]">Quick Presets:</span>
                    {[
                      { label: 'Aarav (GPay)', id: 'aarav@okaxis' },
                      { label: 'Campus Pay (Paytm)', id: 'student@paytm' },
                      { label: 'Escrow Portal', id: 'handitdown.escrow@icici' }
                    ].map(p => (
                      <button 
                        key={p.id}
                        type="button"
                        onClick={() => setUpiId(p.id)}
                        className={`px-2 py-0.5 rounded text-[10px] border transition-all ${upiId === p.id ? 'bg-[#141416] text-white border-[#141416]' : 'bg-[#FAF8F5] text-[#5E5D59] border-[#E8E5DF] hover:bg-[#F0ECE4]'}`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pay via UPI Action Button */}
                <button
                  type="button"
                  onClick={handleExecuteUPI}
                  disabled={isProcessing}
                  className="w-full btn-primary !py-3.5 !text-sm shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{processingStatus || 'Verifying UPI Gateway...'}</span>
                    </>
                  ) : (
                    <>
                      <Icons.QrCode className="w-4 h-4" />
                      <span>Pay ₹{grandTotal}.00 via UPI</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#8E8B85]">
                  🔒 Simulated UPI gateway. No real money deducted. Escrow deposit securely locked.
                </p>

              </div>
            )}

            {/* ==============================================================
                TAB 2: CAMPUS WALLET PAYMENT (With Flat ₹10 Purchase Discount)
                ============================================================== */}
            {paymentMethod === 'wallet' && (
              <div className="pt-5 space-y-5">
                
                {/* Current Student Balance Card */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#FAF8F5] to-[#F5F2EA] border border-[#E8E5DF] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#8E8B85]">Campus Wallet Balance</span>
                    <p className="font-editorial text-2xl sm:text-3xl font-bold text-[#107E44] mt-0.5">
                      ₹{walletBalance}.00
                    </p>
                    <span className="text-[11px] text-[#5E5D59]">
                      Total Due: <strong className="text-[#141416]">₹{grandTotal}.00</strong>
                    </span>
                  </div>

                  <div className="text-right">
                    {isWalletSufficient ? (
                      <span className="badge-pill bg-[#EAF7EE] text-[#107E44] border border-[#BCE7C8] text-xs font-bold flex items-center gap-1">
                        <Icons.Check className="w-3.5 h-3.5" />
                        <span>Sufficient Balance</span>
                      </span>
                    ) : (
                      <span className="badge-pill bg-[#FFF0E8] text-[#FF5A1F] border border-[#FFD4C2] text-xs font-bold flex items-center gap-1">
                        <Icons.AlertCircle className="w-3.5 h-3.5" />
                        <span>Shortfall of ₹{walletShortfall}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* ==========================================================
                    "TOP UP WALLET" WIDGET (Direct recharge + Flat ₹10 Purchase Perk)
                    ========================================================== */}
                <div className="p-4 rounded-xl bg-[#FFF8F3] border border-[#FFD4C2] space-y-3">
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-md bg-[#FF5A1F] text-white flex items-center justify-center font-bold text-[10px]">
                        💳
                      </span>
                      <h4 className="font-editorial text-xs sm:text-sm font-bold text-[#141416]">
                        Top Up Campus Wallet
                      </h4>
                    </div>
                    <span className="badge-pill bg-[#107E44] text-white text-[10px] font-bold">
                      Flat ₹10 OFF Every Order
                    </span>
                  </div>

                  <p className="text-[11px] text-[#5E5D59] leading-relaxed">
                    Direct recharge into your wallet. Every order paid with Campus Wallet receives an automatic <strong>flat ₹10 discount</strong>!
                  </p>

                  {/* Preset Amount Chips */}
                  <div className="grid grid-cols-4 gap-2">
                    {[100, 200, 500, 1000].map(amt => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => { setTopUpPreset(amt); setCustomTopUp(''); }}
                        className={`py-2.5 px-1 rounded-lg border text-xs font-bold text-center transition-all ${!customTopUp && topUpPreset === amt ? 'bg-[#FF5A1F] text-white border-[#FF5A1F] shadow-sm' : 'bg-white text-[#141416] border-[#E8E5DF] hover:border-[#FF5A1F]'}`}
                      >
                        <div>+₹{amt}</div>
                        <div className={`text-[9px] ${!customTopUp && topUpPreset === amt ? 'text-white/90' : 'text-[#8E8B85]'}`}>
                          Credits ₹{amt}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount Input */}
                  <div className="pt-1 flex items-center gap-2">
                    <div className="relative flex-grow">
                      <span className="absolute left-3 top-2 text-xs font-bold text-[#8E8B85]">₹</span>
                      <input 
                        type="number"
                        min="10"
                        value={customTopUp}
                        onChange={(e) => setCustomTopUp(e.target.value)}
                        placeholder="Or enter custom amount..."
                        className="w-full pl-7 pr-3 py-2 rounded-lg border border-[#E8E5DF] bg-white text-xs font-medium text-[#141416] focus:outline-none focus:border-[#FF5A1F]"
                      />
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => handleTopUpSubmit()}
                      disabled={isToppingUp || activeTopUpAmount <= 0}
                      className="btn-primary !text-xs !py-2 !px-4 shrink-0 shadow-sm disabled:opacity-50 flex items-center gap-1.5"
                    >
                      {isToppingUp ? (
                        <span>Reloading...</span>
                      ) : (
                        <>
                          <Icons.Plus className="w-3.5 h-3.5" />
                          <span>Top Up ₹{activeTopUpAmount}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Live Calculation Preview Banner */}
                  <div className="p-2 rounded-lg bg-white border border-[#E8E5DF] text-[11px] flex items-center justify-between text-[#5E5D59]">
                    <span>You pay: <strong>₹{activeTopUpAmount}</strong></span>
                    <span className="text-[#107E44] font-bold">Credited to Wallet: ₹{topUpCredited}</span>
                  </div>

                </div>

                {/* Pay from Campus Wallet Buttons */}
                {isWalletSufficient ? (
                  <button
                    type="button"
                    onClick={handleExecuteWallet}
                    disabled={isProcessing}
                    className="w-full btn-primary !py-3.5 !text-sm shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{processingStatus || 'Deducting from Campus Wallet...'}</span>
                      </>
                    ) : (
                      <>
                        <Icons.Wallet className="w-4 h-4" />
                        <span>Pay ₹{grandTotal}.00 from Campus Wallet</span>
                      </>
                    )}
                  </button>
                ) : (
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={handleQuickTopUpAndPay}
                      disabled={isProcessing}
                      className="w-full btn-primary !py-3.5 !text-sm shadow-md flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{processingStatus || 'Reloading & Authorizing...'}</span>
                        </>
                      ) : (
                        <>
                          <Icons.Sparkles className="w-4 h-4" />
                          <span>Quick Top Up ₹{quickReloadNeeded} & Pay</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-[#8E8B85]">
                      Auto-calculates the exact ₹{quickReloadNeeded} reload to cover the order in 1 click!
                    </p>
                  </div>
                )}

              </div>
            )}

            {/* Security Notice */}
            <div className="pt-4 mt-5 border-t border-[#F0ECE4] flex items-center justify-between text-[11px] text-[#8E8B85]">
              <span className="flex items-center gap-1">
                <Icons.ShieldCheck className="w-3.5 h-3.5 text-[#107E44]" />
                <span>Zero bookstore markups</span>
              </span>
              <span>•</span>
              <span>100% Refundable Escrow</span>
              <span>•</span>
              <span>Instant AI Assistant</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

// ==========================================================================
// BUILT-IN FLOATING AI ASSISTANT: CAMPUS BOT WIDGET
// Accessible from ANY screen via a fixed bottom-right floating pill.
// Automatically pops open post-payment to reveal verified Seller details
// and recommended on-campus meetup spots (Library Steps, Canteen, Central Lawn).
// ==========================================================================
function CampusBotWidget({ isOpen, onToggle, unread, messages, onSendMessage, onNavigate, onSelectSpot, showToast }) {
  const [inputText, setInputText] = useState('');
  const [activeSelectedSpot, setActiveSelectedSpot] = useState(null);
  const chatScrollRef = useRef(null);

  // Find the latest orderData from messages if any
  const latestOrderData = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].type === 'order_handover' && messages[i].orderData) {
        return messages[i].orderData;
      }
    }
    return null;
  }, [messages]);

  // Sync selectedSpot with messages
  useEffect(() => {
    if (latestOrderData && latestOrderData.selectedSpot) {
      setActiveSelectedSpot(latestOrderData.selectedSpot);
    }
  }, [latestOrderData]);

  // Auto-scroll chat history to bottom on new messages
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  const handlePromptClick = (promptText) => {
    onSendMessage(promptText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Slide-Up Chat Panel */}
      {isOpen && (
        <div className="mb-3 w-96 max-w-[calc(100vw-2rem)] h-[540px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-[#E8E5DF] flex flex-col overflow-hidden animate-fade-in font-body">
          
          {/* Header */}
          <div className="p-4 bg-[#141416] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF5A1F] text-white flex items-center justify-center relative">
                <Icons.Bot className="w-4 h-4" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#107E44] border-2 border-[#141416] rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-editorial text-sm font-bold leading-tight">CampusBot</h3>
                  <span className="badge-pill bg-white/10 text-[#BCE7C8] text-[9px] font-bold">AI Helper</span>
                </div>
                <p className="text-[10px] text-[#A6A298] leading-tight">Hand It Down Campus Concierge</p>
              </div>
            </div>

            <button 
              onClick={onToggle}
              className="p-1.5 rounded-lg text-[#A6A298] hover:text-white hover:bg-white/10 transition-colors"
              title="Close CampusBot"
            >
              <Icons.X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div ref={chatScrollRef} className="flex-grow overflow-y-auto p-4 space-y-3.5 bg-[#FAF8F5]">
            {messages.map(msg => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                
                {/* Regular Text Message */}
                {msg.type === 'text' && (
                  <div className={`p-3 rounded-2xl text-xs max-w-[85%] leading-relaxed ${msg.sender === 'user' ? 'bg-[#FF5A1F] text-white rounded-br-none shadow-sm' : 'bg-white text-[#141416] border border-[#E8E5DF] rounded-bl-none shadow-subtle'}`}>
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Interactive Spot Buttons if message offers meetup spots */}
                    {msg.sender === 'bot' && (msg.text.includes('Recommended Campus Meetup Spots') || msg.text.includes('Meetup Spots')) && (
                      <div className="mt-2.5 pt-2 border-t border-[#F0ECE4] flex flex-col gap-1.5">
                        <span className="text-[9px] font-bold text-[#8E8B85] uppercase tracking-wider">Choose a Spot to Coordinate:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {[
                            { name: 'Main Library Steps', icon: '🏛️' },
                            { name: 'Canteen Courtyard', icon: '☕' },
                            { name: 'Central Lawn', icon: '🌳' }
                          ].map(s => {
                            const isSelected = activeSelectedSpot === s.name;
                            return (
                              <button
                                key={s.name}
                                type="button"
                                onClick={() => {
                                  setActiveSelectedSpot(s.name);
                                  if (onSelectSpot) {
                                    onSelectSpot(s, latestOrderData);
                                  } else {
                                    onSendMessage(`Tell me about meeting at ${s.name}`);
                                  }
                                }}
                                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                                  isSelected 
                                    ? 'bg-[#107E44] text-white shadow-xs' 
                                    : 'bg-[#FAF8F5] border border-[#E8E5DF] hover:border-[#FF5A1F] hover:bg-[#FFF7F4] text-[#141416]'
                                }`}
                              >
                                <span>{s.icon}</span>
                                <span>{s.name}</span>
                                {isSelected ? <Icons.Check className="w-2.5 h-2.5 ml-0.5" /> : <Icons.ChevronRight className="w-2.5 h-2.5 ml-0.5 opacity-60" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <span className={`block text-[9px] mt-1 text-right ${msg.sender === 'user' ? 'text-white/80' : 'text-[#8E8B85]'}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                )}

                {/* Special Post-Payment Handover Message Card */}
                {msg.type === 'order_handover' && msg.orderData && (
                  <div className="p-3.5 rounded-2xl bg-white border border-[#BCE7C8] shadow-card text-xs space-y-3 max-w-[95%] text-[#141416] animate-fade-in">
                    
                    <div className="flex items-center justify-between pb-2 border-b border-[#F0ECE4]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-[#EAF7EE] text-[#107E44] flex items-center justify-center font-bold text-[10px]">
                          ✓
                        </span>
                        <span className="font-editorial text-xs font-bold text-[#107E44]">Order Verified & Escrow Locked</span>
                      </div>
                      <span className="font-mono text-[10px] text-[#8E8B85]">{msg.orderData.reservationId}</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#8E8B85] uppercase tracking-wider font-bold">Gear Item</span>
                      <h4 className="font-editorial text-sm font-bold text-[#141416]">{msg.orderData.itemTitle}</h4>
                      <p className="text-[11px] text-[#5E5D59]">Deal Type: <strong>{msg.orderData.type === 'Rent' ? 'Semester Rent (Deposit in Escrow)' : 'Direct Purchase'}</strong></p>
                    </div>

                    {/* Verified Seller Details Box */}
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] space-y-2">
                      <span className="text-[10px] font-bold text-[#FF5A1F] uppercase tracking-wider block">
                        Verified Senior / Seller Contact
                      </span>
                      <div className="flex items-center gap-2.5">
                        <img 
                          src={msg.orderData.seller.avatar || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'} 
                          alt={msg.orderData.seller.name} 
                          className="w-10 h-10 rounded-full object-cover border border-[#DFDBD2]"
                        />
                        <div>
                          <div className="flex items-center gap-1">
                            <h5 className="font-bold text-[#141416] text-xs">{msg.orderData.seller.name}</h5>
                            <Icons.ShieldCheck className="w-3.5 h-3.5 text-[#107E44]" />
                          </div>
                          <p className="text-[10px] text-[#5E5D59] font-mono">{msg.orderData.seller.department} • {msg.orderData.seller.courseSemester}</p>
                          <div className="flex items-center gap-2 text-[10px] text-[#8E8B85] mt-0.5">
                            <span className="text-[#107E44] font-bold">⭐ {msg.orderData.seller.rating || 4.8} Trust Rating</span>
                            <span>•</span>
                            <span className="font-mono">{msg.orderData.seller.handle || '@alex_rivera'}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-1.5 border-t border-[#E8E5DF] grid grid-cols-2 gap-1 text-[10px] text-[#5E5D59]">
                        <div>Email: <strong className="text-[#141416] font-mono">{msg.orderData.seller.email}</strong></div>
                        <div>Chat PIN: <strong className="text-[#141416] font-mono">{msg.orderData.seller.campusChatPin}</strong></div>
                      </div>
                    </div>

                    {/* Recommended On-Campus Meetup Spots */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#141416] uppercase tracking-wider block">
                          Suggested On-Campus Meetup Spots
                        </span>
                        <span className="text-[9px] text-[#FF5A1F] font-bold flex items-center gap-0.5 animate-pulse">
                          <span>Click to coordinate</span>
                          <Icons.ChevronRight className="w-2.5 h-2.5" />
                        </span>
                      </div>
                      <div className="space-y-2">
                        {msg.orderData.meetupSpots.map(spot => {
                          const isSelected = (activeSelectedSpot === spot.name) || (msg.orderData.selectedSpot === spot.name);
                          return (
                            <button
                              key={spot.name}
                              type="button"
                              onClick={() => {
                                setActiveSelectedSpot(spot.name);
                                if (onSelectSpot) {
                                  onSelectSpot(spot, msg.orderData);
                                }
                              }}
                              className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start gap-2.5 cursor-pointer group ${
                                isSelected
                                  ? 'border-[#107E44] bg-[#EAF7EE] ring-2 ring-[#107E44]/25 shadow-sm'
                                  : 'border-[#E8E5DF] bg-white hover:border-[#FF5A1F] hover:bg-[#FFF7F4] shadow-subtle hover:scale-[1.01]'
                              }`}
                            >
                              <span className="text-base shrink-0 mt-0.5">{spot.icon}</span>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <p className={`text-xs font-bold ${isSelected ? 'text-[#107E44]' : 'text-[#141416] group-hover:text-[#FF5A1F]'}`}>
                                    {spot.name}
                                  </p>
                                  {isSelected ? (
                                    <span className="badge-pill bg-[#107E44] text-white text-[9px] font-bold py-0.5 px-2 flex items-center gap-1 shadow-xs">
                                      <Icons.Check className="w-2.5 h-2.5" /> Selected
                                    </span>
                                  ) : (
                                    <span className="text-[9px] text-[#8E8B85] group-hover:text-[#FF5A1F] font-semibold flex items-center gap-0.5">
                                      Select &rarr;
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10px] text-[#5E5D59] leading-tight mt-0.5">{spot.detail}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Navigation to Deal Tracker Button */}
                    <button
                      type="button"
                      onClick={() => {
                        onToggle();
                        onNavigate('/wallet');
                      }}
                      className="w-full btn-primary !text-xs !py-2.5 shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <Icons.RefreshCw className="w-3.5 h-3.5" />
                      <span>Open Active Deal Tracker</span>
                    </button>

                  </div>
                )}

              </div>
            ))}
          </div>

          {/* Quick Preset Prompt Chips */}
          <div className="p-2 bg-white border-t border-[#F0ECE4] flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[10px]">
            {[
              { label: '📍 Meetup Spots', query: 'What are the best campus meetup spots?' },
              { label: '🛡️ Escrow Return', query: 'How does the refundable security deposit work?' },
              { label: '💰 50% Rental Cap', query: 'Explain the 50% rental fee cap rule' },
              { label: '💳 Flat ₹10 Wallet Off', query: 'How does the flat 10 rupees wallet discount and 15 rupees platform fee work?' }
            ].map(chip => (
              <button
                key={chip.label}
                type="button"
                onClick={() => handlePromptClick(chip.query)}
                className="px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E5DF] text-[#5E5D59] hover:text-[#141416] hover:bg-[#F0ECE4] transition-all font-semibold shrink-0"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Message Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-[#E8E5DF] flex items-center gap-2">
            <input 
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask CampusBot about spots, caps, escrow..."
              className="flex-grow text-xs px-3 py-2 rounded-xl border border-[#E8E5DF] focus:outline-none focus:border-[#FF5A1F] bg-[#FAF8F5]"
            />
            <button 
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 rounded-xl bg-[#FF5A1F] text-white hover:bg-[#E4480E] disabled:opacity-40 transition-colors shrink-0"
              title="Send message"
            >
              <Icons.Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        type="button"
        onClick={onToggle}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#141416] text-white shadow-xl hover:bg-[#FF5A1F] transition-all hover:scale-105 active:scale-95 group relative select-none"
        title="Open CampusBot AI Assistant"
      >
        <div className="relative">
          <Icons.Bot className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#107E44] border-2 border-[#141416] rounded-full" />
        </div>
        <span className="font-editorial text-xs font-bold tracking-wide">CampusBot</span>
        
        {unread && (
          <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-[#FF5A1F] text-white font-bold text-[10px] flex items-center justify-center shadow-md animate-pulse">
            1
          </span>
        )}
      </button>

    </div>
  );
}

// ==========================================================================
// CAMPUS WALLET & ACTIVE DEAL TRACKER VIEW (/wallet or /orders)
// Enhanced with:
// 1. Campus Wallet Balance & Top Up Widget
// 2. Active Deals / Order Tracker
// 3. Mark as Delivered action (for purchases): releases seller payout minus flat ₹15 platform fee
// 4. Item Returned Safely action (for rentals): choice of Campus Wallet or Bank Account refund
// 5. Item Damaged / Destroyed action (for rentals): forfeits security deposit + rental fee to seller
// ==========================================================================
function CampusWalletView({ currentUser, reservations, onDealAction, onTopUpWallet, onBrowse }) {
  const [dealTab, setDealTab] = useState('all'); // 'all', 'rentals', 'purchases', 'completed'
  const [topUpAmount, setTopUpAmount] = useState(200);
  const [customAmount, setCustomAmount] = useState('');
  const [isReloading, setIsReloading] = useState(false);

  // Modals state for deal actions
  const [deliveredModalRes, setDeliveredModalRes] = useState(null);
  const [returnSafeModalRes, setReturnSafeModalRes] = useState(null);
  const [refundMethod, setRefundMethod] = useState('wallet'); // 'wallet' or 'bank'
  const [ratingVal, setRatingVal] = useState(5);
  const [returnComment, setReturnComment] = useState('');

  const [damageModalRes, setDamageModalRes] = useState(null);
  const [damageReason, setDamageReason] = useState('Drafting arm snapped / Screen cracked during term');

  const userReservations = useMemo(() => {
    if (!currentUser) return reservations;
    return reservations.filter(r => r.borrowerId === currentUser.studentId || r.borrowerId === currentUser.id || r.lenderId === currentUser.studentId || r.lenderId === currentUser.id);
  }, [reservations, currentUser]);

  const filteredDeals = useMemo(() => {
    if (dealTab === 'rentals') {
      return userReservations.filter(r => r.type === 'Rent' && r.status !== 'Returned & Refunded' && !r.status.includes('Settled'));
    }
    if (dealTab === 'purchases') {
      return userReservations.filter(r => r.type === 'Buy');
    }
    if (dealTab === 'completed') {
      return userReservations.filter(r => r.status === 'Returned & Refunded' || r.status === 'Delivered & Completed' || r.status.includes('Settled'));
    }
    return userReservations;
  }, [userReservations, dealTab]);

  const escrowTotal = currentUser ? (currentUser.escrowHeld || 0) : 0;
  const balanceTotal = currentUser ? (currentUser.walletBalance !== undefined ? currentUser.walletBalance : 210) : 210;

  const activeTopUp = customAmount ? parseFloat(customAmount) || 0 : topUpAmount;
  const bonusAmount = 0; // No reload bonus
  const totalCredited = activeTopUp;

  const handleWalletTopUp = async () => {
    if (!activeTopUp || activeTopUp <= 0) return;
    setIsReloading(true);
    await onTopUpWallet(activeTopUp);
    setIsReloading(false);
    setCustomAmount('');
  };

  // Submit Mark as Delivered
  const handleConfirmDelivered = async () => {
    if (!deliveredModalRes) return;
    await onDealAction(deliveredModalRes.id, 'mark_delivered');
    setDeliveredModalRes(null);
  };

  // Submit Safe Return with choice of Campus Wallet or Bank Account
  const handleConfirmReturnSafe = async () => {
    if (!returnSafeModalRes) return;
    await onDealAction(returnSafeModalRes.id, 'return_safe', {
      refundMethod,
      rating: ratingVal,
      comment: returnComment || 'Item returned on campus in pristine shape. Escrow deposit unlocked.'
    });
    setReturnSafeModalRes(null);
  };

  // Submit Damage Claim
  const handleConfirmDamage = async () => {
    if (!damageModalRes) return;
    await onDealAction(damageModalRes.id, 'damage_claim', {
      reason: damageReason,
      depositAmount: damageModalRes.depositAmount
    });
    setDamageModalRes(null);
  };

  return (
    <div className="py-10 sm:py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow animate-fade-in space-y-10">
      
      {/* Wallet View Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E8E5DF]">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#107E44]">Student Escrow & Balances</span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#141416] mt-1">Campus Wallet & Deal Tracker</h1>
          {currentUser && (
            <p className="text-xs text-[#5E5D59] mt-1">
              Active Student: <strong className="text-[#141416]">{currentUser.name}</strong> ({currentUser.studentId} • {currentUser.courseSemester})
            </p>
          )}
        </div>
        <button onClick={onBrowse} className="btn-secondary !text-xs !py-2.5 !px-4 self-start md:self-auto shadow-subtle">
          <span>+ Browse Available Gear</span>
        </button>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Wallet Balance Card */}
        <div className="editorial-card p-6 bg-white border border-[#BCE7C8]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#5E5D59] uppercase tracking-wider">Campus Wallet Balance</span>
            <span className="badge-pill bg-[#EAF7EE] text-[#107E44] text-[10px] font-bold">Active</span>
          </div>
          <p className="font-editorial text-3xl sm:text-4xl font-bold text-[#107E44]">₹{balanceTotal}.00</p>
          <p className="text-[11px] text-[#5E5D59] mt-2">Available for checkout and gear reservations.</p>
        </div>

        {/* Escrow Held Card */}
        <div className="editorial-card p-6 bg-white border border-[#E8E5DF]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#5E5D59] uppercase tracking-wider">Escrow Held</span>
            <span className="badge-pill bg-[#FAF8F5] text-[#5E5D59] text-[10px] font-semibold">100% Refundable</span>
          </div>
          <p className="font-editorial text-3xl sm:text-4xl font-bold text-[#141416]">₹{escrowTotal}.00</p>
          <p className="text-[11px] text-[#5E5D59] mt-2">Security deposits locked safely until return.</p>
        </div>

        {/* Semester Savings Card */}
        <div className="editorial-card p-6 bg-white border border-[#E8E5DF]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#5E5D59] uppercase tracking-wider">Semester Savings</span>
            <span className="badge-pill bg-[#FFF0E8] text-[#FF5A1F] text-[10px] font-bold">Saved</span>
          </div>
          <p className="font-editorial text-3xl sm:text-4xl font-bold text-[#FF5A1F]">₹3,170.00</p>
          <p className="text-[11px] text-[#5E5D59] mt-2">Compared to buying retail at bookstore.</p>
        </div>

      </div>

      {/* Top Up Wallet Strip (Direct Recharge + Flat ₹10 Purchase Perk) */}
      <div className="p-5 rounded-2xl bg-[#FFF8F3] border border-[#FFD4C2] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center gap-1.5 justify-center md:justify-start">
            <span className="w-5 h-5 rounded bg-[#107E44] text-white flex items-center justify-center text-xs font-bold">💳</span>
            <h4 className="font-editorial text-sm font-bold text-[#141416]">Top Up Campus Wallet</h4>
            <span className="badge-pill bg-[#107E44] text-white text-[9px] font-bold">Flat ₹10 OFF Every Order</span>
          </div>
          <p className="text-[11px] text-[#5E5D59]">
            Recharge funds directly with no deductions. Enjoy an automatic <strong>flat ₹10 discount</strong> on all orders paid via Campus Wallet!
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 justify-center">
          {[100, 200, 500].map(amt => (
            <button
              key={amt}
              type="button"
              onClick={() => { setTopUpAmount(amt); setCustomAmount(''); }}
              className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${!customAmount && topUpAmount === amt ? 'bg-[#FF5A1F] text-white border-[#FF5A1F]' : 'bg-white text-[#141416] border-[#E8E5DF]'}`}
            >
              +₹{amt}
            </button>
          ))}

          <button
            type="button"
            onClick={handleWalletTopUp}
            disabled={isReloading}
            className="btn-primary !text-xs !py-2 !px-4 shadow-sm"
          >
            {isReloading ? 'Recharging...' : `Top Up ₹${activeTopUp}`}
          </button>
        </div>
      </div>

      {/* ====================================================================
          ACTIVE DEAL & ORDER TRACKER PANEL
          ==================================================================== */}
      <div className="editorial-card bg-white border border-[#E8E5DF] overflow-hidden">
        
        {/* Deal Tracker Header & Tab Strip */}
        <div className="p-6 border-b border-[#F0ECE4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-editorial text-xl font-bold text-[#141416]">Active Deals & Order Tracker</h3>
            <p className="text-xs text-[#5E5D59] mt-0.5">
              Confirm gear deliveries, coordinate safe campus meetups, or release escrow deposits upon exam return.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FAF8F5] rounded-xl border border-[#E8E5DF] text-xs font-bold">
            <button
              type="button"
              onClick={() => setDealTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${dealTab === 'all' ? 'bg-[#141416] text-white shadow-xs' : 'text-[#5E5D59]'}`}
            >
              All ({userReservations.length})
            </button>
            <button
              type="button"
              onClick={() => setDealTab('rentals')}
              className={`px-3 py-1.5 rounded-lg transition-all ${dealTab === 'rentals' ? 'bg-[#FF5A1F] text-white shadow-xs' : 'text-[#5E5D59]'}`}
            >
              Rentals ({userReservations.filter(r => r.type === 'Rent' && r.status !== 'Returned & Refunded' && !r.status.includes('Settled')).length})
            </button>
            <button
              type="button"
              onClick={() => setDealTab('purchases')}
              className={`px-3 py-1.5 rounded-lg transition-all ${dealTab === 'purchases' ? 'bg-[#141416] text-white shadow-xs' : 'text-[#5E5D59]'}`}
            >
              Purchases ({userReservations.filter(r => r.type === 'Buy').length})
            </button>
            <button
              type="button"
              onClick={() => setDealTab('completed')}
              className={`px-3 py-1.5 rounded-lg transition-all ${dealTab === 'completed' ? 'bg-[#141416] text-white shadow-xs' : 'text-[#5E5D59]'}`}
            >
              Completed ({userReservations.filter(r => r.status === 'Returned & Refunded' || r.status === 'Delivered & Completed' || r.status.includes('Settled')).length})
            </button>
          </div>
        </div>

        {/* Deals Content */}
        {filteredDeals.length === 0 ? (
          <div className="p-16 text-center text-[#5E5D59] space-y-3">
            <Icons.Book className="w-10 h-10 text-[#8E8B85] mx-auto mb-2" />
            <h4 className="font-editorial text-base font-bold text-[#141416]">No deals in this category</h4>
            <p className="text-xs max-w-sm mx-auto">Explore syllabus books, drafting arms, calculators, or lab coats to get started.</p>
            <button onClick={onBrowse} className="btn-primary !text-xs !py-2.5 !px-5 mt-2">
              Browse Books & Gear
            </button>
          </div>
        ) : (
          <div className="divide-y divide-[#F0ECE4]">
            {filteredDeals.map(res => {
              const isRent = res.type === 'Rent';
              const isPurchased = res.type === 'Buy';
              const isDelivered = res.status === 'Delivered & Completed';
              const isReturned = res.status === 'Returned & Refunded';
              const isDamagedSettled = res.status.includes('Settled');

              const sellerPayout = res.sellerPayout || (res.buyPrice ? Math.max(0, res.buyPrice - (res.platformFee !== undefined ? res.platformFee : 15)) : 0);

              return (
                <div key={res.id} className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#FAF8F5]/50 transition-colors">
                  
                  {/* Deal Left: Item Info, Seller & Status */}
                  <div className="space-y-2.5 max-w-2xl">
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-editorial text-base sm:text-lg font-bold text-[#141416]">
                        {res.listingTitle}
                      </span>
                      <span className={`badge-pill text-[10px] font-bold ${isRent ? 'bg-[#FFF0E8] text-[#FF5A1F] border border-[#FFD4C2]' : 'bg-[#FAF8F5] text-[#141416] border border-[#E8E5DF]'}`}>
                        {isRent ? 'Semester Rent' : 'Direct Buy'}
                      </span>
                      <span className={`badge-pill text-[10px] font-bold ${isDelivered || isReturned ? 'bg-[#EAF7EE] text-[#107E44] border border-[#BCE7C8]' : isDamagedSettled ? 'bg-[#FEE4E2] text-[#D92D20] border border-[#FECDCA]' : 'bg-[#FFF8E6] text-[#B54708] border border-[#FEDF89]'}`}>
                        {res.status}
                      </span>
                    </div>

                    {/* Metadata & Meetup Spot */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#5E5D59]">
                      <span>Seller: <strong className="text-[#141416]">{res.lenderName}</strong></span>
                      <span>•</span>
                      <span>Buyer: <strong className="text-[#141416]">{res.borrowerName}</strong></span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#FF5A1F] font-semibold">
                        <Icons.MapPin className="w-3.5 h-3.5" />
                        <span>{res.handoverSpot}</span>
                      </span>
                    </div>

                    {/* Financial Terms & Escrow Status */}
                    <div className="text-xs pt-1 flex flex-wrap items-center gap-4">
                      {isRent ? (
                        <>
                          <span>Rent: <strong>₹{res.rentAmount}</strong></span>
                          <span>•</span>
                          <span className="text-[#107E44] font-semibold">
                            Deposit: <strong>₹{res.depositAmount}</strong> ({res.depositStatus || '100% Refundable'})
                          </span>
                        </>
                      ) : (
                        <>
                          <span>Purchase Price: <strong>₹{res.buyPrice}</strong></span>
                          <span>•</span>
                          <span>Flat Platform Fee: <strong>₹{res.platformFee !== undefined ? res.platformFee : 15}</strong></span>
                          <span>•</span>
                          <span className="text-[#107E44] font-semibold">
                            Seller Net Payout: <strong>₹{sellerPayout}</strong>
                          </span>
                        </>
                      )}
                    </div>

                    {/* Settlement Detail Callout if Damaged */}
                    {isDamagedSettled && res.damageDetails && (
                      <div className="p-2.5 rounded-lg bg-[#FFF5F5] border border-[#FECDCA] text-[11px] text-[#B42318] space-y-1">
                        <div className="font-bold">⚠️ Settlement Breakdown:</div>
                        <p>Reason: {res.damageDetails.reason}</p>
                        <p>₹{res.damageDetails.depositForfeited} deposit + ₹{res.damageDetails.rentRetained} rent forfeited to seller for equipment damage indemnity.</p>
                      </div>
                    )}

                  </div>

                  {/* Deal Right: Action Triggers */}
                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    
                    {/* PURCHASES: "Mark as Delivered" */}
                    {isPurchased && !isDelivered && (
                      <button 
                        type="button"
                        onClick={() => setDeliveredModalRes(res)}
                        className="btn-primary !text-xs !py-2.5 !px-4 shadow-sm flex items-center gap-1.5"
                      >
                        <Icons.Check className="w-4 h-4" />
                        <span>Mark as Delivered</span>
                      </button>
                    )}

                    {isPurchased && isDelivered && (
                      <span className="badge-pill bg-[#EAF7EE] text-[#107E44] text-xs font-bold flex items-center gap-1 py-1.5 px-3">
                        <Icons.Check className="w-3.5 h-3.5" />
                        <span>Delivered & Payout Released</span>
                      </span>
                    )}

                    {/* RENTALS: "Item Returned Safely" & "Item Damaged / Destroyed" */}
                    {isRent && !isReturned && !isDamagedSettled && (
                      <div className="flex flex-wrap items-center gap-2">
                        
                        {/* Action 1: Item Returned Safely */}
                        <button
                          type="button"
                          onClick={() => {
                            setReturnSafeModalRes(res);
                            setRefundMethod('wallet');
                          }}
                          className="btn-primary !text-xs !py-2.5 !px-4 shadow-sm flex items-center gap-1.5"
                        >
                          <Icons.RefreshCw className="w-3.5 h-3.5" />
                          <span>Item Returned Safely</span>
                        </button>

                        {/* Action 2: Item Damaged / Destroyed */}
                        <button
                          type="button"
                          onClick={() => setDamageModalRes(res)}
                          className="px-3 py-2 rounded-xl border border-[#FDA29B] text-[#B42318] hover:bg-[#FEF3F2] text-xs font-bold transition-all flex items-center gap-1"
                        >
                          <Icons.AlertCircle className="w-3.5 h-3.5" />
                          <span>Item Damaged</span>
                        </button>

                      </div>
                    )}

                    {isRent && isReturned && (
                      <span className="badge-pill bg-[#EAF7EE] text-[#107E44] text-xs font-bold flex items-center gap-1 py-1.5 px-3">
                        <Icons.Check className="w-3.5 h-3.5" />
                        <span>Returned & Deposit Refunded</span>
                      </span>
                    )}

                    {isRent && isDamagedSettled && (
                      <span className="badge-pill bg-[#FEE4E2] text-[#D92D20] text-xs font-bold flex items-center gap-1 py-1.5 px-3">
                        <Icons.AlertCircle className="w-3.5 h-3.5" />
                        <span>Deposit Forfeited (Settled)</span>
                      </span>
                    )}

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* ====================================================================
          MODAL 1: MARK AS DELIVERED (Purchases)
          Releases seller payout minus flat platform fee (₹15)
          ==================================================================== */}
      {deliveredModalRes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141416]/50 backdrop-blur-sm animate-fade-in">
          <div className="editorial-card p-6 bg-white max-w-md w-full space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE4]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#EAF7EE] text-[#107E44] flex items-center justify-center">
                  <Icons.Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-editorial text-base font-bold text-[#141416]">Confirm Delivery & Release Payout</h3>
                  <span className="text-[11px] text-[#5E5D59] font-mono">{deliveredModalRes.id}</span>
                </div>
              </div>
              <button onClick={() => setDeliveredModalRes(null)} className="text-[#8E8B85] hover:text-[#141416]">
                <Icons.X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] space-y-2 text-xs">
              <p className="font-bold text-[#141416]">{deliveredModalRes.listingTitle}</p>
              <div className="space-y-1 text-[#5E5D59]">
                <div className="flex justify-between">
                  <span>Item Buy Price:</span>
                  <span className="font-bold text-[#141416]">₹{deliveredModalRes.buyPrice}.00</span>
                </div>
                <div className="flex justify-between text-[#8E8B85]">
                  <span>Flat Platform Fee:</span>
                  <span>-₹{deliveredModalRes.platformFee !== undefined ? deliveredModalRes.platformFee : 15}.00</span>
                </div>
                <div className="pt-2 border-t border-[#E8E5DF] flex justify-between font-bold text-sm text-[#107E44]">
                  <span>Net Seller Payout Released:</span>
                  <span>₹{Math.max(0, (deliveredModalRes.buyPrice || 260) - (deliveredModalRes.platformFee !== undefined ? deliveredModalRes.platformFee : 15))}.00</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#5E5D59] leading-relaxed">
              Confirm that you have met seller <strong>{deliveredModalRes.lenderName}</strong> at <strong>{deliveredModalRes.handoverSpot}</strong> and inspected the gear condition. This transfers permanent ownership and releases payout.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button 
                type="button"
                onClick={() => setDeliveredModalRes(null)}
                className="btn-secondary !text-xs !py-2.5 flex-1"
              >
                Cancel
              </button>
              <button 
                type="button"
                onClick={handleConfirmDelivered}
                className="btn-primary !text-xs !py-2.5 flex-1 shadow-sm"
              >
                Confirm & Release Payout
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 2: ITEM RETURNED SAFELY (Rentals)
          Refunds Security Deposit with choice: Campus Wallet OR Redeem to Bank Account
          ==================================================================== */}
      {returnSafeModalRes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141416]/50 backdrop-blur-sm animate-fade-in">
          <div className="editorial-card p-6 bg-white max-w-lg w-full space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE4]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#EAF7EE] text-[#107E44] flex items-center justify-center">
                  <Icons.RefreshCw className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-editorial text-base font-bold text-[#141416]">Refund Security Deposit</h3>
                  <span className="text-[11px] text-[#107E44] font-bold">100% Escrow Unlock (₹{returnSafeModalRes.depositAmount}.00)</span>
                </div>
              </div>
              <button onClick={() => setReturnSafeModalRes(null)} className="text-[#8E8B85] hover:text-[#141416]">
                <Icons.X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <p className="text-xs text-[#5E5D59]">
                Gear: <strong className="text-[#141416]">{returnSafeModalRes.listingTitle}</strong>
              </p>
              <p className="text-xs text-[#5E5D59] mt-0.5">
                Returned to senior: <strong className="text-[#141416]">{returnSafeModalRes.lenderName}</strong>
              </p>
            </div>

            {/* Refund Destination Choice Cards */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-[#141416] block">
                Choose Where to Refund Your ₹{returnSafeModalRes.depositAmount} Deposit:
              </label>

              {/* Option A: Campus Wallet */}
              <div 
                onClick={() => setRefundMethod('wallet')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${refundMethod === 'wallet' ? 'border-[#107E44] bg-[#EAF7EE]/40 ring-2 ring-[#107E44]/20' : 'border-[#E8E5DF] bg-white hover:border-[#BCE7C8]'}`}
              >
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 shrink-0 ${refundMethod === 'wallet' ? 'border-[#107E44] bg-[#107E44] text-white' : 'border-[#D5D1C7]'}`}>
                  {refundMethod === 'wallet' && <Icons.Check className="w-3 h-3" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Icons.Wallet className="w-4 h-4 text-[#107E44]" />
                    <span className="text-xs font-bold text-[#141416]">Credit to Campus Wallet</span>
                    <span className="badge-pill bg-[#EAF7EE] text-[#107E44] text-[9px] font-bold">Instant</span>
                  </div>
                  <p className="text-[11px] text-[#5E5D59] mt-1">
                    Funds added immediately to your balance. (New wallet balance will be: <strong>₹{balanceTotal + returnSafeModalRes.depositAmount}</strong>).
                  </p>
                </div>
              </div>

              {/* Option B: Redeem to Bank Account */}
              <div 
                onClick={() => setRefundMethod('bank')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${refundMethod === 'bank' ? 'border-[#107E44] bg-[#EAF7EE]/40 ring-2 ring-[#107E44]/20' : 'border-[#E8E5DF] bg-white hover:border-[#BCE7C8]'}`}
              >
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 shrink-0 ${refundMethod === 'bank' ? 'border-[#107E44] bg-[#107E44] text-white' : 'border-[#D5D1C7]'}`}>
                  {refundMethod === 'bank' && <Icons.Check className="w-3 h-3" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Icons.Building className="w-4 h-4 text-[#141416]" />
                    <span className="text-xs font-bold text-[#141416]">Redeem to Bank Account</span>
                    <span className="badge-pill bg-[#FAF8F5] text-[#141416] text-[9px] font-bold">IMPS Transfer</span>
                  </div>
                  <p className="text-[11px] text-[#5E5D59] mt-1">
                    Direct transfer to verified Student Bank Account: <strong>HDFC Bank • A/C ending in 4108</strong> (Zero fee).
                  </p>
                </div>
              </div>
            </div>

            {/* Optional Rating & Comment */}
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#141416]">Rate Senior Exchange Experience:</span>
                <div className="flex items-center gap-1 text-[#FF5A1F]">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRatingVal(star)}
                      className="p-0.5"
                    >
                      <Icons.Star className={`w-4 h-4 ${star <= ratingVal ? 'fill-[#FF5A1F]' : 'opacity-30'}`} />
                    </button>
                  ))}
                </div>
              </div>
              <input 
                type="text"
                value={returnComment}
                onChange={(e) => setReturnComment(e.target.value)}
                placeholder="Optional: Smooth handover, item condition..."
                className="w-full px-3 py-1.5 rounded-lg border border-[#E8E5DF] bg-white text-xs focus:outline-none focus:border-[#FF5A1F]"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button 
                type="button"
                onClick={() => setReturnSafeModalRes(null)}
                className="btn-secondary !text-xs !py-2.5 flex-1"
              >
                Cancel
              </button>
              <button 
                type="button"
                onClick={handleConfirmReturnSafe}
                className="btn-primary !text-xs !py-2.5 flex-1 shadow-sm"
              >
                Confirm Return & Unlock ₹{returnSafeModalRes.depositAmount}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 3: ITEM DAMAGED / DESTROYED (Rentals)
          Forfeits Security Deposit + Rental Fee to seller with settlement summary
          ==================================================================== */}
      {damageModalRes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141416]/50 backdrop-blur-sm animate-fade-in">
          <div className="editorial-card p-6 bg-white max-w-md w-full space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE4]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FEE4E2] text-[#D92D20] flex items-center justify-center">
                  <Icons.AlertCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-editorial text-base font-bold text-[#D92D20]">Settle Damage Claim</h3>
                  <span className="text-[11px] text-[#5E5D59]">Deposit Forfeiture Settlement</span>
                </div>
              </div>
              <button onClick={() => setDamageModalRes(null)} className="text-[#8E8B85] hover:text-[#141416]">
                <Icons.X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#5E5D59] leading-relaxed">
              Gear item: <strong className="text-[#141416]">{damageModalRes.listingTitle}</strong>
              <br />
              If the equipment was damaged, snapped, or cracked during the 14-week term, your security deposit will be forfeited directly to senior <strong>{damageModalRes.lenderName}</strong> as replacement compensation.
            </p>

            {/* Settlement Summary Table */}
            <div className="p-3.5 rounded-xl bg-[#FFF5F5] border border-[#FECDCA] space-y-2 text-xs">
              <span className="text-[10px] font-bold text-[#B42318] uppercase tracking-wider block">
                Settlement Summary
              </span>
              <div className="space-y-1.5 text-[#5E5D59]">
                <div className="flex justify-between">
                  <span>Semester Rental Fee (Usage fee):</span>
                  <span className="font-bold text-[#141416]">₹{damageModalRes.rentAmount}.00 (Retained by Seller)</span>
                </div>
                <div className="flex justify-between text-[#B42318]">
                  <span>Security Deposit Forfeited (Damage compensation):</span>
                  <span className="font-bold">₹{damageModalRes.depositAmount}.00 (Forfeited)</span>
                </div>
                <div className="pt-2 border-t border-[#FECDCA] flex justify-between font-bold text-sm text-[#141416]">
                  <span>Total Released to Senior:</span>
                  <span className="text-[#D92D20]">₹{(damageModalRes.rentAmount || 180) + (damageModalRes.depositAmount || 200)}.00</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#141416] block mb-1">
                Damage Notes / Incident Details:
              </label>
              <textarea 
                rows="2"
                value={damageReason}
                onChange={(e) => setDamageReason(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-[#E8E5DF] bg-[#FAF8F5] text-xs focus:outline-none focus:border-[#D92D20]"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button 
                type="button"
                onClick={() => setDamageModalRes(null)}
                className="btn-secondary !text-xs !py-2.5 flex-1"
              >
                Cancel
              </button>
              <button 
                type="button"
                onClick={handleConfirmDamage}
                className="px-4 py-2.5 rounded-xl bg-[#D92D20] hover:bg-[#B42318] text-white text-xs font-bold transition-all shadow-sm flex-1"
              >
                Confirm Forfeiture & Settle
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

// ==========================================================================
// HERO SECTION COMPONENT
// ==========================================================================
function HeroSection({ onGetStarted, onExplore }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E8E5DF] bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F5F2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0E8] border border-[#FFD4C2] text-xs font-bold text-[#FF5A1F] tracking-wide uppercase">
              <Icons.Sparkles className="w-3.5 h-3.5" />
              <span>Peer-to-Peer College Exchange</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141416] leading-[1.08]">
              Don't let semester gear sit idle after exams. <br className="hidden sm:inline"/>
              <span className="text-[#FF5A1F] underline decoration-4 decoration-[#FFD4C2] underline-offset-4">Hand it down.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5E5D59] leading-relaxed max-w-2xl font-normal">
              Textbooks, imperial drafting boards, T-scales, lab kits, and graphing calculators cost thousands of rupees each term—yet you only need them for 14 weeks. 
              <strong className="text-[#141416] font-semibold"> Seniors lend or sell idle gear</strong> right on campus with <strong className="text-[#141416] font-semibold">enforced 50% rental caps</strong> and refundable escrow deposits.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button onClick={onGetStarted} className="btn-primary !text-base !py-3.5 !px-6 shadow-md flex items-center gap-2">
                <span>Get Started</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={onExplore} className="btn-secondary !text-base !py-3.5 !px-6">
                <span>Browse Books & Gear</span>
              </button>
            </div>
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#5E5D59]">
              <div className="flex items-center gap-2"><Icons.CheckCircle className="w-4 h-4 text-[#107E44]" /><span>Verified Student IDs</span></div>
              <div className="flex items-center gap-2"><Icons.ShieldCheck className="w-4 h-4 text-[#FF5A1F]" /><span>50% Max Rental Fee Cap</span></div>
              <div className="flex items-center gap-2"><Icons.MapPin className="w-4 h-4 text-[#141416]" /><span>Campus Hub Handovers</span></div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="editorial-card p-6 bg-white border border-[#E8E5DF] relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0ECE4]">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#FF5A1F] uppercase">Campus Reality Check</span>
                  <h3 className="font-editorial text-lg font-bold text-[#141416]">Idle Dorm Shelf vs. Junior Need</h3>
                </div>
                <span className="badge-pill badge-deposit text-[11px]">Save ~78%</span>
              </div>
              <div className="divide-y divide-[#F0ECE4] my-3">
                <div className="py-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#FAF8F5] border border-[#E8E5DF] flex items-center justify-center text-[#141416]"><Icons.Drafting className="w-4 h-4" /></div>
                    <div><p className="font-bold text-[#141416]">Drafting T-Scale (36-inch)</p><p className="text-[#8E8B85]">Engg Graphics (ENG-102)</p></div>
                  </div>
                  <div className="text-right"><p className="font-bold text-[#107E44]">₹180 / sem</p><p className="text-[11px] text-[#8E8B85] line-through">MRP ₹500</p></div>
                </div>
                <div className="py-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#FAF8F5] border border-[#E8E5DF] flex items-center justify-center text-[#141416]"><Icons.Calculator className="w-4 h-4" /></div>
                    <div><p className="font-bold text-[#141416]">Casio ClassWiz Calculator</p><p className="text-[#8E8B85]">Calculus (MATH-101)</p></div>
                  </div>
                  <div className="text-right"><p className="font-bold text-[#107E44]">₹220 / sem</p><p className="text-[11px] text-[#8E8B85] line-through">MRP ₹1495</p></div>
                </div>
                <div className="py-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#FAF8F5] border border-[#E8E5DF] flex items-center justify-center text-[#141416]"><Icons.LabKit className="w-4 h-4" /></div>
                    <div><p className="font-bold text-[#141416]">Breadboard & Multimeter Kit</p><p className="text-[#8E8B85]">Basic Electrical (EE-101)</p></div>
                  </div>
                  <div className="text-right"><p className="font-bold text-[#107E44]">₹160 / sem</p><p className="text-[11px] text-[#8E8B85] line-through">MRP ₹750</p></div>
                </div>
              </div>
              <div className="mt-4 p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E8E5DF] flex items-center justify-between">
                <div><span className="text-[11px] font-bold text-[#5E5D59] uppercase tracking-wider">Semester Savings</span><p className="text-lg font-editorial font-bold text-[#141416]">₹3,170 Saved</p></div>
                <button onClick={onGetStarted} className="text-xs font-bold text-[#FF5A1F] hover:underline flex items-center gap-1"><span>Join Exchange</span><Icons.ArrowRight className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Render React App
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
