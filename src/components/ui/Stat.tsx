// File: src/components/ui/Stat.tsx

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface StatProps {
  value: string | number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'bordered' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Stat({
  value,
  label,
  suffix,
  prefix,
  icon: Icon,
  trend,
  variant = 'default',
  size = 'md',
  className,
}: StatProps) {
  return (
    <div className={cn(
      'text-center',
      {
        'p-4': size === 'sm',
        'p-6': size === 'md',
        'p-8': size === 'lg',
        'border-r border-[#D4AF37]/20 last:border-r-0': variant === 'bordered',
        'bg-[#1a1a1a] rounded-lg border border-[#D4AF37]/20': variant === 'filled',
      },
      className
    )}>
      {Icon && (
        <div className="flex justify-center mb-3">
          <div className="p-2 bg-[#D4AF37]/20 rounded-lg">
            <Icon className={cn(
              'text-[#D4AF37]',
              {
                'w-4 h-4': size === 'sm',
                'w-5 h-5': size === 'md',
                'w-6 h-6': size === 'lg',
              }
            )} />
          </div>
        </div>
      )}
      <div className={cn(
        'font-bold text-[#FFD700]',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        }
      )}>
        {prefix}
        {value}
        {suffix}
      </div>
      <div className={cn(
        'text-gray-400',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-base': size === 'lg',
        }
      )}>
        {label}
      </div>
      {trend && (
        <div className={cn(
          'mt-2 text-xs font-medium',
          trend.isPositive ? 'text-green-400' : 'text-red-400'
        )}>
          {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
        </div>
      )}
    </div>
  );
}