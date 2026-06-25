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
    tagline: 'A tutor marketplace where the booking, payment, and notification systems are the product.',
    description:
      'Tutors and students currently arrange sessions over WhatsApp. No booking confirmation, no payment protection, no record. Velora is building that infrastructure: slot availability, booking states, Stripe payment holds that only capture after a session completes, and a job queue for notifications and cleanup.',
    tech: ['Flutter', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'Redis', 'BullMQ'],
    proof: [
      {
        title: 'Booking State Machine',
        detail: 'Bookings move through PENDING, CONFIRMED, IN_PROGRESS, COMPLETED, and CANCELLED with server-enforced transitions.',
      },
      {
        title: 'Stripe Manual Capture',
        detail: 'Payment is authorized at booking and captured only when the session completes. Cancellations release the hold.',
      },
      {
        title: 'Background Jobs',
        detail: 'BullMQ and Redis handle reminders, capture scheduling, and cleanup of expired booking holds.',
      },
      {
        title: 'Role-Scoped APIs',
        detail: 'Every endpoint is gated by role middleware. Tutors, students, and admins only reach routes they own.',
      },
    ],
    honestNote:
      'Backend is running. Flutter integration, notification UI, and final polish are still in progress.',
  },
];
