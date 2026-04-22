import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  primary:
    'bg-brand-gradient text-slate-950 shadow-glow-green hover:shadow-[0_0_34px_rgba(0,255,148,0.42)]',
  secondary:
    'border border-[var(--border)] bg-[color:var(--bg-card)]/55 text-[color:var(--text-primary)] hover:border-[color:var(--accent-blue)] hover:shadow-glow-blue',
  ghost: 'text-[color:var(--text-primary)] hover:bg-[color:var(--bg-card)]',
  danger: 'bg-red-500 text-white hover:bg-red-400',
};

export function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className,
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        {variant === 'primary' ? <ArrowRight size={16} aria-hidden /> : null}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      <span>{children}</span>
      {variant === 'primary' ? <ArrowRight size={16} aria-hidden /> : null}
    </button>
  );
}
