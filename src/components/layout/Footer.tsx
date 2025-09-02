// File: src/components/layout/Footer.tsx

'use client';

import { Card } from '@/components/ui/Card';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import {
  Award,
  Building2,
  Clock,
  Facebook,
  Home,
  Instagram,
  Key,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { icon: Home, label: 'מכירת נכסים', href: '/services#selling' },
    { icon: Key, label: 'קניית נכסים', href: '/services#buying' },
    { icon: Building2, label: 'השכרה', href: '/services#rental' },
    { icon: TrendingUp, label: 'הערכת שווי', href: '/services#valuation' },
  ];

  const trustIndicators = [
    { icon: Shield, label: 'רישיון מתווך מוסמך', value: '12345' },
    { icon: Award, label: 'שנות ניסיון', value: '18+' },
    { icon: Star, label: 'לקוחות מרוצים', value: '500+' },
    { icon: Clock, label: 'זמן תגובה', value: '24 שעות' },
  ];

  return (
    <footer className="bg-gradient-to-b from-background-secondary to-background text-white relative overflow-hidden border-t border-primary-500/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="container py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/shepes-group-white.png"
                alt="שפס נדל״ן - לוגו"
                width={160}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              {trustIndicators.slice(0, 2).map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-background-card border border-primary-500/20 rounded-lg p-3 backdrop-blur-sm hover:border-primary-500/40 transition-all">
                    <Icon className="w-5 h-5 text-primary-500 mb-1" />
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-sm font-bold text-primary-400">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-700 to-primary-500" />
              <span className="text-primary-500">ניווט מהיר</span>
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-primary-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary-500 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-300 hover:text-primary-500 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary-500 transition-colors" />
                  מדיניות פרטיות
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-700 to-primary-500" />
              <span className="text-primary-500">השירותים שלנו</span>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li key={index}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-primary-500 transition-all flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 bg-background-card border border-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all">
                        <Icon className="w-4 h-4 text-primary-500" />
                      </div>
                      <span>{service.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-700 to-primary-500" />
              <span className="text-primary-500">צרו קשר</span>
            </h4>
            
            <div className="space-y-4">
              {/* Contact Cards */}
              <Card className="bg-background-card border-primary-500/20 p-4 hover:border-primary-500/40 transition-all">
                <p className="text-xs text-gray-400 mb-2">גלית שפס</p>
                <a 
                  href="tel:054-1234567"
                  className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4" />
                  054-1234567
                </a>
              </Card>

              <Card className="bg-background-card border-primary-500/20 p-4 hover:border-primary-500/40 transition-all">
                <p className="text-xs text-gray-400 mb-2">חיים שפס</p>
                <a 
                  href="tel:054-7654321"
                  className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4" />
                  054-7654321
                </a>
              </Card>

              <a 
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-primary-500 transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{SITE_CONFIG.email}</span>
              </a>

              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary-500" />
                <span className="text-sm">
                  {SITE_CONFIG.address.street}<br />
                  {SITE_CONFIG.address.city}
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              {SITE_CONFIG.social.facebook && (
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background-card hover:bg-primary-500/20 rounded-lg flex items-center justify-center transition-all hover:scale-110 border border-primary-500/30 hover:border-primary-500/50 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary-500 group-hover:text-primary-400" />
                </a>
              )}
              {SITE_CONFIG.social.instagram && (
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background-card hover:bg-primary-500/20 rounded-lg flex items-center justify-center transition-all hover:scale-110 border border-primary-500/30 hover:border-primary-500/50 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary-500 group-hover:text-primary-400" />
                </a>
              )}
              {SITE_CONFIG.social.linkedin && (
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background-card hover:bg-primary-500/20 rounded-lg flex items-center justify-center transition-all hover:scale-110 border border-primary-500/30 hover:border-primary-500/50 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary-500 group-hover:text-primary-400" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-8 pt-8 border-t border-primary-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-right">
              © {currentYear} ItayOst. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-xs text-primary-500">Shepes Group</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;