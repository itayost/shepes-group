// File: src/components/properties/PropertyGrid.tsx

'use client';

import SoldPropertyCard from '@/components/properties/SoldPropertyCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { SoldProperty } from '@/data/soldProperties';
import { cn } from '@/lib/utils';
import {
  ArrowLeft,
  Home,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface PropertyGridProps {
  properties: SoldProperty[];
}

const PropertyGrid = ({ properties }: PropertyGridProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(properties.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger staggered animations for cards
          properties.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [properties]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden"
    >
      {/* Simple background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-[#D4AF37]/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge 
            variant="outline" 
            className={cn(
              "mb-6 border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Sparkles className="w-3 h-3 ml-1" />
            הנכסים שלנו
          </Badge>
          
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              עסקאות אחרונות
            </span>
          </h2>
          
          <p className={cn(
            "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {properties.length} נכסים נמכרו בהצלחה
          </p>
        </div>

        {/* Mobile: Single column with cards */}
        <div className="md:hidden space-y-6">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={cn(
                "transition-all duration-700",
                visibleCards[index] 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
            >
              <SoldPropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={cn(
                "transition-all duration-700",
                visibleCards[index] 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <SoldPropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {properties.length > 6 && (
          <div className={cn(
            "text-center mt-16 p-8 bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] rounded-xl border border-[#D4AF37]/20 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: '600ms' }}>
            <Home className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              מעוניינים למכור את הנכס שלכם?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              הצטרפו למאות הלקוחות המרוצים שלנו וקבלו את המחיר הטוב ביותר
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="primary"
                icon={ArrowLeft}
              >
                קבלו הערכת שווי חינם
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;