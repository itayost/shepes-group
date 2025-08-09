'use client';

import { getHomePageTestimonials } from '@/data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const testimonials = getHomePageTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-background-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">מה הלקוחות שלנו אומרים</h2>
          <p className="text-xl text-text-secondary">
            עשרות משפחות מרוצות שמצאו את הבית המושלם
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-gold p-8 relative">
            {/* כוכבי דירוג מעודכנים */}
            <div className="flex justify-center mb-4 gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-7 h-7 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            
            {/* תוכן ההמלצה */}
            <blockquote className="text-xl text-text-primary text-center mb-6 italic">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            {/* שם הלקוח */}
            <div className="text-center">
              <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-text-secondary">{testimonials[currentIndex].type}</p>
              <p className="text-sm text-primary-600 mt-1">עבדו עם: {testimonials[currentIndex].agent}</p>
            </div>
            
            {/* כפתורי ניווט מעודכנים */}
            <button
              onClick={prevTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-primary-50 hover:shadow-gold rounded-full p-2 transition-all duration-300"
              aria-label="המלצה קודמת"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-primary-50 hover:shadow-gold rounded-full p-2 transition-all duration-300"
              aria-label="המלצה הבאה"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* אינדיקטורים */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index 
                  ? 'bg-primary-600 w-8' 
                  : 'bg-gray-300 hover:bg-primary-300'
              }`}
              aria-label={`המלצה ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;