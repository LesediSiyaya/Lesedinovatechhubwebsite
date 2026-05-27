import { Link } from 'react-router';
import { Code, Shield, Cpu, Users, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-12 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#ffc8dd] rounded-full opacity-[0.12] blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-[#caf0f8] rounded-full opacity-[0.12] blur-3xl" />
          <div className="absolute -bottom-16 right-1/3 w-[350px] h-[350px] bg-[#e7c6ff] rounded-full opacity-[0.10] blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-[#caf0f8] via-[#e7c6ff] to-[#ffc8dd] rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium">Digital Empowerment for All · South Africa</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#030213] via-[#e7c6ff] to-[#ffc8dd] bg-clip-text text-transparent px-2">
              Lesedi NovaTech Hub
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 sm:mb-8 px-2">
              Igniting the next generation of innovators
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Bridging the digital gap between rural and urban youth through accessible IT education, digital literacy, and emerging technologies.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2">
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-xs sm:text-sm text-gray-700 shadow-sm border border-white">Community-driven initiative</span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-xs sm:text-sm text-gray-700 shadow-sm border border-white">Youth-focused innovation hub</span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-xs sm:text-sm text-gray-700 shadow-sm border border-white">Empowering the next generation</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/programs"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation shadow-lg hover:shadow-xl text-center"
              >
                Join the Initiative
              </Link>
              <Link
                to="/services"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation shadow-lg hover:shadow-xl text-center"
              >
                Explore Services
              </Link>
              <Link
                to="/impact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-all touch-manipulation text-center"
              >
                Support the Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6 font-medium">Growing every month</p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#ffc8dd]">10+</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Students Trained</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#e7c6ff]">5</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Communities Reached</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#caf0f8]">7</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Months Running</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview - Programs */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Our Programs</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive learning pathways designed to equip youth with essential digital skills
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#caf0f8] to-[#e7c6ff] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Basic Computer Skills</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn essential computer fundamentals including typing, file management, and productivity software.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#e7c6ff] to-[#ffc8dd] rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Introduction to Coding</h3>
              <p className="text-gray-600 text-sm mb-4">
                Start your programming journey with hands-on projects in web development and programming concepts.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ffc8dd] to-[#caf0f8] rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity Awareness</h3>
              <p className="text-gray-600 text-sm mb-4">
                Understand digital threats and learn how to protect yourself and others in the online world.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/programs"
              className="inline-block px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview - Services */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Professional Services</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Expert digital solutions for individuals and businesses ready to elevate their online presence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#caf0f8] to-[#e7c6ff] rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Design & Development</h3>
              <p className="text-gray-600 text-sm mb-4">
                Modern, responsive websites built with the latest technologies.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#e7c6ff] to-[#ffc8dd] rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                User-centered design that creates intuitive and engaging digital experiences.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ffc8dd] to-[#caf0f8] rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI & Automation Solutions</h3>
              <p className="text-gray-600 text-sm mb-4">
                Leverage artificial intelligence and automation to enhance productivity.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#caf0f8] via-[#e7c6ff] to-[#ffc8dd]">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-gray-900" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Join us in bridging the digital divide and empowering the next generation of innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation text-center"
            >
              Get in Touch
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-lg transition-all touch-manipulation text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
