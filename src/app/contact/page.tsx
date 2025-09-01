// File: src/app/contact/page.tsx

import ContactFAQ from '@/components/contact/ContactFAQ';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'צור קשר | ' + SITE_CONFIG.name,
  description: 'נשמח לשמוע ממך! צור איתנו קשר וניצור קשר בהקדם - טלפון, וואטסאפ או שלחו לנו הודעה',
  keywords: ['צור קשר', 'יצירת קשר', 'שפס נדל"ן', 'חיפה', 'נדל"ן'],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      {/* Hero Section with Quick Contact Methods */}
      <ContactHero />

      {/* Contact Info Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ContactFAQ />
    </main>
  );
}