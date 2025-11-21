import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA?: { text: string; to: string };
  secondaryCTA?: { text: string; to: string };
}

export function CTASection({ title, description, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnoiIHN0cm9rZT0iIzIyRDNFRSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">{title}</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{description}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>
      </div>
    </section>
  );
}
