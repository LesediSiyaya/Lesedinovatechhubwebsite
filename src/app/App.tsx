import { useState } from 'react';
import {
  Sparkles,
  Code,
  Shield,
  Cpu,
  Users,
  Target,
  Heart,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffc8dd]" />
              <span className="font-semibold text-lg sm:text-xl">Lesedi NovaTech Hub</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-[#ffc8dd] transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-[#ffc8dd] transition-colors">About</button>
              <button onClick={() => scrollToSection('programs')} className="hover:text-[#ffc8dd] transition-colors">Programs</button>
              <button onClick={() => scrollToSection('impact')} className="hover:text-[#ffc8dd] transition-colors">Impact</button>
              <button onClick={() => scrollToSection('get-involved')} className="hover:text-[#ffc8dd] transition-colors">Get Involved</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[#ffc8dd] transition-colors">Contact</button>
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
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-[#ffc8dd] transition-colors rounded-lg touch-manipulation">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-[#ffc8dd] transition-colors rounded-lg touch-manipulation">About</button>
              <button onClick={() => scrollToSection('programs')} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-[#ffc8dd] transition-colors rounded-lg touch-manipulation">Programs</button>
              <button onClick={() => scrollToSection('impact')} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-[#ffc8dd] transition-colors rounded-lg touch-manipulation">Impact</button>
              <button onClick={() => scrollToSection('get-involved')} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-[#ffc8dd] transition-colors rounded-lg touch-manipulation">Get Involved</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-[#ffc8dd] transition-colors rounded-lg touch-manipulation">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-[#caf0f8] via-[#e7c6ff] to-[#ffc8dd] rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium">Digital Empowerment for All</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#030213] via-[#e7c6ff] to-[#ffc8dd] bg-clip-text text-transparent px-2">
              Lesedi NovaTech Hub
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 sm:mb-8 px-2">
              Igniting the next generation of innovators
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
              Bridging the digital gap between rural and urban youth through accessible IT education, digital literacy, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation"
              >
                Join the Program
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-all touch-manipulation"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded by <span className="font-semibold text-[#ffc8dd]">Lesedi Siyaya</span>, Lesedi NovaTech Hub was born from a vision to empower rural youth and bridge the digital divide that separates communities.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In many rural areas, young people face limited access to quality education, technology resources, and opportunities to develop digital skills essential for the modern workforce. This creates a cycle of inequality that holds back entire communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our hub provides a welcoming space where youth can learn, grow, and discover their potential in technology. We believe that with the right support, every young person can become an innovator and change-maker in their community.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#caf0f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-600 text-sm">A future where every youth has equal access to digital opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e7c6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Our Values</h3>
                    <p className="text-gray-600 text-sm">Inclusivity, innovation, empowerment, and community transformation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffc8dd] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Our Approach</h3>
                    <p className="text-gray-600 text-sm">Hands-on learning, mentorship, and real-world skills development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 px-2">Our Programs</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Comprehensive learning pathways designed to equip youth with essential digital skills
            </p>
          </div>

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

      {/* Impact Section */}
      <section id="impact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 px-2">Our Impact Goals</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Creating lasting change in communities through technology education and empowerment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#caf0f8] to-[#e7c6ff] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">500+</h3>
              <p className="text-sm sm:text-base text-gray-600">Youth to be empowered by 2027</p>
            </div>
            <div className="text-center px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#e7c6ff] to-[#ffc8dd] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">50%</h3>
              <p className="text-sm sm:text-base text-gray-600">Female participation target</p>
            </div>
            <div className="text-center px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#ffc8dd] to-[#caf0f8] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">10+</h3>
              <p className="text-sm sm:text-base text-gray-600">Rural communities reached</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Key Impact Areas</h3>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#caf0f8] rounded-full"></div>
                    Youth Empowerment
                  </h4>
                  <p className="text-gray-600 text-sm ml-4">
                    Equipping young people with skills and confidence to pursue careers in technology and contribute meaningfully to the digital economy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#e7c6ff] rounded-full"></div>
                    Gender Equality in Tech
                  </h4>
                  <p className="text-gray-600 text-sm ml-4">
                    Actively encouraging and supporting young women to enter and thrive in technology fields traditionally dominated by men.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#ffc8dd] rounded-full"></div>
                    Digital Inclusion
                  </h4>
                  <p className="text-gray-600 text-sm ml-4">
                    Breaking down barriers to technology access and ensuring that rural communities are not left behind in the digital age.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#caf0f8] rounded-full"></div>
                    Community Transformation
                  </h4>
                  <p className="text-gray-600 text-sm ml-4">
                    Creating ripple effects as empowered youth bring new skills and opportunities back to their communities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#e7c6ff] rounded-full"></div>
                    Economic Development
                  </h4>
                  <p className="text-gray-600 text-sm ml-4">
                    Opening pathways to employment and entrepreneurship in the growing technology sector.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#ffc8dd] rounded-full"></div>
                    Education Access
                  </h4>
                  <p className="text-gray-600 text-sm ml-4">
                    Providing quality tech education that would otherwise be inaccessible to youth in underserved areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 px-2">Get Involved</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Join us in making a difference. There are many ways to support our mission.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#caf0f8] to-[#e7c6ff] p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all transform hover:scale-105 active:scale-100">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-gray-900" />
              <h3 className="font-semibold text-base sm:text-lg mb-2">Volunteer</h3>
              <p className="text-sm text-gray-700 mb-3 sm:mb-4">
                Share your skills and time to teach and inspire young learners.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium underline hover:no-underline touch-manipulation"
              >
                Learn more
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#e7c6ff] to-[#ffc8dd] p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all transform hover:scale-105 active:scale-100">
              <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-gray-900" />
              <h3 className="font-semibold text-base sm:text-lg mb-2">Become a Mentor</h3>
              <p className="text-sm text-gray-700 mb-3 sm:mb-4">
                Guide and support students on their learning journey.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium underline hover:no-underline touch-manipulation"
              >
                Learn more
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#ffc8dd] to-[#caf0f8] p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all transform hover:scale-105 active:scale-100">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-gray-900" />
              <h3 className="font-semibold text-base sm:text-lg mb-2">Partner With Us</h3>
              <p className="text-sm text-gray-700 mb-3 sm:mb-4">
                Collaborate to expand our reach and impact in communities.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium underline hover:no-underline touch-manipulation"
              >
                Learn more
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#caf0f8] to-[#ffc8dd] p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all transform hover:scale-105 active:scale-100">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-gray-900" />
              <h3 className="font-semibold text-base sm:text-lg mb-2">Sponsor</h3>
              <p className="text-sm text-gray-700 mb-3 sm:mb-4">
                Support our programs through funding and resources.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium underline hover:no-underline touch-manipulation"
              >
                Learn more
              </button>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Funding Support</h3>
            <p className="text-gray-600 mb-4">
              We welcome partnerships with organizations like the National Youth Development Agency (NYDA) and other institutions committed to youth empowerment and digital inclusion.
            </p>
            <p className="text-gray-600">
              Your support helps us provide free or subsidized training, equipment, internet access, and learning materials to youth who need them most.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 px-2">Get in Touch</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Ready to start your journey or support our mission? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Application Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-[#ffc8dd] focus:outline-none focus:ring-2 focus:ring-[#ffc8dd]/20 text-base touch-manipulation"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-[#ffc8dd] focus:outline-none focus:ring-2 focus:ring-[#ffc8dd]/20 text-base touch-manipulation"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-[#ffc8dd] focus:outline-none focus:ring-2 focus:ring-[#ffc8dd]/20 text-base touch-manipulation"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">I'm interested in *</label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-[#ffc8dd] focus:outline-none focus:ring-2 focus:ring-[#ffc8dd]/20 text-base touch-manipulation bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="student">Joining as a Student</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="mentor">Becoming a Mentor</option>
                    <option value="partner">Partnership Opportunities</option>
                    <option value="sponsor">Sponsorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ffc8dd] focus:outline-none focus:ring-2 focus:ring-[#ffc8dd]/20 text-base touch-manipulation resize-y"
                    placeholder="Tell us more about your interest..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation"
                >
                  Submit Application
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
                      <p className="text-gray-600 text-sm">info@lesedinovatech.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#e7c6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-gray-600 text-sm">+27 XX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#ffc8dd] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-gray-600 text-sm">Serving rural communities across South Africa</p>
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
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-[#ffc8dd] transition-colors">About Us</button>
                <button onClick={() => scrollToSection('programs')} className="block text-gray-400 hover:text-[#ffc8dd] transition-colors">Programs</button>
                <button onClick={() => scrollToSection('impact')} className="block text-gray-400 hover:text-[#ffc8dd] transition-colors">Impact</button>
                <button onClick={() => scrollToSection('get-involved')} className="block text-gray-400 hover:text-[#ffc8dd] transition-colors">Get Involved</button>
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
