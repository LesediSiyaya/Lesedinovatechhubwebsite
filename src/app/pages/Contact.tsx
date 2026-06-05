import { useState } from 'react';
import { Mail, Phone, Sparkles } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { useSEO } from '../components/useSEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-e72b99af/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your interest! We have received your application and will contact you soon.'
        });
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit form. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  useSEO({ title: 'Contact Us – Get in Touch', description: `Contact Lesedi NovaTech Hub to join a program, request a service quote, or learn more. Reach us by email at lesnovatechub@gmail.com or WhatsApp 073 028 6401.`, path: '/contact' });


  return (
    <div>
      {/* Header */}
      <section className="pt-12 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your journey or support our mission? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Application Form</h3>

              {submitStatus && (
                <div className={`mb-4 sm:mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block mb-2 text-sm font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-[#ffc8dd] focus:outline-none focus:ring-2 focus:ring-[#ffc8dd]/20 text-base touch-manipulation disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-[#ffc8dd] focus:outline-none focus:ring-2 focus:ring-[#ffc8dd]/20 text-base touch-manipulation disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    disabled={isSubmitting}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-[#ffc8dd] focus:outline-none focus:ring-2 focus:ring-[#ffc8dd]/20 text-base touch-manipulation disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">I'm interested in *</label>
                  <select
                    required
                    disabled={isSubmitting}
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-[#ffc8dd] focus:outline-none focus:ring-2 focus:ring-[#ffc8dd]/20 text-base touch-manipulation bg-white disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="student">Joining as a Student</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="mentor">Becoming a Mentor</option>
                    <option value="partner">Partnership Opportunities</option>
                    <option value="sponsor">Sponsorship</option>
                    <option value="service">Professional Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Message</label>
                  <textarea
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ffc8dd] focus:outline-none focus:ring-2 focus:ring-[#ffc8dd]/20 text-base touch-manipulation resize-y disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                    placeholder="Tell us more about your interest..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#caf0f8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:lesnovatechub@gmail.com" className="text-gray-600 text-sm hover:text-[#ffc8dd] transition-colors">
                        lesnovatechub@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#e7c6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a href="tel:+27730286401" className="text-gray-600 text-sm hover:text-[#ffc8dd] transition-colors">
                        073 028 6401
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#caf0f8] via-[#e7c6ff] to-[#ffc8dd] rounded-2xl p-6 sm:p-8 text-center">
                <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-gray-900" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Join Our Community</h3>
                <p className="text-gray-700 text-sm mb-3 sm:mb-4">
                  Be part of the movement to bridge the digital divide and empower the next generation of innovators.
                </p>
                <p className="text-sm font-medium">
                  Together, we can create lasting change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
