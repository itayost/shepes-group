// File: src/components/ui/Badge.tsx

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  dot?: boolean;
  rounded?: 'md' | 'lg' | 'full';
}

export default function Badge({
  className,
  variant = 'default',
  size = 'sm',
  icon: Icon,
  dot = false,
  rounded = 'full',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium transition-all duration-200',
        {
          // Variants - Updated with Tailwind colors
          'bg-background-card text-gray-300 border border-primary-500/20': variant === 'default',
          'bg-primary-500/20 text-primary-500 border border-primary-500/30': variant === 'primary',
          'bg-black text-primary-400 border border-primary-500/50': variant === 'secondary',
          'bg-success-900/20 text-success-400 border border-success-400/30': variant === 'success',
          'bg-warning-900/20 text-warning-400 border border-warning-400/30': variant === 'warning',
          'bg-error-900/20 text-error-400 border border-error-400/30': variant === 'danger',
          'bg-transparent border-2 border-primary-500/50 text-primary-500': variant === 'outline',
          
          // Sizes
          'px-2 py-0.5 text-xs': size === 'xs',
          'px-2.5 py-1 text-xs': size === 'sm',
          'px-3 py-1.5 text-sm': size === 'md',
          'px-4 py-2 text-base': size === 'lg',
          
          // Rounded
          'rounded-md': rounded === 'md',
          'rounded-lg': rounded === 'lg',
          'rounded-full': rounded === 'full',
        },
        className
      )}
      {...props}
    >
      {dot && (
        <span className={cn(
          'w-1.5 h-1.5 rounded-full',
          {
            'bg-gray-400': variant === 'default',
            'bg-primary-500': variant === 'primary',
            'bg-primary-400': variant === 'secondary',
            'bg-success-400': variant === 'success',
            'bg-warning-400': variant === 'warning',
            'bg-error-400': variant === 'danger',
          }
        )} />
      )}
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
}