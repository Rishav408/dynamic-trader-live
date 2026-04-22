import type { Metadata } from 'next';
import { ArticleLayout } from '../shared';

export const metadata: Metadata = {
  title: 'How Prop Firms Work in 2025',
  description: 'A practical guide for Indian traders exploring prop firm evaluations.',
};

export default function PropFirmsArticle() {
  return (
    <ArticleLayout
      title="How Prop Firms Work in 2025 - Everything Indian Traders Need to Know"
      readTime="12 min"
      body={[
        'Prop firms let traders access larger simulated or funded accounts after passing an evaluation. The opportunity is attractive, but the rules matter more than the account size.',
        'Most challenges include daily loss limits, maximum drawdown, minimum trading days, news restrictions, consistency rules, and strict payout conditions. Ignoring these rules can fail an account even when the strategy is profitable.',
        'Dynamic Trader Live prepares students to adjust risk, reduce overtrading, journal execution, and treat the evaluation as a rules-based business process. Funding is never guaranteed, and challenge fees are real risk capital.',
      ]}
    />
  );
}
