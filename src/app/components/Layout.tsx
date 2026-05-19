import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
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
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 space-y-1 border-t border-gray-100">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-[#ffc8dd] transition-colors rounded-lg touch-manipulation ${
                    isActive(path) ? 'text-[#ffc8dd] bg-gray-50' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
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
              <h4 className="font-semibold mb-4">Our Mission</h4>
              <p className="text-gray-400 text-sm">
                Igniting the next generation of innovators through accessible, quality technology education.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Lesedi NovaTech Hub. Founded by Lesedi Siyaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
