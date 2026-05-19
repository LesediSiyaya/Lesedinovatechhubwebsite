import { Link } from 'react-router';
import { Code, Shield, Cpu, Users, Sparkles, Heart } from 'lucide-react';

export default function Programs() {
  return (
    <div>
      {/* Header */}
      <section className="pt-12 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive learning pathways designed to equip youth with essential digital skills
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Basic Computer Skills */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#caf0f8] to-[#e7c6ff] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Basic Computer Skills</h3>
              <p className="text-gray-600 mb-4">
                Learn essential computer fundamentals including typing, file management, internet navigation, and productivity software.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#caf0f8] rounded-full"></div>
                  Microsoft Office Suite
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#caf0f8] rounded-full"></div>
                  Digital Communication
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#caf0f8] rounded-full"></div>
                  Online Safety Basics
                </li>
              </ul>
            </div>

            {/* Coding Introduction */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#e7c6ff] to-[#ffc8dd] rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Introduction to Coding</h3>
              <p className="text-gray-600 mb-4">
                Start your programming journey with hands-on projects in web development and foundational programming concepts.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#e7c6ff] rounded-full"></div>
                  HTML, CSS & JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#e7c6ff] rounded-full"></div>
                  Python Fundamentals
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#e7c6ff] rounded-full"></div>
                  Project-Based Learning
                </li>
              </ul>
            </div>

            {/* Cybersecurity Awareness */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ffc8dd] to-[#caf0f8] rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity Awareness</h3>
              <p className="text-gray-600 mb-4">
                Understand digital threats and learn how to protect yourself and others in the online world.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ffc8dd] rounded-full"></div>
                  Password Security
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ffc8dd] rounded-full"></div>
                  Privacy Protection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ffc8dd] rounded-full"></div>
                  Scam Awareness
                </li>
              </ul>
            </div>

            {/* AI Fundamentals */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#caf0f8] to-[#ffc8dd] rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Fundamentals</h3>
              <p className="text-gray-600 mb-4">
                Explore artificial intelligence concepts and learn how AI is shaping the future of technology.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#caf0f8] rounded-full"></div>
                  Machine Learning Basics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#caf0f8] rounded-full"></div>
                  AI Tools & Applications
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#caf0f8] rounded-full"></div>
                  Ethical AI
                </li>
              </ul>
            </div>

            {/* Digital Literacy */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#e7c6ff] to-[#caf0f8] rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Literacy</h3>
              <p className="text-gray-600 mb-4">
                Develop critical thinking skills for navigating the digital world responsibly and effectively.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#e7c6ff] rounded-full"></div>
                  Information Evaluation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#e7c6ff] rounded-full"></div>
                  Digital Citizenship
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#e7c6ff] rounded-full"></div>
                  Social Media Awareness
                </li>
              </ul>
            </div>

            {/* Mentorship */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ffc8dd] to-[#e7c6ff] rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mentorship Program</h3>
              <p className="text-gray-600 mb-4">
                Connect with experienced professionals who guide and support your learning journey.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ffc8dd] rounded-full"></div>
                  One-on-One Guidance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ffc8dd] rounded-full"></div>
                  Career Counseling
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ffc8dd] rounded-full"></div>
                  Skill Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Join our programs and take the first step toward building your future in technology.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
