'use client';

import { cn } from '@/lib/utils';
import { AlertTriangle, CheckCircle, Info, X, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ToastProps {
  message: string;
  description?: string;
  type?: 'success' | 'error' | 'info' | 'warning';
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
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
  };

  const styles = {
    success: 'bg-green-50 text-green-900 border-green-200',
    error: 'bg-red-50 text-red-900 border-red-200',
    info: 'bg-blue-50 text-blue-900 border-blue-200',
    warning: 'bg-yellow-50 text-yellow-900 border-yellow-200',
  };

  const iconStyles = {
    success: 'text-green-600',
    error: 'text-red-600',
    info: 'text-blue-600',
    warning: 'text-yellow-600',
  };

  const positions = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  };

  if (!isVisible) return null;

  const toastContent = (
    <div
      className={cn(
        'fixed z-50 flex items-start gap-3 min-w-[320px] max-w-md',
        'rounded-lg border px-4 py-3 shadow-xl transition-all duration-300',
        styles[type],
        positions[position],
        isExiting ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
      )}
    >
      <span className={cn('mt-0.5', iconStyles[type])}>{icons[type]}</span>
      <div className="flex-1">
        <p className="text-sm font-semibold">{message}</p>
        {description && (
          <p className="mt-1 text-xs opacity-90">{description}</p>
        )}
        {action && (
          <button
            onClick={action.onClick}
            className="mt-2 text-xs font-medium underline hover:no-underline"
          >
            {action.label}
          </button>
        )}
      </div>
      <button
        onClick={handleClose}
        className="ml-4 rounded-lg p-1 hover:bg-black/5 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );

  return createPortal(toastContent, document.body);
}