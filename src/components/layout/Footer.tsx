import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* לוגו ואודות */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/shepes-group.png"
                alt="שפס נדל״ן - לוגו"
                width={140}
                height={50}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              גלית שפס: 054-1234567
            </p>
            <p className="text-gray-400 text-sm">
              חיים שפס: 054-7654321
            </p>
          </div>
          
          {/* קישורים מהירים */}
          <div>
            <h4 className="font-bold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2 text-gray-400">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* שירותים */}
          <div>
            <h4 className="font-bold mb-4">השירותים שלנו</h4>
            <ul className="space-y-2 text-gray-400">
              <li>מכירת נכסים</li>
              <li>קניית נכסים</li>
              <li>השכרה</li>
              <li>הערכת שווי</li>
              <li>ייעוץ נדל״ן</li>
            </ul>
          </div>
          
          {/* צור קשר */}
          <div>
            <h4 className="font-bold mb-4">צור קשר</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                {SITE_CONFIG.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                {SITE_CONFIG.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}
              </p>
            </div>
            
            {/* רשתות חברתיות */}
            <div className="flex gap-4 mt-6">
              {SITE_CONFIG.social.facebook && (
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              )}
              {SITE_CONFIG.social.instagram && (
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {SITE_CONFIG.social.linkedin && (
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} {SITE_CONFIG.name}. כל הזכויות שמורות.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-white">מדיניות פרטיות</Link>
            {' | '}
            <Link href="/terms" className="hover:text-white">תנאי שימוש</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;