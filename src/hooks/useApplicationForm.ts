'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ApplicationInput } from '@/lib/utils/validators';

export function useApplicationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(data: ApplicationInput) {
    setIsSubmitting(true);
    setError(null);

    const response = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setIsSubmitting(false);

    if (!response.ok) {
      const result = await response.json().catch(() => null);
      setError(result?.error ?? 'Unable to submit application right now.');
      return;
    }

    router.push('/apply/success');
  }

  return { submit, isSubmitting, error };
}
