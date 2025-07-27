import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'השם חייב להכיל לפחות 2 תווים')
    .max(50, 'השם לא יכול להכיל יותר מ-50 תווים'),
  email: z
    .string()
    .email('כתובת אימייל לא תקינה'),
  phone: z
    .string()
    .regex(/^[\d-+().\s]+$/, 'מספר טלפון לא תקין')
    .min(9, 'מספר טלפון לא תקין')
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .min(2, 'הנושא חייב להכיל לפחות 2 תווים')
    .max(100, 'הנושא לא יכול להכיל יותר מ-100 תווים'),
  message: z
    .string()
    .min(10, 'ההודעה חייבת להכיל לפחות 10 תווים')
    .max(1000, 'ההודעה לא יכולה להכיל יותר מ-1000 תווים'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;