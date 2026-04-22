import type { Metadata } from 'next';
import { ApplyPageSections } from '@/components/sections/MarketingSections';

export const metadata: Metadata = {
  title: 'Apply for Cohort 4',
  description:
    'Apply for the Dynamic Trader Live DMC Cohort 4. Limited to 10 traders per cohort.',
};

export default function ApplyPage() {
  return <ApplyPageSections />;
}
