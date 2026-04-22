import { NextResponse } from 'next/server';
import { createCohortOrder } from '@/lib/razorpay/server';

export async function POST(request: Request) {
  try {
    const { applicationId } = await request.json();
    if (!applicationId) {
      return NextResponse.json({ error: 'applicationId is required.' }, { status: 400 });
    }

    const order = await createCohortOrder(applicationId);
    return NextResponse.json(order);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to create Razorpay order.' }, { status: 500 });
  }
}
