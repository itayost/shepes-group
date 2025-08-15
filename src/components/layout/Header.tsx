'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  Crown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X
} from 'lucide-react';
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
      {/* Top Bar - Luxury Gold Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-black">
        <div className="container">
          <div className="flex justify-between items-center py-2 text-sm font-medium">
            <div className="flex items-center gap-6">
              <a 
                href={`tel:${SITE_CONFIG.phone}`} 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phone}
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                18+ שנות מצוינות
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Black Luxury */}
      <header
        className={cn(
          'sticky top-0 z-40 transition-all duration-500',
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl shadow-gold-lg border-b border-primary-500/20' 
            : 'bg-black/90 backdrop-blur-lg border-b border-dark-800'
        )}
      >
        <div className="container">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative">
              <Image
                src="/shepes-group-white.png"
                alt={SITE_CONFIG.name}
                width={180}
                height={70}
                className="h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                priority
              />
              {/* Gold glow on hover */}
              <div className="absolute inset-0 bg-primary-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </Link>

            {/* Desktop Navigation - Luxury Menu */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative px-6 py-3 font-medium transition-all duration-300',
                      'hover:text-primary-500',
                      isActive
                        ? 'text-primary-500'
                        : 'text-dark-300'
                    )}
                  >
                    {/* Active/Hover background */}
                    <span className={cn(
                      'absolute inset-0 rounded-xl transition-all duration-300',
                      isActive 
                        ? 'bg-primary-500/10 border border-primary-500/30'
                        : 'hover:bg-primary-500/5 hover:border hover:border-primary-500/20'
                    )} />
                    
                    {/* Text */}
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Bottom accent for active */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA - Luxury Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone Badge */}
              <Badge 
                variant="outline" 
                size="lg"
                className="px-4 py-2 border-primary-500/50 hover:bg-primary-500/10"
              >
                <Phone className="w-4 h-4" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold">
                  {SITE_CONFIG.phone}
                </a>
              </Badge>
              
              {/* Main CTA Button */}
              <Link href="/contact">
                <Button 
                  variant="gradient" 
                  size="md"
                  icon={Crown}
                  className="shadow-gold hover:shadow-gold-xl hover:scale-105"
                  glow
                >
                  קבעו פגישה
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button - Luxury Style */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden relative p-3 rounded-xl bg-primary-500/10 text-primary-500 border border-primary-500/30 hover:bg-primary-500/20 transition-all duration-300"
              aria-label="תפריט"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop - Dark Luxury */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Side Panel - Black & Gold */}
      <div 
        className={cn(
          'fixed top-0 right-0 h-full w-[85%] max-w-sm z-50',
          'bg-gradient-to-br from-dark-950 via-black to-dark-950',
          'border-l border-primary-500/30',
          'shadow-gold-xl',
          'transform transition-transform duration-500 ease-out lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-primary-500/20">
          <Image
            src="/shepes-group.png"
            alt={SITE_CONFIG.name}
            width={140}
            height={50}
            className="h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-xl bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 transition-all duration-300"
            aria-label="סגור תפריט"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="p-6">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-xl font-medium transition-all duration-300',
                      isActive
                        ? 'bg-gradient-to-r from-primary-500/20 to-primary-600/20 text-primary-400 border border-primary-500/30'
                        : 'text-dark-300 hover:text-primary-500 hover:bg-primary-500/10'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Contact Section */}
        <div className="p-6 border-t border-primary-500/20">
          <div className="space-y-4">
            {/* Phone Button */}
            <a href={`tel:${SITE_CONFIG.phone}`} className="block">
              <Button 
                variant="gradient" 
                size="lg" 
                icon={Phone}
                fullWidth
                className="shadow-gold-lg"
                glow
              >
                התקשרו עכשיו
              </Button>
            </a>
            
            {/* Contact Button */}
            <Link href="/contact" className="block">
              <Button 
                variant="outline" 
                size="lg"
                icon={Mail}
                fullWidth
              >
                צור קשר
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-6">
            {[
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Linkedin, href: '#' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="p-3 rounded-xl bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
          <Badge variant="solid" size="sm" className="w-full justify-center">
            <Sparkles className="w-4 h-4" />
            18+ שנות מצוינות בנדל"ן
          </Badge>
        </div>
      </div>
    </>
  );
};

export default Header;