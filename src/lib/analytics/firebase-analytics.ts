import { logEvent } from 'firebase/analytics';
import { getFirebaseAnalytics } from '@/lib/firebase/config';

export async function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  const analytics = await getFirebaseAnalytics();
  if (analytics) logEvent(analytics, name, params);
}
