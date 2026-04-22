import type { Metadata } from 'next';
import { Card, Section, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Risk Disclaimer',
  description: 'Mandatory trading risk disclaimer for Dynamic Trader Live.',
};

export default function RiskDisclaimerPage() {
  return (
    <Section className="pt-28">
      <SectionHeader
        title="Risk Disclaimer"
        subtitle="Please read this carefully before applying, paying, or using any Dynamic Trader Live educational material."
      />
      <Card className="mx-auto max-w-4xl space-y-5 leading-8 text-[color:var(--text-secondary)]">
        <p>
          Trading financial instruments including Forex, indices, commodities, equities, and
          cryptocurrencies involves substantial risk of capital loss and is not suitable for all
          investors.
        </p>
        <p>
          Dynamic Trader Live provides education only. Nothing on this website, in live sessions,
          community channels, downloads, or recorded materials should be interpreted as financial
          advice, investment advice, trade signals, portfolio recommendations, or a promise of
          profit.
        </p>
        <p>
          Past performance, student outcomes, backtests, screenshots, testimonials, or examples do
          not guarantee future results. Markets are uncertain and every trader is responsible for
          their own decisions and risk.
        </p>
        <p>
          Funded accounts via third-party prop firms are subject to those firms' own terms,
          conditions, fees, rules, payout policies, restrictions, and evaluation requirements.
          Funding is not guaranteed.
        </p>
        <p>
          Users should consult SEBI-registered advisors or other qualified professionals for
          personalized investment advice before making financial decisions.
        </p>
      </Card>
    </Section>
  );
}
