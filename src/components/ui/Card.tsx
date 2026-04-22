import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'glass-card rounded-lg border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent-blue)]/50',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        'relative overflow-hidden shadow-glow-blue before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-brand-gradient',
        className,
      )}
    >
      {children}
    </Card>
  );
}
