import { motion } from 'framer-motion';
import { useCountUpOnView } from '../../hooks/useCountUpOnView';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

interface StatsBandProps {
  stats: Stat[];
}

function StatItem({ label, value, suffix = '', prefix = '' }: Stat) {
  const { ref, count } = useCountUpOnView({ end: value });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="text-center"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
     <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,255,100,0.4)] mb-2">


        {prefix}{count}{suffix}
      </div>
      <div className="text-sm sm:text-base text-gray-400 font-medium">{label}</div>
    </motion.div>
  );
}

export function StatsBand({ stats }: StatsBandProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-surface/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
