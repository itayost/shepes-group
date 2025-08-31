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
          // Variants - Updated for black & gold theme
          'bg-[#1a1a1a] text-gray-300 border border-[#D4AF37]/20': variant === 'default',
          'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30': variant === 'primary',
          'bg-black text-[#FFD700] border border-[#D4AF37]/50': variant === 'secondary',
          'bg-green-900/20 text-green-400 border border-green-400/30': variant === 'success',
          'bg-yellow-900/20 text-yellow-400 border border-yellow-400/30': variant === 'warning',
          'bg-red-900/20 text-red-400 border border-red-400/30': variant === 'danger',
          'bg-transparent border-2 border-[#D4AF37]/50 text-[#D4AF37]': variant === 'outline',
          
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
            'bg-[#D4AF37]': variant === 'primary',
            'bg-[#FFD700]': variant === 'secondary',
            'bg-green-400': variant === 'success',
            'bg-yellow-400': variant === 'warning',
            'bg-red-400': variant === 'danger',
          }
        )} />
      )}
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
}