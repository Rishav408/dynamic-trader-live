import { NextResponse } from 'next/server';
import { saveContactMessage } from '@/lib/firebase/firestore';
import { sendEmail } from '@/lib/email/sendEmail';
import { contactSchema } from '@/lib/utils/validators';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input.' }, { status: 400 });
    }

    try {
      await saveContactMessage(parsed.data);
    } catch (error) {
      if (process.env.NODE_ENV === 'production') throw error;
    }

    await sendEmail({
      subject: `Dynamic Trader Live contact - ${parsed.data.name}`,
      replyTo: parsed.data.email,
      html: `<p>${parsed.data.message}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to send message.' }, { status: 500 });
  }
}
