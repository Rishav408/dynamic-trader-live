import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { firebaseApp } from './config';

export const db = getFirestore(firebaseApp);

export async function saveApplication(data: Record<string, unknown>) {
  return addDoc(collection(db, 'applications'), {
    ...data,
    status: 'pending',
    cohort: 'cohort-4',
    submittedAt: serverTimestamp(),
  });
}

export async function saveContactMessage(data: Record<string, unknown>) {
  return addDoc(collection(db, 'contactMessages'), {
    ...data,
    submittedAt: serverTimestamp(),
  });
}

export async function savePayment(data: Record<string, unknown>) {
  return addDoc(collection(db, 'payments'), {
    ...data,
    status: 'paid',
    paidAt: serverTimestamp(),
  });
}
