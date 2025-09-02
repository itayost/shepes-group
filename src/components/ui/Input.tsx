// File: src/components/ui/Input.tsx

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, icon: Icon, iconPosition = 'left', id, ...props }, ref) => {
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
        <div className="relative">
          {Icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-500/60">
              <Icon className="h-4 w-4" />
            </div>
          )}
          <input
            id={id}
            className={cn(
              'flex h-10 w-full rounded-lg px-3 py-2 text-sm',
              'bg-background-card text-white',
              'placeholder:text-gray-500 transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'disabled:cursor-not-allowed disabled:opacity-50',
              {
                'border border-primary-500/30 hover:border-primary-500/50': !error,
                'border border-error-500 focus:ring-error-500': error,
                'pl-10': Icon && iconPosition === 'left',
                'pr-10': Icon && iconPosition === 'right',
              },
              className
            )}
            ref={ref}
            {...props}
          />
          {Icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-500/60">
              <Icon className="h-4 w-4" />
            </div>
          )}
        </div>
        {hint && !error && (
          <p className="mt-1 text-xs text-gray-500">{hint}</p>
        )}
        {error && (
          <p className="mt-1 text-xs text-error-400 flex items-center gap-1">
            <span className="inline-block w-1 h-1 bg-error-400 rounded-full"></span>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
