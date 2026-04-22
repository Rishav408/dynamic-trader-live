import type { ApplicationInput } from '@/lib/utils/validators';

export type ApplicationStatus = 'pending' | 'reviewed' | 'accepted' | 'rejected';

export type ApplicationRecord = ApplicationInput & {
  status: ApplicationStatus;
  cohort: string;
  submittedAt: Date;
};
