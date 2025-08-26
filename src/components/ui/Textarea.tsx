import { cn } from '@/lib/utils';
import { forwardRef, TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  variant?: 'default' | 'luxury' | 'ghost' | 'outlined';
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    label, 
    error, 
    hint,
    variant = 'default',
    id, 
    ...props 
  }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={id} 
            className="mb-2 block text-sm font-semibold text-primary-500"
          >
            {label}
          </label>
        )}
        
        <div className="relative group">
          <textarea
            id={id}
            className={cn(
              'flex min-h-[120px] w-full rounded-xl px-4 py-3 text-base resize-none',
              'transition-all duration-300',
              'focus:outline-none',
              'disabled:cursor-not-allowed disabled:opacity-50',
              'scrollbar-luxury', // Custom scrollbar
              {
                // Default - שחור עם מסגרת זהב בהתמקדות
                'bg-black text-white placeholder:text-dark-500 border-2 border-dark-800 hover:border-dark-600 focus:border-primary-500 focus:shadow-gold':
                  variant === 'default' && !error,
                  
                // Luxury - רקע שחור עם אפקט glow
                'bg-gradient-to-br from-dark-950 to-dark-900 text-white placeholder:text-dark-500 border-2 border-dark-800 hover:border-primary-500/50 focus:border-primary-500 focus:shadow-gold-lg focus:bg-black':
                  variant === 'luxury' && !error,
                  
                // Ghost - שקוף עם מסגרת עדינה
                'bg-transparent text-white placeholder:text-dark-500 border border-dark-700 hover:border-dark-500 focus:border-primary-500 focus:bg-dark-950/50 focus:shadow-gold':
                  variant === 'ghost' && !error,
                  
                // Outlined - מסגרת זהב בולטת
                'bg-black text-white placeholder:text-dark-500 border-2 border-primary-500/30 hover:border-primary-500/50 focus:border-primary-500 focus:shadow-gold-lg':
                  variant === 'outlined' && !error,
                  
                // Error state
                'border-red-500 focus:border-red-500 focus:shadow-red-500/25': error,
              },
              className
            )}
            ref={ref}
            {...props}
          />
          
          {/* Focus glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Character count (optional) */}
          {props.maxLength && (
            <div className="absolute bottom-2 right-2 text-xs text-dark-500">
              <span className="text-primary-500">{props.value?.toString().length || 0}</span>
              /{props.maxLength}
            </div>
          )}
        </div>
        
        {hint && !error && (
          <p className="mt-1.5 text-xs text-dark-400">{hint}</p>
        )}
        
        {error && (
          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            <span className="inline-block w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;