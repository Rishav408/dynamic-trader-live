import type { Metadata } from 'next';
import { FAQBlock } from '@/components/sections/MarketingSections';
import { faqs } from '@/constants/content';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about the Dynamic Trader Live DMC trading cohort.',
};

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQBlock />
    </>
  );
}
