'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="h-10 w-10 rounded-lg border border-[var(--border)]" aria-hidden />;
  }

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border)] bg-[color:var(--bg-card)] text-[color:var(--text-primary)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] hover:shadow-amber-sm"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
