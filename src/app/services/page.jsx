import React from 'react';

import StackingCard from '@/components/organism/StackingCard';
import WhySection from '@/components/organism/WhySection';

import './styles.css';
import HeroSection from '@/components/organism/HeroSection';
import FeatureSection from '@/components/organism/FeatureSection';
export const metadata = {
  title: 'Colabs - Making space for transformative innovation',
  description: 'Colabs - Making space for transformative innovation',
};

const Services = () => {
  return (
    <div>
      <section className="mt-3 flex items-start gap-3 w-full max-w-[1800px] mx-auto px-4">
        <HeroSection />
      </section>

      <section className="mt-3 flex items-start gap-3 w-full max-w-[1800px] mx-auto px-4">
        <StackingCard />
      </section>

      <section className="w-full mt-10 mb-32" id="cardContent">
        <FeatureSection />
      </section>
    </div>
  );
};

export default Services;
