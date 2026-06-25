import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

const monoStyle = { fontFamily: "'JetBrains Mono', monospace" };

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--surface)] text-[var(--text)]">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-8">
        <div className="text-[14px] font-bold">{profile.name}</div>

        <div className="flex gap-6 text-[13px] text-[var(--muted)]">
          <Link className="hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm" to="/about">
            About
          </Link>
          <Link className="hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm" to="/projects">
            Portfolio
          </Link>
          <Link className="hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm" to="/contact">
            Contact
          </Link>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:rounded-sm"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-[11px] text-[var(--muted)]" style={monoStyle}>
          © {year} — Designed and built by Ujwal Magar.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
