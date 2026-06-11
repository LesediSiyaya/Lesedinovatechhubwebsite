import { Link } from 'react-router';
import { useSEO } from '../components/useSEO';

export default function NotFound() {
  useSEO({ title: 'Page Not Found', description: 'The page you are looking for does not exist. Return to the Lesedi NovaTech Hub homepage.', path: '/404' });

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md mx-auto">
        <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-[#caf0f8] via-[#e7c6ff] to-[#ffc8dd] rounded-full mb-6">
          <span className="text-xs font-semibold tracking-widest text-gray-700 uppercase">404 — Page Not Found</span>
        </div>
        <h1 className="text-6xl sm:text-8xl font-bold text-gray-200 mb-4 select-none">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Oops — nothing here</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or may have moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation"
          >
            Go to Homepage
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-[#e7c6ff] to-[#ffc8dd] text-gray-900 font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center text-sm">
          {[
            { to: '/programs', label: 'Programs' },
            { to: '/services', label: 'Services' },
            { to: '/about',    label: 'About' },
            { to: '/faq',      label: 'FAQ' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-gray-500 hover:text-[#ffc8dd] transition-colors underline underline-offset-2"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
