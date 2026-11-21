# Hand It Down - Peer-to-Peer College Book & Semester Gear Marketplace

A responsive web application connecting college seniors with idle semester textbooks, drawing boards/T-scales, lab kits, and graphing calculators to juniors needing them for a single 14-week semester.

---

## 🎨 Design Direction

- **Editorial Palette**: Warm-stone/off-white background (`#FAF8F5`), deep ink text (`#141416`), and bold vibrant accent (`#FF5A1F`).
- **Typography**: Space Grotesk (editorial headlines) paired with Plus Jakarta Sans (modern UI).
- **Crisp Architecture**: Subtle cards, crisp borders (`#E8E5DF`), soft shadows, and smooth hover states.

---

## 🌟 Core Features

1. **Top Navbar**:
   - Custom editorial logo mark (monogram open-book & gear hand-down loop).
   - Quick navigation links: **How It Works**, **Books & Gear**, and **Campus Wallet**.
   - Verified student badge indicator and active demo student profile switcher.
   - Prominent **Get Started** CTA button navigating to the Student Login view (`/login`).

2. **Hero Section**:
   - Focus on semester textbooks, drawing boards/T-scales, lab coats, and graphing calculators sitting idle on dorm shelves after exams vs. juniors needing them for a 14-week term.
   - Dual CTAs: **Get Started** (navigates to `/login`) and **Browse Books & Gear**.
   - Interactive **Idle Dorm Shelf vs. Junior Semester Need** reality check comparison card showing average semester savings of $357+.

3. **Core Value Strip**:
   - **60–80% Lower Semester Cost**: Massive savings compared to campus bookstore retail prices.
   - **Course & Semester Matching**: Filter directly by syllabus codes (`ENG-102`, `MATH-101`, `PHYS-101`, `CHEM-101L`).
   - **Refundable Rental Deposits**: 100% safe campus escrow holding security deposits until post-finals gear check.
   - **Verified Campus Meetups**: 5-minute handovers at designated campus safe zones (Library North Portico, Student Union Atrium, Engineering Courtyard).

4. **4-Step Workflow Preview**:
   - **01. List**: Seniors list idle tools and books in under 60 seconds with photos and pricing.
   - **02. Match**: Juniors filter by syllabus code and semester to find exact lab and lecture gear.
   - **03. Reserve**: Junior reserves item with refundable escrow deposit held safely.
   - **04. Hand Over**: Meet at campus hub, inspect condition, confirm handover, and return post-finals.

5. **Books & Gear Marketplace**:
   - Real-time search across syllabus codes, titles, and equipment descriptions.
   - Category filters: Textbooks, Drawing Boards & T-Scales, Calculators, Lab Kits & Equipment.
   - Semester filters (Semester 1 through 8) and Buy vs. Semester-Rent toggles.
   - Detailed modal view with course syllabus requirements and escrow breakdown.

6. **Campus Wallet & Escrow Tracker (`/wallet`)**:
   - Live escrow deposit balance tracker ($35 held for active loans).
   - Available payout earnings ($140 earned by lending gear to juniors).
   - Active reservations lifecycle: `Reserved` -> `Confirm Campus Handover` -> `In Use` -> `Return & Refund Escrow Deposit`.

7. **Student Login View (`/login`)**:
   - Dedicated authentication and onboarding screen.
   - `.edu` campus email login with college campus and semester selector.
   - Mode preference selection: *Borrow & Rent Gear* vs. *List & Hand Down Idle Gear*.
   - 1-click test student demo logins (Alex Rivera - Senior Mech, Maya Patel - Junior Mech).

8. **List Gear Modal**:
   - Quick listing modal for seniors to post idle tools with presets, condition grades, and campus drop points.

---

## 🚀 Running the Web Application

The application is served by a lightweight Node.js server with REST APIs, Server-Sent Events (SSE), and full client-side SPA route support.

```powershell
cd C:\Users\ENZO\.gemini\antigravity\scratch\hand-it-down
node server.js
```

Open your browser at:
👉 **`http://localhost:3000`**
