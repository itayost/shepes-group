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
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Info & Form Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-dark-950 to-black">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
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
      <div className="relative bg-dark-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <ContactFAQ />
      </div>
    </main>
  );
}