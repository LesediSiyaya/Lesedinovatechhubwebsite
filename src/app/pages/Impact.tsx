import { Link } from 'react-router';
import { Users, Heart, Target, Lightbulb } from 'lucide-react';
import { useSEO } from '../components/useSEO';

export default function Impact() {
  useSEO({ title: 'Our Impact – Transforming Youth Through Technology', description: `See the real impact Lesedi NovaTech Hub is making in rural South Africa — youth empowered, communities connected, and futures shaped through technology education.`, path: '/impact' });

  return (
    <div>
      {/* Header */}
      <section className="pt-12 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creating lasting change in communities through technology education and empowerment
          </p>
        </div>
      </section>

      {/* Current Stats */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-400 text-sm mb-6 uppercase tracking-wider font-medium">Where We Are Today</p>
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

      {/* Impact Goals */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Goals by 2027</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Measurable targets driving our mission forward
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="text-center px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#caf0f8] to-[#e7c6ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">500+</h3>
              <p className="text-sm sm:text-base text-gray-600">Youth to be empowered by 2027</p>
            </div>
            <div className="text-center px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#e7c6ff] to-[#ffc8dd] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">50%</h3>
              <p className="text-sm sm:text-base text-gray-600">Female participation target</p>
            </div>
            <div className="text-center px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#ffc8dd] to-[#caf0f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">10+</h3>
              <p className="text-sm sm:text-base text-gray-600">Rural communities reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Impact Areas */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Impact Areas</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
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

      {/* Mission Commitment */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#caf0f8] via-[#e7c6ff] to-[#ffc8dd] rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Commitment to Change</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Community-driven initiative bridging the digital gap through education and technology
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#caf0f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Bridging the Digital Divide</h4>
                    <p className="text-gray-600 text-sm">
                      Breaking down barriers between rural and urban communities by providing equal access to technology education and resources.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e7c6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Empowering Youth with IT Skills</h4>
                    <p className="text-gray-600 text-sm">
                      Equipping young people with practical digital skills and knowledge to thrive in the modern technology-driven economy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffc8dd] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Reducing Unemployment</h4>
                    <p className="text-gray-600 text-sm">
                      Creating pathways to employment and entrepreneurship through comprehensive tech education and mentorship programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#caf0f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Promoting Equal Access</h4>
                    <p className="text-gray-600 text-sm">
                      Ensuring every young person, regardless of background or location, has the opportunity to learn and grow in technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-700 font-medium">
                Youth-focused innovation hub committed to community transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Be Part of the Change</h2>
          <p className="text-gray-700 text-lg mb-8">
            Support our mission and help us reach more youth in rural communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#ffc8dd] hover:bg-[#ffb3cd] text-gray-900 font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation text-center"
            >
              Get Involved
            </Link>
            <Link
              to="/programs"
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all touch-manipulation text-center"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
