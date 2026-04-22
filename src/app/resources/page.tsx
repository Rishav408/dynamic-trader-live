import type { Metadata } from 'next';
import { ResourcesSections } from '@/components/sections/MarketingSections';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Free DMC trading resources, guides, journal templates, prop firm checklists, and articles for serious traders.',
};

export default function ResourcesPage() {
  return <ResourcesSections />;
}
