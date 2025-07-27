import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  count?: number;
}

export default function Skeleton({
  className,
  variant = 'text',
  width,
  height,
  count = 1,
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200';
  
  const variantClasses = {
    text: 'h-4 w-full rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-md',
  };

  const style = {
    width: width || (variant === 'circular' ? 40 : undefined),
    height: height || (variant === 'circular' ? 40 : variant === 'text' ? 16 : 100),
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={cn(
            baseClasses,
            variantClasses[variant],
            className
          )}
          style={style}
        />
      ))}
    </>
  );
}

// Composite skeleton components
export function SkeletonCard() {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <Skeleton variant="rectangular" height={200} className="mb-4" />
      <Skeleton className="mb-2" width="60%" />
      <Skeleton count={3} className="mb-2" />
      <Skeleton width="40%" />
    </div>
  );
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="w-full">
      <div className="mb-4 flex gap-4">
        <Skeleton width="30%" />
        <Skeleton width="30%" />
        <Skeleton width="20%" />
        <Skeleton width="20%" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="mb-2 flex gap-4">
          <Skeleton width="30%" />
          <Skeleton width="30%" />
          <Skeleton width="20%" />
          <Skeleton width="20%" />
        </div>
      ))}
    </div>
  );
}