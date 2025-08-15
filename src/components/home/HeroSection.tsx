'use client';

import Button from '@/components/ui/Button';
import { HOME_HERO } from '@/lib/constants';
import { ArrowRight, ChevronDown, Phone, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay was prevented:', error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Video/Image Background with Dark Overlay */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/haifa-hero.jpg"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {!isVideoLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/haifa-hero.jpg)' }}
          />
        )}

        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Gold Accent Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-500/20 to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>
      
      <div className="container relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl text-center w-full">
          {/* Logo with Gold Glow */}
          <div className="mb-8 animate-fade-in flex justify-center">
            <div className="relative">
              <Image
                src="/shepes-group-white.png"
                alt="שפס גרופ"
                width={500}
                height={200}
                className="w-auto h-32 md:h-40 lg:h-48 drop-shadow-2xl"
                priority
              />
              {/* Gold Glow Behind Logo */}
              <div className="absolute inset-0 bg-primary-500/30 blur-3xl -z-10" />
            </div>
          </div>
          
          {/* Main Title with Gold Gradient */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient-gold">
              הצוות המוביל
            </span>
            <span className="text-white">
              {' '}לנדל"ן יוקרתי
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-dark-300 mb-12 animate-slide-up animation-delay-200 leading-relaxed">
            {HOME_HERO.subtitle}
          </p>
          
          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in animation-delay-400">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-primary-500" />
            <Sparkles className="w-6 h-6 text-primary-500" />
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-primary-500" />
          </div>
          
          {/* CTA Buttons - Luxury Style */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-slide-up animation-delay-600 justify-center">
            <a href="tel:+972501234567">
              <Button
                size="xl"
                variant="primary"
                icon={Phone}
                className="min-w-[250px] shadow-gold-xl hover:shadow-gold-2xl text-lg font-bold"
                glow
              >
                התקשרו עכשיו
              </Button>
            </a>
            
            <Link href="/services">
              <Button
                size="xl"
                variant="secondary"
                icon={ArrowRight}
                className="min-w-[250px] text-lg font-bold"
              >
                השירותים שלנו
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 animate-fade-in animation-delay-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-gold">150+</div>
              <div className="text-sm text-dark-400">נכסים נמכרו</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-gold">98%</div>
              <div className="text-sm text-dark-400">שביעות רצון</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-gold">18+</div>
              <div className="text-sm text-dark-400">שנות ניסיון</div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-primary-500 uppercase tracking-widest">גלול למטה</span>
          <ChevronDown className="w-6 h-6 text-primary-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;