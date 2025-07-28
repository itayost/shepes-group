'use client';

import { HOME_HERO } from '@/lib/constants';
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
          {/* כותרת ראשית */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            {HOME_HERO.title}
          </h1>
          
          {/* כותרת משנית */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
            {HOME_HERO.subtitle}
          </p>
          
          {/* כפתורי פעולה */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {HOME_HERO.cta1}
            </button>
            
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-primary-700 font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
            >
              {HOME_HERO.cta2}
            </Link>
          </div>
          
          {/* נתונים מהירים */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-sm text-white/80">נכסים נמכרו</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-white/80">לקוחות מרוצים</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-white/80">שנות ניסיון</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* חץ גלילה למטה */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      {/* מודל הערכת שווי - בסיסי */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">בקשת הערכת שווי</h3>
            <p className="text-gray-600 mb-4">
              השאירו פרטים ונחזור אליכם תוך 24 שעות עם הערכת שווי מקצועית
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="שם מלא"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <input
                type="tel"
                placeholder="טלפון"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <input
                type="email"
                placeholder="אימייל"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <textarea
                placeholder="פרטים על הנכס (כתובת, גודל, מספר חדרים)"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 h-24"
                required
              />
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  שלח בקשה
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  ביטול
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;