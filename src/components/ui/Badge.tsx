import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import { HTMLAttributes, forwardRef } from 'react';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-semibold transition-all duration-300',
  {
    variants: {
      variant: {
        // זהב - התג הראשי
        primary: `
          bg-gradient-to-r from-primary-500/20 to-primary-600/20
          text-primary-400
          border border-primary-500/30
          hover:border-primary-500/50
          hover:shadow-gold
        `,
        
        // שחור עם מסגרת זהב
        secondary: `
          bg-dark-900
          text-primary-500
          border border-primary-500/50
          hover:bg-primary-500/10
          hover:shadow-gold
        `,
        
        // מלא זהב
        solid: `
          bg-gradient-to-r from-primary-500 to-primary-600
          text-black
          shadow-gold
          hover:shadow-gold-lg
          hover:scale-105
        `,
        
        // Ghost
        ghost: `
          bg-transparent
          text-dark-300
          border border-dark-700
          hover:text-primary-500
          hover:border-primary-500/30
          hover:bg-primary-500/5
        `,
        
        // מסגרת בלבד
        outline: `
          bg-transparent
          text-primary-500
          border border-primary-500
          hover:bg-primary-500
          hover:text-black
          hover:shadow-gold
        `,
        
        // הצלחה
        success: `
          bg-green-500/10
          text-green-400
          border border-green-500/30
          hover:border-green-500/50
        `,
        
        // אזהרה
        warning: `
          bg-amber-500/10
          text-amber-400
          border border-amber-500/30
          hover:border-amber-500/50
        `,
        
        // שגיאה
        error: `
          bg-red-500/10
          text-red-400
          border border-red-500/30
          hover:border-red-500/50
        `,
        
        // מידע
        info: `
          bg-blue-500/10
          text-blue-400
          border border-blue-500/30
          hover:border-blue-500/50
        `,
      },
      
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
        xl: 'px-5 py-2 text-lg',
      },
      
      glow: {
        true: 'animate-pulse-gold',
      },
      
      interactive: {
        true: 'cursor-pointer',
      },
    },
    
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  pulse?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant,
      size,
      glow,
      interactive,
      icon: Icon,
      iconPosition = 'left',
      pulse,
      removable,
      onRemove,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({ variant, size, glow, interactive: interactive || !!onClick }),
          pulse && 'animate-pulse',
          className
        )}
        onClick={onClick}
        {...props}
      >
        {/* Left Icon */}
        {Icon && iconPosition === 'left' && (
          <Icon className={cn(
            'shrink-0',
            size === 'sm' && 'h-3 w-3',
            size === 'md' && 'h-3.5 w-3.5',
            size === 'lg' && 'h-4 w-4',
            size === 'xl' && 'h-5 w-5',
          )} />
        )}
        
        {/* Content */}
        <span>{children}</span>
        
        {/* Right Icon */}
        {Icon && iconPosition === 'right' && !removable && (
          <Icon className={cn(
            'shrink-0',
            size === 'sm' && 'h-3 w-3',
            size === 'md' && 'h-3.5 w-3.5',
            size === 'lg' && 'h-4 w-4',
            size === 'xl' && 'h-5 w-5',
          )} />
        )}
        
        {/* Remove button */}
        {removable && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className={cn(
              'shrink-0 rounded-full hover:bg-primary-500/20 transition-colors duration-200',
              'focus:outline-none focus:ring-1 focus:ring-primary-500',
              size === 'sm' && 'h-3 w-3',
              size === 'md' && 'h-3.5 w-3.5',
              size === 'lg' && 'h-4 w-4',
              size === 'xl' && 'h-5 w-5',
            )}
          >
            <svg
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        
        {/* Shimmer effect for solid variant */}
        {variant === 'solid' && (
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;