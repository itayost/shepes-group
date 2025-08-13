'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string | number;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
  onChange?: (tabId: string) => void;
}

export default function Tabs({
  tabs,
  defaultTab,
  variant = 'default',
  className,
  onChange,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Tab List */}
      <div className={cn(
        'flex',
        {
          'border-b border-gray-200': variant === 'default' || variant === 'underline',
          'gap-2 bg-gray-100 p-1 rounded-lg': variant === 'pills',
        }
      )}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              'flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200',
              {
                // Default variant
                'border-b-2 -mb-px': variant === 'default',
                'border-primary-600 text-primary-600': variant === 'default' && activeTab === tab.id,
                'border-transparent text-gray-600 hover:text-gray-900': variant === 'default' && activeTab !== tab.id,
                
                // Pills variant
                'rounded-lg': variant === 'pills',
                'bg-white shadow-sm text-gray-900': variant === 'pills' && activeTab === tab.id,
                'text-gray-600 hover:text-gray-900': variant === 'pills' && activeTab !== tab.id,
                
                // Underline variant
                'border-b-2 -mb-px': variant === 'underline',
                'border-primary-600 text-gray-900': variant === 'underline' && activeTab === tab.id,
                'border-transparent text-gray-600 hover:text-gray-900': variant === 'underline' && activeTab !== tab.id,
              }
            )}
          >
            {tab.icon}
            {tab.label}
            {tab.badge && (
              <span className="ml-1 px-2 py-0.5 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>
      
      {/* Tab Panel */}
      <div className="mt-6">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}