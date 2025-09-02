// File: src/components/ui/Dropdown.tsx

'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  position?: 'left' | 'right' | 'center';
  className?: string;
}

export default function Dropdown({
  trigger,
  items,
  position = 'left',
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  };

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      
      {isOpen && (
        <div
          className={cn(
            'absolute z-50 mt-2 min-w-[200px]',
            'bg-background-card rounded-lg shadow-gold border border-primary-500/20',
            'transition-all duration-200 animate-in fade-in slide-in-from-top-2',
            positionClasses[position]
          )}
        >
          <div className="py-2">
            {items.map((item, index) => {
              if (item.divider) {
                return <div key={index} className="my-2 border-t border-primary-500/10" />;
              }
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.onClick?.();
                    setIsOpen(false);
                  }}
                  disabled={item.disabled}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left',
                    'text-gray-300 hover:text-white hover:bg-primary-500/10 transition-colors',
                    item.disabled && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {item.icon && <span className="text-primary-500">{item.icon}</span>}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}