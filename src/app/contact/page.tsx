import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/MarketingSections';
import { Card, Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Dynamic Trader Live for cohort questions, partnerships, and support.',
};

export default function ContactPage() {
  return (
    <Section className="pt-28">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h1 className="font-display text-5xl font-extrabold md:text-7xl">Contact</h1>
          <p className="mt-5 text-lg leading-8 text-[color:var(--text-secondary)]">
            Ask about the cohort, discovery calls, payments, or resources. The team will reply by
            email or WhatsApp.
          </p>
          <Card className="mt-8">
            <p className="text-[color:var(--text-secondary)]">Email: contact@dynamictraderlive.com</p>
            <p className="mt-2 text-[color:var(--text-secondary)]">Location: India</p>
          </Card>
        </div>
        <Card>
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}
