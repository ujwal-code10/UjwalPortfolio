# Ujwal Magar — Developer Portfolio

This is my personal portfolio website showcasing my full-stack, mobile, and AI-related projects. It highlights systems where backend behavior, API contracts, and correct data flows matter just as much as the UI.

## Portfolio Tech Stack
This portfolio site itself is built using:
- **React** (v18)
- **TypeScript**
- **Tailwind CSS** (with Radix UI components)
- **Vite**
- **React Router DOM**
- **Framer Motion**

---

## Featured Projects

### 1. Seller Inbox AI
A live AI reply tool for Nepali Instagram and WhatsApp sellers that generates replies grounded in actual product context instead of generic AI guesses.

- **Problem solved:** Sellers handle dozens of messages daily. Generic AI often gives incorrect prices or lists out-of-stock items. This system fetches the seller's actual catalog, variants, and delivery zones from a database before generating any reply.
- **Key features:** Grounded AI replies, full product catalog management, delivery zone configuration, account-level API usage limits, and a deliberate manual QR payment tradeoff for the MVP.
- **Tech stack:** React, TypeScript, Node.js, Express, PostgreSQL, Groq AI, Vercel
- **Status:** Web MVP Live
- **Live link:** [https://sellers-inbox-ai.vercel.app/](https://sellers-inbox-ai.vercel.app/)
- **GitHub:** [https://github.com/ujwalmagar/sellers-inbox-AI](https://github.com/ujwalmagar/sellers-inbox-AI)

### 2. Velora
- **Goal:** Built as a full-stack learning project to understand production-style systems.
- **Problem solved:** Many IELTS and PTE students need daily practice with immediate feedback, which is hard to get. Velora solves this with an AI-guided practice loop for speaking/writing, while still maintaining an optional verified mentor marketplace with a robust booking state machine and pilot manual payments.
- **Key features by role:**
  - **Student:** Practice speaking and writing with AI, view feedback summaries, complete daily missions, optionally discover verified tutors, book time slots, and upload manual payment proofs.
  - **Tutor:** Manage availability slots, handle booking requests, and track earnings/payouts.
  - **Admin:** Verify tutors, verify payment proofs manually, handle session disputes, and moderate reviews.
- **Engineering highlights:**
  - **Booking state machine:** Server-enforced transitions (PENDING → CONFIRMED → IN_PROGRESS → COMPLETED → CANCELLED) with slot locking.
  - **Payment flow:** Manual payment verification and ledger tracking.
  - **Three-party access control:** Students, tutors, and admins only reach their own routes at the Express middleware layer.
  - **Admin panel security:** React admin dashboard protected by cookie-based session auth and CSRF protection.
  - **Background jobs:** Redis and BullMQ for booking expiry, session reminders, capture scheduling, and payout queues.
  - **Data modeling:** Prisma and PostgreSQL schema handling polymorphic users, bookings, payments, and audit logs.
- **Tech stack:** Node.js, Express, TypeScript, Prisma, PostgreSQL, Redis, BullMQ, Stripe, Cloudinary, Flutter, Dart, GoRouter, React, Tailwind
- **Status:** Active Development / Portfolio Project. (Backend API and admin panel implemented. Mobile client and integrations in progress. No real users or revenue).

---

## What this portfolio demonstrates
- **Full-stack project architecture:** Designing three-party systems across different frontends (web and mobile).
- **Backend API design:** Role-scoped Express middleware, RESTful patterns, and background job processing.
- **Database design:** Relational modeling using Prisma and PostgreSQL.
- **Admin dashboard development:** Secure React applications with proper cookie authentication.
- **Practical product thinking:** Focusing on specific domains (Nepali sellers, IELTS/PTE market) and solving actual infrastructure problems (state machines, manual capture payments) rather than just building UI clones.
- **Honest project documentation:** Clearly separating live features from planned features without overclaiming traction.

---

## Local Setup

To run this portfolio locally:

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

---

## Links
- **Portfolio Live URL:** *[Add URL if deployed]*
- **GitHub Profile:** [https://github.com/ujwalmagar](https://github.com/ujwalmagar)
- **LinkedIn:** [https://www.linkedin.com/in/ujwalmagar/](https://www.linkedin.com/in/ujwalmagar/)
- **Email:** magarujwal16@gmail.com

---
*Note: Some projects listed here (like Velora) are portfolio projects in active development. No fake metrics, production traffic, or inflated revenue numbers are claimed.*
