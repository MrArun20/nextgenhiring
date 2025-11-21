import { useEffect } from 'react';
import { updatePageSEO } from '../lib/seo';

export function Terms() {
  useEffect(() => {
    updatePageSEO({
      title: 'Terms of Service - NextGen Hiring Solutions',
      description: 'Terms and conditions for using our staffing and workforce delivery services.',
    });
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold text-white mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using NextGen Hiring Solutions' services, you accept and agree to be
              bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Services Provided</h2>
            <p>
              NextGen Hiring Solutions provides staffing and workforce delivery services, including
              candidate sourcing, screening, training, onboarding, and ongoing workforce management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Client Obligations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate job requirements and specifications</li>
              <li>Maintain confidentiality of candidate information</li>
              <li>Make timely payments as per agreed terms</li>
              <li>Comply with all applicable labor laws and regulations</li>
              <li>Provide a safe working environment for deployed staff</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Candidate Obligations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Maintain professional conduct during employment</li>
              <li>Comply with client policies and procedures</li>
              <li>Notify us of any changes to availability or circumstances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Payment Terms</h2>
            <p>
              Payment terms are established in individual service agreements. Late payments may result
              in suspension of services and applicable late fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p>
              NextGen Hiring Solutions shall not be liable for any indirect, incidental, special,
              or consequential damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
            <p>
              Either party may terminate services with written notice as specified in the service agreement.
              Immediate termination may occur in cases of breach of contract or illegal activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <p>
              For questions about these Terms of Service, contact us at:
              <br />
              <a href="mailto:legal@nextgenhiring.com" className="text-accent hover:underline">
                legal@nextgenhiring.com
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-8">Last updated: January 2025</p>
        </div>
      </div>
    </div>
  );
}
