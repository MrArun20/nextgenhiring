import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchContent } from '../api/client';
import { IndustryCards } from '../components/features/IndustryCards';
import { CTASection } from '../components/features/CTASection';
import { updatePageSEO } from '../lib/seo';
import type { Industry } from '../components/features/IndustryCards';



export function Industries() {
  useEffect(() => {
    updatePageSEO({
      title: 'Industries We Serve - NextGen Hiring Solutions',
      description: 'Specialized workforce solutions for E-commerce, Q-commerce, Food Delivery, Mobility, BFSI, Non-IT & BPO sectors across India.',
      keywords: 'e-commerce staffing, q-commerce hiring, food delivery partners, IT staffing, BPO recruitment, banking jobs',
    });
  }, []);

  // const { data: industries } = useQuery({
  //   queryKey: ['industries'],
  //   queryFn: () => fetchContent('/content/industries.json'),
  // });
  const { data: industries } = useQuery<{ industries: Industry[] }>({
  queryKey: ['industries'],
  queryFn: () => fetchContent('/content/industries.json'),
});


  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
            Industries We Serve
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            From high-velocity delivery platforms to enterprise technology firms, we understand
            the unique workforce challenges of each sector and deliver tailored solutions.
          </p>
        </div>
      </section>

      {/* {industries && <IndustryCards industries={industries} />} */}
      {industries?.industries && <IndustryCards industries={industries.industries} />}

     


      <CTASection
        title="Partner with Industry Experts"
        description="Let us help you build a workforce that drives your business forward."
        primaryCTA={{ text: 'Get Started', to: '/contact' }}
        secondaryCTA={{ text: 'View Services', to: '/services' }}
      />
    </div>
  );
}
