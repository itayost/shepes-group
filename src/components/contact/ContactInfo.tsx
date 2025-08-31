// ========== ContactInfo.tsx ==========
// File: src/components/contact/ContactInfo.tsx

import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { agents } from '@/data/agents';
import { SITE_CONFIG } from '@/lib/constants';
import {
  Clock,
  Facebook, Instagram, Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users
} from 'lucide-react';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'טלפון',
      value: SITE_CONFIG.phone,
      action: `tel:${SITE_CONFIG.phone}`,
      color: 'bg-[#D4AF37]/20 text-[#D4AF37]',
      available: true,
      badge: 'זמין עכשיו'
    },
    {
      icon: MessageCircle,
      title: 'וואטסאפ',
      value: SITE_CONFIG.phone,
      action: `https://wa.me/${SITE_CONFIG.whatsapp}`,
      color: 'bg-green-900/20 text-green-400',
      available: true,
      badge: 'מענה מהיר'
    },
    {
      icon: Mail,
      title: 'אימייל',
      value: SITE_CONFIG.email,
      action: `mailto:${SITE_CONFIG.email}`,
      color: 'bg-blue-900/20 text-blue-400',
      available: true
    },
    {
      icon: MapPin,
      title: 'כתובת',
      value: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}`,
      action: '#map',
      color: 'bg-purple-900/20 text-purple-400',
      available: false
    }
  ];

  const officeHours = [
    { day: 'ראשון - חמישי', hours: '09:00 - 19:00', active: true },
    { day: 'שישי', hours: '09:00 - 14:00', active: false },
    { day: 'שבת', hours: 'סגור', active: false }
  ];

  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <Card variant="elevated" className="bg-[#1a1a1a] border border-[#D4AF37]/20">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">
            דרכי יצירת קשר
          </h2>
          
          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  target={method.icon === MessageCircle ? '_blank' : undefined}
                  rel={method.icon === MessageCircle ? 'noopener noreferrer' : undefined}
                  className="block group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
                    <div className={`p-3 rounded-xl ${method.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-white">
                          {method.title}
                        </p>
                        {method.badge && method.available && (
                          <Badge variant="success" size="xs" dot className="bg-green-900/20 text-green-400 border-green-400/30">
                            {method.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Office Hours */}
      <Card variant="elevated" className="bg-[#1a1a1a] border border-[#D4AF37]/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="text-lg font-bold text-[#FFD700]">
              שעות פעילות
            </h3>
          </div>
          
          <div className="space-y-3">
            {officeHours.map((schedule, index) => (
              <div 
                key={index}
                className="flex justify-between items-center py-2 border-b border-[#D4AF37]/10 last:border-0"
              >
                <span className="text-gray-300">{schedule.day}</span>
                <span className={`font-medium ${
                  schedule.active ? 'text-green-400' : 'text-gray-500'
                }`}>
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
          
          <Badge variant="primary" className="w-full mt-4 justify-center bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">
            זמינים גם מחוץ לשעות הפעילות
          </Badge>
        </CardContent>
      </Card>

      {/* Team Contacts */}
      <Card variant="elevated" className="bg-[#1a1a1a] border border-[#D4AF37]/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="text-lg font-bold text-[#FFD700]">
              הצוות שלנו
            </h3>
          </div>
          
          <div className="space-y-4">
            {agents.map((agent) => (
              <div key={agent.id} className="flex items-center gap-4">
                <Avatar
                  src={agent.image}
                  alt={agent.name}
                  size="md"
                  className="border-[#D4AF37]"
                />
                <div className="flex-1">
                  <p className="font-semibold text-white">{agent.name}</p>
                  <p className="text-sm text-gray-400">{agent.title}</p>
                </div>
                <div className="flex gap-2">
                  <a href={`tel:${agent.phone}`}>
                    <Badge variant="outline" size="sm" icon={Phone} className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                      חייג
                    </Badge>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card variant="elevated" className="bg-[#1a1a1a] border border-[#D4AF37]/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-[#FFD700] mb-4">
            עקבו אחרינו
          </h3>
          
          <div className="flex gap-3">
            <a 
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-900/20 text-blue-400 rounded-lg hover:bg-blue-900/30 transition-colors border border-blue-400/20"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-pink-900/20 text-pink-400 rounded-lg hover:bg-pink-900/30 transition-colors border border-pink-400/20"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-900/20 text-blue-400 rounded-lg hover:bg-blue-900/30 transition-colors border border-blue-400/20"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;