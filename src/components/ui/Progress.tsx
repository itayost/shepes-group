// File: src/components/ui/Progress.tsx

import { cn } from '@/lib/utils';

export interface ProgressProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'gradient' | 'striped';
  color?: 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export default function Progress({
  value,
  max = 100,
  label,
  showValue = false,
  size = 'md',
  variant = 'default',
  color = 'primary',
  className,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const colorClasses = {
    primary: 'bg-[#D4AF37]',
    success: 'bg-green-400',
    warning: 'bg-yellow-400',
    danger: 'bg-red-400',
  };

  const gradientClasses = {
    primary: 'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700]',
    success: 'bg-gradient-to-r from-green-600 to-green-400',
    warning: 'bg-gradient-to-r from-yellow-600 to-yellow-400',
    danger: 'bg-gradient-to-r from-red-600 to-red-400',
  };

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-[#D4AF37]">{label}</span>}
          {showValue && (
            <span className="text-sm font-medium text-white">{percentage.toFixed(0)}%</span>
          )}
        </div>
      )}
      <div className={cn(
        'w-full bg-[#0a0a0a] rounded-full overflow-hidden border border-[#D4AF37]/20',
        {
          'h-1': size === 'xs',
          'h-2': size === 'sm',
          'h-3': size === 'md',
          'h-4': size === 'lg',
        }
      )}>
        <div
          className={cn(
            'h-full transition-all duration-500 ease-out rounded-full',
            {
              [colorClasses[color]]: variant === 'default',
              [gradientClasses[color]]: variant === 'gradient',
              'bg-striped animate-stripes': variant === 'striped',
            }
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}