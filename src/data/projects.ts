export type ProofItem = {
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  status: string;
  statusTone: 'live' | 'active';
  tagline: string;
  description: string;
  tech: string[];
  proof: ProofItem[];
  honestNote: string;
  liveUrl?: string;
  githubUrl?: string;
  screenshotSrc?: string;
  screenshotAlt?: string;
  browserUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'seller-inbox-ai',
    title: 'Seller Inbox AI',
    status: 'Web MVP Live',
    statusTone: 'live',
    tagline: 'AI replies for Instagram sellers in Nepal, grounded in their actual product catalog.',
    description:
      'Instagram sellers in Nepal handle dozens of customer messages a day. Generic AI tools gave wrong prices and unavailable products. Seller Inbox AI pulls the seller\'s catalog, variants, and delivery zones from the database before generating any reply — so the AI knows what\'s actually in stock.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Groq AI', 'Vercel'],
    proof: [
      {
        title: 'Grounded AI Replies',
        detail: 'Product catalog, variants, and delivery zones are fetched from the database and injected into the prompt before generation.',
      },
      {
        title: 'Full Product System',
        detail: 'Sellers manage products, variants, and delivery zones. Admins manage accounts and subscriptions.',
      },
      {
        title: 'Usage Limits',
        detail: 'Reply generation is gated per account at the API level, not just the UI.',
      },
      {
        title: 'Deliberate Payment Tradeoff',
        detail: 'Subscriptions use a manual QR flow. Full payment infrastructure comes after validating that sellers will actually pay.',
      },
    ],
    honestNote:
      'No WhatsApp or Instagram API integration in the current MVP. Auto-send, eSewa, Khalti, and Flutter are not part of this version.',
    liveUrl: 'https://sellers-inbox-ai.vercel.app/',
    githubUrl: 'https://github.com/ujwal-code10/sellers-inbox-AI',
    screenshotSrc: '/projects/seller-inbox-reply.png',
    screenshotAlt: 'Seller Inbox AI — reply generation screen',
    browserUrl: 'sellers-inbox-ai.vercel.app',
  },
  {
    slug: 'velora',
    title: 'Velora',
    status: 'Active Development',
    statusTone: 'active',
    tagline: 'AI IELTS/PTE Practice & Mentor Booking Platform',
    description:
      'Many IELTS and PTE students need regular speaking/writing practice and feedback, but one-to-one correction is expensive or hard to access. Velora solves this by providing AI-guided daily practice, structured feedback, and progress insights, while keeping a verified mentor marketplace optional for deeper human support.\n\nAs a solo full-stack project, Velora implements a production-style architecture including an AI practice loop, photo-to-text writing extraction, verified tutor discovery, manual payment proof verification, and administrative oversight. The platform ensures reliable state management across bookings, AI rate limits, and secure backend workflows.',
    tech: [
      'Flutter',
      'Node.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Redis/BullMQ',
      'Gemini AI',
      'Cloudinary'
    ],
    proof: [
      {
        title: 'AI Practice Loop',
        detail:
          'Daily missions, speaking/writing prompts, Gemini integration for feedback, and photo-to-text extraction for written essays.',
      },
      {
        title: 'Booking State Machine',
        detail:
          'Server-enforced booking transitions, rate limits, slot locking, and robust administrative workflows.',
      },
      {
        title: 'Pilot-Ready Payments',
        detail:
          'Manual payment proof upload flow and admin verification to safely handle initial Nepal pilot tests without complex gateway setups.',
      },
      {
        title: 'Three-Party Access Control',
        detail:
          'Students, tutors, and admins each reach only their own routes — enforced at the middleware layer, not just the frontend. Admin routes use cookie auth + CSRF.',
      },
    ],
    honestNote:
      'Core booking, payment, and admin APIs are implemented and testable. Flutter Payment Sheet, email notifications, and production deployment are planned. No real users or revenue — this is a portfolio project demonstrating full-stack marketplace architecture.',
  },
];
