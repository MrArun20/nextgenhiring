import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  bullets: string[];
  clients: string[];
}

interface IndustryCardsProps {
  industries: Industry[];
}

export function IndustryCards({ industries }: IndustryCardsProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const clientLogoMap: Record<string, string> = {
  amazon: "/assets/amazon.jpg",
  flipkart: "/assets/flipkart.jpg",
  swiggy: "/assets/swiggy.jpg",
  zomato: "/assets/zomato.jpg",
  uber:"/assets/uber.jpg",
  zepto:"/assets/zepto.jpg",
  blinkit:"/assets/blinkit.jpg",
  genpact:"/assets/genpact.png",
  ola:"/assets/ola.png",
  rapido:"/assets/rapido.jpg",
  kotak:"/assets/kotakbank.jpg",
  wipro:"/assets/wipro.jpg",
   tcs:"/assets/tcs.jpg",
    "Uber Eats":"/assets/uber eats.jpg",
    "Swiggy Instamart":"/assets/swiggy instamart.jpg",
      "HDFC Bank":"/assets/hdfc.png",
      "ICICI Bank":"/assets/icici.jpg",
      "Kotak Mahindra":"/assets/kotakbank.jpg",
   myntra:"/assets/myntra.png"
};
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      'shopping-cart': Icons.ShoppingCart,
      'truck': Icons.Truck,
      'utensils': Icons.Utensils,
      'car': Icons.Car,
      'building-2': Icons.Building2,
      'monitor': Icons.Monitor,
    };
    return iconMap[iconName] || Icons.Box;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Industries We Serve</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized workforce solutions across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = getIcon(industry.icon);

            return (
              <motion.div
                key={industry.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{industry.description}</p>

                  <ul className="space-y-2 mb-4">
                    {industry.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-gray-400">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                 <div className="flex flex-wrap gap-3 mt-2">
  {industry.clients.slice(0, 3).map((client) => {
    const logo = clientLogoMap[client]; 

    return logo ? (
      <img
        key={client}
        src={logo}
        alt={client}
        className="h-8 w-auto object-contain rounded opacity-75 hover:opacity-100 hover:scale-105 transition"
      />
    ) : (
      <span
        key={client}
        className="text-xs px-2 py-1 bg-background/50 rounded text-gray-500 border border-gray-800"
      >
        {client}
      </span>
    );
  })}
</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
