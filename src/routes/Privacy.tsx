import { useEffect } from 'react';
import { updatePageSEO } from '../lib/seo';

export function Privacy() {
  useEffect(() => {
    updatePageSEO({
      title: 'Privacy Policy - NextGen Hiring Solutions',
      description: 'Our commitment to protecting your personal information and data privacy.',
    });
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p>
              NextGen Hiring Solutions ("we", "our", or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="mb-3">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Resume and employment history</li>
              <li>Professional qualifications and skills</li>
              <li>Company information (for employers)</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To match candidates with job opportunities</li>
              <li>To communicate about services and opportunities</li>
              <li>To improve our services and user experience</li>
              <li>To comply with legal obligations</li>
              <li>To prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@nextgenhiring.com" className="text-accent hover:underline">
                privacy@nextgenhiring.com
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-8">Last updated: January 2025</p>
        </div>
      </div>
    </div>
  );
}
