// File: src/app/contact/page.tsx

import ContactFAQ from '@/components/contact/ContactFAQ';
import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'צור קשר | ' + SITE_CONFIG.name,
  description: 'נשמח לשמוע ממך! צור איתנו קשר וניצור קשר בהקדם - טלפון, וואטסאפ או טופס יצירת קשר',
  keywords: ['צור קשר', 'יצירת קשר', 'טופס יצירת קשר', 'שפס נדל"ן', 'חיפה'],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ContactFAQ />
    </main>
  );
}