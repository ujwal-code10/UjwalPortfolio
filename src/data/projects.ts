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
    tagline: 'An IELTS/PTE session booking marketplace for Nepal — booking state machine, Stripe manual capture, and a React admin panel.',
    description:
      'Students preparing for IELTS and PTE in Nepal have no reliable way to book and pay for one-to-one practice sessions. Velora builds that infrastructure: verified tutor discovery, service-type selection (IELTS Speaking Mock, PTE Writing Review), slot booking, Stripe payment holds that capture only after session completion, tutor payout tracking, and a full admin panel for verification and oversight.',
    tech: [
      'Node.js',
      'Express',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'Stripe',
      'Cloudinary',
      'Flutter',
      'Dart',
      'GoRouter',
      'React',
      'Tailwind',
    ],
    proof: [
      {
        title: 'Booking State Machine',
        detail:
          'PENDING → CONFIRMED → IN_PROGRESS → COMPLETED → CANCELLED, with server-enforced transitions and slot locking to prevent double-booking.',
      },
      {
        title: 'Stripe Manual Capture',
        detail:
          'Payment is authorized at booking and captured only when the session reaches COMPLETED. Cancellations release the hold with no charge.',
      },
      {
        title: 'BullMQ Job Queue',
        detail:
          'Background jobs handle booking expiry, session reminders, post-session capture triggering, and payout queue processing.',
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
