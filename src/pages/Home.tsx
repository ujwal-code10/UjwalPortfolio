import { Link } from 'react-router-dom';
import PageWrapper from '../components/ui/PageWrapper';
import { profile } from '../data/profile';

const monoStyle = { fontFamily: "'JetBrains Mono', monospace" };

const workItems = [
  { title: 'Grounded AI', detail: 'AI that reads from a database before it replies.' },
  { title: 'Booking systems', detail: 'State machines, not just a bookings table.' },
  { title: 'Payment flows', detail: 'Authorize, hold, capture, release.' },
  { title: 'Role-scoped APIs', detail: 'Different users, different data, enforced server-side.' },
  { title: 'Background jobs', detail: 'Notifications, cleanup, and scheduling that runs async.' },
  { title: 'Flutter apps', detail: 'Mobile frontends connected to a real backend.' },
];

const Home = () => {
  return (
    <PageWrapper
      title="Home"
      description="Ujwal Magar built Seller Inbox AI, a live AI reply tool for Nepali Instagram sellers, and is building Velora, a Flutter tutor marketplace with Stripe payment holds and booking state machines."
    >
      <main className="mx-auto w-full max-w-[1120px] px-4 md:px-8">

        {/* Hero */}
        <section className="border-b border-[var(--border)] pb-24 pt-20 md:pb-28">
          <div className="max-w-3xl space-y-6">
            <p
              className="text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]"
              style={monoStyle}
            >
              {profile.name} — {profile.role}
            </p>

            <h1 className="text-[40px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--text)] md:text-[60px]">
              I shipped an AI reply tool for Nepali sellers.{' '}
              <span className="text-[var(--muted)]">Velora is next.</span>
            </h1>

            <p className="max-w-2xl text-[17px] leading-7 text-[var(--muted)] md:text-[18px]">
              {profile.summary}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/projects"
                className="rounded-lg bg-[var(--button-bg)] px-6 py-3 text-[12px] font-medium text-[var(--button-text)] transition hover:bg-[var(--button-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                style={monoStyle}
              >
                See the Projects
              </Link>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-6 py-3 text-[12px] font-medium text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                style={monoStyle}
              >
                GitHub
              </a>
            </div>

            {/* Status badges */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <div
                className="flex items-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1.5 text-[11px] text-[var(--muted)] shadow-sm"
                style={monoStyle}
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>
                Seller Inbox AI — Live
              </div>
              <div
                className="flex items-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1.5 text-[11px] text-[var(--muted)] shadow-sm"
                style={monoStyle}
              >
                Velora — In Development
              </div>
            </div>
          </div>
        </section>

        {/* What I work on */}
        <section className="py-16">
          <h2 className="mb-2 text-[22px] font-bold tracking-[-0.02em] text-[var(--text)]">
            What I work on
          </h2>
          <p className="mb-8 text-[15px] text-[var(--muted)]">
            Systems that need to be correct, not just functional.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workItems.map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3"
              >
                <p className="text-[13px] font-semibold text-[var(--text)]" style={monoStyle}>
                  {item.title}
                </p>
                <p className="mt-1 text-[12px] leading-5 text-[var(--muted)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </PageWrapper>
  );
};

export default Home;
