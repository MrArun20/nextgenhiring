import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  metrics: {
    hireTAT?: { before: string; after: string; improvement: string };
    noShowRate?: { before: string; after: string; improvement: string };
    retention90d?: { before: string; after: string; improvement: string };
    fulfillmentRate?: { before: string; after: string; improvement: string };
  };
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const renderMetric = (label: string, metric?: { before: string; after: string; improvement: string }) => {
    if (!metric) return null;

    return (
      <div className="bg-background/50 rounded-lg p-4 border border-gray-800">
        <div className="text-gray-400 text-xs mb-2">{label}</div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-gray-500 text-sm">Before: {metric.before}</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-semibold">After: {metric.after}</span>
        </div>
        <div className="flex items-center space-x-1 text-green-400 text-sm">
          <TrendingUp className="w-4 h-4" />
          <span className="font-medium">{metric.improvement} improvement</span>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-accent/50 transition-all duration-300"
    >
      <div className="mb-4">
        <div className="text-accent text-sm font-medium mb-1">{caseStudy.industry}</div>
        <h3 className="text-xl font-semibold text-white mb-3">{caseStudy.client}</h3>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge</h4>
          <p className="text-gray-400 text-sm">{caseStudy.problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution</h4>
          <p className="text-gray-400 text-sm">{caseStudy.solution}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {renderMetric('Hire TAT', caseStudy.metrics.hireTAT)}
        {renderMetric('No-Show Rate', caseStudy.metrics.noShowRate)}
        {renderMetric('90-Day Retention', caseStudy.metrics.retention90d)}
        {renderMetric('Fulfillment Rate', caseStudy.metrics.fulfillmentRate)}
      </div>
    </motion.div>
  );
}
