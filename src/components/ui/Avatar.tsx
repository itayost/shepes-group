// File: src/components/ui/Avatar.tsx

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  fallback?: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
  border?: boolean;
  gradient?: boolean;
}

export default function Avatar({
  className,
  src,
  alt = 'Avatar',
  size = 'md',
  fallback,
  status,
  border = false,
  gradient = false,
  ...props
}: AvatarProps) {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-40 h-40',
  };

  const statusSizeClasses = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3.5 h-3.5',
    xl: 'w-5 h-5',
    '2xl': 'w-7 h-7',
  };

  return (
    <div className={cn('relative', sizeClasses[size], className)} {...props}>
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full" />
      )}
      {border && (
        <div className="absolute inset-1 bg-black rounded-full" />
      )}
      <div className={cn(
        'relative w-full h-full rounded-full overflow-hidden',
        border && 'ring-2 ring-primary-500'
      )}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-background-card flex items-center justify-center text-primary-500 border border-primary-500/20">
            {fallback || alt?.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      {status && (
        <div className={cn(
          'absolute bottom-0 right-0 rounded-full ring-2 ring-black',
          statusSizeClasses[size],
          {
            'bg-success-500': status === 'online',
            'bg-gray-600': status === 'offline',
            'bg-error-500': status === 'busy',
            'bg-warning-500': status === 'away',
          }
        )} />
      )}
    </div>
  );
}