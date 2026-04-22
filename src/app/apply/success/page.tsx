import { CheckCircle2 } from 'lucide-react';
import { Button, GlowCard, Section } from '@/components/ui';
import { site } from '@/constants/site';

export default function ApplySuccessPage() {
  return (
    <Section className="pt-28">
      <GlowCard className="mx-auto max-w-3xl text-center">
        <CheckCircle2 className="mx-auto text-[color:var(--accent)]" size={56} />
        <h1 className="mt-5 font-display text-5xl font-extrabold">Application Received!</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-[color:var(--text-secondary)]">
          We'll review your application and contact you within 48 hours via WhatsApp/Email to
          schedule your free 30-minute discovery call.
        </p>
        <Button href={site.telegramUrl} className="mt-8">
          Join Telegram
        </Button>
      </GlowCard>
    </Section>
  );
}
