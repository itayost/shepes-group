// File: src/components/ui/Tabs.tsx

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
  const hasUserInteracted = useRef(false);

  const handleTabChange = (tabId: string) => {
    hasUserInteracted.current = true;
    setActiveTab(tabId);
    onChange?.(tabId);
    
    if (scrollToTopOnChange && tabsSectionRef.current) {
      const yOffset = stickyOffset || -80;
      const element = tabsSectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftGradient(scrollLeft > 0);
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

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

  // Only scroll active tab into view if user has interacted with tabs
  useEffect(() => {
    // Never scroll on mount or without user interaction
    if (!hasUserInteracted.current) return;

    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-tab-id="${activeTab}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  // Prevent any scroll on mount
  useEffect(() => {
    const initialScrollY = window.scrollY;
    
    // Restore scroll position if it changes unexpectedly
    const preventScroll = () => {
      if (!hasUserInteracted.current && window.scrollY !== initialScrollY) {
        window.scrollTo(0, initialScrollY);
      }
    };

    // Use a small delay to catch any async scroll attempts
    const timeouts = [
      setTimeout(preventScroll, 0),
      setTimeout(preventScroll, 50),
      setTimeout(preventScroll, 100),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div ref={tabsSectionRef} className={cn('w-full', className)}>
      <div
        ref={stickyContainerRef}
        className={cn(
          'relative',
          sticky && 'sticky z-40',
          isStuck && 'shadow-gold'
        )}
        style={sticky ? { top: `${stickyOffset}px` } : undefined}
      >
        <div className={cn(
          'absolute inset-0 bg-black',
          variant === 'pills' && 'bg-background-card',
          sticky && isStuck && 'border-b border-primary-500/20'
        )} />
        
        <div className="relative">
          {showLeftGradient && (
            <div className={cn(
              'absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none',
              'bg-gradient-to-r from-black to-transparent',
              variant === 'pills' && 'from-background-card'
            )} />
          )}

          {showRightGradient && (
            <div className={cn(
              'absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none',
              'bg-gradient-to-l from-black to-transparent',
              variant === 'pills' && 'from-background-card'
            )} />
          )}

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className={cn(
              'flex overflow-x-auto scrollbar-hide relative',
              {
                'border-b border-primary-500/20': (variant === 'default' || variant === 'underline') && !isStuck,
                'gap-2 bg-background-card p-1 rounded-lg': variant === 'pills',
                'py-2': sticky && variant !== 'pills',
              },
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
                  'whitespace-nowrap flex-shrink-0',
                  {
                    'border-b-2': variant === 'default' || variant === 'underline',
                    
                    'border-primary-500 text-primary-500': variant === 'default' && activeTab === tab.id,
                    'border-primary-500 text-white': variant === 'underline' && activeTab === tab.id,
                    'border-transparent text-gray-400 hover:text-white': (variant === 'default' || variant === 'underline') && activeTab !== tab.id,
                    
                    'rounded-lg': variant === 'pills',
                    'bg-black shadow-gold text-primary-500': variant === 'pills' && activeTab === tab.id,
                    'text-gray-400 hover:text-white': variant === 'pills' && activeTab !== tab.id,
                    
                    '-mb-px': (variant === 'default' || variant === 'underline') && !sticky,
                    'mb-[-2px]': (variant === 'default' || variant === 'underline') && sticky,
                  }
                )}
              >
                {tab.icon}
                <span className={cn('text-sm md:text-base')}>
                  {tab.label}
                </span>
                {tab.badge && (
                  <span className="ml-1 px-2 py-0.5 text-xs font-medium bg-primary-500/20 text-primary-500 rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className={cn('mt-6', sticky && 'min-h-[600px]')}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}