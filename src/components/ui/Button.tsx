import type { ReactNode } from 'react';
import Link from 'next/link';
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
  primary: 'btn btn-primary',
  secondary:
    'btn btn-secondary',
  ghost: 'btn btn-ghost',
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
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
