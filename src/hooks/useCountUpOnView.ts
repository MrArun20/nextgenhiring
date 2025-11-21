import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  enabled?: boolean;
}

export function useCountUpOnView({ end, duration = 2000, enabled = true }: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled || hasAnimated) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = Date.now();
            const startValue = 0;

            const animate = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / duration, 1);

              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const current = Math.floor(startValue + (end - startValue) * easeOutQuart);

              setCount(current);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [end, duration, enabled, hasAnimated]);

  return { ref, count };
}
