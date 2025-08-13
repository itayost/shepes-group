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
    primary: 'bg-primary-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-500',
    danger: 'bg-red-600',
  };

  const gradientClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-700',
    success: 'bg-gradient-to-r from-green-500 to-green-700',
    warning: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
    danger: 'bg-gradient-to-r from-red-500 to-red-700',
  };

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {showValue && (
            <span className="text-sm font-medium text-gray-900">{percentage.toFixed(0)}%</span>
          )}
        </div>
      )}
      <div className={cn(
        'w-full bg-gray-200 rounded-full overflow-hidden',
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