import { Link } from 'react-router';
import { Code, Shield, Cpu, Users, Sparkles, Heart, Clock, CheckCircle } from 'lucide-react';
import { useSEO } from '../components/useSEO';

interface Program {
  icon: React.ReactNode;
  gradient: string;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  level: string;
  dotColor: string;
}

const programs: Program[] = [
  {
    icon: <Users className="w-7 h-7 text-gray-900" />,
    gradient: 'from-[#caf0f8] to-[#e7c6ff]',
    dotColor: 'bg-[#caf0f8]',
    title: 'Basic Computer Skills',
    description: 'Learn essential computer fundamentals including typing, file management, internet navigation, and productivity software.',
    topics: ['Microsoft Office Suite', 'Digital Communication', 'Online Safety Basics'],
    duration: '4 weeks',
    level: 'No experience needed',
  },
  {
    icon: <Code className="w-7 h-7 text-gray-900" />,
    gradient: 'from-[#e7c6ff] to-[#ffc8dd]',
    dotColor: 'bg-[#e7c6ff]',
    title: 'Introduction to Coding',
    description: 'Start your programming journey with hands-on projects in web development and foundational programming concepts.',
    topics: ['HTML, CSS & JavaScript', 'Python Fundamentals', 'Project-Based Learning'],
    duration: '8 weeks',
    level: 'Basic computer skills helpful',
  },
  {
    icon: <Shield className="w-7 h-7 text-gray-900" />,
    gradient: 'from-[#ffc8dd] to-[#caf0f8]',
    dotColor: 'bg-[#ffc8dd]',
    title: 'Cybersecurity Awareness',
    description: 'Understand digital threats and learn how to protect yourself and others in the online world.',
    topics: ['Password Security', 'Privacy Protection', 'Scam Awareness'],
    duration: '3 weeks',
    level: 'No experience needed',
  },
  {
    icon: <Cpu className="w-7 h-7 text-gray-900" />,
    gradient: 'from-[#caf0f8] to-[#ffc8dd]',
    dotColor: 'bg-[#caf0f8]',
    title: 'AI Fundamentals',
    description: 'Explore artificial intelligence concepts and learn how AI is shaping the future of technology.',
    topics: ['Machine Learning Basics', 'AI Tools & Applications', 'Ethical AI'],
    duration: '6 weeks',
    level: 'Basic computer skills helpful',
  },
  {
    icon: <Sparkles className="w-7 h-7 text-gray-900" />,
    gradient: 'from-[#e7c6ff] to-[#caf0f8]',
    dotColor: 'bg-[#e7c6ff]',
    title: 'Digital Literacy',
    description: 'Develop critical thinking skills for navigating the digital world responsibly and effectively.',
    topics: ['Information Evaluation', 'Digital Citizenship', 'Social Media Awareness'],
    duration: '3 weeks',
    level: 'No experience needed',
  },
  {
    icon: <Heart className="w-7 h-7 text-gray-900" />,
    gradient: 'from-[#ffc8dd] to-[#e7c6ff]',
    dotColor: 'bg-[#ffc8dd]',
    title: 'Mentorship Program',
    description: 'Connect with experienced professionals who guide and support your learning journey.',
    topics: ['One-on-One Guidance', 'Career Counseling', 'Skill Development'],
    duration: 'Ongoing (3-month cycles)',
    level: 'Open to all students',
  },
];

export default function Programs() {
  useSEO({ title: 'Free Tech Programs – Coding, Cybersecurity & More', description: `Explore our free youth technology programs including coding bootcamps, cybersecurity awareness, digital literacy, AI & Machine Learning, and social media marketing.`, path: '/programs' });

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

      {/* Visual Banner */}
      <section className="relative h-52 sm:h-64 overflow-hidden">
        <img loading="lazy" decoding="async"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
          alt="Students learning digital skills together"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 via-gray-900/40 to-transparent flex items-center px-8 sm:px-16">
          <p className="text-white text-lg sm:text-xl font-semibold leading-relaxed max-w-sm sm:max-w-md">
            Free programs designed for youth who are ready to shape their digital future.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((prog) => (
              <div
                key={prog.title}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${prog.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  {prog.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{prog.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base flex-1">{prog.description}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-5">
                  {prog.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 ${prog.dotColor} rounded-full flex-shrink-0`}></div>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-4 mt-auto space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
                    <span><span className="font-medium text-gray-700">Duration:</span> {prog.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
                    <span><span className="font-medium text-gray-700">Level:</span> {prog.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How to Apply</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Getting started is simple — no forms, no complicated process.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Choose a Program', desc: 'Pick the program that interests you most from the list above — or ask us which one suits you best.', color: 'bg-[#caf0f8]' },
              { step: '02', title: 'Get in Touch', desc: 'WhatsApp us on +27 73 028 6401 or email lesnovatechub@gmail.com with your name, location, and chosen program.', color: 'bg-[#e7c6ff]' },
              { step: '03', title: 'Start Learning', desc: "We'll confirm your spot and share details about the schedule, online link, and what to prepare.", color: 'bg-[#ffc8dd]' },
            ].map(({ step, title, desc, color }) => (
              <div key={step} className="text-center px-4">
                <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="font-bold text-lg text-gray-900">{step}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation text-center"
            >
              Apply Now
            </Link>
            <a
              href="https://wa.me/27730286401"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all touch-manipulation text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
