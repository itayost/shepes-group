// File: src/components/common/WhatsAppButton.tsx

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
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="צור קשר בוואטסאפ"
    >
      <div className="relative">
        {/* Gold glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
        
        {/* Main button */}
        <div className="relative bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1 border border-[#D4AF37]/30">
          <MessageCircle className="w-6 h-6 text-white fill-white" />
        </div>
      </div>
      
      {/* Tooltip */}
      <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-black border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        צ׳אט בוואטסאפ
      </span>
    </a>
  );
};

export default WhatsAppButton;