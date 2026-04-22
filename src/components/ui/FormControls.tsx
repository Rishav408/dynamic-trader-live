import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

const field =
  'w-full rounded-lg border border-[var(--border)] bg-[color:var(--bg-card)]/70 px-4 py-3 text-[color:var(--text-primary)] outline-none transition focus:border-[color:var(--accent-blue)] focus:shadow-glow-blue';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(field, props.className)} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(field, props.className)} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(field, props.className)} />;
}

export function Checkbox({
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="flex gap-3 text-sm leading-6 text-[color:var(--text-secondary)]">
      <input
        {...props}
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-[var(--border)] accent-[color:var(--accent-green)]"
      />
      <span>{label}</span>
    </label>
  );
}
