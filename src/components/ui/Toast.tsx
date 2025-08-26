import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Info, X, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ToastProps {
  message: string;
  description?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function Toast({
  message,
  description,
  type = 'info',
  duration = 5000,
  position = 'bottom-right',
  onClose,
  action,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  if (!isVisible) return null;

  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };

  const styles = {
    success: 'from-green-500/20 to-green-600/20 border-green-500/30 text-green-400',
    error: 'from-red-500/20 to-red-600/20 border-red-500/30 text-red-400',
    warning: 'from-amber-500/20 to-amber-600/20 border-amber-500/30 text-amber-400',
    info: 'from-primary-500/20 to-primary-600/20 border-primary-500/30 text-primary-400',
  };

  const iconStyles = {
    success: 'text-green-400',
    error: 'text-red-400',
    warning: 'text-amber-400',
    info: 'text-primary-400',
  };

  const positions = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  };

  const animations = {
    'top-right': isLeaving ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100',
    'top-left': isLeaving ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100',
    'bottom-right': isLeaving ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100',
    'bottom-left': isLeaving ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100',
    'top-center': isLeaving ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100',
    'bottom-center': isLeaving ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100',
  };

  const toastContent = (
    <div
      className={cn(
        'fixed z-50 flex items-start gap-3 p-4 rounded-xl',
        'min-w-[320px] max-w-[420px]',
        'bg-gradient-to-r backdrop-blur-xl',
        'border shadow-gold-lg',
        'transition-all duration-300 ease-in-out',
        'bg-black/95',
        styles[type],
        positions[position],
        animations[position]
      )}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-dark-800 rounded-t-xl overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full',
            'bg-gradient-to-r',
            type === 'success' && 'from-green-500 to-green-400',
            type === 'error' && 'from-red-500 to-red-400',
            type === 'warning' && 'from-amber-500 to-amber-400',
            type === 'info' && 'from-primary-500 to-primary-400',
          )}
          style={{
            animation: duration > 0 ? `shrink ${duration}ms linear` : 'none',
          }}
        />
      </div>

      {/* Icon */}
      <span className={cn('mt-0.5 shrink-0', iconStyles[type])}>
        {icons[type]}
      </span>

      {/* Content */}
      <div className="flex-1">
        <p className="text-sm font-semibold text-white">{message}</p>
        {description && (
          <p className="mt-1 text-xs text-dark-300">{description}</p>
        )}
        {action && (
          <button
            onClick={action.onClick}
            className="mt-2 text-xs font-medium text-primary-400 hover:text-primary-300 underline-offset-2 hover:underline transition-colors"
          >
            {action.label}
          </button>
        )}
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="shrink-0 rounded-lg p-1.5 hover:bg-primary-500/10 transition-colors group"
      >
        <X className="w-4 h-4 text-dark-400 group-hover:text-primary-400 transition-colors" />
      </button>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 pointer-events-none" />
    </div>
  );

  return createPortal(
    <>
      <style jsx>{`
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
      {toastContent}
    </>,
    document.body
  );
}