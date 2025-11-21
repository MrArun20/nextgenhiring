import { MessageCircle } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export function FloatingWhatsApp() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleClick = () => {
    const phone = import.meta.env.VITE_WA_PHONE || '919876543210';
    const text = import.meta.env.VITE_WA_DEFAULT_TEXT || 'Hi, I\'m interested in NextGen Hiring Solutions';
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phone}?text=${encodedText}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={handleClick}
        className={`
          bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl
          transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50
          ${!prefersReducedMotion ? 'animate-pulse-glow' : ''}
        `}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-surface/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl border border-gray-700">
          Chat on WhatsApp
        </div>
      </div>
    </div>
  );
}
