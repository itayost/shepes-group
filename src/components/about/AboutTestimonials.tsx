'use client';

import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { getHomePageTestimonials } from '@/data/testimonials';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';

const AboutTestimonials = () => {
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
    <section className="relative py-20 lg:py-32">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="solid" icon={Star} className="mb-4 animate-fade-in" glow>
            המלצות לקוחות
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            <span className="text-white">מה הלקוחות שלנו </span>
            <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              אומרים
            </span>
          </h2>
          
          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in animation-delay-200">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-primary-500" />
            <Sparkles className="w-6 h-6 text-primary-500" />
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-primary-500" />
          </div>
          
          <p className="text-xl text-dark-300 max-w-2xl mx-auto animate-slide-up animation-delay-300">
            עשרות משפחות מרוצות שמצאו את הבית המושלם
          </p>
        </div>
        
        {/* Testimonial Card - Luxury Style */}
        <div className="max-w-4xl mx-auto">
          <Card variant="luxury" className="relative animate-fade-in animation-delay-400">
            {/* Gold accent gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 to-transparent pointer-events-none" />
            
            <CardContent className="relative p-8 md:p-12">
              {/* Quote Icon with Gold Glow */}
              <div className="absolute top-6 right-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500/30 rounded-full blur-xl" />
                  <Quote className="relative w-12 h-12 text-primary-500/50" />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 text-primary-500 fill-primary-500"
                  />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-xl text-dark-200 text-center mb-8 leading-relaxed">
                {`"${current.content}"`}
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <Avatar 
                  size="lg"
                  fallback={current.name[0]}
                  className="border-2 border-primary-500/30"
                />
                <div>
                  <p className="font-bold text-lg text-white">{current.name}</p>
                  <p className="text-dark-400">{current.type}</p>
                  <Badge variant="ghost" size="sm" className="mt-1">
                    עבדו עם: {current.agent}
                  </Badge>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="ghost"
                  size="sm"
                  icon={ChevronRight}
                  onClick={prevTestimonial}
                  className="rounded-full hover:bg-primary-500/10 hover:text-primary-500"
                />
                
                {/* Dots with Gold Active State */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'w-8 bg-gradient-to-r from-primary-500 to-primary-400 shadow-gold' 
                          : 'w-2 bg-dark-700 hover:bg-dark-600'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  icon={ChevronLeft}
                  onClick={nextTestimonial}
                  className="rounded-full hover:bg-primary-500/10 hover:text-primary-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;