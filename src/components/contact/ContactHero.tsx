// File: src/components/contact/ContactHero.tsx

import Badge from '@/components/ui/Badge';
import { Phone } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-[#0a0a0a] to-black py-20 overflow-hidden">
      {/* Animated Gold Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl opacity-50 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge 
            variant="primary" 
            size="lg" 
            icon={Phone}
            className="mb-6 animate-fade-in bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30"
          >
            בואו נדבר
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            צור קשר
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            אנחנו כאן בשבילכם בכל שאלה, התייעצות או בקשה
            <br />
            זמינים 24/7 בטלפון, וואטסאפ ואימייל
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;