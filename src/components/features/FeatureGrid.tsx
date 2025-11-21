import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[
              feature.icon.split('-').map((word, i) => i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1)).join('')
            ] || Icons.Box;

            return (
              <motion.div
                key={feature.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
