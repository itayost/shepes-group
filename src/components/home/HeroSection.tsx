import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const CONTACT_CTAS = {
    PHONE: { href: 'tel:0544994417', label: '054-4994417' },
    EMAIL: { href: 'mailto:info@itayost.com', label: 'info@itayost.com' },
    WHATSAPP: { href: 'https://wa.me/972544994417', label: 'WhatsApp' },
  };
  
  return (
    <section className="relative min-h-[100dvh] sm:min-h-[90vh] flex items-center overflow-hidden bg-gradient-luxury-mobile sm:bg-gradient-luxury">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-accent-500/5" />
      
      <div className="container-mobile relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Elegant badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-gold-mobile rounded-full mb-6 sm:mb-8 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse" />
            <span className="text-sm sm:text-base font-bold text-white">
              פתרונות דיגיטליים ברמה אחרת
            </span>
            <span className="text-lg sm:text-xl">✨</span>
          </div>
          
          {/* Responsive headline */}
          <h1 
            className={`text-display-sm sm:text-display lg:text-display-lg font-display font-bold mb-4 sm:mb-6 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '100ms' }}
          >
            <span className="block text-white mb-2">
              נשבור את הכללים
            </span>
            <span className="block gradient-text-gold mt-2">
              נבנה את העתיד
            </span>
          </h1>
          
          {/* Mobile-optimized subtitle */}
          <p 
            className={`text-lg sm:text-xl md:text-2xl text-secondary-300 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            אתרים, אפליקציות ומערכות
            <span className="text-primary-400 font-bold"> שמניעים את העסק שלך קדימה</span>
            <br className="hidden sm:block" />
            <span className="text-sm sm:text-base text-secondary-400 block mt-2">
              מחירים הוגנים • יחס אישי • תוצאות מוכחות
            </span>
          </p>
          
          {/* Mobile-optimized CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            <button className="btn-primary btn-mobile-full text-base sm:text-lg font-bold min-h-[52px]">
              <span className="mr-2">🔥</span>
              בואו נתחיל משהו גדול
            </button>
            
            <a
              href={CONTACT_CTAS.PHONE.href}
              className="btn-secondary btn-mobile-full text-base sm:text-lg font-bold min-h-[52px]"
            >
              <span className="mr-2 text-xl sm:text-2xl">📞</span>
              054-4994417
            </a>
          </div>
          
          {/* Mobile-friendly trust indicators */}
          <div 
            className={`flex flex-wrap items-center justify-center gap-4 sm:gap-8 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '400ms' }}
          >
            {[
              { icon: '✓', text: '150+ פרויקטים' },
              { icon: '✓', text: '5 שנות ניסיון' },
              { icon: '✓', text: '98% שביעות רצון' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-primary-300/20"
              >
                <span className="text-primary-400 text-base sm:text-xl">{item.icon}</span>
                <span className="text-white text-sm sm:text-base font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          
          {/* Alternative CTA - hidden on very small screens */}
          <div 
            className={`mt-8 sm:mt-12 hidden xs:block transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '500ms' }}
          >
            <a href="/services" className="btn-outline">
              רוצה לראות מה אנחנו יכולים לעשות? →
            </a>
          </div>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 mobile-only">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-primary-400/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-primary-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}