import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { email, z } from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FormInput } from '../components/ui/FormInput';
import { Select } from '../components/ui/Select';
import { TextArea } from '../components/ui/TextArea';
import { updatePageSEO } from '../lib/seo';
import emailjs from "@emailjs/browser" 

const contactSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  role: z.string().min(1, 'Please select your role'),
  city: z.string().min(2, 'City is required'),
  headcount: z.string().min(1, 'Headcount required is needed'),
  message: z.string().min(10, 'Please provide more details (minimum 10 characters)'),
  consent: z.boolean().refine((val) => val === true, 'You must agree to continue'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: 'Contact Us - NextGen Hiring Solutions',
      description: 'Get in touch to discuss your staffing needs. Available across 30+ cities in India. Fast response guaranteed.',
      keywords: 'contact us, staffing inquiry, workforce solutions, hiring partner contact',
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // const onSubmit = async (data: ContactFormData) => {
  //   await new Promise((resolve) => setTimeout(resolve, 1500));
  //   console.log('Contact form submitted:', data);
  //   setIsSubmitted(true);
  //   reset();
  //   setTimeout(() => setIsSubmitted(false), 5000);
  // };

  const onSubmit = async (data: ContactFormData) => {
  try {
   await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    ...data,
    reply_to: data.email, 
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    );

    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);

  } catch (err) {
    console.error("Email error:", err);
  }
};

  const roleOptions = [
    { value: '', label: 'Select your role' },
    { value: 'hr', label: 'HR Manager' },
    { value: 'ops', label: 'Operations Manager' },
    { value: 'founder', label: 'Founder/CEO' },
    { value: 'procurement', label: 'Procurement' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-background">
      <section className="py-12 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
              Let's Talk
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to scale your workforce? Share your requirements and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 mb-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-white border border-yellow-500 text-yellow-500 flex items-center justify-center flex-shrink-0">

                      <Mail className="w-6 h-6 text-yellow" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Email</div>
                      <a href="mailto:contact@nextgenhiring.co.in" className="text-white hover:text-yellow-500 transition-colors">
                        contact@nextgenhiring.co.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-white border border-yellow-500 text-yellow-500 flex items-center justify-center flex-shrink-0">

                      <Phone className="w-6 h-6 text-yellow" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Phone</div>
                      <a href="tel:+91 9542646890" className="text-white hover:text-yellow-500 transition-colors">
                        +91 9542646890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-white border border-yellow-500 text-yellow-500 flex items-center justify-center flex-shrink-0">

                      <MapPin className="w-6 h-6 text-yellow" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Locations</div>
                      <div className="text-white">
                        Pan-India Operations<br />
                        <span className="text-gray-400 text-sm">30+ cities across India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-accent/30">
                <h3 className="text-lg font-semibold text-white mb-2">Fast Response Guaranteed</h3>
                <p className="text-gray-300 text-sm">
                  We respond to all inquiries within 24 hours. For urgent requirements, please call us directly.
                </p>
              </div>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <FormInput
                  label="Company Name"
                  {...register('companyName')}
                  error={errors.companyName?.message}
                  placeholder="ABC Technologies"
                  required
                />

                <FormInput
                  label="Contact Person"
                  {...register('contactPerson')}
                  error={errors.contactPerson?.message}
                  placeholder="John Doe"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="Email"
                    type="email"
                    {...register('email')}
                    error={errors.email?.message}
                    placeholder="john@company.com"
                    required
                  />

                  <FormInput
                    label="Phone"
                    {...register('phone')}
                    error={errors.phone?.message}
                    placeholder="9876543210"
                    required
                  />
                </div>

                <Select
                  label="Your Role"
                  {...register('role')}
                  error={errors.role?.message}
                  options={roleOptions}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="City"
                    {...register('city')}
                    error={errors.city?.message}
                    placeholder="Bangalore"
                    required
                  />

                  <FormInput
                    label="Headcount Needed"
                    {...register('headcount')}
                    error={errors.headcount?.message}
                    placeholder="50"
                    required
                  />
                </div>

                <TextArea
                  label="Message"
                  {...register('message')}
                  error={errors.message?.message}
                  placeholder="Tell us about your staffing requirements..."
                  required
                  rows={5}
                />

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('consent')}
                      className="mt-1 w-4 h-4 rounded border-gray-700 bg-background text-accent focus:ring-accent focus:ring-offset-background"
                    />
                    <span className="text-sm text-gray-300">
                      I agree to the processing of my personal data and consent to be contacted by NextGen Hiring Solutions regarding this inquiry.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-2 text-sm text-red-400">{errors.consent.message}</p>
                  )}
                </div>

                <Button type="submit" isLoading={isSubmitting} className="w-full group">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {isSubmitted && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Message sent successfully! We'll be in touch soon.</span>
          </div>
        </div>
      )}
    </div>
  );
}
