// File: src/components/layout/Header.tsx

'use client';

import Button from '@/components/ui/Button';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Linkedin, Mail, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Main Header */}
      <header
        className={cn(
          'bg-black/90 backdrop-blur-xl sticky top-0 z-40 transition-all duration-300',
          'border-b border-[#D4AF37]/20',
          isScrolled ? 'shadow-gold bg-black/95' : 'shadow-lg'
        )}
      >
        <div className="container">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/shepes-group-white.png" // Using white version for black background
                alt="שפס נדל״ן - לוגו"
                width={160}
                height={60}
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                      isActive
                        ? 'bg-[#D4AF37]/20 text-[#FFD700]'
                        : 'text-gray-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              
              <Link href="/contact">
                <Button 
                  variant="gradient" 
                  size="md"
                  icon={Mail}
                  className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black hover:from-[#FFD700] hover:to-[#D4AF37] shadow-gold hover:shadow-gold-glow"
                >
                  קבעו פגישה
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden relative p-2.5 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-200"
              aria-label="תפריט"
            >
              <div className="relative w-6 h-6">
                <span className="absolute block h-0.5 w-6 bg-current top-0" />
                <span className="absolute block h-0.5 w-6 bg-current top-2.5" />
                <span className="absolute block h-0.5 w-6 bg-current top-5" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Side Panel */}
      <div 
        className={cn(
          'fixed top-0 right-0 h-full w-[85%] max-w-sm bg-black shadow-gold-lg z-50',
          'transform transition-transform duration-300 ease-out lg:hidden',
          'border-l border-[#D4AF37]/30',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#D4AF37]/20">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/shepes-group-white.png"
              alt="שפס נדל״ן - לוגו"
              width={120}
              height={45}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-[#D4AF37]/10 rounded-lg transition-colors"
            aria-label="סגור תפריט"
          >
            <X className="w-6 h-6 text-[#D4AF37]" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100%-80px)] overflow-y-auto">
          {/* Menu Items */}
          <div className="p-4 space-y-1">
            {NAV_ITEMS.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-lg font-medium',
                    'transition-all duration-300 transform',
                    isActive
                      ? 'bg-[#D4AF37]/20 text-[#FFD700]'
                      : 'text-gray-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]'
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen 
                      ? 'slideInFromRight 0.3s ease-out forwards' 
                      : 'none'
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="p-4 border-t border-[#D4AF37]/20">
            <p className="text-sm text-gray-400 mb-4">דברו איתנו עכשיו</p>
            
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center justify-center gap-2 text-black bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3 px-4 rounded-xl font-medium hover:from-[#FFD700] hover:to-[#D4AF37] transition-all shadow-gold mb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button 
                variant="outline" 
                size="lg" 
                fullWidth
                icon={Mail}
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
              >
                השאירו פרטים
              </Button>
            </Link>
          </div>

          {/* Bottom Info */}
          <div className="p-4 border-t border-[#D4AF37]/20">
            <div className="text-center text-sm text-gray-400">
              <p className="font-medium mb-2 text-[#D4AF37]">שעות פעילות</p>
              <p>ראשון - חמישי: 9:00-18:00</p>
              <p>שישי: 9:00-13:00</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-4 border-t border-[#D4AF37]/20">
            <p className="text-sm text-gray-400 text-center mb-3">עקבו אחרינו</p>
            <div className="flex justify-center gap-3">
              {SITE_CONFIG.social?.facebook && (
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-full flex items-center justify-center transition-all hover:scale-110 group border border-[#D4AF37]/30"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#D4AF37] group-hover:text-[#FFD700]" />
                </a>
              )}
              {SITE_CONFIG.social?.instagram && (
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-full flex items-center justify-center transition-all hover:scale-110 group border border-[#D4AF37]/30"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#D4AF37] group-hover:text-[#FFD700]" />
                </a>
              )}
              {SITE_CONFIG.social?.linkedin && (
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-full flex items-center justify-center transition-all hover:scale-110 group border border-[#D4AF37]/30"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-[#D4AF37] group-hover:text-[#FFD700]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;