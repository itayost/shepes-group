'use client';

import { getHomePageTestimonials } from '@/data/testimonials';
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
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">מה הלקוחות שלנו אומרים</h2>
          <p className="text-xl text-gray-600">
            עשרות משפחות מרוצות שמצאו את הבית המושלם
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            {/* כוכבי דירוג */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-3xl text-yellow-400">★</span>
              ))}
            </div>
            
            {/* תוכן ההמלצה */}
            <blockquote className="text-xl text-gray-700 text-center mb-6 italic">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            {/* שם הלקוח */}
            <div className="text-center">
              <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].type}</p>
              <p className="text-sm text-primary-600 mt-1">עבדו עם: {testimonials[currentIndex].agent}</p>
            </div>
            
            {/* כפתורי ניווט */}
            <button
              onClick={prevTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
              aria-label="המלצה קודמת"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
              aria-label="המלצה הבאה"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          {/* אינדיקטורים */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`המלצה ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;