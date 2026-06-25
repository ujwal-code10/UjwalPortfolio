import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const monoStyle = { fontFamily: "'JetBrains Mono', monospace" };

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[12px] font-medium text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
      style={monoStyle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
};

export default ThemeToggle;
