'use client';

import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Toast from '@/components/ui/Toast';
import { ContactFormData, contactFormSchema } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setToast({
          message: 'ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.',
          type: 'success',
        });
        reset();
      } else {
        throw new Error(result.error || 'שגיאה בשליחת ההודעה');
      }
    } catch (error) {
      setToast({
        message: error instanceof Error ? error.message : 'שגיאה בשליחת ההודעה',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">צור קשר</CardTitle>
          <p className="text-center text-gray-600">
            נשמח לשמוע ממך! מלא את הטופס ונחזור אליך בהקדם
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Input
                id="name"
                label="שם מלא *"
                placeholder="ישראל ישראלי"
                error={errors.name?.message}
                {...register('name')}
                disabled={isSubmitting}
              />
              
              <Input
                id="email"
                label="אימייל *"
                type="email"
                placeholder="example@email.com"
                dir="ltr"
                error={errors.email?.message}
                {...register('email')}
                disabled={isSubmitting}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                id="phone"
                label="טלפון"
                type="tel"
                placeholder="050-1234567"
                dir="ltr"
                error={errors.phone?.message}
                {...register('phone')}
                disabled={isSubmitting}
              />
              
              <Input
                id="subject"
                label="נושא *"
                placeholder="בנושא..."
                error={errors.subject?.message}
                {...register('subject')}
                disabled={isSubmitting}
              />
            </div>

            <Textarea
              id="message"
              label="הודעה *"
              placeholder="ספר/י לנו במה נוכל לעזור..."
              rows={5}
              error={errors.message?.message}
              {...register('message')}
              disabled={isSubmitting}
            />

            <div className="flex flex-col gap-4">
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    שולח...
                  </span>
                ) : (
                  'שלח הודעה'
                )}
              </Button>
              
              <p className="text-center text-sm text-gray-500">
                * שדות חובה
              </p>
            </div>
          </form>
        </CardContent>
      </Card>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}