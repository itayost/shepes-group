// File: src/components/services/ServicesHeroSection.tsx

'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { ArrowLeft, Phone, Star } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ServicesHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-black via-[#0a0a0a] to-black py-20 overflow-hidden">
      {/* Animated Gold Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl opacity-50"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl opacity-50"
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
            className="mb-6 animate-fade-in bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30"
          >
            שירותי נדל{'"'}ן מקיפים
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            השירותים שלנו
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            צוות שפס נדל{'"'}ן מציע מגוון שירותי נדל{'"'}ן מקיפים 
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
                className="px-4 py-2 border-[#D4AF37]/50 text-[#D4AF37] bg-[#D4AF37]/10"
              >
                ✓ {feature}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="gradient" 
                icon={Phone}
                className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black hover:from-[#FFD700] hover:to-[#D4AF37] shadow-gold hover:shadow-gold-glow"
              >
                בואו נדבר
              </Button>
            </Link>
            <Link href="#services">
              <Button 
                size="lg" 
                variant="outline" 
                icon={ArrowLeft}
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
              >
                גלו את השירותים
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;