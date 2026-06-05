import { Link } from 'react-router';
import { Target, Heart, Lightbulb } from 'lucide-react';
import { useSEO } from '../components/useSEO';

export default function About() {
  useSEO({ title: 'About Us – Our Mission & Founder', description: `Learn about Lesedi NovaTech Hub's mission to bridge the digital divide for rural South African youth, our values, and the story behind our founder Lesedi Siyaya.`, path: '/about' });

  return (
    <div>
      {/* Header */}
      <section className="pt-12 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#caf0f8] to-[#ffc8dd] rounded-full mb-4">
            <span className="text-sm font-medium text-gray-900">Bridging the digital gap through education and technology</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering rural youth through technology education and digital literacy
          </p>
        </div>
      </section>

      {/* Mission Story */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded by <span className="font-semibold text-[#ffc8dd]">Lesedi Siyaya</span>, the Hub was born from a vision to empower rural youth and bridge the digital divide that separates communities.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In many rural areas, young people face limited access to quality education, technology resources, and opportunities to develop digital skills essential for the modern workforce. This creates a cycle of inequality that holds back entire communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our hub provides a welcoming space where youth can learn, grow, and discover their potential in technology. We believe that with the right support, every young person can become an innovator and change-maker in their community.
              </p>
            </div>

            <div className="rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 sm:h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80"
                  alt="Young people engaged in technology and community"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#caf0f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Vision</h3>
                    <p className="text-gray-600 text-sm">A future where every youth has equal access to digital opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#e7c6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Values</h3>
                    <p className="text-gray-600 text-sm">Inclusivity, innovation, empowerment, and community transformation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#ffc8dd] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Approach</h3>
                    <p className="text-gray-600 text-sm">Hands-on learning, mentorship, and real-world skills development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Founder</h2>
            <p className="text-gray-600">
              Lesedi Siyaya — Visionary leader committed to bridging the digital divide
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Portrait photo */}
              <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[480px] overflow-hidden">
                <img
                  src="/founder.jpg"
                  alt="Lesedi Siyaya, Founder of Lesedi NovaTech Hub"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Bio */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <p className="text-xs font-semibold tracking-widest text-[#c77dff] uppercase mb-2">Meet Our Founder</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Lesedi Siyaya</h3>
                <p className="text-sm font-medium text-gray-500 mb-6">Founder &amp; Director, Lesedi NovaTech Hub</p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Lesedi Siyaya founded the Hub with a clear mission: to create equal opportunities for rural youth to access technology education and digital skills training.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Growing up witnessing the disparities between rural and urban communities, she recognised that access to technology and digital literacy could be the key to unlocking potential and creating sustainable change.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through the Hub, her vision is to empower young people not just with technical skills, but with the confidence to pursue careers in technology, start their own ventures, and bring innovation back to their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#caf0f8] via-[#e7c6ff] to-[#ffc8dd]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-gray-700 text-lg mb-8">
            Together, we can create lasting change and empower the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation text-center"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-lg transition-all touch-manipulation text-center"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
