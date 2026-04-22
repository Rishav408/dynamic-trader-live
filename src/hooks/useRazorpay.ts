'use client';

import { loadRazorpayScript } from '@/lib/razorpay/client';

export function useRazorpay() {
  async function openCheckout(applicationId: string) {
    const loaded = await loadRazorpayScript();
    if (!loaded || !window.Razorpay) throw new Error('Razorpay could not be loaded.');

    const orderResponse = await fetch('/api/razorpay/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ applicationId }),
    });
    const order = await orderResponse.json();

    const razorpay = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Dynamic Trader Live',
      description: 'DMC Trading Program - Cohort 4',
      order_id: order.id,
      handler: async (response: Record<string, string>) => {
        await fetch('/api/razorpay/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...response, applicationId }),
        });
      },
      theme: { color: '#00C2FF' },
    });

    razorpay.open();
  }

  return { openCheckout };
}
