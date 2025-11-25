import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: { text: string; to: string };
  secondaryCTA?: { text: string; to: string };
}

export function Hero({ title, subtitle, primaryCTA, secondaryCTA }: HeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnoiIHN0cm9rZT0iIzIyRDNFRSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-40" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={prefersReducedMotion ? {} : container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={prefersReducedMotion ? {} : item} className="mb-6">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Trusted by 100+ Enterprises</span>
          </div>
        </motion.div>

        <motion.h1
          variants={prefersReducedMotion ? {} : item}
          // className="text-2xl sm:text-1xl lg:text-3xl font-semibold text-white mb-6 leading-tight"
          className="text-3xl sm:text-4xl lg:text-3xl font-bold text-white mb-12 pt-5 leading-tight tracking-tight drop-shadow-sm"

        >
          {title}
        </motion.h1>

        <motion.p
          variants={prefersReducedMotion ? {} : item}
          className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl  mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          variants={prefersReducedMotion ? {} : item}
          className="flex flex-col sm:flex-row  pt-10 items-center justify-center gap-7"
        >
          {primaryCTA && (
            <Link to={primaryCTA.to}>
              <Button size="lg" className="group">
                {primaryCTA.text}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
          {secondaryCTA && (
            <Link to={secondaryCTA.to}>
              <Button size="lg" variant="outline">
                {secondaryCTA.text}
              </Button>
            </Link>
          )}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
