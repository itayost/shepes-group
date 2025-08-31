// File: src/components/ui/Modal.tsx

'use client';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  showCloseButton = true,
  className,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />
      
      {/* Modal */}
      <div
        className={cn(
          'relative bg-[#1a1a1a] rounded-xl shadow-gold border border-[#D4AF37]/20 transition-all duration-300',
          'max-h-[90vh] overflow-auto',
          {
            'w-full max-w-sm': size === 'sm',
            'w-full max-w-md': size === 'md',
            'w-full max-w-lg': size === 'lg',
            'w-full max-w-xl': size === 'xl',
            'w-full max-w-full h-full': size === 'full',
          },
          className
        )}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-start justify-between p-6 border-b border-[#D4AF37]/20">
            <div>
              {title && <h3 className="text-2xl font-bold text-[#FFD700]">{title}</h3>}
              {description && <p className="mt-1 text-sm text-gray-400">{description}</p>}
            </div>
            {showCloseButton && (
              <button
                onClick={onClose}
                className="ml-auto rounded-lg p-1.5 text-gray-400 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-6 text-white">{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}