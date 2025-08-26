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
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
          {/* Add additional video formats for better browser support */}
          <source src="/videos/hero.webm" type="video/webm" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Fallback Image (shows while video loads) */}
        {!isVideoLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/haifa-hero.jpg)' }}
          />
        )}

        {/* Gradient Overlay - Cleaner and simpler */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-3xl text-center w-full">
          {/* Logo */}
          <div className="mb-8 animate-fade-in flex justify-center">
            <Image
              src="/shepes-group-white.png"
              alt="Company Logo"
              width={400}
              height={160}
              className="w-auto h-50 md:h-80 lg:h-80 drop-shadow-2xl"
              priority
            />
          </div>
          
          {/* Subtitle - Now the main message */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 animate-slide-up drop-shadow-2xl leading-relaxed">
            {HOME_HERO.title}
          </h1>
          
          {/* CTA Buttons - Cleaner design */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up animation-delay-200 justify-center">
            <a href="tel:+972501234567"> {/* Replace with your actual phone number */}
              <Button
                size="lg"
                variant="gradient"
                icon={Phone}
                className="shadow-2xl hover:shadow-gold-lg backdrop-blur-sm text-lg"
              >
                התקשרו עכשיו
              </Button>
            </a>
            
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                icon={Briefcase}
                className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 text-lg"
              >
                השירותים שלנו
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;