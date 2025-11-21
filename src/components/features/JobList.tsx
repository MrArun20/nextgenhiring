import { useState } from 'react';
import { MapPin, Clock, DollarSign, Briefcase } from 'lucide-react';
import { Job } from '../../api/jobs';
import { formatCurrency } from '../../lib/utils';
import { Button } from '../ui/Button';

interface JobListProps {
  jobs: Job[];
  onApply: (job: Job) => void;
}

export function JobList({ jobs, onApply }: JobListProps) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-accent/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-3">{job.title}</h3>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{job.city}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-accent" />
                  <span>{formatCurrency(job.payMin)} - {formatCurrency(job.payMax)}/mo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>{job.shift}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-accent" />
                  <span>{job.type}</span>
                </div>
              </div>

              <p className="text-gray-400 mb-3">{job.description}</p>

              <div className="flex flex-wrap gap-2">
                {job.requirements.slice(0, 3).map((req, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 bg-background/50 rounded-full text-gray-500 border border-gray-800">
                    {req}
                  </span>
                ))}
                {job.requirements.length > 3 && (
                  <span className="text-xs px-3 py-1 bg-background/50 rounded-full text-gray-500 border border-gray-800">
                    +{job.requirements.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div className="md:ml-4">
              <Button onClick={() => onApply(job)} size="sm">
                Quick Apply
              </Button>
            </div>
          </div>
        </div>
      ))}

      {jobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No jobs found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
