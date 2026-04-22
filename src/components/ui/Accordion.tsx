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
        <div key={item.title} className="overflow-hidden rounded-lg border border-[var(--border)]">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 bg-[color:var(--bg-card)]/60 px-5 py-4 text-left"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            <span>
              {item.eyebrow ? (
                <span className="mb-1 block font-mono text-xs text-[color:var(--accent-green)]">
                  {item.eyebrow}
                </span>
              ) : null}
              <span className="font-display text-xl font-bold text-[color:var(--text-primary)]">
                {item.title}
              </span>
            </span>
            <ChevronDown
              className={cn('shrink-0 transition-transform', open === index && 'rotate-180')}
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
              <div className="border-t border-[var(--border)] p-5 text-[color:var(--text-secondary)]">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
