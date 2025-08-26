import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { Loader2, LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden',
  {
    variants: {
      variant: {
        // כפתור זהב יוקרתי - הכפתור הראשי
        primary: `
          bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500
          text-black
          shadow-gold hover:shadow-gold-xl
          hover:-translate-y-1 hover:scale-105
          background-size-200
          before:content-[''] before:absolute before:inset-0
          before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
          before:-translate-x-full hover:before:translate-x-full
          before:transition-transform before:duration-700
        `,
        
        // כפתור שחור יוקרתי עם מסגרת זהב
        secondary: `
          bg-black
          text-primary-500
          border-2 border-primary-500
          hover:bg-primary-500 hover:text-black
          hover:shadow-gold-lg hover:-translate-y-1
        `,
        
        // כפתור Ghost - שקוף עם hover זהב
        ghost: `
          bg-transparent
          text-white hover:text-primary-500
          border border-dark-800 hover:border-primary-500/50
          hover:bg-primary-500/10
          hover:shadow-gold
        `,
        
        // כפתור מסגרת זהב
        outline: `
          bg-transparent
          text-primary-500
          border-2 border-primary-500
          hover:bg-primary-500 hover:text-black
          hover:shadow-gold-lg hover:scale-105
        `,
        
        // כפתור גרדיאנט זהב מלא
        gradient: `
          bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500
          text-white
          shadow-gold-lg hover:shadow-gold-xl
          hover:-translate-y-1 hover:scale-105
          animate-shimmer
          background-size-200
        `,
        
        // כפתור הרס
        destructive: `
          bg-red-600 hover:bg-red-700
          text-white
          shadow-lg hover:shadow-red-500/25
          hover:-translate-y-0.5
        `,
        
        // כפתור לבן (לשימוש על רקע כהה)
        white: `
          bg-white hover:bg-gray-100
          text-black
          shadow-lg hover:shadow-xl
          hover:-translate-y-1
        `,
      },
      
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-xl',
        icon: 'h-10 w-10',
      },
      
      fullWidth: {
        true: 'w-full',
      },
      
      glow: {
        true: 'animate-glow-gold',
      },
    },
    
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  glow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      glow,
      icon: Icon,
      iconPosition = 'right',
      loading,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, fullWidth, glow }),
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}
        
        {/* Left Icon */}
        {!loading && Icon && iconPosition === 'left' && (
          <Icon className="h-4 w-4" />
        )}
        
        {/* Content */}
        {children}
        
        {/* Right Icon */}
        {!loading && Icon && iconPosition === 'right' && (
          <Icon className="h-4 w-4" />
        )}
        
        {/* Glow Effect for Primary */}
        {variant === 'primary' && (
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/0 via-primary-400/30 to-primary-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;