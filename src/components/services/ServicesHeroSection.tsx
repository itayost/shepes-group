'use client';

import Badge from '@/components/ui/Badge';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const ServicesHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-gray-50 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge 
            variant="primary" 
            size="lg" 
            icon={Star}
            className="mb-6 animate-fade-in"
          >
            שירותי נדל{'"'}ן מקיפים
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            השירותים שלנו
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            צוות שפס גרופ מציע מגוון שירותי נדל{'"'}ן מקיפים 
            <br />
            עם ליווי אישי ומקצועי בכל שלב
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in animation-delay-400">
            {[
              'ניסיון של 18+ שנים',
              'מאות לקוחות מרוצים',
              'ליווי עד מסירת המפתחות',
              'הערכת שווי חינם'
            ].map((feature, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2"
              >
                ✓ {feature}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;