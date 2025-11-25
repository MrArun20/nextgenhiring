import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchContent } from '../api/client';
import { Hero } from '../components/features/Hero';
import { StatsBand } from '../components/features/StatsBand';
import { FeatureGrid } from '../components/features/FeatureGrid';
import { PillarTabs } from '../components/features/PillarTabs';
import { TestimonialCarousel } from '../components/features/TestimonialCarousel';
import { CTASection } from '../components/features/CTASection';
import { updatePageSEO } from '../lib/seo';
import { LogoScroller } from '../components/features/LogoScorller';

export function Home() {
  useEffect(() => {
    updatePageSEO({
      title: 'NextGen Hiring Solutions - We Hire, Train, and Deploy at Scale',
      description: 'Trusted staffing and workforce delivery partner for logistics, e-commerce, IT, BPO, and BFSI sectors across India. 48-hour TAT, 95% fulfillment rate.',
      keywords: 'staffing solutions, workforce delivery, delivery partners, IT staffing, BPO hiring, logistics hiring, India',
    });
  }, []);

  const { data: features } = useQuery({
    queryKey: ['features'],
    queryFn: () => fetchContent('/content/features.json'),
  });

  const { data: testimonials } = useQuery({
    queryKey: ['testimonials'],
    queryFn: () => fetchContent('/content/testimonials.json'),
  });

  const stats = [
    { label: '48-Hour Hire TAT', value: 48, suffix: 'hr' },
    { label: 'Successful Hires', value: 10000, suffix: '+' },
    { label: 'Cities Covered', value: 30, suffix: '+' },
    { label: 'Fulfillment Rate', value: 95, suffix: '%' },
  ];

  return (
    <>
      <Hero
        title="Join Our Team Today ! Looking For Better , Working For The Better , No Regrets When You Join Our Team , Free Training  &  Placement Services..."
        subtitle="Delivery partners for e-commerce. Skilled staff for enterprise. SLA-driven outcomes, pan-India."
        primaryCTA={{ text: 'Hire Talent', to: '/contact' }}
        secondaryCTA={{ text: 'Join as Candidate', to: '/jobs' }}
      />

   <LogoScroller/>
      <StatsBand stats={stats} />

      {features && <FeatureGrid features={features} />}

      <PillarTabs />

      {testimonials && testimonials.length > 0 && (
        <TestimonialCarousel testimonials={testimonials} />
      )}

      <CTASection
        title="Ready to Scale Your Workforce?"
        description="Let's discuss how we can help you meet your staffing needs with speed, quality, and compliance."
        primaryCTA={{ text: 'Contact Us', to: '/contact' }}
        secondaryCTA={{ text: 'View Open Positions', to: '/jobs' }}
      />
    </>
  );
}
