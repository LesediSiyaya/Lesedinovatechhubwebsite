import { Link } from 'react-router';
import { useSEO } from '../components/useSEO';

export default function Privacy() {
  useSEO({ title: 'Privacy Policy', description: `Read the Lesedi NovaTech Hub privacy policy to understand how we collect, use, and protect your personal information on our website and services.`, path: '/privacy' });

  return (
    <div>
      {/* Header */}
      <section className="pt-12 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray">

          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed">
              Lesedi NovaTech Hub ("we", "our", or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard the information you
              provide when you visit our website (<a href="https://lesnovatechhub.vercel.app" className="text-[#e7c6ff] underline">lesnovatechhub.vercel.app</a>) or
              contact us about our services and programs.
            </p>
          </div>

          <div className="space-y-8">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We only collect information you voluntarily give us. This may include:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm sm:text-base">
                <li>Your name and contact details (email address and/or phone number) when you submit an inquiry via our contact form or reach out by email or WhatsApp.</li>
                <li>Information about your project or service request that you choose to share.</li>
                <li>Program application details such as your location and areas of interest.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                We do not automatically collect personal data through cookies, analytics trackers, or similar technologies beyond what your browser or the hosting platform (Vercel) may log as standard web traffic.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Information you provide is used solely to:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm sm:text-base">
                <li>Respond to your inquiry or service request.</li>
                <li>Process and follow up on program applications.</li>
                <li>Send you a quote, invoice, or project update related to work you have engaged us for.</li>
                <li>Improve our services based on feedback you share.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                We will not add you to a mailing list or send you unsolicited marketing communications without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Sharing of Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. Your details are kept within our internal operations and will not be disclosed to outside parties except where required by law or with your consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We take reasonable steps to protect the information you share with us. Communications via WhatsApp and email are subject to the security practices of those platforms. We do not store sensitive financial information such as banking or card details.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to external sites (for example, social media profiles). We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Some of our programs serve young people under 18. Where we collect information from minors, we do so only in the context of program enrollment and with the intent of keeping a parent or guardian informed. We do not use personal data from minors for any commercial purpose.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                In line with the Protection of Personal Information Act (POPIA) of South Africa, you have the right to:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm sm:text-base">
                <li>Request access to the personal information we hold about you.</li>
                <li>Ask us to correct or delete your information.</li>
                <li>Object to the processing of your personal information.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                To exercise any of these rights, contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date at the top. We encourage you to review it periodically.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy, please get in touch:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li><span className="font-medium">Email:</span> <a href="mailto:lesnovatechub@gmail.com" className="text-[#e7c6ff] underline">lesnovatechub@gmail.com</a></li>
                <li><span className="font-medium">WhatsApp:</span> <a href="https://wa.me/27730286401" className="text-[#e7c6ff] underline">+27 73 028 6401</a></li>
                <li><span className="font-medium">Instagram:</span> <a href="https://instagram.com/lesedinovatech_hub" target="_blank" rel="noopener noreferrer" className="text-[#e7c6ff] underline">@lesedinovatech_hub</a></li>
              </ul>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
