import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-surface/50 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400">Trusted by industry leaders across India</p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800 relative"
            >
              <Quote className="w-12 h-12 text-accent/20 mb-6" />

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                "{current.quote}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-lg">{current.name}</div>
                  <div className="text-gray-400 text-sm">{current.role}</div>
                  <div className="text-accent text-sm">{current.company}</div>
                </div>

                <div className="flex space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-surface border border-gray-800 text-gray-400 hover:text-white hover:border-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-accent w-8' : 'bg-gray-600'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-surface border border-gray-800 text-gray-400 hover:text-white hover:border-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
