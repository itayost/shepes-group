'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

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
  sticky?: boolean;
  stickyOffset?: number;
  scrollToTopOnChange?: boolean;
}

export default function Tabs({
  tabs,
  defaultTab,
  variant = 'default',
  className,
  onChange,
  sticky = false,
  stickyOffset = 0,
  scrollToTopOnChange = false,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabsSectionRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
    
    // Scroll to top of the tabs section when changing tabs
    if (scrollToTopOnChange && tabsSectionRef.current) {
      const yOffset = stickyOffset || -80; // Adjust based on header height
      const element = tabsSectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Check scroll position to show/hide gradient indicators
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftGradient(scrollLeft > 0);
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Check if tabs are stuck (for visual feedback)
  useEffect(() => {
    if (!sticky || !stickyContainerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      {
        threshold: 1,
        rootMargin: `-${stickyOffset + 1}px 0px 0px 0px`,
      }
    );

    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '-1px';
    sentinel.style.left = '0';
    sentinel.style.right = '0';
    sentinel.style.height = '1px';
    stickyContainerRef.current.appendChild(sentinel);

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      if (sentinel.parentNode) {
        sentinel.parentNode.removeChild(sentinel);
      }
    };
  }, [sticky, stickyOffset]);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [tabs]);

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-tab-id="${activeTab}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  return (
    <div ref={tabsSectionRef} className={cn('w-full', className)}>
      {/* Sticky Container */}
      <div
        ref={stickyContainerRef}
        className={cn(
          'relative',
          sticky && 'sticky z-40',
          sticky && `top-[${stickyOffset}px]`,
          // Add shadow when stuck
          isStuck && 'shadow-md'
        )}
        style={sticky ? { top: `${stickyOffset}px` } : undefined}
      >
        {/* Background for sticky tabs */}
        <div className={cn(
          'absolute inset-0 bg-white',
          variant === 'pills' && 'bg-gray-100',
          sticky && isStuck && 'border-b border-gray-200'
        )} />
        
        {/* Tab List Container with gradient indicators */}
        <div className="relative">
          {/* Left gradient indicator */}
          {showLeftGradient && (
            <div className={cn(
              'absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none',
              'bg-gradient-to-r from-white to-transparent',
              variant === 'pills' && 'from-gray-100'
            )} />
          )}

          {/* Right gradient indicator */}
          {showRightGradient && (
            <div className={cn(
              'absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none',
              'bg-gradient-to-l from-white to-transparent',
              variant === 'pills' && 'from-gray-100'
            )} />
          )}

          {/* Scrollable Tab List */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className={cn(
              'flex overflow-x-auto scrollbar-hide relative',
              {
                'border-b border-gray-200': (variant === 'default' || variant === 'underline') && !isStuck,
                'gap-2 bg-gray-100 p-1 rounded-lg': variant === 'pills',
                'py-2': sticky && variant !== 'pills', // Add padding for sticky tabs
              },
              // Hide scrollbar but keep functionality
              'scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]',
              '[&::-webkit-scrollbar]:hidden'
            )}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                data-tab-id={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200',
                  'whitespace-nowrap flex-shrink-0', // Prevent wrapping and shrinking
                  {
                    // Default variant
                    'border-b-2': variant === 'default',
                    'border-primary-600 text-primary-600': variant === 'default' && activeTab === tab.id,
                    'border-transparent text-gray-600 hover:text-gray-900': variant === 'default' && activeTab !== tab.id,
                    '-mb-px': variant === 'default' && !sticky,
                    'mb-[-2px]': variant === 'default' && sticky,
                    
                    // Pills variant
                    'rounded-lg': variant === 'pills',
                    'bg-white shadow-sm text-gray-900': variant === 'pills' && activeTab === tab.id,
                    'text-gray-600 hover:text-gray-900': variant === 'pills' && activeTab !== tab.id,
                    
                    // Underline variant
                    'border-b-2': variant === 'underline',
                    'border-primary-600 text-gray-900': variant === 'underline' && activeTab === tab.id,
                    'border-transparent text-gray-600 hover:text-gray-900': variant === 'underline' && activeTab !== tab.id,
                    '-mb-px': variant === 'underline' && !sticky,
                    'mb-[-2px]': variant === 'underline' && sticky,
                  }
                )}
              >
                {tab.icon}
                <span className={cn(
                  'text-sm md:text-base', // Responsive text size
                )}>
                  {tab.label}
                </span>
                {tab.badge && (
                  <span className="ml-1 px-2 py-0.5 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tab Panel */}
      <div className={cn(
        'mt-6',
        sticky && 'min-h-[600px]' // Ensure content area has minimum height for scrolling
      )}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}