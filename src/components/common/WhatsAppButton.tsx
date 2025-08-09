import { SITE_CONFIG } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent('שלום, אני מעוניין/ת לקבל מידע נוסף על שירותי הנדל"ן שלכם');
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="צור קשר בוואטסאפ"
    >
      <MessageCircle className="w-6 h-6 text-white fill-white" />
      
      {/* טולטיפ שמופיע בהובר */}
      <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        צ׳אט בוואטסאפ
      </span>
    </a>
  );
};

export default WhatsAppButton;