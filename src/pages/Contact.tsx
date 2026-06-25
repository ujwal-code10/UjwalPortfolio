import React, { useState } from 'react';
import PageWrapper from '../components/ui/PageWrapper';
import { useToast } from '../components/ui/ToastProvider';
import { profile } from '../data/profile';

const monoStyle = { fontFamily: "'JetBrains Mono', monospace" };

const focusClasses =
  'focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--surface-elevated)]';

const Contact = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      addToast({
        title: 'Validation Error',
        description: 'Please fix the errors below and try again.',
        variant: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xblyknaw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        addToast({
          title: 'Message sent',
          description: "Thanks for reaching out. I'll get back to you within 24 hours.",
          variant: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      addToast({
        title: 'Error sending message',
        description: 'Something went wrong. Please try again or email me directly.',
        variant: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper
      title="Contact"
      description="Get in touch with Ujwal Magar. Open to freelance work, startup projects, and full-time roles. Replies within 24 hours."
    >
      <main className="mx-auto w-full max-w-[1120px] px-4 md:px-8">
        <section className="grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:gap-20">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--text)] md:text-[52px]">
              Get in touch.
            </h1>

            <div
              className="rounded-sm border border-[var(--accent-border)] bg-[var(--accent-soft)] px-4 py-3 text-[13px] leading-6 text-[var(--text)]"
              style={monoStyle}
            >
              <span className="font-semibold text-[var(--accent)]">Available now</span> — freelance
              projects, startup work, and full-time roles.
            </div>

            <p className="text-[16px] leading-7 text-[var(--muted)]">
              Tell me what you&apos;re building. If it&apos;s something I can help with,
              I&apos;ll say so directly.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="w-fit text-[12px] font-medium text-[var(--text)] transition hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm"
                style={monoStyle}
              >
                {profile.email}
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-[12px] font-medium text-[var(--text)] transition hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm"
                style={monoStyle}
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-[12px] font-medium text-[var(--text)] transition hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm"
                style={monoStyle}
              >
                GitHub ↗
              </a>
              <p className="mt-1 text-[11px] text-[var(--muted)]" style={monoStyle}>
                I reply within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] p-6 md:p-8">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>

              <div className="flex flex-col gap-2">
                <label
                  className="text-[11px] uppercase tracking-wider text-[var(--muted)]"
                  htmlFor="name"
                  style={monoStyle}
                >
                  Your name
                </label>
                <input
                  className={`w-full border-0 border-b border-[var(--border-strong)] bg-transparent px-0 py-2 text-[var(--text)] placeholder:text-[var(--muted)]/50 transition-colors ${focusClasses}`}
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-[11px] uppercase tracking-wider text-[var(--muted)]"
                  htmlFor="email"
                  style={monoStyle}
                >
                  Email
                </label>
                <input
                  className={`w-full border-0 border-b border-[var(--border-strong)] bg-transparent px-0 py-2 text-[var(--text)] placeholder:text-[var(--muted)]/50 transition-colors ${focusClasses}`}
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-[11px] uppercase tracking-wider text-[var(--muted)]"
                  htmlFor="message"
                  style={monoStyle}
                >
                  What are you building?
                </label>
                <textarea
                  className={`w-full resize-none border-0 border-b border-[var(--border-strong)] bg-transparent px-0 py-2 text-[var(--text)] placeholder:text-[var(--muted)]/50 transition-colors ${focusClasses}`}
                  id="message"
                  name="message"
                  placeholder="Describe the product, stage, and what kind of help you need."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-600" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                className="mt-2 w-fit rounded-lg bg-[var(--button-bg)] px-6 py-3 text-[12px] font-medium text-[var(--button-text)] transition hover:bg-[var(--button-hover)] disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                type="submit"
                disabled={isSubmitting}
                style={monoStyle}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>

            </form>
          </div>

        </section>
      </main>
    </PageWrapper>
  );
};

export default Contact;
