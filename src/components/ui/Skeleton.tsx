// File: src/components/ui/Skeleton.tsx

import { cn } from '@/lib/utils';

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export default function Skeleton({
  className,
  variant = 'text',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'bg-[#1a1a1a] border border-[#D4AF37]/10',
        {
          'rounded-md': variant === 'text',
          'rounded-full': variant === 'circular',
          'rounded-none': variant === 'rectangular',
          'rounded-lg': variant === 'rounded',
          'animate-pulse': animation === 'pulse',
          'animate-shimmer-skeleton': animation === 'wave',
          'h-4': variant === 'text' && !height,
          'aspect-square': variant === 'circular' && !height,
        },
        className
      )}
      style={{
        width: width,
        height: height,
      }}
    />
  );
}

// Skeleton group for common patterns - Updated for black theme
export function SkeletonCard() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-dark border border-[#D4AF37]/20">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="flex-1">
          <Skeleton width="60%" className="mb-2" />
          <Skeleton width="40%" />
        </div>
      </div>
      <Skeleton className="mb-2" />
      <Skeleton className="mb-2" />
      <Skeleton width="80%" />
    </div>
  );
}