// File: src/components/contact/ContactInfo.tsx

'use client';

import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  Building2,
  Calendar,
  Car,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Shield,
  Users
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ContactInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Copy to clipboard function
  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  // Office features
  const officeFeatures = [
    { icon: Car, text: 'חניה בשפע' },
    { icon: Shield, text: 'משרד נגיש' },
    { icon: Users, text: 'חדר ישיבות' }
  ];

  // Social links
  const socialLinks = [
    { 
      icon: Facebook, 
      href: SITE_CONFIG.social.facebook,
      label: 'פייסבוק',
      color: 'hover:text-[#1877F2]'
    },
    { 
      icon: Instagram, 
      href: SITE_CONFIG.social.instagram,
      label: 'אינסטגרם',
      color: 'hover:text-[#E4405F]'
    },
    { 
      icon: Linkedin, 
      href: SITE_CONFIG.social.linkedin,
      label: 'לינקדאין',
      color: 'hover:text-[#0A66C2]'
    }
  ];

  return (
    <div ref={sectionRef} className="space-y-6">
      {/* Main Contact Card */}
      <Card 
        variant="default" 
        className={cn(
          "bg-[#1a1a1a] border-[#D4AF37]/30 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-xl font-bold text-white">פרטי התקשרות</h2>
          </div>

          {/* Phone */}
          <div className="space-y-4">
            <div className="group">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">טלפון משרד</p>
                  <div className="flex items-center gap-2">
                    <a 
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-[#FFD700] font-medium hover:text-[#D4AF37] transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <button
                      onClick={() => copyToClipboard(SITE_CONFIG.phone, 'phone')}
                      className="text-gray-500 hover:text-[#D4AF37] transition-colors"
                      title="העתק מספר"
                    >
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="group">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">וואטסאפ</p>
                  <a 
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#25D366] font-medium hover:text-[#128C7E] transition-colors"
                  >
                    שלח הודעה
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">אימייל</p>
                  <div className="flex items-center gap-2">
                    <a 
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-[#FFD700] font-medium hover:text-[#D4AF37] transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <button
                      onClick={() => copyToClipboard(SITE_CONFIG.email, 'email')}
                      className="text-gray-500 hover:text-[#D4AF37] transition-colors"
                      title="העתק כתובת"
                    >
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Office Location Card */}
      <Card 
        variant="default" 
        className={cn(
          "bg-[#1a1a1a] border-[#D4AF37]/30 transition-all duration-700 delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-xl font-bold text-white">כתובת המשרד</h2>
          </div>

          {/* Address */}
          <div className="mb-4">
            <p className="text-gray-300 font-medium mb-1">
              {SITE_CONFIG.address.street}
            </p>
            <p className="text-gray-400">
              {SITE_CONFIG.address.city}, {SITE_CONFIG.address.zip}
            </p>
          </div>

          {/* Office Features */}
          <div className="flex flex-wrap gap-3 mb-4">
            {officeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Badge 
                  key={index}
                  variant="outline" 
                  size="sm"
                  className="border-[#D4AF37]/30 text-gray-400 bg-[#D4AF37]/5"
                >
                  <Icon className="w-3 h-3 ml-1" />
                  {feature.text}
                </Badge>
              );
            })}
          </div>

          {/* Navigation Button */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${SITE_CONFIG.address.street} ${SITE_CONFIG.address.city}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-medium rounded-lg hover:from-[#FFD700] hover:to-[#D4AF37] transition-all"
          >
            <Navigation className="w-4 h-4" />
            נווט למשרד
          </a>
        </CardContent>
      </Card>

      {/* Office Hours Card */}
      <Card 
        variant="default" 
        className={cn(
          "bg-[#1a1a1a] border-[#D4AF37]/30 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-xl font-bold text-white">שעות פעילות</h2>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-[#D4AF37]/20">
              <span className="text-gray-300">ראשון - חמישי</span>
              <span className="text-[#FFD700] font-medium">9:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-[#D4AF37]/20">
              <span className="text-gray-300">שישי</span>
              <span className="text-[#FFD700] font-medium">9:00 - 13:00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">שבת</span>
              <span className="text-gray-500">סגור</span>
            </div>
          </div>

          {/* Note */}
          <div className="mt-4 p-3 bg-[#D4AF37]/10 rounded-lg">
            <p className="text-sm text-gray-400 flex items-start gap-2">
              <Calendar className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              ניתן לתאם פגישות מחוץ לשעות הפעילות
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Social Links Card */}
      <Card 
        variant="default" 
        className={cn(
          "bg-[#1a1a1a] border-[#D4AF37]/30 transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-xl font-bold text-white">עקבו אחרינו</h2>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className={cn(
                    "w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center",
                    "border border-[#D4AF37]/20 hover:border-[#D4AF37]/40",
                    "text-gray-400 transition-all duration-300",
                    "hover:scale-110 hover:shadow-gold",
                    social.color
                  )}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* License */}
          <div className="mt-6 pt-6 border-t border-[#D4AF37]/20">
            <p className="text-sm text-gray-500">
              {SITE_CONFIG.license}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;