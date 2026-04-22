'use client';

import { Button, Section } from '@/components/ui';

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <Section className="pt-28 text-center">
      <h1 className="font-display text-5xl font-extrabold">Something went wrong</h1>
      <p className="mx-auto mt-4 max-w-xl text-[color:var(--text-secondary)]">
        Please retry. If this continues, contact the Dynamic Trader Live team.
      </p>
      <Button onClick={reset} className="mt-8">
        Try Again
      </Button>
    </Section>
  );
}
