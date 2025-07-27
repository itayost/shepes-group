import ContactForm from '@/components/common/ContactForm';
import { generateSEO } from '@/components/common/SEO';

export const metadata = generateSEO({
  title: 'צור קשר',
  description: 'נשמח לשמוע ממך! צור איתנו קשר וניצור קשר בהקדם.',
  keywords: ['צור קשר', 'יצירת קשר', 'טופס יצירת קשר'],
});

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
}