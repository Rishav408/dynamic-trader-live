import type { Metadata } from 'next';
import { ResultsSections } from '@/components/sections/MarketingSections';
import { testimonials } from '@/constants/content';

export const metadata: Metadata = {
  title: 'Results & Reviews',
  description:
    "Real student outcomes and reviews from traders who've completed the Dynamic Trader Live DMC program.",
};

export default function ResultsPage() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Dynamic Trader Live DMC Cohort',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.2',
      reviewCount: testimonials.length,
    },
    review: testimonials.slice(0, 5).map((item) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: item.name },
      reviewBody: item.quote,
      reviewRating: { '@type': 'Rating', ratingValue: 5 },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <ResultsSections />
    </>
  );
}
