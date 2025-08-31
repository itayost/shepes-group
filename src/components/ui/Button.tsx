// File: src/components/ui/Button.tsx

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading, 
    icon: Icon,
    iconPosition = 'left',
    fullWidth = false,
    children, 
    disabled, 
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
          'transition-all duration-300 focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            // Variants - Updated for black & gold theme
            'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black hover:from-[#FFD700] hover:to-[#D4AF37] shadow-gold hover:shadow-gold-glow hover:-translate-y-0.5': 
              variant === 'primary',
            'bg-black text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:shadow-gold': 
              variant === 'secondary',
            'bg-transparent text-[#D4AF37] border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10': 
              variant === 'outline',
            'text-gray-400 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]': 
              variant === 'ghost',
            'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] text-black shadow-gold hover:shadow-gold-glow hover:-translate-y-0.5': 
              variant === 'gradient',
            'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl': 
              variant === 'danger',
            
            // Sizes
            'h-7 px-2 text-xs': size === 'xs',
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 text-sm': size === 'md',
            'h-12 px-6 text-base': size === 'lg',
            'h-14 px-8 text-lg': size === 'xl',
            
            // Full width
            'w-full': fullWidth,
            'flex-1': !fullWidth && className?.includes('flex-1'),
          },
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : Icon && iconPosition === 'left' ? (
          <Icon className="h-4 w-4" />
        ) : null}
        {children}
        {!isLoading && Icon && iconPosition === 'right' && (
          <Icon className="h-4 w-4" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;