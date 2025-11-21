import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">NextGen Hiring</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted staffing and workforce delivery partner across India. We hire, train, and deploy at scale.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/services', label: 'Services' },
                { to: '/industries', label: 'Industries' },
                { to: '/jobs', label: 'Jobs' },
                { to: '/clients', label: 'Clients' },
                { to: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/privacy" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contact@nextgenhiring.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Pan-India Operations</span>
              </li>
            </ul>

            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} NextGen Hiring Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
