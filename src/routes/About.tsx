import { useEffect } from 'react';
import { MapPin, Target, Eye, Award } from 'lucide-react';
import { CTASection } from '../components/features/CTASection';
import { updatePageSEO } from '../lib/seo';

export function About() {
  useEffect(() => {
    updatePageSEO({
      title: 'About Us - NextGen Hiring Solutions',
      description: 'Leading staffing and workforce delivery partner with operations across 30+ cities in India. Mission-driven, SLA-focused, and committed to excellence.',
      keywords: 'about us, staffing company, workforce solutions India, hiring partner',
    });
  }, []);

  const values = [
    { icon: Target, title: 'Mission', description: 'To bridge the talent gap between employers and job seekers through technology-enabled, human-centric solutions.' },
    { icon: Eye, title: 'Vision', description: 'To be India\'s most trusted and efficient workforce delivery partner across all sectors.' },
    { icon: Award, title: 'Values', description: 'Speed, Quality, Compliance, Transparency, and Customer Success drive everything we do.' },
  ];

  const locations = [
    'Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Pune', 'Chennai',
    'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Indore', 'Chandigarh',
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
            About NextGen Hiring
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            We are a technology-driven staffing and workforce delivery company specializing in
            high-velocity hiring for logistics and enterprise sectors. With operations across 30+ cities,
            we've successfully placed 10,000+ candidates with leading brands.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-surface/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Pan-India Presence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              With operations in major metros and tier-2 cities, we deliver localized solutions at national scale.
            </p>
          </div>

          <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {locations.map((location) => (
                <div key={location} className="text-center p-3 bg-background/50 rounded-lg border border-gray-800">
                  <span className="text-gray-300">{location}</span>
                </div>
              ))}
              <div className="text-center p-3 bg-background/50 rounded-lg border border-gray-800">
                <span className="text-accent font-medium">+18 more cities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Journey"
        description="Whether you're looking for talent or opportunities, we're here to help."
        primaryCTA={{ text: 'Contact Us', to: '/contact' }}
        secondaryCTA={{ text: 'View Jobs', to: '/jobs' }}
      />
    </div>
  );
}
