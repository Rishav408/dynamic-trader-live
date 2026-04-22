import type { Metadata } from 'next';
import { Card, Section, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for Dynamic Trader Live.',
};

export default function TermsPage() {
  return (
    <Section className="pt-28">
      <SectionHeader title="Terms & Conditions" />
      <Card className="mx-auto max-w-4xl space-y-5 leading-8 text-[color:var(--text-secondary)]">
        <p>
          Enrollment is subject to application review, payment completion, and acceptance of the
          risk disclaimer. Dynamic Trader Live may decline applications where the cohort is not a
          good fit.
        </p>
        <p>
          Due to limited cohort size and digital access, refunds are not offered once access to live
          sessions, recordings, materials, or community spaces has been granted.
        </p>
        <p>
          The DMC framework, course recordings, PDFs, templates, live class materials, and community
          content are intellectual property of Dynamic Trader Live and may not be copied,
          redistributed, resold, or publicly shared.
        </p>
        <p>
          Community members must behave respectfully. Spam, harassment, signal selling, misleading
          claims, unauthorized promotions, or abusive conduct may result in removal without refund.
        </p>
        <p>
          Dynamic Trader Live is not liable for trading losses, prop firm fees, denied payouts,
          account breaches, platform outages, or decisions made using educational material.
        </p>
      </Card>
    </Section>
  );
}
