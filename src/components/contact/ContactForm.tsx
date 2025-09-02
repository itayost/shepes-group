// File: src/components/contact/ContactForm.tsx

'use client';

import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { ContactFormData, contactFormSchema } from '@/lib/validations';
import {
  AlertCircle,
  CheckCircle,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  User
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const fieldErrors: Partial<ContactFormData> = {};
      error.errors?.forEach((err: any) => {
        const field = err.path[0];
        fieldErrors[field as keyof ContactFormData] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Shake animation for form
      formRef.current?.classList.add('animate-shake');
      setTimeout(() => formRef.current?.classList.remove('animate-shake'), 500);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quick subject suggestions
  const subjectSuggestions = [
    'מעוניין למכור נכס',
    'מחפש נכס לקנייה',
    'צריך הערכת שווי',
    'שאלה כללית'
  ];

  return (
    <div ref={sectionRef}>
      <Card 
        variant="default" 
        className={cn(
          "transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <CardContent className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-primary-500" />
              <h2 className="text-2xl font-bold text-text-primary">שלח לנו הודעה</h2>
            </div>
            <p className="text-text-muted">
              מלא את הפרטים ונחזור אליך בהקדם האפשרי
            </p>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Phone Row - Mobile: Stack, Desktop: Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  שם מלא *
                </label>
                <div className="relative">
                  <div className={cn(
                    "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none transition-colors",
                    focusedField === 'name' ? "text-primary-500" : "text-text-muted"
                  )}>
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={cn(
                      "w-full pr-10 pl-4 py-3 bg-background/50 border rounded-lg",
                      "text-text-primary placeholder-text-muted",
                      "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500",
                      "transition-all duration-300",
                      errors.name 
                        ? "border-error-500 focus:ring-error-500/50" 
                        : "border-primary-500/20 hover:border-primary-500/40"
                    )}
                    placeholder="ישראל ישראלי"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-error-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  טלפון
                </label>
                <div className="relative">
                  <div className={cn(
                    "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none transition-colors",
                    focusedField === 'phone' ? "text-primary-500" : "text-text-muted"
                  )}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={cn(
                      "w-full pr-10 pl-4 py-3 bg-background/50 border rounded-lg",
                      "text-text-primary placeholder-text-muted",
                      "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500",
                      "transition-all duration-300",
                      errors.phone 
                        ? "border-error-500 focus:ring-error-500/50" 
                        : "border-primary-500/20 hover:border-primary-500/40"
                    )}
                    placeholder="050-1234567"
                    dir="ltr"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-error-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-text-secondary mb-2">
                אימייל *
              </label>
              <div className="relative">
                <div className={cn(
                  "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none transition-colors",
                  focusedField === 'email' ? "text-primary-500" : "text-text-muted"
                )}>
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={cn(
                    "w-full pr-10 pl-4 py-3 bg-background/50 border rounded-lg",
                    "text-text-primary placeholder-text-muted",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500",
                    "transition-all duration-300",
                    errors.email 
                      ? "border-error-500 focus:ring-error-500/50" 
                      : "border-primary-500/20 hover:border-primary-500/40"
                  )}
                  placeholder="example@email.com"
                  dir="ltr"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-error-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-text-secondary mb-2">
                נושא הפנייה *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  "w-full px-4 py-3 bg-background/50 border rounded-lg",
                  "text-text-primary placeholder-text-muted",
                  "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500",
                  "transition-all duration-300",
                  errors.subject 
                    ? "border-error-500 focus:ring-error-500/50" 
                    : "border-primary-500/20 hover:border-primary-500/40"
                )}
                placeholder="במה נוכל לעזור?"
              />
              
              {/* Quick Subject Suggestions */}
              <div className="flex flex-wrap gap-2 mt-2">
                {subjectSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, subject: suggestion }))}
                    className={cn(
                      "text-xs px-3 py-1 rounded-full transition-all",
                      "border border-primary-500/20 hover:border-primary-500/40",
                      "bg-primary-500/5 hover:bg-primary-500/10",
                      "text-text-muted hover:text-primary-500",
                      formData.subject === suggestion && "bg-primary-500/20 text-primary-500 border-primary-500/50"
                    )}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              
              {errors.subject && (
                <p className="mt-1 text-xs text-error-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-text-secondary mb-2">
                הודעה *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={5}
                className={cn(
                  "w-full px-4 py-3 bg-background/50 border rounded-lg resize-none",
                  "text-text-primary placeholder-text-muted",
                  "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500",
                  "transition-all duration-300",
                  errors.message 
                    ? "border-error-500 focus:ring-error-500/50" 
                    : "border-primary-500/20 hover:border-primary-500/40"
                )}
                placeholder="ספר לנו איך נוכל לעזור לך..."
              />
              <div className="flex justify-between items-center mt-1">
                {errors.message ? (
                  <p className="text-xs text-error-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                ) : (
                  <span className="text-xs text-text-muted">* שדות חובה</span>
                )}
                <span className={cn(
                  "text-xs transition-colors",
                  formData.message.length > 900 ? "text-warning-500" : "text-text-muted"
                )}>
                  {formData.message.length}/1000
                </span>
              </div>
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-success-500/10 border border-success-500/30 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success-500" />
                <p className="text-success-500">ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-error-500/10 border border-error-500/30 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-error-500" />
                <p className="text-error-500">אופס! משהו השתבש. אנא נסה שוב.</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  שולח...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  שלח הודעה
                </>
              )}
            </Button>

            {/* Privacy Note */}
            <p className="text-xs text-text-muted text-center">
              <Sparkles className="w-3 h-3 inline ml-1 text-primary-500" />
              המידע שלך בטוח אצלנו ולא יועבר לצד שלישי
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;