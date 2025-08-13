import AboutHero from '@/components/about/AboutHero';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import AgentSection from '@/components/about/AgentSection';
import TimelineSection from '@/components/about/TimelineSection';
import ValuesSection from '@/components/about/ValuesSection';
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
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <AboutHero />

      {/* Agents Section */}
      <AgentSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Testimonials */}
      <AboutTestimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <Badge variant="secondary" size="lg" className="mb-6 bg-white/10 text-white border-white/20">
              בואו נתחיל
            </Badge>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              בואו נתחיל את המסע שלכם לבית החדש
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
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
                  className="bg-white text-primary-700 hover:bg-gray-100 shadow-2xl"
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
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
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