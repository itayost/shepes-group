import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'luxury' | 'elevated' | 'gradient' | 'outlined' | 'glass';
  hover?: boolean;
  glow?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, glow = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative rounded-2xl overflow-hidden transition-all duration-500',
        {
          // ברירת מחדל - שחור עם מסגרת עדינה
          'bg-gradient-to-br from-dark-950 to-dark-900 border border-dark-800': 
            variant === 'default',
            
          // יוקרתי - שחור עם אפקט זהב
          'bg-gradient-to-br from-dark-950 to-black border border-dark-800 before:absolute before:inset-0 before:bg-gradient-radial before:from-primary-500/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500': 
            variant === 'luxury',
            
          // מורם עם צל
          'bg-black shadow-luxury border border-dark-800': 
            variant === 'elevated',
            
          // גרדיאנט זהב
          'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 border border-primary-500/30': 
            variant === 'gradient',
            
          // מסגרת בולטת
          'bg-black border-2 border-primary-500/50': 
            variant === 'outlined',
            
          // זכוכית - שקוף למחצה
          'bg-dark-900/30 backdrop-blur-xl border border-primary-500/20': 
            variant === 'glass',
            
          // אפקטי Hover
          'hover:border-primary-500/50 hover:shadow-gold-lg hover:-translate-y-2': 
            hover && variant === 'default',
            
          'hover:border-primary-500/40 hover:shadow-gold-xl hover:scale-[1.02]': 
            hover && variant === 'luxury',
            
          'hover:shadow-gold-xl hover:-translate-y-2': 
            hover && variant === 'elevated',
            
          'hover:border-primary-500/50 hover:shadow-gold-xl': 
            hover && variant === 'gradient',
            
          'hover:border-primary-500 hover:shadow-gold-lg hover:scale-105': 
            hover && variant === 'outlined',
            
          'hover:bg-dark-900/50 hover:border-primary-500/30 hover:shadow-gold': 
            hover && variant === 'glass',
            
          // Glow effect
          'animate-glow-gold': glow,
        },
        className
      )}
      {...props}
    >
      {/* Gold accent line at top */}
      {(variant === 'luxury' || variant === 'gradient') && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
      )}
      
      {/* Inner glow effect */}
      {variant === 'luxury' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-600/10 rounded-full blur-3xl" />
        </div>
      )}
      
      {props.children}
    </div>
  )
);
Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative flex flex-col space-y-1.5 p-6 lg:p-8',
        'border-b border-dark-800',
        className
      )}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-2xl font-bold tracking-tight',
        'bg-gradient-to-r from-primary-500 to-primary-400',
        'bg-clip-text text-transparent',
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-dark-400', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn('p-6 lg:p-8 pt-6', 'text-white', className)} 
      {...props} 
    />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center p-6 lg:p-8 pt-0',
        'text-dark-300',
        className
      )}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
