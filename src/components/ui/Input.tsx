import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  variant?: 'default' | 'luxury' | 'ghost' | 'outlined';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    label, 
    error, 
    hint, 
    icon: Icon, 
    iconPosition = 'left', 
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
          {Icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-500/50 group-hover:text-primary-500 transition-colors duration-300 z-10">
              <Icon className="h-4 w-4" />
            </div>
          )}
          
          <input
            id={id}
            className={cn(
              'flex h-12 w-full rounded-xl px-4 py-3 text-base',
              'transition-all duration-300',
              'focus:outline-none',
              'disabled:cursor-not-allowed disabled:opacity-50',
              {
                // Default - שחור עם מסגרת זהב בהתמקדות
                'bg-black text-white placeholder:text-dark-500 border-2 border-dark-800 hover:border-dark-600 focus:border-primary-500 focus:shadow-gold':
                  variant === 'default' && !error,
                  
                // Luxury - רקע שחור עם אפקט glow
                'bg-gradient-to-r from-dark-950 to-dark-900 text-white placeholder:text-dark-500 border-2 border-dark-800 hover:border-primary-500/50 focus:border-primary-500 focus:shadow-gold-lg focus:bg-black':
                  variant === 'luxury' && !error,
                  
                // Ghost - שקוף עם מסגרת עדינה
                'bg-transparent text-white placeholder:text-dark-500 border border-dark-700 hover:border-dark-500 focus:border-primary-500 focus:bg-dark-950/50 focus:shadow-gold':
                  variant === 'ghost' && !error,
                  
                // Outlined - מסגרת זהב בולטת
                'bg-black text-white placeholder:text-dark-500 border-2 border-primary-500/30 hover:border-primary-500/50 focus:border-primary-500 focus:shadow-gold-lg':
                  variant === 'outlined' && !error,
                  
                // Error state
                'border-red-500 focus:border-red-500 focus:shadow-red-500/25': error,
                
                // Icon spacing
                'pl-10': Icon && iconPosition === 'left',
                'pr-10': Icon && iconPosition === 'right',
              },
              className
            )}
            ref={ref}
            {...props}
          />
          
          {Icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-500/50 group-hover:text-primary-500 transition-colors duration-300 z-10">
              <Icon className="h-4 w-4" />
            </div>
          )}
          
          {/* Focus glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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

Input.displayName = 'Input';
export default Input;