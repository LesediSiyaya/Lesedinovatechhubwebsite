import { Link } from 'react-router';
import { Code, Shield, Cpu, Target, Sparkles, Lightbulb, CheckCircle } from 'lucide-react';

export default function Services() {
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

      {/* Website Design & Development */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
