import { z } from 'zod';

export const applicationSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Please enter a valid email.'),
  phone: z.string().min(8, 'Please enter a valid WhatsApp number.'),
  city: z.string().min(2, 'Please enter your city or state.'),
  experience: z.string().min(1, 'Select your trading experience.'),
  hoursPerWeek: z.string().min(1, 'Select your weekly commitment.'),
  markets: z.array(z.string()).min(1, 'Select at least one market.'),
  primaryGoal: z.string().min(1, 'Select your primary goal.'),
  referralSource: z.string().min(1, 'Select how you heard about us.'),
  message: z.string().min(20, 'Please share at least 20 characters.'),
  acceptedRisk: z.literal(true, {
    errorMap: () => ({ message: 'Risk disclaimer acceptance is required.' }),
  }),
  acceptedEducationOnly: z.literal(true, {
    errorMap: () => ({ message: 'Education-only acknowledgement is required.' }),
  }),
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(20),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
