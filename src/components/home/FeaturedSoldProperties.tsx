'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getFeaturedProperties, getPropertyStats } from '@/data/soldProperties';
import { cn } from '@/lib/utils';
import {
  ArrowLeft,
  Bed,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  Maximize2,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const FeaturedSoldProperties = () => {
  const featuredProperties = getFeaturedProperties();
  const stats = getPropertyStats();
  const [currentIndex, setCurrentIndex] = useState(Math.floor(featuredProperties.length / 2));
  const [isVisible, setIsVisible] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    
    // Calculate drag offset for visual feedback
    const diff = currentTouch - touchStart;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        // Swipe left - go to previous in RTL
        handlePrevious();
      } else {
        // Swipe right - go to next in RTL
        handleNext();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProperties.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length);
  };



  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-background-secondary to-background overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-b from-primary-500/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge 
            variant="outline" 
            className={cn(
              "mb-6 border-primary-500 text-primary-500 bg-primary-500/10 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Sparkles className="w-3 h-3 ml-1" />
            נכסים שנמכרו
          </Badge>
          
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <span className="bg-gradient-to-r from-primary-700 via-primary-500 to-primary-400 bg-clip-text text-transparent">
              הצלחות אחרונות
            </span>
            <span className="text-white"> שלנו</span>
          </h2>
          
          <p className={cn(
            "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            הצטרפו למאות לקוחות מרוצים שמכרו במחיר הטוב ביותר
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative px-4">
            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="relative overflow-hidden rounded-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Sliding Container */}
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(${currentIndex * 100}%)${isDragging ? ` translateX(${dragOffset}px)` : ''}`,
                }}
              >
                {featuredProperties.map((property, index) => (
                  <div
                    key={property.id}
                    className="w-full flex-shrink-0"
                  >
                    <div className="bg-background-card overflow-hidden border border-primary-500/20">
                      {/* Image */}
                      <div className="relative h-48">
                        <Image
                          src={property.images[0]}
                          alt={property.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                        />
                        {/* Sold Badge */}
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-700 via-primary-500 to-primary-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          נמכר!
                        </div>
                        {/* Days on Market */}
                        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-primary-400 px-3 py-1 rounded-full text-xs font-medium">
                          {property.daysOnMarket} ימים בלבד
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {property.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                          <MapPin className="w-4 h-4 text-primary-500" />
                          <span>{property.neighborhood}</span>
                        </div>
                        
                        {/* Property Details */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="text-center p-2 bg-primary-500/10 rounded-lg">
                            <Bed className="w-4 h-4 text-primary-500 mx-auto mb-1" />
                            <span className="text-xs text-gray-300">{property.rooms} חד׳</span>
                          </div>
                          <div className="text-center p-2 bg-primary-500/10 rounded-lg">
                            <Maximize2 className="w-4 h-4 text-primary-500 mx-auto mb-1" />
                            <span className="text-xs text-gray-300">{property.size} מ״ר</span>
                          </div>
                          <div className="text-center p-2 bg-primary-500/10 rounded-lg">
                            <Building2 className="w-4 h-4 text-primary-500 mx-auto mb-1" />
                            <span className="text-xs text-gray-300">קומה {property.floor}</span>
                          </div>
                        </div>
                        
                        {/* Testimonial */}
                        {property.testimonial && (
                          <div className="border-t border-primary-500/20 pt-4">
                            <p className="text-sm text-gray-400 italic mb-2">
                              &ldquo;{property.testimonial.content}&rdquo;
                            </p>
                            <p className="text-xs text-primary-500 font-medium">
                              — {property.testimonial.name}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredProperties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "w-8 bg-gradient-to-r from-primary-500 to-primary-400" 
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  )}
                  aria-label={`Go to property ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Property Counter */}
            <p className="text-center text-xs text-gray-500 mt-2">
              {currentIndex + 1} / {featuredProperties.length}
            </p>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property, index) => (
            <div
              key={property.id}
              className={cn(
                "group bg-background-card rounded-xl overflow-hidden border border-primary-500/20",
                "hover:border-primary-500/40 hover:shadow-lg hover:-translate-y-1",
                "transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms'
              }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Sold Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-700 via-primary-500 to-primary-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  נמכר!
                </div>
                
                {/* Quick Stats Overlay */}
                <div className="absolute bottom-4 right-4 left-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge 
                    variant="outline" 
                    className="bg-black/80 backdrop-blur-sm border-primary-500 text-primary-400"
                  >
                    <Clock className="w-3 h-3 ml-1" />
                    {property.daysOnMarket} ימים
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="bg-black/80 backdrop-blur-sm border-primary-500 text-primary-400"
                  >
                    <Calendar className="w-3 h-3 ml-1" />
                    {property.soldDate}
                  </Badge>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span>{property.neighborhood}</span>
                </div>
                
                {/* Property Details Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-primary-500/10 rounded group-hover:bg-primary-500/20 transition-colors">
                    <Bed className="w-4 h-4 text-primary-500 mx-auto mb-1" />
                    <span className="text-xs text-gray-300">{property.rooms} חד׳</span>
                  </div>
                  <div className="text-center p-2 bg-primary-500/10 rounded group-hover:bg-primary-500/20 transition-colors">
                    <Maximize2 className="w-4 h-4 text-primary-500 mx-auto mb-1" />
                    <span className="text-xs text-gray-300">{property.size} מ״ר</span>
                  </div>
                  <div className="text-center p-2 bg-primary-500/10 rounded group-hover:bg-primary-500/20 transition-colors">
                    <Building2 className="w-4 h-4 text-primary-500 mx-auto mb-1" />
                    <span className="text-xs text-gray-300">קומה {property.floor}</span>
                  </div>
                </div>
                
                {/* Features Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.slice(0, 3).map((feature, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 bg-primary-500/10 text-gray-400 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Testimonial */}
                {property.testimonial && (
                  <div className="border-t border-primary-500/20 pt-4">
                    <p className="text-sm text-gray-400 italic line-clamp-2">
                      &ldquo;{property.testimonial.content}&rdquo;
                    </p>
                    <p className="text-xs text-primary-500 font-medium mt-2">
                      — {property.testimonial.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className={cn(
          "text-center mt-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )} style={{ transitionDelay: '700ms' }}>
          <Link href="/sold-properties">
            <Button 
              size="lg" 
              variant="primary"
              icon={ArrowLeft}
            >
              צפה בכל הנכסים שמכרנו
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSoldProperties;