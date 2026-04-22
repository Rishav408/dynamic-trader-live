import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[color:var(--accent-blue)]/35 bg-[color:var(--accent-blue)]/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--accent-blue)]',
        className,
      )}
    >
      {children}
    </span>
  );
}
