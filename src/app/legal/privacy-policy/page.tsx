import type { Metadata } from 'next';
import { Card, Section, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Dynamic Trader Live.',
};

export default function PrivacyPolicyPage() {
  return (
    <Section className="pt-28">
      <SectionHeader title="Privacy Policy" />
      <Card className="mx-auto max-w-4xl space-y-5 leading-8 text-[color:var(--text-secondary)]">
        <p>
          We collect information you submit through application and contact forms, including name,
          email, phone number, city, trading experience, goals, and messages.
        </p>
        <p>
          We use this data to review applications, schedule discovery calls, send WhatsApp or email
          communication, process Razorpay payments, provide cohort access, and support students.
        </p>
        <p>
          Third-party services may include Firebase for database and analytics, Razorpay for
          payments, Resend for email, Google services for forms or documents, and Telegram for
          community access.
        </p>
        <p>
          Data is retained for operational, legal, payment, and student support purposes. You may
          request deletion or correction by contacting contact@dynamictraderlive.com.
        </p>
        <p id="cookies">
          Cookies and analytics may be used to understand site performance and user journeys. You
          can control cookies in your browser settings.
        </p>
      </Card>
    </Section>
  );
}
