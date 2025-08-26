import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { HTMLAttributes } from 'react';

<<<<<<< HEAD
const badgeVariants = cva(
  'relative inline-flex items-center gap-1.5 rounded-full font-semibold transition-all duration-300 overflow-hidden',
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
=======
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg';
>>>>>>> parent of 0101384 (םל)
  icon?: LucideIcon;
  dot?: boolean;
  rounded?: 'md' | 'lg' | 'full';
}

<<<<<<< HEAD
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
        {/* Content wrapper with higher z-index */}
        <span className="relative z-10 inline-flex items-center gap-1.5">
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
        </span>
        
        {/* Shimmer effect for solid variant - properly contained */}
        {variant === 'solid' && (
          <span 
            className="absolute inset-0 -z-10 rounded-full overflow-hidden"
            aria-hidden="true"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_linear_infinite]" />
          </span>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
=======
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
>>>>>>> parent of 0101384 (םל)
