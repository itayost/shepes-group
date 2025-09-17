// File: src/components/contact/ContactHero.tsx

'use client';

import SharedHero from '@/components/common/SharedHero';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import {
  MessageCircle,
  Phone
} from 'lucide-react';

const ContactHero = () => {
  const subtitle = (
    <>
      צוות שפס גרופ זמין עבורך בכל שאלה, ייעוץ או בקשה
      <br className="hidden md:block" />
      <span className="text-text-gold font-semibold">{SITE_CONFIG.phone}</span> | {SITE_CONFIG.email}
    </>
  );

  const actions = (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href={`tel:${SITE_CONFIG.phone}`}>
        <Button 
          size="lg" 
          variant="primary"
          icon={Phone}
        >
          התקשר עכשיו
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
        >
          שלח וואטסאפ
        </Button>
      </a>
    </div>
  );

  return (
    <SharedHero
      badge="צור קשר"
      title="נשמח לשמוע ממך"
      subtitle={subtitle}
      actions={actions}
      size="md"
      centered={true}
    />
  );
};

export default ContactHero;