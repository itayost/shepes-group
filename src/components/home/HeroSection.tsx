// File: src/components/home/HeroSection.tsx

'use client';

import Button from '@/components/ui/Button';
import { HOME_HERO } from '@/lib/constants';
import { Briefcase, ChevronDown, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay was prevented:', error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Video Element */}
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
          <source src="/videos/hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback Image (shows while video loads) */}
        {!isVideoLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/haifa-hero.jpg)' }}
          />
        )}

        {/* Gradient Overlay - Enhanced for black theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </div>

      {/* Gold Glow Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#B8860B]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-3xl text-center w-full">
          {/* Logo with gold glow */}
          <div className="mb-8 animate-fade-in flex justify-center">
            <Image
              src="/shepes-group-white.png"
              alt="Company Logo"
              width={400}
              height={160}
              className="w-auto h-50 md:h-80 lg:h-80 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              priority
            />
          </div>
          
          {/* Title with gold gradient */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 animate-slide-up drop-shadow-2xl leading-relaxed bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            {HOME_HERO.title}
          </h1>
          
          {/* CTA Buttons - Black & Gold theme */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up animation-delay-200 justify-center">
            <a href="tel:+972501234567">
              <Button
                size="lg"
                variant="gradient"
                icon={Phone}
                className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black hover:from-[#FFD700] hover:to-[#D4AF37] shadow-gold hover:shadow-gold-glow backdrop-blur-sm text-lg font-bold"
              >
                התקשרו עכשיו
              </Button>
            </a>
            
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                icon={Briefcase}
                className="bg-black/30 backdrop-blur-md text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-lg font-bold"
              >
                השירותים שלנו
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Gold */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
      </div>
    </section>
  );
};

export default HeroSection;
