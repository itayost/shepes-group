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
          'bg-white sticky top-0 z-40 transition-all duration-300',
          isScrolled ? 'shadow-xl backdrop-blur-lg bg-white/95' : 'shadow-md'
        )}
      >
        <div className="container">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/shepes-group.png"
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
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
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
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              
              <Link href="/contact">
                <Button 
                  variant="gradient" 
                  size="md"
                  icon={Mail}
                  className="shadow-lg hover:shadow-xl"
                >
                  קבעו פגישה
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden relative p-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200"
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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Side Panel */}
      <div 
        className={cn(
          'fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50',
          'transform transition-transform duration-300 ease-out lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/shepes-group.png"
              alt="שפס נדל״ן - לוגו"
              width={120}
              height={45}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="סגור תפריט"
          >
            <X className="w-6 h-6 text-gray-600" />
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
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
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
          <div className="p-4 border-t border-gray-100">
            <p className="text-sm text-gray-600 mb-4">דברו איתנו עכשיו</p>
            
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center justify-center gap-2 text-white bg-gradient-to-r from-primary-600 to-primary-500 py-3 px-4 rounded-xl font-medium hover:from-primary-700 hover:to-primary-600 transition-all shadow-lg mb-3"
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
              >
                השאירו פרטים
              </Button>
            </Link>
          </div>

          {/* Bottom Info */}
          <div className="p-4 border-t border-gray-100">
            <div className="text-center text-sm text-gray-500">
              <p className="font-medium mb-2">שעות פעילות</p>
              <p>ראשון - חמישי: 9:00-18:00</p>
              <p>שישי: 9:00-13:00</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-4 border-t border-gray-100">
            <p className="text-sm text-gray-600 text-center mb-3">עקבו אחרינו</p>
            <div className="flex justify-center gap-3">
              {SITE_CONFIG.social?.facebook && (
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </a>
              )}
              {SITE_CONFIG.social?.instagram && (
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-pink-100 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-600 group-hover:text-pink-600" />
                </a>
              )}
              {SITE_CONFIG.social?.linkedin && (
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-700" />
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