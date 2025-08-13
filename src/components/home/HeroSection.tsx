'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';
import Textarea from '@/components/ui/Textarea';
import { HOME_HERO } from '@/lib/constants';
import { Mail, Phone, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/images/haifa-hero.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <Badge variant="primary" size="lg" icon={Star} className="mb-6 animate-fade-in">
            המומחים לנדל"ן בחיפה
          </Badge>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
            {HOME_HERO.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up animation-delay-200">
            {HOME_HERO.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up animation-delay-400">
            <Button
              size="lg"
              variant="gradient"
              icon={Phone}
              onClick={() => setIsModalOpen(true)}
              className="shadow-2xl hover:shadow-gold-lg"
            >
              {HOME_HERO.cta1}
            </Button>
            
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                icon={Mail}
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                {HOME_HERO.cta2}
              </Button>
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-in animation-delay-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400">150+</div>
              <div className="text-sm text-white/80 mt-1">נכסים נמכרו</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-primary-400">98%</div>
              <div className="text-sm text-white/80 mt-1">לקוחות מרוצים</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400">15+</div>
              <div className="text-sm text-white/80 mt-1">שנות ניסיון</div>
            </div>
          </div>
        </div>
      </div>

      {/* Free Evaluation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="קבלו הערכת שווי חינם"
        description="מלאו את הפרטים ונחזור אליכם תוך 24 שעות"
        size="md"
      >
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="שם מלא"
              placeholder="ישראל ישראלי"
              icon={Phone}
            />
            <Input
              label="טלפון"
              placeholder="050-1234567"
              type="tel"
              dir="ltr"
            />
          </div>
          <Input
            label="כתובת הנכס"
            placeholder="רחוב, מספר, עיר"
          />
          <Textarea
            label="פרטים נוספים"
            placeholder="ספרו לנו על הנכס שלכם..."
            rows={4}
          />
          <Button variant="primary" fullWidth size="lg">
            שלח בקשה
          </Button>
        </form>
      </Modal>
    </section>
  );
};

export default HeroSection;