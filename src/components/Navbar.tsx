import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/jobs', label: 'Jobs' },
    { to: '/clients', label: 'Clients' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled ? 'bg-surface/80 backdrop-blur-lg shadow-lg border-b border-gray-800' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/assets/nextgen.png" alt="NextGen Hiring" className="h-auto w-52"/>
            {/* <span className="text-xl font-semibold text-white">NextGen Hiring</span> */}
            
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              // <Link
              //   key={link.to}
              //   to={link.to}
              //   className={cn(
              //     'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              //     location.pathname === link.to
              //       ? 'text-accent bg-accent/10'
              //       : 'text-gray-300 hover:text-white hover:bg-surface/50'
              //   )}
              // >
              //   {link.label}
              // </Link>

             <Link
  key={link.to}
  to={link.to}
className={cn(
  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border-b-2 border-transparent',
  location.pathname === link.to
    ? 'text-white border-yellow-400'                 // ACTIVE → white text + underline stays
    : 'text-yellow-400 hover:text-white hover:border-yellow-400' // INACTIVE → yellow text, white only on hover
)}
>
  {link.label}
</Link>

            ))}
          </div>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button size="sm">Hire Talent</Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-surface/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-lg border-t border-gray-800">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                  location.pathname === link.to
                    ? 'text-accent bg-accent/10'
                    : 'text-gray-300 hover:text-white hover:bg-surface/50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="block pt-2">
              <Button className="w-full" size="sm">Hire Talent</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
