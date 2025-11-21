import { useEffect } from 'react';
import { PillarTabs } from '../components/features/PillarTabs';
import { CTASection } from '../components/features/CTASection';
import { updatePageSEO } from '../lib/seo';

export function Services() {
  useEffect(() => {
    updatePageSEO({
      title: 'Our Services - NextGen Hiring Solutions',
      description: 'Comprehensive staffing solutions for logistics and enterprise sectors. Delivery partner recruitment, IT/BPO staffing, and workforce management.',
      keywords: 'logistics staffing, enterprise staffing, delivery partners, IT recruitment, BPO hiring',
    });
  }, []);

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            We specialize in two key verticals: logistics staffing for delivery and warehouse operations,
            and enterprise staffing for IT, BPO, and banking sectors. Each service is tailored to meet
            the unique demands of these industries with speed, quality, and compliance.
          </p>
        </div>
      </section>

      <PillarTabs />

      <CTASection
        title="Need Workforce Solutions?"
        description="Whether you need delivery partners or skilled professionals, we've got you covered."
        primaryCTA={{ text: 'Contact Us', to: '/contact' }}
        secondaryCTA={{ text: 'View Industries', to: '/industries' }}
      />
    </div>
  );
}
