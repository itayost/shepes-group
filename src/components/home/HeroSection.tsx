'use client';

import { HOME_HERO } from '@/lib/constants';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section 
      className="relative min-h-[600px] md:min-h-[700px] bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/haifa-hero.jpg)' 
      }}
    >
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* כותרת ראשית עם אפקט זהב */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            {HOME_HERO.title}
          </h1>
          
          {/* כותרת משנית */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
            {HOME_HERO.subtitle}
          </p>
          
          {/* כפתורי פעולה מעודכנים */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary animate-glow"
            >
              {HOME_HERO.cta1}
            </button>
            
            <Link
              href="/contact"
              className="btn-secondary text-center"
            >
              {HOME_HERO.cta2}
            </Link>
          </div>
          
          {/* נתונים מהירים עם סגנון זהב */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg">
            <div className="text-center text-white animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold gradient-text-gold">150+</div>
              <div className="text-sm mt-1 text-white/80">נכסים נמכרו</div>
            </div>
            <div className="text-center text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold gradient-text-gold">98%</div>
              <div className="text-sm mt-1 text-white/80">לקוחות מרוצים</div>
            </div>
            <div className="text-center text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold gradient-text-gold">15+</div>
              <div className="text-sm mt-1 text-white/80">שנות ניסיון</div>
            </div>
          </div>
        </div>
      </div>

      {/* מודל הערכת שווי חינם */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-slide-up">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="סגור"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold mb-4 gradient-text-gold">הערכת שווי חינם</h3>
            <p className="text-text-secondary mb-6">
              מלאו את הפרטים ונחזור אליכם תוך 24 שעות עם הערכת שווי מקצועית
            </p>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="שם מלא"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="tel"
                placeholder="טלפון"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="text"
                placeholder="כתובת הנכס"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="btn-primary w-full"
              >
                שלחו בקשה
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;