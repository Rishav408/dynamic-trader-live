'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui';
import { navLinks } from '@/constants/site';
import { cn } from '@/lib/utils/cn';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-transparent transition-all duration-300',
        scrolled && 'border-[var(--border)] bg-[rgba(11,10,8,0.90)] py-0 shadow-2xl backdrop-blur-xl',
      )}
    >
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo/dtl-logo-mark.svg" alt="DTL" width={36} height={36} priority />
          <span className="font-display text-xl font-bold tracking-normal text-[color:var(--text-primary)]">
            Dynamic Trader <span className="text-[color:var(--accent)]">Live</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="group relative">
              <Link
                href={link.href}
                className={cn(
                  'flex items-center gap-1 text-sm font-semibold text-[color:var(--text-secondary)] transition hover:text-[color:var(--text-primary)]',
                  pathname === link.href && 'text-[color:var(--text-primary)] after:mt-1 after:block after:h-0.5 after:rounded after:bg-brand-gradient',
                )}
              >
                {link.label}
                {link.items ? <ChevronDown size={14} /> : null}
              </Link>
              {link.items ? (
                <div className="invisible absolute left-0 top-8 w-64 translate-y-2 rounded-lg border border-[var(--border)] bg-[color:var(--bg-surface)] p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {link.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-md px-4 py-3 text-sm text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-card)] hover:text-[color:var(--text-primary)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link href="/apply" className="text-sm font-semibold text-[color:var(--text-secondary)]">
            Login
          </Link>
          <Button href="/apply" className="animate-pulse-cta">
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border)] lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>
      </nav>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-[color:var(--bg-base)] transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="container flex h-full flex-col py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo/dtl-logo-mark.svg" alt="DTL" width={36} height={36} priority />
              <span className="font-display text-xl font-bold">
                Dynamic Trader <span className="text-[color:var(--accent)]">Live</span>
              </span>
            </Link>
            <button
              type="button"
              aria-label="Close navigation"
              className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border)]"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          <div className="mt-8 flex items-center justify-between border-y border-[var(--border)] py-4">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
              Theme
            </span>
            <ThemeToggle />
          </div>
          <div className="mt-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.label} className="rounded-lg border border-[var(--border)]">
                <Link
                  href={link.href}
                  className="block px-4 py-4 font-display text-2xl font-bold text-[color:var(--text-primary)]"
                >
                  {link.label}
                </Link>
                {link.items ? (
                  <div className="border-t border-[var(--border)] px-4 py-2">
                    {link.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-sm text-[color:var(--text-secondary)]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <Button href="/apply" className="mt-auto w-full">
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
}
