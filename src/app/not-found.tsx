import { Button, Section } from '@/components/ui';

export default function NotFound() {
  return (
    <Section className="pt-28 text-center">
      <h1 className="font-display text-6xl font-extrabold">404</h1>
      <p className="mx-auto mt-4 max-w-xl text-[color:var(--text-secondary)]">
        This page is not available. The main program pages are still ready to guide you.
      </p>
      <Button href="/" className="mt-8">
        Back Home
      </Button>
    </Section>
  );
}
