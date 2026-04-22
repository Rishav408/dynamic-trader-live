'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export function Accordion({
  items,
}: {
  items: Array<{ title: string; eyebrow?: string; content: ReactNode }>;
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={item.title} className="overflow-hidden rounded-[10px] border border-[var(--border)] transition hover:border-[rgba(245,200,66,0.25)]">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 bg-[color:var(--bg-card)] px-6 py-5 text-left"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            <span>
              {item.eyebrow ? (
                <span className="mb-1 block font-mono text-xs uppercase tracking-[0.12em] text-[color:var(--accent)]">
                  {item.eyebrow}
                </span>
              ) : null}
              <span className="font-serif text-xl font-bold text-[color:var(--text-primary)]">
                {item.title}
              </span>
            </span>
            <ChevronDown
              className={cn('shrink-0 text-[color:var(--accent)] transition-transform', open === index && 'rotate-180')}
              size={20}
            />
          </button>
          <div
            className={cn(
              'grid transition-all duration-300',
              open === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
          >
            <div className="overflow-hidden">
              <div className="border-t border-[var(--border)] bg-[color:var(--bg-base)] p-6 text-[color:var(--text-secondary)]">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
