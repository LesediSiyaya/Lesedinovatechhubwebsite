import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Sparkles, Menu, X, Instagram, ChevronUp, CalendarDays } from 'lucide-react';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showConsult, setShowConsult] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      setShowConsult(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/services', label: 'Services' },
    { path: '/impact', label: 'Impact' },
    { path: '/contact', label: 'Contact' },
  ];

  const whatsappIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffc8dd]" />
              <span className="font-semibold text-lg sm:text-xl">Lesedi NovaTech Hub</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`hover:text-[#ffc8dd] transition-colors relative ${
                    isActive(path) ? 'text-[#ffc8dd]' : ''
                  }`}
                >
                  {label}
                  {isActive(path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffc8dd] rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2 touch-manipulation"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block transition-all duration-200 ${menuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </span>
            </button>
          </div>

          {/* Mobile Menu — animated */}
          <div
            className={`md:hidden border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-3 space-y-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-[#ffc8dd] transition-colors rounded-lg touch-manipulation ${
                    isActive(path) ? 'text-[#ffc8dd] bg-gray-50 font-medium' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-[#ffc8dd]" />
                <span className="font-semibold text-lg">Lesedi NovaTech Hub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering rural youth through technology education and digital literacy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                {navLinks.slice(1).map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block text-gray-400 hover:text-[#ffc8dd] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <a href="mailto:lesnovatechub@gmail.com" className="block hover:text-[#ffc8dd] transition-colors">
                  lesnovatechub@gmail.com
                </a>
                <a href="tel:+27730286401" className="block hover:text-[#ffc8dd] transition-colors">
                  073 028 6401
                </a>
                <a
                  href="https://www.instagram.com/lesedinovatech_hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#ffc8dd] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @lesedinovatech_hub
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
            <p>&copy; 2026 Lesedi NovaTech Hub. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/faq" className="hover:text-[#ffc8dd] transition-colors">FAQ</Link>
              <Link to="/privacy" className="hover:text-[#ffc8dd] transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>


      {/* Book a Free Consultation — floating pill */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          showConsult && location.pathname !== '/contact'
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <Link
          to="/contact"
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#e7c6ff] via-[#ffc8dd] to-[#caf0f8] text-gray-900 font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          <CalendarDays className="w-4 h-4 flex-shrink-0" />
          Book a Free Consultation
        </Link>
      </div>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {whatsappOpen && (
          <a
            href="https://wa.me/27730286401"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            {whatsappIcon}
            <span>Chat on WhatsApp</span>
          </a>
        )}
        <button
          onClick={() => setWhatsappOpen(!whatsappOpen)}
          className="flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
          aria-label={whatsappOpen ? 'Minimise WhatsApp button' : 'Open WhatsApp'}
        >
          {whatsappOpen ? <X className="w-5 h-5" /> : whatsappIcon}
        </button>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 w-11 h-11 bg-gray-900 hover:bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}
