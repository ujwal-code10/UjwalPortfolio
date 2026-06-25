import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-soft)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-[20px] font-semibold tracking-[-0.02em] text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm"
        >
          {profile.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`text-[13px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm ${
                  isActive
                    ? 'border-b border-[var(--text)]/50 pb-1 text-[var(--text)]'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right controls */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-[var(--border-strong)] px-4 py-2 text-[12px] font-medium text-[var(--text)] transition hover:bg-[var(--surface-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile right controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-sm border border-[var(--border-strong)] bg-[var(--surface)] p-2 text-[var(--text)] transition hover:bg-[var(--surface-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-label="Mobile navigation"
          className="border-t border-[var(--border)] bg-[var(--bg-soft)] px-4 pb-4 pt-2 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation links">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-sm px-3 py-2.5 text-[14px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                    isActive
                      ? 'bg-[var(--surface-elevated)] text-[var(--text)]'
                      : 'text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="rounded-sm px-3 py-2.5 text-[14px] font-medium text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
