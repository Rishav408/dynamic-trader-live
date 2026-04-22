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
        'card',
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
        'card-glow',
        className,
      )}
    >
      {children}
    </Card>
  );
}
