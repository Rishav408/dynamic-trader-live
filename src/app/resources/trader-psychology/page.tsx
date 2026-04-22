import type { Metadata } from 'next';
import { ArticleLayout } from '../shared';

export const metadata: Metadata = {
  title: 'Why 90% of Traders Fail',
  description: 'The psychology behind losing money and how structured journaling helps.',
};

export default function TraderPsychologyArticle() {
  return (
    <ArticleLayout
      title="Why 90% of Traders Fail: The Psychology Behind Losing Money"
      readTime="6 min"
      body={[
        'Most traders do not fail because they lack indicators. They fail because they lack a process for uncertainty, risk, boredom, fear, greed, and revenge trading.',
        'A structured trading journal exposes the hidden patterns: skipped rules, oversized positions, emotional entries, early exits, and sessions where the trader should not have traded at all.',
        'The DMC approach makes psychology practical. Students build a pre-trade checklist, a post-trade review rhythm, and a weekly refinement ritual so trading behavior becomes measurable.',
      ]}
    />
  );
}
