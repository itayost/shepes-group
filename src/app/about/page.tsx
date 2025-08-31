// File: src/app/about/page.tsx

import AboutHero from '@/components/about/AboutHero';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import AgentSection from '@/components/about/AgentSection';
import TimelineSection from '@/components/about/TimelineSection';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { MessageCircle, Phone } from 'lucide-react';

export const metadata = {
  title: 'אודות | ' + SITE_CONFIG.name,
  description: 'הכירו את צוות שפס נדל"ן - גלית וחיים שפס, מתווכים מובילים בחיפה עם ניסיון של 18+ שנים',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      {/* Hero Section */}
      <AboutHero />

      {/* Agents Section */}
      <AgentSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Testimonials */}
      <AboutTestimonials />

      {/* CTA Section - Black & Gold */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-black relative overflow-hidden border-t border-[#D4AF37]/20">
        {/* Decorative Gold Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <Badge variant="secondary" size="lg" className="mb-6 bg-[#D4AF37]/20 text-[#FFD700] border-[#D4AF37]/50">
              בואו נתחיל
            </Badge>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              בואו נתחיל את המסע שלכם לבית החדש
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              עם ניסיון משותף של 18+ שנים ומאות לקוחות מרוצים,
              <br />
              אנחנו כאן כדי להפוך את החלום שלכם למציאות
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Button 
                  size="lg" 
                  variant="secondary"
                  icon={Phone}
                  className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black hover:from-[#FFD700] hover:to-[#D4AF37] shadow-gold hover:shadow-gold-glow font-bold"
                >
                  דברו איתנו: {SITE_CONFIG.phone}
                </Button>
              </a>
              
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  icon={MessageCircle}
                  className="bg-black/50 backdrop-blur-sm text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold"
                >
                  שלחו וואטסאפ
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}