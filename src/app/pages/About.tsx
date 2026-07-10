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
                <img loading="lazy" decoding="async"
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80"
                  alt="Young people learning to code on laptops"
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
                <img loading="lazy" decoding="async"
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

      {/* Recognition & Partnerships */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-[#caf0f8] to-[#e7c6ff] rounded-full mb-4">
              <span className="text-xs font-semibold tracking-widest text-gray-700 uppercase">Recognition &amp; Partnerships</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Trusted &amp; Recognised</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Lesedi NovaTech Hub is backed by leading organisations committed to education, youth empowerment, and digital inclusion.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="relative bg-gradient-to-br from-[#caf0f8]/30 to-white border border-[#caf0f8] rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#caf0f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Certificate of Mentorship</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Study Trust</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Awarded for outstanding mentorship contributions to youth education and academic development.</p>
            </div>
            <div className="relative bg-gradient-to-br from-[#e7c6ff]/30 to-white border border-[#e7c6ff] rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#e7c6ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Certificate of Service</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">First National Bank</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Recognised by FNB for dedicated service and meaningful contribution to the community and youth development.</p>
            </div>
            <div className="relative bg-gradient-to-br from-[#ffc8dd]/30 to-white border border-[#ffc8dd] rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#ffc8dd] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Academic Sponsorship</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">HP Trust</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Sponsored by HP Trust throughout the BSc in Information Technology degree, supporting the next generation of tech leaders.</p>
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
