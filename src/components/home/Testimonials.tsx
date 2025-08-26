'use client';

import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { getHomePageTestimonials } from '@/data/testimonials';
import { ChevronLeft, ChevronRight, MessageCircle, Quote, Star } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const testimonials = getHomePageTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" size="lg" className="mb-6 animate-fade-in" glow>
            <MessageCircle className="w-4 h-4" />
            המלצות לקוחות
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-white">מה </span>
            <span className="text-gradient-gold">הלקוחות שלנו</span>
            <span className="text-white"> אומרים</span>
          </h2>
          
          <p className="text-xl text-dark-300 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            עשרות משפחות מרוצות שמצאו את הבית המושלם
          </p>
        </div>
        
        {/* Testimonial Card - Luxury Style */}
        <div className="max-w-4xl mx-auto">
          <Card variant="luxury" className="relative animate-fade-in" glow>
            {/* Gold Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
            
            <CardContent className="p-12 md:p-16">
              {/* Quote Icon - Large and Elegant */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Quote className="w-20 h-20 text-primary-500/20" />
                  <div className="absolute inset-0 bg-primary-500/10 blur-2xl" />
                </div>
              </div>
              
              {/* Rating - Gold Stars */}
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(current.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-8 h-8 text-primary-500 fill-primary-500 drop-shadow-gold"
                  />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="text-2xl text-dark-200 text-center mb-12 leading-relaxed font-light">
                <span className="text-primary-500 text-3xl">"</span>
                {current.content}
                <span className="text-primary-500 text-3xl">"</span>
              </blockquote>
              
              {/* Divider */}
              <div className="divider-gold mb-8" />
              
              {/* Author Section */}
              <div className="flex flex-col items-center">
                {/* Avatar with Gold Ring */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-md opacity-50" />
                  <Avatar 
                    size="xl"
                    fallback={current.name[0]}
                    className="relative border-2 border-primary-500"
                  />
                </div>
                
                {/* Author Info */}
                <div className="text-center">
                  <p className="text-2xl font-bold text-white mb-1">{current.name}</p>
                  <p className="text-primary-400 mb-2">{current.type}</p>
                  <Badge variant="outline" size="sm" className="text-dark-400 border-dark-700">
                    עבדו עם: {current.agent}
                  </Badge>
                </div>
              </div>
            </CardContent>
            
            {/* Navigation - Elegant Style */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="pointer-events-auto rounded-full bg-black/50 backdrop-blur-sm border border-primary-500/30 hover:border-primary-500 hover:bg-primary-500/10"
              >
                <ChevronRight className="w-6 h-6 text-primary-500" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="pointer-events-auto rounded-full bg-black/50 backdrop-blur-sm border border-primary-500/30 hover:border-primary-500 hover:bg-primary-500/10"
              >
                <ChevronLeft className="w-6 h-6 text-primary-500" />
              </Button>
            </div>
          </Card>
          
          {/* Dots Indicator - Luxury Style */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-500 ${
                  index === currentIndex 
                    ? 'w-12 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-gold' 
                    : 'w-3 h-3 bg-dark-700 hover:bg-dark-600 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;