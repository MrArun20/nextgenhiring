import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X } from 'lucide-react';
import { Job } from '../../api/jobs';
import { Button } from '../ui/Button';
import { FormInput } from '../ui/FormInput';

const applySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email: z.string().email('Enter a valid email address'),
  city: z.string().min(2, 'City is required'),
  experience: z.string().min(1, 'Experience is required'),
  resumeLink: z.string().url('Enter a valid URL').optional().or(z.literal('')),
});

type ApplyFormData = z.infer<typeof applySchema>;

interface QuickApplyModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ApplyFormData) => Promise<void>;
}

export function QuickApplyModal({ job, isOpen, onClose, onSubmit }: QuickApplyModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
  });

  const handleFormSubmit = async (data: ApplyFormData) => {
    await onSubmit(data);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-surface rounded-2xl border border-gray-800 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-surface border-b border-gray-800 p-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">{job.title}</h2>
            <p className="text-gray-400 text-sm">{job.city}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-4">
          <FormInput
            label="Full Name"
            {...register('name')}
            error={errors.name?.message}
            placeholder="John Doe"
            required
          />

          <FormInput
            label="Mobile Number"
            {...register('phone')}
            error={errors.phone?.message}
            placeholder="9876543210"
            required
          />

          <FormInput
            label="Email"
            type="email"
            {...register('email')}
            error={errors.email?.message}
            placeholder="john@example.com"
            required
          />

          <FormInput
            label="Current City"
            {...register('city')}
            error={errors.city?.message}
            placeholder="Bangalore"
            required
          />

          <FormInput
            label="Years of Experience"
            {...register('experience')}
            error={errors.experience?.message}
            placeholder="2 years"
            required
          />

          <FormInput
            label="Resume Link (Optional)"
            {...register('resumeLink')}
            error={errors.resumeLink?.message}
            placeholder="https://drive.google.com/..."
          />

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 rounded border-gray-700 bg-background text-accent focus:ring-accent focus:ring-offset-background"
              />
              <span className="text-sm text-gray-300">
                I agree to the processing of my personal data and consent to be contacted regarding this application.
              </span>
            </label>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button type="submit" isLoading={isSubmitting} className="flex-1">
              Submit Application
            </Button>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
