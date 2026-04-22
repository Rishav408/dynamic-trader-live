import crypto from 'crypto';
import Razorpay from 'razorpay';

export function getRazorpayClient() {
  const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_id || !key_secret) {
    throw new Error('Razorpay keys are not configured.');
  }

  return new Razorpay({ key_id, key_secret });
}

export async function createCohortOrder(applicationId: string) {
  const razorpay = getRazorpayClient();

  return razorpay.orders.create({
    amount: 2500000,
    currency: 'INR',
    receipt: `dtl-${applicationId}`.slice(0, 40),
    notes: {
      applicationId,
      cohort: 'cohort-4',
      product: 'Dynamic Trader Live DMC Cohort',
    },
  });
}

export function verifyRazorpaySignature({
  orderId,
  paymentId,
  signature,
}: {
  orderId: string;
  paymentId: string;
  signature: string;
}) {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) throw new Error('RAZORPAY_KEY_SECRET is not configured.');

  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}
