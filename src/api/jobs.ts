import { fetchContent } from './client';

export interface Job {
  id: string;
  title: string;
  city: string;
  payMin: number;
  payMax: number;
  shift: string;
  type: string;
  category: string;
  description: string;
  requirements: string[];
  applyEndpoint: string;
}

export async function getJobs(): Promise<Job[]> {
  return fetchContent<Job[]>('/content/jobs.json');
}

export async function applyForJob(jobId: string, data: JobApplication): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Job application submitted:', { jobId, data });
}

export interface JobApplication {
  name: string;
  phone: string;
  email: string;
  city: string;
  experience: string;
  resumeLink?: string;
}
