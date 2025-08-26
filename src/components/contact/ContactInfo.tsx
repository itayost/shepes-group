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
      color: 'from-green-500 to-green-600',
      available: true,
      badge: 'זמין עכשיו'
    },
    {
      icon: MessageCircle,
      title: 'וואטסאפ',
      value: SITE_CONFIG.phone,
      action: `https://wa.me/${SITE_CONFIG.whatsapp}`,
      color: 'from-green-500 to-green-600',
      available: true,
      badge: 'מענה מהיר'
    },
    {
      icon: Mail,
      title: 'אימייל',
      value: SITE_CONFIG.email,
      action: `mailto:${SITE_CONFIG.email}`,
      color: 'from-blue-500 to-blue-600',
      available: true
    },
    {
      icon: MapPin,
      title: 'כתובת',
      value: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}`,
      action: '#map',
      color: 'from-purple-500 to-purple-600',
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
      <Card variant="luxury" hover>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-white mb-6">
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
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-dark-900/50 hover:bg-dark-900 border border-dark-800 hover:border-primary-500/30 transition-all duration-300">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} shadow-lg group-hover:shadow-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-white">
                          {method.title}
                        </p>
                        {method.badge && method.available && (
                          <Badge variant="success" size="sm" glow>
                            {method.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-dark-400 text-sm">
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
      <Card variant="luxury" hover>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-primary-500" />
            <h3 className="text-lg font-bold text-white">
              שעות פעילות
            </h3>
          </div>
          
          <div className="space-y-3">
            {officeHours.map((schedule, index) => (
              <div 
                key={index}
                className="flex justify-between items-center py-2 border-b border-dark-800 last:border-0"
              >
                <span className="text-dark-300">{schedule.day}</span>
                <span className={`font-medium ${
                  schedule.active ? 'text-green-400' : 'text-dark-500'
                }`}>
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
          
          <Badge variant="solid" className="w-full mt-4 justify-center" glow>
            זמינים גם מחוץ לשעות הפעילות
          </Badge>
        </CardContent>
      </Card>

      {/* Team Contacts */}
      <Card variant="luxury" hover>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-primary-500" />
            <h3 className="text-lg font-bold text-white">
              הצוות שלנו
            </h3>
          </div>
          
          <div className="space-y-4">
            {agents.map((agent) => (
              <div key={agent.id} className="flex items-center gap-4 p-3 rounded-lg bg-dark-900/50 hover:bg-dark-900 transition-colors duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl" />
                  <Avatar
                    src={agent.image}
                    alt={agent.name}
                    size="md"
                    className="relative border border-primary-500/30"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">{agent.name}</p>
                  <p className="text-sm text-dark-400">{agent.title}</p>
                </div>
                <div className="flex gap-2">
                  <a href={`tel:${agent.phone}`}>
                    <Badge variant="ghost" size="sm" icon={Phone}>
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
      <Card variant="luxury" hover>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-white mb-4">
            עקבו אחרינו
          </h3>
          
          <div className="flex gap-3">
            <a 
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
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