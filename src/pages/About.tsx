import PageWrapper from '../components/ui/PageWrapper';
import { profile, techGroups } from '../data/profile';

const monoStyle = { fontFamily: "'JetBrains Mono', monospace" };

const About = () => {
  return (
    <PageWrapper
      title="About"
      description="Ujwal Magar is a full-stack engineer based in Nepal building Seller Inbox AI and Velora. Focused on product systems where the backend behavior matters as much as the UI."
    >
      <main className="mx-auto w-full max-w-[1120px] px-4 md:px-8">

        {/* Hero */}
        <section className="border-b border-[var(--border)] py-16 md:py-20">
          <p
            className="text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]"
            style={monoStyle}
          >
            {profile.role} — {profile.location}
          </p>
          <h1 className="mt-5 max-w-3xl text-[40px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[var(--text)] md:text-[54px]">
            I care about what happens after the form submits.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-8 text-[var(--muted)]">
            API contracts, database rules, role permissions, payment flows, background jobs — the
            parts most tutorials skip over.
          </p>
        </section>

        {/* Why these products */}
        <section className="grid gap-10 border-b border-[var(--border)] py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2
              className="border-l-4 border-[var(--accent)] pl-4 text-[24px] font-bold tracking-[-0.03em] text-[var(--text)]"
            >
              Why these products
            </h2>
          </div>
          <div className="space-y-6 text-[17px] leading-8 text-[var(--muted)] md:col-span-8">
            <p>
              Seller Inbox AI came from watching how sellers in Nepal handle customer messages.
              They were copying product details by hand into chat, or using generic AI that gave
              wrong answers. The fix wasn&apos;t a better prompt — it was a system that fetches
              the seller&apos;s actual catalog before generating anything.
            </p>
            <p>
              Velora came from the opposite direction: the backend problem first. A tutor
              marketplace without a proper booking state machine is just a scheduling app. When
              money moves at booking and transfers at session completion, the state transitions
              have to be correct. That&apos;s what I&apos;m building.
            </p>
          </div>
        </section>

        {/* What I find interesting */}
        <section className="grid gap-10 border-b border-[var(--border)] py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2
              className="border-l-4 border-[var(--accent)] pl-4 text-[24px] font-bold tracking-[-0.03em] text-[var(--text)]"
            >
              What I find interesting
            </h2>
          </div>
          <div className="space-y-4 md:col-span-8">
            {[
              {
                q: 'When should a payment be captured?',
                a: 'Not at checkout. At session completion. That requires coordinating the booking state with the payment intent lifecycle.',
              },
              {
                q: 'How do you prevent an AI from hallucinating product details?',
                a: 'You don\'t prompt-engineer your way out of it. You build a retrieval layer that gives the model real data.',
              },
              {
                q: 'Who can see what in a marketplace?',
                a: 'Role scoping at the middleware level, not the frontend. A student shouldn\'t reach a tutor\'s earnings endpoint regardless of UI.',
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] p-5"
              >
                <p className="text-[14px] font-semibold text-[var(--text)]">{item.q}</p>
                <p className="mt-2 text-[13px] leading-6 text-[var(--muted)]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical foundation */}
        <section className="py-16">
          <h2 className="mb-8 text-[24px] font-bold tracking-[-0.03em] text-[var(--text)]">
            Technical foundation
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
            {techGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h4
                  className="border-b border-[var(--border)] pb-2 text-[13px] font-bold text-[var(--text)]"
                  style={monoStyle}
                >
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[12px] text-[var(--muted)]"
                      style={monoStyle}
                    >
                      <span className="block h-1 w-1 bg-[var(--accent)]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>
    </PageWrapper>
  );
};

export default About;
