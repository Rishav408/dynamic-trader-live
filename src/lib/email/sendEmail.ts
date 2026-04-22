import { Resend } from 'resend';

export async function sendEmail({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO ?? 'contact@dynamictraderlive.com';

  if (!apiKey) {
    return { skipped: true, reason: 'RESEND_API_KEY is not configured.' };
  }

  const resend = new Resend(apiKey);
  return resend.emails.send({
    from: 'Dynamic Trader Live <onboarding@resend.dev>',
    to,
    replyTo,
    subject,
    html,
  });
}
