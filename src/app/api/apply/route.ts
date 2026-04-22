import { NextResponse } from 'next/server';
import { saveApplication } from '@/lib/firebase/firestore';
import { sendEmail } from '@/lib/email/sendEmail';
import { applicationSchema } from '@/lib/utils/validators';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = applicationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input.' }, { status: 400 });
    }

    let applicationId = 'local-preview';
    try {
      const doc = await saveApplication(parsed.data);
      applicationId = doc.id;
    } catch (error) {
      if (process.env.NODE_ENV === 'production') throw error;
    }

    await sendEmail({
      subject: `New DTL Cohort 4 application - ${parsed.data.fullName}`,
      replyTo: parsed.data.email,
      html: `
        <h1>New application</h1>
        <p><strong>Name:</strong> ${parsed.data.fullName}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        <p><strong>Phone:</strong> ${parsed.data.phone}</p>
        <p><strong>Goal:</strong> ${parsed.data.primaryGoal}</p>
        <p><strong>Message:</strong> ${parsed.data.message}</p>
      `,
    });

    return NextResponse.json({ ok: true, applicationId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to submit application.' }, { status: 500 });
  }
}
