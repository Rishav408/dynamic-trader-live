import {
  CohortDetailsSection,
  DMCFrameworkSection,
  FinalCTASection,
  HeroSection,
  MetricsStripSection,
  ProblemSection,
  RoadmapPreviewSection,
  TestimonialsSection,
} from '@/components/sections/MarketingSections';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <DMCFrameworkSection />
      <RoadmapPreviewSection />
      <MetricsStripSection />
      <CohortDetailsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}
