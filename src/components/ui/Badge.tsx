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
          // Variants
          'bg-gray-100 text-gray-700': variant === 'default',
          'bg-primary-100 text-primary-700 border border-primary-200': variant === 'primary',
          'bg-gray-900 text-white': variant === 'secondary',
          'bg-green-100 text-green-700 border border-green-200': variant === 'success',
          'bg-yellow-50 text-yellow-700 border border-yellow-200': variant === 'warning',
          'bg-red-100 text-red-700 border border-red-200': variant === 'danger',
          'bg-white border-2 border-primary-200 text-primary-700': variant === 'outline',
          
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
            'bg-gray-600': variant === 'default',
            'bg-primary-600': variant === 'primary',
            'bg-white': variant === 'secondary',
            'bg-green-600': variant === 'success',
            'bg-yellow-600': variant === 'warning',
            'bg-red-600': variant === 'danger',
          }
        )} />
      )}
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
}