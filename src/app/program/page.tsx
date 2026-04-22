import type { Metadata } from 'next';
import { ProgramSections } from '@/components/sections/MarketingSections';
import { site } from '@/constants/site';

export const metadata: Metadata = {
  title: 'DMC Trading Program - Cohort 4',
  description:
    'Full 5-6 week live cohort covering the DMC Framework, institutional order flow, risk management, and funded trader preparation. Rs 25,000 one-time. 10 seats.',
};

export default function ProgramPage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'The Complete DMC Trading Program',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: site.name,
      sameAs: site.url,
    },
    offers: {
      '@type': 'Offer',
      price: '25000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <ProgramSections />
    </>
  );
}
