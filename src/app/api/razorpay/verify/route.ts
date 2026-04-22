import { NextResponse } from 'next/server';
import { savePayment } from '@/lib/firebase/firestore';
import { verifyRazorpaySignature } from '@/lib/razorpay/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const orderId = body.razorpay_order_id;
    const paymentId = body.razorpay_payment_id;
    const signature = body.razorpay_signature;

    if (!orderId || !paymentId || !signature) {
      return NextResponse.json({ error: 'Missing Razorpay verification fields.' }, { status: 400 });
    }

    const valid = verifyRazorpaySignature({ orderId, paymentId, signature });
    if (!valid) {
      return NextResponse.json({ error: 'Invalid Razorpay signature.' }, { status: 400 });
    }

    try {
      await savePayment({
        applicationId: body.applicationId,
        razorpayOrderId: orderId,
        razorpayPaymentId: paymentId,
        razorpaySignature: signature,
        amount: 2500000,
      });
    } catch (error) {
      if (process.env.NODE_ENV === 'production') throw error;
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to verify payment.' }, { status: 500 });
  }
}
