import type { Metadata } from 'next';
import { FinalCTASection, RoadmapTimeline } from '@/components/sections/MarketingSections';
import { Section, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Learning Roadmap',
  description:
    'Explore the Dynamic Trader Live 6-week DMC roadmap from market foundation to funded trader pathway.',
};

export default function RoadmapPage() {
  return (
    <>
      <Section className="market-hero pt-28">
        <h1 className="max-w-4xl font-display text-5xl font-extrabold md:text-7xl">
          Your Trading Transformation - Stage by Stage
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
          Five deliberate stages that take you from retail uncertainty to structured execution and
          funded-account readiness.
        </p>
      </Section>
      <Section>
        <SectionHeader title="The DMC Roadmap" />
        <RoadmapTimeline />
      </Section>
      <FinalCTASection />
    </>
  );
}
