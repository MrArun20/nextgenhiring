import { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Monitor } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { Clients } from '../../routes/Clients';

export function PillarTabs() {
  const [activeTab, setActiveTab] = useState<'logistics' | 'enterprise'>('logistics');
  const prefersReducedMotion = usePrefersReducedMotion();

  const tabs = [
    { id: 'logistics' as const, label: 'Logistics Staffing', icon: Truck },
    { id: 'enterprise' as const, label: 'Enterprise Staffing', icon: Monitor },
  ];

  const content = {
    logistics: {
      title: 'Delivery Partners for Leading Platforms',
      description: 'End-to-end workforce solutions for e-commerce, q-commerce, food delivery, and mobility sectors.',
      features: [
        'Last-mile delivery partner recruitment',
        'Onboarding and training programs',
        'Attendance tracking and coordination',
        'Payout management',
        'Compliance and documentation',
        'Performance monitoring and support',
      ],

      clients: [{ name: "Uber", logo: "public/Logos/uber.jpg" },
      { name: "Rapiod", logo: "public/Logos/Rapido.jpg" },
      { name: "Zepto", logo: "public/Logos/Zepto.jpg" },
      { name: "Amazon", logo: "public/Logos/Amazon.jpg" },
      { name: "Flipkart", logo: "public/Logos/Flipkart.jpg" },
      { name: "Zomato", logo: "public/Logos/Zomato.jpg" },
      { name: "Swiggy", logo: "public/Logos/Swiggy.jpg" },
      { name: "Blinkit", logo: "public/Logos/Blinkit.jpg" },
      { name: "SBI", logo: "public/Logos/SBI.jpg" },
      { name: "ICICI", logo: "public/Logos/ICICI.jpg" },
      ],
    },
    enterprise: {
      title: 'IT, BPO, and Banking Talent',
      description: 'Skilled professionals for technology, finance, and business process sectors.',
      features: [
        'Technical and non-technical roles',
        'Campus and lateral hiring',
        'Skill assessment and screening',
        'Background verification',
        'Compliance and onboarding',
        'Retention management',
      ],
      clients: ['Google', 'Wipro', 'TCS', 'Genpact', 'Tech Mahindra', 'ICICI Bank', 'HDFC Bank'],
    },
  };

  const activeContent = content[activeTab];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive staffing solutions across two key verticals
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-surface/50 rounded-lg p-1 border border-gray-800">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative px-6 py-3 rounded-lg font-medium transition-all duration-300
                    ${activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg"
                      transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative flex items-center space-x-2">
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">{activeContent.title}</h3>
          <p className="text-gray-300 mb-8">{activeContent.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Key Services</h4>
              <ul className="space-y-3">
                {activeContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Trusted By</h4>
              <div className="flex flex-wrap gap-3">
                {activeContent.clients.map((client) => {
  const logo = typeof client === "string" ? null : client.logo;
  const name = typeof client === "string" ? client : client.name;

  return (
    <div key={name} className="px-4 py-2 bg-background/50 rounded-lg text-gray-300 text-sm">
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="h-12 w-auto object-contain border border-gray-300 rounded-lg opacity-80 
            hover:opacity-100 hover:shadow-lg hover:border-gray-500 
            transition-transform duration-300 hover:scale-110 cursor-pointer"
        />
      ) : (
        <span className="text-gray-400">{name}</span> 
      )}
    </div>
  );
})}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
