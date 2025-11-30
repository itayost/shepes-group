// File: src/app/about/page.tsx

import AboutHero from '@/components/about/AboutHero';
import AgentSection from '@/components/about/AgentSection';
import TimelineSection from '@/components/about/TimelineSection';
import CTASection from '@/components/home/CTASection';
import { SITE_CONFIG } from '@/lib/constants';

const pageDescription = 'הכירו את צוות שפס גרופ - גלית וחיים שפס, צוות מומחה נדל״ן מקצועי ומנוסה עם מעל 10 שנות ניסיון בשוק הנדל״ן החיפאי והסביבה';

export const metadata = {
  title: 'אודות | ' + SITE_CONFIG.name,
  description: pageDescription,
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: 'אודות | ' + SITE_CONFIG.name,
    description: pageDescription,
    url: `${SITE_CONFIG.url}/about`,
    type: 'website',
  },
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

      {/* CTA Section - Using the redesigned CTASection from home */}
      <CTASection />
    </main>
  );
}