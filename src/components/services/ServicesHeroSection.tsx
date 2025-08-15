'use client';

import Badge from '@/components/ui/Badge';
import { Award, Crown, Shield, Sparkles, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const ServicesHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        {/* Gold Gradient Orbs with Parallax */}
        <div 
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-radial from-primary-500/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-gradient-radial from-primary-600/15 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3705_1px,transparent_1px),linear-gradient(to_bottom,#d4af3705_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Luxury Badge */}
          <Badge 
            variant="solid" 
            size="lg" 
            icon={Crown}
            className="mb-8 animate-fade-in shadow-gold-lg"
            glow
          >
            שירותי נדל"ן ברמה הגבוהה ביותר
          </Badge>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up">
            <span className="text-gradient-gold">השירותים</span>
            <span className="text-white"> שלנו</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-dark-300 mb-6 leading-relaxed animate-slide-up animation-delay-200">
            צוות שפס גרופ מציע מגוון שירותי נדל"ן מקיפים
          </p>
          
          <p className="text-xl text-dark-400 mb-12 animate-slide-up animation-delay-400">
            עם ליווי אישי ומקצועי בכל שלב
          </p>

          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in animation-delay-600">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent to-primary-500" />
            <Sparkles className="w-8 h-8 text-primary-500 animate-pulse" />
            <div className="h-[2px] w-32 bg-gradient-to-l from-transparent to-primary-500" />
          </div>

          {/* Features - Luxury Style */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in animation-delay-800">
            {[
              { icon: Star, text: 'ניסיון של 18+ שנים' },
              { icon: Shield, text: 'מאות לקוחות מרוצים' },
              { icon: Award, text: 'ליווי עד מסירת המפתחות' },
              { icon: Sparkles, text: 'הערכת שווי חינם' }
            ].map((feature, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-6 py-3 bg-black/50 backdrop-blur-sm border-primary-500/30 hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-300"
                size="lg"
              >
                <feature.icon className="w-5 h-5 text-primary-500" />
                <span className="text-white">{feature.text}</span>
              </Badge>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient-gold mb-2">150+</div>
              <div className="text-dark-400">נכסים נמכרו</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient-gold mb-2">98%</div>
              <div className="text-dark-400">שביעות רצון</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient-gold mb-2">21</div>
              <div className="text-dark-400">ימים בממוצע</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient-gold mb-2">24/7</div>
              <div className="text-dark-400">זמינות</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;