'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Toast from '@/components/ui/Toast';
import { ContactFormData, contactFormSchema } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Mail, MessageSquare, Phone, Send, User } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    description?: string;
    type: 'success' | 'error';
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  // Watch form completeness
  const formValues = watch();
  const completionPercentage = Object.keys(formValues).filter(
    key => formValues[key as keyof ContactFormData]
  ).length * 20; // 5 fields = 20% each

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
        setIsSuccess(true);
        setToast({
          message: 'ההודעה נשלחה בהצלחה!',
          description: 'נחזור אליך בהקדם האפשרי',
          type: 'success',
        });
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.error || 'שגיאה בשליחת ההודעה');
      }
    } catch (error) {
      setToast({
        message: 'שגיאה בשליחת ההודעה',
        description: 'אנא נסו שוב או צרו קשר טלפוני',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card variant="luxury" className="text-center py-12">
        <CardContent>
          <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
            <div className="relative bg-gradient-to-r from-green-500 to-green-600 rounded-full w-20 h-20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            תודה על פנייתך!
          </h3>
          <p className="text-dark-300 mb-6">
            קיבלנו את הודעתך ונחזור אליך בהקדם האפשרי
          </p>
          <Button 
            variant="secondary" 
            onClick={() => setIsSuccess(false)}
          >
            שלח הודעה נוספת
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card variant="luxury">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">השאירו פרטים</CardTitle>
            <Badge variant="solid" icon={Send} glow>
              מענה תוך 24 שעות
            </Badge>
          </div>
          <p className="text-dark-400 mt-2">
            מלאו את הטופס ונחזור אליכם בהקדם האפשרי
          </p>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-dark-400 mb-1">
              <span>השלמת הטופס</span>
              <span>{completionPercentage}%</span>
            </div>
            <div className="relative h-2 bg-dark-800 rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name & Email */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="input-luxury">
                <Input
                  id="name"
                  placeholder="ישראל ישראלי"
                  icon={User}
                  error={errors.name?.message}
                  {...register('name')}
                  disabled={isSubmitting}
                  className="bg-dark-900 border-dark-800 text-white placeholder-dark-500 focus:border-primary-500"
                />
                <label htmlFor="name">שם מלא</label>
              </div>
              
              <div className="input-luxury">
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  icon={Mail}
                  dir="ltr"
                  error={errors.email?.message}
                  {...register('email')}
                  disabled={isSubmitting}
                  className="bg-dark-900 border-dark-800 text-white placeholder-dark-500 focus:border-primary-500"
                />
                <label htmlFor="email">אימייל</label>
              </div>
            </div>

            {/* Phone & Subject */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="input-luxury">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="050-1234567"
                  icon={Phone}
                  dir="ltr"
                  error={errors.phone?.message}
                  {...register('phone')}
                  disabled={isSubmitting}
                  className="bg-dark-900 border-dark-800 text-white placeholder-dark-500 focus:border-primary-500"
                />
                <label htmlFor="phone">טלפון</label>
              </div>
              
              <div className="input-luxury">
                <Input
                  id="subject"
                  placeholder="בנושא..."
                  icon={MessageSquare}
                  error={errors.subject?.message}
                  {...register('subject')}
                  disabled={isSubmitting}
                  className="bg-dark-900 border-dark-800 text-white placeholder-dark-500 focus:border-primary-500"
                />
                <label htmlFor="subject">נושא</label>
              </div>
            </div>

            {/* Message */}
            <div className="input-luxury">
              <Textarea
                id="message"
                placeholder="ספרו לנו במה נוכל לעזור..."
                rows={5}
                error={errors.message?.message}
                {...register('message')}
                disabled={isSubmitting}
                className="bg-dark-900 border-dark-800 text-white placeholder-dark-500 focus:border-primary-500"
              />
              <label htmlFor="message">הודעה</label>
            </div>

            {/* Privacy Notice */}
            <div className="bg-dark-900 border border-dark-800 rounded-lg p-4">
              <p className="text-xs text-dark-400">
                בשליחת הטופס אני מאשר/ת קבלת מידע שיווקי ויצירת קשר טלפוני.
                הפרטים שלך בטוחים אצלנו ולא יועברו לצד שלישי.
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              variant="primary"
              fullWidth
              disabled={isSubmitting || !isValid}
              icon={Send}
              glow
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
                  שולח...
                </>
              ) : (
                'שלח הודעה'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {toast && (
        <Toast
          message={toast.message}
          description={toast.description}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default ContactForm;