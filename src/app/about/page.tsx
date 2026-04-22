import type { Metadata } from 'next';
import { Award, BookOpen, ShieldCheck } from 'lucide-react';
import { Card, Section, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About',
  description: 'Founder credibility and philosophy behind Dynamic Trader Live.',
};

export default function AboutPage() {
  return (
    <>
      <Section className="market-hero pt-28">
        <h1 className="max-w-4xl font-display text-5xl font-extrabold md:text-7xl">
          Built for Serious Traders. Designed Around Trust.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
          Dynamic Trader Live exists to replace fragmented trading content with a structured,
          mentorship-led institutional framework.
        </p>
      </Section>
      <Section>
        <SectionHeader title="Our Teaching Philosophy" />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [ShieldCheck, 'Risk Before Reward', 'Every setup begins with capital protection and defined invalidation.'],
            [BookOpen, 'Framework Over Signals', 'Students learn a repeatable system instead of depending on tips.'],
            [Award, 'Small Cohort Quality', 'Ten seats per cohort keeps mentoring personal, direct, and accountable.'],
          ].map(([Icon, title, body]) => (
            <Card key={String(title)}>
              <Icon className="text-[color:var(--accent)]" />
              <h2 className="mt-4 font-display text-2xl font-bold">{String(title)}</h2>
              <p className="mt-3 text-[color:var(--text-secondary)]">{String(body)}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
