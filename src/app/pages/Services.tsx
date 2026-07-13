import { Link } from 'react-router';
import { Code, Shield, Cpu, Target, Sparkles, Lightbulb, CheckCircle, Tag, Globe, FileText } from 'lucide-react';
import { useSEO } from '../components/useSEO';

export default function Services() {
  useSEO({ title: 'Professional Digital Services – Web Design, UI/UX & AI', description: `NovaTech Hub offers affordable web design, mobile app development, UI/UX design, cybersecurity consulting, digital marketing, and AI solutions for businesses.`, path: '/services' });

  return (
    <div>
      {/* Header */}
      <section className="pt-12 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Professional Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert digital solutions for individuals and businesses ready to elevate their online presence
          </p>
        </div>
      </section>

      {/* Quick Jump Nav */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {[
              { label: 'Web Design', href: '#website' },
              { label: 'UI/UX', href: '#uiux' },
              { label: 'Branding', href: '#branding' },
              { label: 'Cybersecurity', href: '#cybersecurity' },
              { label: 'AI & Automation', href: '#ai-automation' },
              { label: 'Strategy', href: '#digital-strategy' },
              { label: 'Business Registration', href: '#business-registration' },
              { label: 'Domain', href: '#domain' },
              { label: 'Pricing', href: '#pricing' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="shrink-0 px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Website Design & Development */}
      <section id="website" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#caf0f8] to-[#e7c6ff] rounded-xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Website Design & Development</h2>
              <p className="text-gray-700 mb-6">
                Modern, responsive websites built with the latest technologies. From landing pages to full web applications, we create digital experiences that engage and convert.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-semibold text-lg mb-4">What's Included</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom responsive design tailored to your brand</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Modern frameworks (React, Tailwind CSS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mobile-first development approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SEO optimization and performance tuning</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-2">Perfect For</h4>
                <p className="text-sm text-gray-600">Small businesses, startups, nonprofits, and entrepreneurs looking to establish or improve their online presence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Design */}
      <section id="uiux" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-white p-8 rounded-2xl">
              <h3 className="font-semibold text-lg mb-4">What's Included</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">User research and persona development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Wireframing and prototyping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Interactive design mockups</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Usability testing and iteration</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-2">Perfect For</h4>
                <p className="text-sm text-gray-600">Apps, websites, and digital products that need intuitive, user-friendly interfaces</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e7c6ff] to-[#ffc8dd] rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold mb-4">UI/UX Design Services</h2>
              <p className="text-gray-700 mb-6">
                User-centered design that creates intuitive and engaging digital experiences. We focus on understanding your users to deliver designs that delight and perform.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Branding */}
      <section id="branding" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#ffc8dd] to-[#caf0f8] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Digital Branding & Identity</h2>
              <p className="text-gray-700 mb-6">
                Create a memorable brand identity that resonates with your target audience across all digital platforms. Stand out in the digital landscape with cohesive branding.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all"
              >
                Work With Us
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-semibold text-lg mb-4">What's Included</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffc8dd] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Brand strategy and positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffc8dd] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Logo design and visual identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffc8dd] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Color palette and typography systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffc8dd] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Brand guidelines documentation</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-2">Perfect For</h4>
                <p className="text-sm text-gray-600">New businesses, rebranding initiatives, or organizations seeking cohesive digital identity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity */}
      <section id="cybersecurity" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-white p-8 rounded-2xl">
              <h3 className="font-semibold text-lg mb-4">What's Included</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Security awareness training</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Risk assessment and consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Best practices implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ongoing support and education</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-2">Perfect For</h4>
                <p className="text-sm text-gray-600">Organizations, teams, and individuals looking to strengthen their digital security posture</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#caf0f8] to-[#ffc8dd] rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Cybersecurity Consultation</h2>
              <p className="text-gray-700 mb-6">
                Protect your digital assets with security awareness training and consultation. We help individuals and organizations understand and mitigate cyber threats.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all"
              >
                Get Protected
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Automation */}
      <section id="ai-automation" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#e7c6ff] to-[#caf0f8] rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold mb-4">AI & Automation Solutions</h2>
              <p className="text-gray-700 mb-6">
                Leverage artificial intelligence and automation to streamline processes and enhance productivity. Transform your operations with smart technology solutions.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all"
              >
                Explore Solutions
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-semibold text-lg mb-4">What's Included</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Process automation consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">AI integration strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom automation solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Implementation and training</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-2">Perfect For</h4>
                <p className="text-sm text-gray-600">Businesses looking to improve efficiency, reduce manual work, and leverage AI capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Strategy */}
      <section id="digital-strategy" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-white p-8 rounded-2xl">
              <h3 className="font-semibold text-lg mb-4">What's Included</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffc8dd] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Digital presence audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffc8dd] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Strategic roadmap development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffc8dd] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Content and marketing strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffc8dd] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Performance tracking and optimization</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-2">Perfect For</h4>
                <p className="text-sm text-gray-600">Organizations seeking comprehensive digital transformation and strategic online growth</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ffc8dd] to-[#e7c6ff] rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Digital Strategy & Online Presence</h2>
              <p className="text-gray-700 mb-6">
                Develop a comprehensive digital strategy to build and maintain a strong online presence for your brand. Strategic guidance for sustainable digital growth.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all"
              >
                Get Strategy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Registration */}
      <section id="business-registration" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-white p-8 rounded-2xl">
              <h3 className="font-semibold text-lg mb-4">What's Included</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Business name search and reservation on CIPC</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Company registration (PTY Ltd, NPC, Sole Proprietor)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SARS income tax number registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e7c6ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Compliance guidance and documentation support</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-2">Perfect For</h4>
                <p className="text-sm text-gray-600">Entrepreneurs, freelancers, and community organisations ready to formalise their business and operate legally in South Africa</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e7c6ff] to-[#ffc8dd] rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Business Registration (CIPC)</h2>
              <p className="text-gray-700 mb-6">
                We guide you through the full business registration process with CIPC — from reserving your company name to obtaining your registration certificate and tax number. Take the stress out of going formal.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all"
              >
                Register Your Business
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Registration */}
      <section id="domain" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#caf0f8] to-[#e7c6ff] rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Domain Registration & Setup</h2>
              <p className="text-gray-700 mb-6">
                Get your business online with a professional domain name. We handle everything from finding the right domain to full DNS configuration and email setup — so you're up and running without the technical headache.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all"
              >
                Register Your Domain
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-semibold text-lg mb-4">What's Included</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Domain name search and registration (.co.za, .com, .org)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">DNS configuration and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Professional email setup (e.g. info@yourbusiness.co.za)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#caf0f8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Domain connection to your website or hosting</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-2">Perfect For</h4>
                <p className="text-sm text-gray-600">New businesses, freelancers, and anyone ready to establish a professional online presence with their own branded domain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffc8dd] rounded-full mb-4">
              <Tag className="w-4 h-4 text-gray-900" />
              <span className="text-sm font-semibold text-gray-900">Launch Special — 40% Off All Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Introductory rates to help you get started. Lock in these prices now before we grow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Website Design */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#caf0f8] to-[#e7c6ff] p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Code className="w-5 h-5 text-gray-900" />
                  <h3 className="font-semibold text-gray-900">Website Design & Dev</h3>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { tier: 'Starter', price: 'R1,500', was: 'R2,500', desc: 'Landing page, mobile-friendly' },
                  { tier: 'Standard', price: 'R3,000', was: 'R5,000', desc: 'Multi-page site + contact form' },
                  { tier: 'Premium', price: 'R6,000', was: 'R10,000', desc: 'Full web app + SEO optimised' },
                ].map(({ tier, price, was, desc }) => (
                  <div key={tier} className="p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-sm">{tier}</p>
                      <p className="text-gray-500 text-xs">{desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-gray-900">{price}</p>
                      <p className="text-xs text-gray-400 line-through">{was}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#e7c6ff] to-[#ffc8dd] p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-5 h-5 text-gray-900" />
                  <h3 className="font-semibold text-gray-900">UI/UX Design</h3>
                <p className="text-xs text-gray-700 mt-0.5 opacity-80">Interfaces people love to use</p>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { tier: 'Starter', price: 'R900', was: 'R1,500', desc: 'Wireframes + basic mockup' },
                  { tier: 'Standard', price: 'R2,100', was: 'R3,500', desc: 'Full prototype + user testing' },
                  { tier: 'Premium', price: 'R4,200', was: 'R7,000', desc: 'End-to-end UX with iterations' },
                ].map(({ tier, price, was, desc }) => (
                  <div key={tier} className="p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-sm">{tier}</p>
                      <p className="text-gray-500 text-xs">{desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-gray-900">{price}</p>
                      <p className="text-xs text-gray-400 line-through">{was}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital Branding */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#ffc8dd] to-[#caf0f8] p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-5 h-5 text-gray-900" />
                  <h3 className="font-semibold text-gray-900">Digital Branding</h3>
                <p className="text-xs text-gray-700 mt-0.5 opacity-80">Logos, identity &amp; brand systems that stand out</p>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { tier: 'Starter', price: 'R900', was: 'R1,500', desc: 'Logo + colour palette' },
                  { tier: 'Standard', price: 'R1,800', was: 'R3,000', desc: 'Full identity + brand guide' },
                  { tier: 'Premium', price: 'R3,600', was: 'R6,000', desc: 'Complete brand system' },
                ].map(({ tier, price, was, desc }) => (
                  <div key={tier} className="p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-sm">{tier}</p>
                      <p className="text-gray-500 text-xs">{desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-gray-900">{price}</p>
                      <p className="text-xs text-gray-400 line-through">{was}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#caf0f8] to-[#ffc8dd] p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-5 h-5 text-gray-900" />
                  <h3 className="font-semibold text-gray-900">Cybersecurity</h3>
                <p className="text-xs text-gray-700 mt-0.5 opacity-80">Protect your business from digital threats</p>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { tier: 'Per Session', price: 'R300', was: 'R500', desc: 'Awareness training session' },
                  { tier: 'Standard', price: 'R720', was: 'R1,200', desc: 'Risk assessment + report' },
                  { tier: 'Premium', price: 'R1,500', was: 'R2,500', desc: 'Full consultation + ongoing support' },
                ].map(({ tier, price, was, desc }) => (
                  <div key={tier} className="p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-sm">{tier}</p>
                      <p className="text-gray-500 text-xs">{desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-gray-900">{price}</p>
                      <p className="text-xs text-gray-400 line-through">{was}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & Automation */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#e7c6ff] to-[#caf0f8] p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-5 h-5 text-gray-900" />
                  <h3 className="font-semibold text-gray-900">AI &amp; Automation</h3>
                <p className="text-xs text-gray-700 mt-0.5 opacity-80">Save time with smart, automated workflows</p>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { tier: 'Starter', price: 'R1,200', was: 'R2,000', desc: 'Process audit + recommendations' },
                  { tier: 'Standard', price: 'R3,000', was: 'R5,000', desc: 'Custom automation solution' },
                  { tier: 'Premium', price: 'R6,000', was: 'R10,000', desc: 'Full AI integration + training' },
                ].map(({ tier, price, was, desc }) => (
                  <div key={tier} className="p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-sm">{tier}</p>
                      <p className="text-gray-500 text-xs">{desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-gray-900">{price}</p>
                      <p className="text-xs text-gray-400 line-through">{was}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital Strategy */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#ffc8dd] to-[#e7c6ff] p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="w-5 h-5 text-gray-900" />
                  <h3 className="font-semibold text-gray-900">Digital Strategy</h3>
                <p className="text-xs text-gray-700 mt-0.5 opacity-80">A clear roadmap for your online growth</p>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { tier: 'Starter', price: 'R600', was: 'R1,000', desc: 'Digital presence audit' },
                  { tier: 'Standard', price: 'R1,500', was: 'R2,500', desc: 'Strategy roadmap + content plan' },
                  { tier: 'Premium', price: 'R3,000', was: 'R5,000', desc: 'Full strategy + implementation' },
                ].map(({ tier, price, was, desc }) => (
                  <div key={tier} className="p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-sm">{tier}</p>
                      <p className="text-gray-500 text-xs">{desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-gray-900">{price}</p>
                      <p className="text-xs text-gray-400 line-through">{was}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Registration */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#e7c6ff] to-[#ffc8dd] p-5">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-5 h-5 text-gray-900" />
                  <h3 className="font-semibold text-gray-900">Business Registration</h3>
                <p className="text-xs text-gray-700 mt-0.5 opacity-80">Get your business officially registered with CIPC</p>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { tier: 'Starter', price: 'R480', was: 'R800', desc: 'Name reservation + CIPC guidance' },
                  { tier: 'Standard', price: 'R900', was: 'R1,500', desc: 'Full PTY Ltd / NPC registration' },
                  { tier: 'Premium', price: 'R1,800', was: 'R3,000', desc: 'Registration + SARS + compliance' },
                ].map(({ tier, price, was, desc }) => (
                  <div key={tier} className="p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-sm">{tier}</p>
                      <p className="text-gray-500 text-xs">{desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-gray-900">{price}</p>
                      <p className="text-xs text-gray-400 line-through">{was}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Domain Registration */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#caf0f8] to-[#e7c6ff] p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-5 h-5 text-gray-900" />
                  <h3 className="font-semibold text-gray-900">Domain Registration</h3>
                <p className="text-xs text-gray-700 mt-0.5 opacity-80">Secure your .co.za or .com address today</p>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { tier: 'Starter', price: 'R300', was: 'R500', desc: 'Domain registration + basic DNS' },
                  { tier: 'Standard', price: 'R600', was: 'R1,000', desc: 'Domain + DNS + professional email' },
                  { tier: 'Premium', price: 'R1,200', was: 'R2,000', desc: 'Full setup + hosting connection' },
                ].map(({ tier, price, was, desc }) => (
                  <div key={tier} className="p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-sm">{tier}</p>
                      <p className="text-gray-500 text-xs">{desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-gray-900">{price}</p>
                      <p className="text-xs text-gray-400 line-through">{was}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            All prices exclude VAT. Custom quotes available for larger projects.{' '}
            <Link to="/contact" className="text-[#ffc8dd] hover:underline font-medium">Get in touch</Link> to discuss your needs.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#caf0f8] via-[#e7c6ff] to-[#ffc8dd]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
