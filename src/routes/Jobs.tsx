import { useEffect, useState, useMemo } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getJobs, applyForJob, Job, JobApplication } from '../api/jobs';
import { JobList } from '../components/features/JobList';
import { JobFilters } from '../components/features/JobFilters';
import { QuickApplyModal } from '../components/features/QuickApplyModal';
import { updatePageSEO } from '../lib/seo';

export function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedShift, setSelectedShift] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: 'Current Openings - NextGen Hiring Solutions',
      description: 'Explore job opportunities in delivery, logistics, IT, BPO, and banking sectors across India. Apply online and get hired fast.',
      keywords: 'job openings, delivery jobs, warehouse jobs, IT jobs, BPO careers, banking jobs, India',
    });
  }, []);

  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  });

  const applyMutation = useMutation({
    mutationFn: (data: JobApplication) => applyForJob(selectedJob?.id || '', data),
    onSuccess: () => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    },
  });

  const cities = useMemo(() => {
    return Array.from(new Set(jobs.map((job) => job.city))).sort();
  }, [jobs]);

  const shifts = useMemo(() => {
    return Array.from(new Set(jobs.map((job) => job.shift))).sort();
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        searchQuery === '' ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCity = selectedCity === '' || job.city === selectedCity;
      const matchesShift = selectedShift === '' || job.shift === selectedShift;

      return matchesSearch && matchesCity && matchesShift;
    });
  }, [jobs, searchQuery, selectedCity, selectedShift]);

  return (
    <div className="pt-20 min-h-screen bg-background">
      <section className="py-12 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
              Current Openings
            </h1>
            <p className="text-lg text-gray-300">
              Find your next opportunity with leading companies across India
            </p>
          </div>

          <JobFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
            selectedShift={selectedShift}
            onShiftChange={setSelectedShift}
            cities={cities}
            shifts={shifts}
          />

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
              <p className="text-gray-400 mt-4">Loading jobs...</p>
            </div>
          ) : (
            <>
              <div className="mb-4 text-gray-400">
                Showing {filteredJobs.length} of {jobs.length} jobs
              </div>
              <JobList jobs={filteredJobs} onApply={setSelectedJob} />
            </>
          )}
        </div>
      </section>

      {selectedJob && (
        <QuickApplyModal
          job={selectedJob}
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          onSubmit={(data) => applyMutation.mutateAsync(data)}
        />
      )}

      {showSuccess && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Application submitted successfully! We'll contact you soon.</span>
          </div>
        </div>
      )}
    </div>
  );
}
