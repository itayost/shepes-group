import AboutHero from '@/components/about/AboutHero';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import AgentSection from '@/components/about/AgentSection';
import TimelineSection from '@/components/about/TimelineSection';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'אודות | ' + SITE_CONFIG.name,
  description: 'הכירו את צוות שפס נדל"ן - גלית וחיים שפס, מתווכים מובילים בחיפה עם ניסיון של 18+ שנים',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <AboutHero />

      {/* Agents Section */}
      <div className="relative bg-gradient-to-b from-black via-dark-950 to-black">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        </div>
        <AgentSection />
      </div>

      {/* Timeline Section */}
      <div className="relative bg-dark-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <TimelineSection />
      </div>

      {/* Testimonials */}
      <div className="relative bg-gradient-to-b from-dark-950 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none" />
        <AboutTestimonials />
      </div>

      {/* CTA Section - Luxury Style */}
      <section className="relative py-20 lg:py-32 bg-black overflow-hidden">
        {/* Gold gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-500/20 to-transparent blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <Badge 
              variant="solid" 
              size="lg" 
              className="mb-6 animate-fade-in"
              glow
            >
              בואו נתחיל
            </Badge>

            {/* Title with Gold Gradient */}
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-white">בואו נתחיל את המסע שלכם</span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                לבית החדש
              </span>
            </h2>

            {/* Luxury Divider */}
            <div className="flex items-center justify-center gap-4 my-8 animate-fade-in animation-delay-200">
              <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-primary-500" />
              <Sparkles className="w-6 h-6 text-primary-500" />
              <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-primary-500" />
            </div>

            {/* Subtitle */}
            <p className="text-xl text-dark-300 mb-12 leading-relaxed animate-slide-up animation-delay-300">
              עם ניסיון משותף של 18+ שנים ומאות לקוחות מרוצים,
              <br />
              <span className="text-primary-500 font-semibold">
                אנחנו כאן כדי להפוך את החלום שלכם למציאות
              </span>
            </p>

            {/* CTA Buttons - Luxury Style */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up animation-delay-400">
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Button 
                  size="xl" 
                  variant="primary"
                  icon={Phone}
                  className="min-w-[250px] shadow-gold-xl hover:shadow-gold-2xl text-lg font-bold"
                  glow
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
                  size="xl" 
                  variant="secondary"
                  icon={MessageCircle}
                  className="min-w-[250px] text-lg font-bold"
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