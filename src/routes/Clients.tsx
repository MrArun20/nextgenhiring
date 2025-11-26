import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchContent } from '../api/client';
import { TestimonialCarousel } from '../components/features/TestimonialCarousel';
import { CaseStudyCard } from '../components/features/CaseStudyCard';
import { CTASection } from '../components/features/CTASection';
import { updatePageSEO } from '../lib/seo';
import { Shield, Clock, TrendingUp, Users } from 'lucide-react';

export function Clients() {
  useEffect(() => {
    updatePageSEO({
      title: 'Our Clients & Case Studies - NextGen Hiring Solutions',
      description: 'Trusted by 100+ leading enterprises including Amazon, Flipkart, Wipro, and ICICI Bank. See how we deliver results.',
      keywords: 'client testimonials, case studies, staffing success stories, workforce solutions',
    });
  }, []);

  const { data: testimonials } = useQuery({
    queryKey: ['testimonials'],
    queryFn: () => fetchContent('/content/testimonials.json'),
  });

  const { data: caseStudies } = useQuery({
    queryKey: ['case-studies'],
    queryFn: () => fetchContent('/content/case-studies.json'),
  });

  const slas = [
    { icon: Clock, title: '48-Hour TAT', description: 'Fastest time-to-hire in the industry' },
    { icon: TrendingUp, title: '95% Fulfillment', description: 'Consistent delivery on commitments' },
    { icon: Users, title: '87% Retention', description: '90-day retention rate across roles' },
    { icon: Shield, title: '100% Compliance', description: 'Full legal and regulatory adherence' },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
            Trusted by Industry Leaders
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            We partner with 100+ enterprises across India to deliver workforce solutions that drive business outcomes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Our SLA Commitments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slas.map((sla, index) => {
              const Icon = sla.icon;
              return (
                <div key={index} className="text-center p-6 bg-surface/50 rounded-xl border border-gray-800">


                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-white border border-yellow-500 text-yellow-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-yellow" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{sla.title}</h3>
                  <p className="text-gray-400 text-sm">{sla.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {testimonials && testimonials.length > 0 && (
        <TestimonialCarousel testimonials={testimonials} />
      )}

      {caseStudies && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Case Studies</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Real results from real partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((cs: never, index: number) => (
                <CaseStudyCard key={index} caseStudy={cs} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to Join Our Success Stories?"
        description="Let's build a partnership that delivers measurable results for your organization."
        primaryCTA={{ text: 'Contact Us', to: '/contact' }}
      />
    </div>
  );
}
