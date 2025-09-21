'use client';

import Badge from '@/components/ui/Badge';
import { getHomePageTestimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home,
  MapPin,
  Quote,
  Star
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
  const testimonials = getHomePageTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHorizontalSwipe, setIsHorizontalSwipe] = useState<boolean | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Set initial index to middle after mount to avoid hydration issues
  useEffect(() => {
    if (testimonials.length > 0) {
      setCurrentIndex(Math.floor(testimonials.length / 2));
    }
  }, [testimonials.length]);

  // Intersection Observer for fade-in animation
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

  // Navigation functions
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
    setIsDragging(true);
    setIsHorizontalSwipe(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentTouchX = e.targetTouches[0].clientX;
    const currentTouchY = e.targetTouches[0].clientY;

    // Determine if this is a horizontal or vertical swipe
    if (isHorizontalSwipe === null) {
      const diffX = Math.abs(currentTouchX - touchStart);
      const diffY = Math.abs(currentTouchY - touchStartY);

      // Only consider it a horizontal swipe if X movement is greater than Y
      if (diffX > 5 || diffY > 5) {
        setIsHorizontalSwipe(diffX > diffY);
      }
    }

    // Only handle horizontal swipes
    if (isHorizontalSwipe === false) {
      return;
    }

    setTouchEnd(currentTouchX);

    // Calculate drag offset for visual feedback
    const diff = currentTouchX - touchStart;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isHorizontalSwipe !== true) {
      setIsDragging(false);
      setDragOffset(0);
      setIsHorizontalSwipe(null);
      return;
    }

    const distance = touchStart - touchEnd;
    const threshold = 50; // Minimum swipe distance

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        // Swipe left - go to previous in RTL
        prevTestimonial();
      } else {
        // Swipe right - go to next in RTL
        nextTestimonial();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setIsHorizontalSwipe(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') nextTestimonial();
      if (e.key === 'ArrowRight') prevTestimonial();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-background to-background-secondary overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-primary-500/5 to-transparent blur-3xl pointer-events-none" />
      
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
            המלצות לקוחות
          </Badge>
          
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <span className="text-white">מה </span>
            <span className="bg-gradient-to-r from-primary-700 via-primary-500 to-primary-400 bg-clip-text text-transparent">
              הלקוחות שלנו
            </span>
            <span className="text-white"> אומרים</span>
          </h2>
          
          <p className={cn(
            "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            עשרות משפחות מרוצות שמצאו את הבית המושלם
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative px-4">
            {/* Carousel Container */}
            <div
              className="relative overflow-hidden rounded-2xl touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: 'pan-y pinch-zoom' }}
            >
              {/* Sliding Container */}
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(calc(${currentIndex * 100}% + ${isDragging && isHorizontalSwipe ? dragOffset : 0}px))`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0"
                  >
                    <div className="bg-background-card border border-primary-500/30 p-6">
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 text-primary-400 fill-primary-400"
                          />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <div className="relative mb-6">
                        <Quote className="absolute -top-2 -right-2 w-8 h-8 text-primary-500/20" />
                        <p className="text-gray-200 leading-relaxed pr-6">
                          {testimonial.content}
                        </p>
                      </div>
                      
                      {/* Property Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {testimonial.propertyType && (
                          <Badge 
                            variant="outline" 
                            size="sm"
                            className="border-primary-500/30 text-gray-400 bg-transparent"
                          >
                            <Home className="w-3 h-3 ml-1" />
                            {testimonial.propertyType}
                          </Badge>
                        )}
                        {testimonial.neighborhood && (
                          <Badge 
                            variant="outline" 
                            size="sm"
                            className="border-primary-500/30 text-gray-400 bg-transparent"
                          >
                            <MapPin className="w-3 h-3 ml-1" />
                            {testimonial.neighborhood}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Author */}
                      <div className="flex items-center justify-between border-t border-primary-500/20 pt-4">
                        <div>
                          <p className="font-bold text-primary-400">{testimonial.name}</p>
                          <p className="text-sm text-gray-400">{testimonial.type}</p>
                        </div>
                        <Badge 
                          variant="outline" 
                          size="sm"
                          className="border-primary-500 text-primary-500 bg-primary-500/10"
                        >
                          {testimonial.agent}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "w-8 bg-gradient-to-r from-primary-500 to-primary-400" 
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Counter */}
            <p className="text-center text-xs text-gray-500 mt-2">
              {currentIndex + 1} / {testimonials.length}
            </p>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.slice(0, 4).map((testimonial, index) => {
              const isLarge = index === 0 || index === 3;
              
              return (
                <div
                  key={testimonial.id}
                  className={cn(
                    "bg-background-card border border-primary-500/20 rounded-xl",
                    "hover:border-primary-500/40 hover:shadow-lg",
                    "transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    isLarge && "md:col-span-2"
                  )}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 100}ms` : '0ms'
                  }}
                >
                  {/* Large Card Layout */}
                  {isLarge ? (
                    <div className="p-8 h-full flex flex-col">
                      {/* Top Section with Author and Rating */}
                      <div className="flex justify-between items-start mb-6">
                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500/20 to-primary-400/20 flex items-center justify-center">
                            <span className="text-xl font-bold text-primary-500">
                              {testimonial.name[0]}
                            </span>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-primary-400">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-gray-400">{testimonial.type}</p>
                          </div>
                        </div>
                        
                        {/* Agent Badge */}
                        <Badge 
                          variant="outline" 
                          className="border-primary-500 text-primary-500 bg-primary-500/10"
                        >
                          {testimonial.agent}
                        </Badge>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5 text-primary-400 fill-primary-400"
                          />
                        ))}
                      </div>
                      
                      {/* Quote - Takes up main space */}
                      <div className="relative flex-1 mb-6">
                        <Quote className="absolute -top-2 -right-2 w-12 h-12 text-primary-500/20" />
                        <p className="text-lg text-gray-200 leading-relaxed pr-10">
                          {testimonial.content}
                        </p>
                      </div>
                      
                      {/* Property Tags - Bottom */}
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-primary-500/20">
                        {testimonial.propertyType && (
                          <Badge 
                            variant="outline" 
                            size="sm"
                            className="border-primary-500/30 text-gray-400 bg-transparent"
                          >
                            <Home className="w-3 h-3 ml-1" />
                            {testimonial.propertyType}
                          </Badge>
                        )}
                        {testimonial.neighborhood && (
                          <Badge 
                            variant="outline" 
                            size="sm"
                            className="border-primary-500/30 text-gray-400 bg-transparent"
                          >
                            <MapPin className="w-3 h-3 ml-1" />
                            {testimonial.neighborhood}
                          </Badge>
                        )}
                        {testimonial.date && (
                          <Badge 
                            variant="outline" 
                            size="sm"
                            className="border-primary-500/30 text-gray-400 bg-transparent"
                          >
                            <Calendar className="w-3 h-3 ml-1" />
                            {new Date(testimonial.date).toLocaleDateString('he-IL', { 
                              month: 'short', 
                              year: 'numeric' 
                            })}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Regular Card Layout */
                    <div className="p-6 h-full flex flex-col">
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 text-primary-400 fill-primary-400"
                          />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <div className="relative flex-1 mb-6">
                        <Quote className="absolute -top-2 -right-2 w-8 h-8 text-primary-500/20" />
                        <p className="text-gray-200 leading-relaxed pr-8">
                          {testimonial.content}
                        </p>
                      </div>
                      
                      {/* Property Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {testimonial.propertyType && (
                          <Badge 
                            variant="outline" 
                            size="sm"
                            className="border-primary-500/30 text-gray-400 bg-transparent"
                          >
                            <Home className="w-3 h-3 ml-1" />
                            {testimonial.propertyType}
                          </Badge>
                        )}
                        {testimonial.neighborhood && (
                          <Badge 
                            variant="outline" 
                            size="sm"
                            className="border-primary-500/30 text-gray-400 bg-transparent"
                          >
                            <MapPin className="w-3 h-3 ml-1" />
                            {testimonial.neighborhood}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Author */}
                      <div className="flex items-center justify-between border-t border-primary-500/20 pt-4">
                        <div>
                          <p className="font-bold text-primary-400">{testimonial.name}</p>
                          <p className="text-sm text-gray-400">{testimonial.type}</p>
                        </div>
                        <Badge 
                          variant="outline" 
                          size="sm"
                          className="border-primary-500 text-primary-500 bg-primary-500/10"
                        >
                          {testimonial.agent}
                        </Badge>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Desktop Navigation (if more than 4 testimonials) */}
          {testimonials.length > 4 && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-background-card border border-primary-500/30 hover:border-primary-500 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronRight className="w-5 h-5 text-primary-500" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-background-card border border-primary-500/30 hover:border-primary-500 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-primary-500" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;