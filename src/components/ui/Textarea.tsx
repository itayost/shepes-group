// File: src/components/ui/Textarea.tsx

import { cn } from '@/lib/utils';
import { forwardRef, TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={id} 
            className="mb-2 block text-sm font-medium text-primary-500"
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          className={cn(
            'flex min-h-[120px] w-full rounded-md px-3 py-2 text-sm',
            'bg-background-card text-white border border-primary-500/30',
            'placeholder:text-gray-500',
            'hover:border-primary-500/50',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'transition-all duration-200',
            error && 'border-error-500 focus:ring-error-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-error-400">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
