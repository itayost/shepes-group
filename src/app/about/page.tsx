// File: src/app/about/page.tsx

import AboutHero from '@/components/about/AboutHero';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import AgentSection from '@/components/about/AgentSection';
import TimelineSection from '@/components/about/TimelineSection';
import CTASection from '@/components/home/CTASection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'אודות | ' + SITE_CONFIG.name,
  description: 'הכירו את צוות שפס נדל"ן - גלית וחיים שפס, מתווכים מובילים בחיפה עם ניסיון של 18+ שנים',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-luxury">
      {/* Hero Section - Using redesigned component */}
      <AboutHero />

      {/* Agents Section */}
      <AgentSection />

      {/* Timeline Section - Using redesigned component */}
      <TimelineSection />

      {/* Testimonials */}
      <AboutTestimonials />

      {/* CTA Section - Using the redesigned CTASection from home */}
      <CTASection />
    </main>
  );
}