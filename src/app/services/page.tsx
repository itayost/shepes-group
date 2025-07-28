'use client';

import ProcessSection from '@/components/services/ProcessSection';
import ServiceBentoCard from '@/components/services/ServiceBentoCard';
import ServicesCTA from '@/components/services/ServicesCTA';
import ServicesHero from '@/components/services/ServicesHero';
import { servicesData } from '@/data/servicesData';
import { useState } from 'react';

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background-secondary">
      {/* Hero Section */}
      <ServicesHero />

      {/* Bento Box Grid */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
            {servicesData.map((service) => (
              <ServiceBentoCard 
                key={service.id}
                service={service}
                onHover={setHoveredService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <ServicesCTA 
        hoveredService={hoveredService}
        servicesData={servicesData}
      />
    </main>
  );
}