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
  <img
    src="/assets/nextgen.png"
    alt="Logo"
    className="w-29 h-8 object-contain"
  />
</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted staffing and workforce delivery partner across India. We hire, train, and deploy at scale.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-semibold pt-5">CEO : Sampath Nomula</p>
            <p className="text-gray-400 text-sm leading-relaxed font-semibold pt-5">Managing Director : Karunakar Balannagari</p>
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
                  <Link to={link.to} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
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
                <Link to="/legal/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            {/* <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contact@nextgenhiring.co.in</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 9542646890</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Matrix IT Hub, Near Temple Bus Stop, KPHB Phase 2, Kukatpally
Hyderabad, Telangana, India, 500072</span>
              </li>
            </ul> */}
            <ul className="space-y-3">
  <li className="flex items-start space-x-2 text-gray-400 text-sm">
    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
    <a href="mailto:contact@nextgenhiring.co.in" className="hover:text-yellow-400 transition-colors">
      contact@nextgenhiring.co.in
    </a>
  </li>
  <li className="flex items-start space-x-2 text-gray-400 text-sm">
    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
    <a href="tel:+919542646890" className="hover:text-yellow-400 transition-colors">
      +91 9542646890
    </a>
  </li>
  <li className="flex items-start space-x-2 text-gray-400 text-sm">
    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
    <a
      href="https://www.google.com/maps/search/?api=1&query=Matrix+IT+Hub,+Near+Temple+Bus+Stop,+KPHB+Phase+2,+Kukatpally,+Hyderabad,+Telangana,+India,+500072"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition-colors"
    >
      Matrix IT Hub, Near Temple Bus Stop, KPHB Phase 2, Kukatpally,
      Hyderabad, Telangana, India, 500072
    </a>
  </li>
</ul>

            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors" aria-label="Facebook">
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
