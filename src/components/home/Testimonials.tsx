// File: src/components/home/Testimonials.tsx

'use client';

import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { getHomePageTestimonials } from '@/data/testimonials';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
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
    <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="primary" icon={Star} className="mb-4 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]">
            המלצות לקוחות
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            עשרות משפחות מרוצות שמצאו את הבית המושלם
          </p>
        </div>
        
        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated" className="relative bg-[#1a1a1a] border border-[#D4AF37]/30 shadow-gold">
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-12 h-12 text-[#D4AF37]/30" />
              </div>
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 text-[#FFD700] fill-[#FFD700]"
                  />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-xl text-gray-200 text-center mb-8 leading-relaxed">
                {`"${current.content}"`}
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <Avatar 
                  size="lg"
                  fallback={current.name[0]}
                  border
                  className="border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                />
                <div>
                  <p className="font-bold text-lg text-[#FFD700]">{current.name}</p>
                  <p className="text-gray-400">{current.type}</p>
                  <Badge variant="outline" size="sm" className="mt-1 border-[#D4AF37]/50 text-[#D4AF37] bg-[#D4AF37]/10">
                    עבדו עם: {current.agent}
                  </Badge>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="ghost"
                  size="sm"
                  icon={ChevronRight}
                  onClick={prevTestimonial}
                  className="rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20"
                />
                
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'w-8 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]' 
                          : 'w-2 bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  icon={ChevronLeft}
                  onClick={nextTestimonial}
                  className="rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;