import { useState } from 'react';
import PageWrapper from '../components/ui/PageWrapper';
import { projects } from '../data/projects';

const monoStyle = { fontFamily: "'JetBrains Mono', monospace" };

/* ─── Browser Frame ─────────────────────────────────────────────────────── */
const BrowserFrame = ({
  src,
  alt,
  browserUrl,
}: {
  src?: string;
  alt?: string;
  browserUrl?: string;
}) => {
  const [failed, setFailed] = useState(false);
  const displayUrl = browserUrl ?? 'project.vercel.app';

  return (
    <div className="overflow-hidden rounded-lg border border-[var(--border-strong)] bg-[var(--browser-bg)] shadow-[var(--shadow-soft)]">
      {/* Chrome bar */}
      <div
        className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--browser-bar)] px-4 py-2.5"
        style={monoStyle}
      >
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--dot)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--dot)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--dot)]" />
        </div>
        <div className="mx-auto flex-1 max-w-xs rounded-sm bg-[var(--surface-strong)] px-3 py-0.5 text-center text-[10px] text-[var(--muted)]">
          {displayUrl}
        </div>
      </div>

      {/* Screenshot area */}
      <div className="relative">
        {src && !failed ? (
          <img
            src={src}
            alt={alt ?? 'Project screenshot'}
            className="w-full object-cover object-top"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex aspect-video items-center justify-center">
            <p className="text-[12px] text-[var(--muted)]" style={monoStyle}>
              screenshot missing
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Engineering Panel (Velora) ────────────────────────────────────────── */
const EngineeringPanel = () => {
  const states = [
    { label: 'PENDING', note: 'Student requests slot' },
    { label: 'CONFIRMED', note: 'Tutor accepts + Stripe hold created' },
    { label: 'IN_PROGRESS', note: 'Session underway' },
    { label: 'COMPLETED', note: 'Stripe capture + earnings recorded' },
    { label: 'CANCELLED', note: 'Hold released, no charge' },
  ];

  return (
    <div className="flex h-full flex-col gap-4 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] p-6">
      <div>
        <p
          className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"
          style={monoStyle}
        >
          Booking state machine
        </p>
        <p className="mt-1 text-[13px] text-[var(--muted)]">
          Server-enforced transitions. A booking cannot complete unless the Stripe capture succeeds.
        </p>
      </div>

      <div className="flex flex-col gap-1.5 mt-2">
        {states.map((s, i) => (
          <div key={s.label} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border text-[9px] font-bold ${
                  i === 3
                    ? 'border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent)]'
                    : 'border-[var(--border-strong)] bg-[var(--surface-strong)] text-[var(--muted)]'
                }`}
                style={monoStyle}
              >
                {i + 1}
              </div>
              {i < states.length - 1 && (
                <div className="mt-1 w-px flex-1 bg-[var(--border-strong)]" style={{ minHeight: '8px' }} />
              )}
            </div>
            <div className="pb-2">
              <p className="text-[11px] font-bold text-[var(--text)]" style={monoStyle}>
                {s.label}
              </p>
              <p className="text-[11px] text-[var(--muted)]">{s.note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-2 gap-3 border-t border-[var(--border)] pt-4">
        {[
          { label: 'Payment', value: 'Stripe manual capture' },
          { label: 'Jobs', value: 'BullMQ + Redis' },
          { label: 'Notifications', value: 'Background queue' },
          { label: 'Access', value: 'Role middleware' },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]" style={monoStyle}>
              {item.label}
            </p>
            <p className="text-[12px] font-medium text-[var(--text)]" style={monoStyle}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Proof Cards ───────────────────────────────────────────────────────── */
const ProofCards = ({ proof }: { proof: { title: string; detail: string }[] }) => (
  <div className="grid gap-3 sm:grid-cols-2">
    {proof.map((item) => (
      <div
        key={item.title}
        className="rounded-sm border border-[var(--border)] bg-[var(--surface)] p-4"
      >
        <p className="text-[12px] font-bold text-[var(--text)]" style={monoStyle}>
          {item.title}
        </p>
        <p className="mt-1 text-[12px] leading-5 text-[var(--muted)]">{item.detail}</p>
      </div>
    ))}
  </div>
);

/* ─── Seller Inbox AI Card (screenshot-first, full width) ───────────────── */
const SellerInboxCard = ({ project }: { project: (typeof projects)[number] }) => (
  <article>
    {/* Top: metadata row */}
    <div className="mb-6 flex flex-wrap items-center gap-4">
      <h3 className="text-[28px] font-bold tracking-[-0.02em] text-[var(--text)]">
        {project.title}
      </h3>
      <span
        className="rounded-sm border border-[var(--accent-border)] bg-[var(--accent-soft)] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--accent)]"
        style={monoStyle}
      >
        {project.status}
      </span>
    </div>

    {/* Screenshot — primary visual, full width */}
    <div className="mb-8">
      <BrowserFrame
        src={project.screenshotSrc}
        alt={project.screenshotAlt}
        browserUrl={project.browserUrl}
      />
    </div>

    {/* Below screenshot: two columns */}
    <div className="grid gap-8 md:grid-cols-2">
      {/* Left: description + proof */}
      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-1 text-[15px] font-semibold text-[var(--text)]">{project.tagline}</p>
          <p className="text-[14px] leading-7 text-[var(--muted)]">{project.description}</p>
        </div>
        <ProofCards proof={project.proof} />
      </div>

      {/* Right: stack + honest note + links */}
      <div className="flex flex-col gap-6">
        <div>
          <h4
            className="mb-2 text-[11px] uppercase tracking-wider text-[var(--muted)]"
            style={monoStyle}
          >
            Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-[11px] text-[var(--text)]"
                style={monoStyle}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-sm border-l-2 border-[var(--border-strong)] bg-[var(--surface-strong)] p-4 text-[13px] leading-6 text-[var(--muted)]">
          <span className="block font-medium not-italic text-[var(--text)]">Current scope:</span>
          {project.honestNote}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-[var(--text)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm"
                style={monoStyle}
              >
                View Live ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-[var(--muted)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm"
                style={monoStyle}
              >
                Source Code ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </article>
);

/* ─── Velora Card (engineering panel replaces fake screenshot) ──────────── */
const VeloraCard = ({ project }: { project: (typeof projects)[number] }) => (
  <article>
    {/* Top: metadata row */}
    <div className="mb-6 flex flex-wrap items-center gap-4">
      <h3 className="text-[28px] font-bold tracking-[-0.02em] text-[var(--text)]">
        {project.title}
      </h3>
      <span
        className="rounded-sm border border-[var(--border)] bg-[var(--surface-strong)] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--muted)]"
        style={monoStyle}
      >
        {project.status}
      </span>
    </div>

    {/* Two columns: engineering panel + content */}
    <div className="grid gap-8 md:grid-cols-2">
      {/* Left: engineering panel */}
      <EngineeringPanel />

      {/* Right: description + proof + stack */}
      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-1 text-[15px] font-semibold text-[var(--text)]">{project.tagline}</p>
          <p className="text-[14px] leading-7 text-[var(--muted)]">{project.description}</p>
        </div>

        <ProofCards proof={project.proof} />

        <div>
          <h4
            className="mb-2 text-[11px] uppercase tracking-wider text-[var(--muted)]"
            style={monoStyle}
          >
            Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-[11px] text-[var(--text)]"
                style={monoStyle}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-sm border-l-2 border-[var(--border-strong)] bg-[var(--surface-strong)] p-4 text-[13px] leading-6 text-[var(--muted)]">
          <span className="block font-medium not-italic text-[var(--text)]">Current scope:</span>
          {project.honestNote}
        </div>
      </div>
    </div>
  </article>
);

/* ─── Page ──────────────────────────────────────────────────────────────── */
const Projects = () => {
  const sellerInboxAI = projects.find((p) => p.slug === 'seller-inbox-ai')!;
  const velora = projects.find((p) => p.slug === 'velora')!;

  return (
    <PageWrapper
      title="Projects"
      description="Seller Inbox AI — live AI reply tool for Nepali sellers. Velora — tutor marketplace with booking state machine, Stripe payment holds, and BullMQ job queue."
    >
      <main className="mx-auto w-full max-w-[1120px] px-4 md:px-8">
        {/* Header */}
        <section className="border-b border-[var(--border)] pb-12 pt-16 md:pt-20">
          <h1 className="text-[32px] font-bold tracking-[-0.03em] text-[var(--text)] md:text-[40px]">
            Two products. One live.
          </h1>
          <p className="mt-3 max-w-2xl text-[16px] leading-7 text-[var(--muted)]">
            Honest status on both. No mockup screenshots, no invented metrics.
          </p>
        </section>

        {/* Projects */}
        <section className="py-16">
          <div className="space-y-24">
            {/* Seller Inbox AI */}
            <SellerInboxCard project={sellerInboxAI} />

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

            {/* Velora */}
            <VeloraCard project={velora} />
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default Projects;
