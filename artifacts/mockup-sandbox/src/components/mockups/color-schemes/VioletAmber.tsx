// ZARQ — gradient sweep (dark → lavender → pink, smooth across all 4 letters)
import { Code, Shield, Users, Sparkles } from "lucide-react";

export default function VioletAmber() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" style={{ color: "#ffc8dd" }} />
            <span
              className="font-semibold text-xl tracking-widest bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #111827, #e7c6ff, #ffc8dd)" }}
            >
              ZARQ
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {["About", "Programs", "Services", "Impact"].map(l => (
              <span key={l} className="cursor-pointer hover:text-[#ffc8dd] transition-colors">{l}</span>
            ))}
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg">Contact</button>
        </div>
      </nav>

      <section className="pt-12 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#ffc8dd", opacity: 0.12 }} />
          <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: "#caf0f8", opacity: 0.12 }} />
          <div className="absolute -bottom-16 right-1/3 w-[350px] h-[350px] rounded-full blur-3xl" style={{ background: "#e7c6ff", opacity: 0.10 }} />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-block px-5 py-2 rounded-full mb-5" style={{ background: "linear-gradient(to right, #caf0f8, #e7c6ff, #ffc8dd)" }}>
            <span className="text-xs font-medium text-gray-800">Digital Empowerment for All · South Africa</span>
          </div>

          {/* Smooth gradient sweep across all 4 letters */}
          <h1
            className="text-8xl md:text-9xl font-black mb-5 leading-none tracking-widest bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to right, #111827, #caf0f8, #e7c6ff, #ffc8dd)" }}
          >
            ZARQ
          </h1>

          <p className="text-xl text-gray-700 mb-4">Igniting the next generation of innovators</p>
          <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Bridging the digital gap between rural and urban youth through accessible IT education, digital literacy, and emerging technologies.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {["Community-driven initiative", "Youth-focused innovation hub", "Empowering the next generation"].map(t => (
              <span key={t} className="px-4 py-2 bg-white/80 rounded-full text-xs text-gray-700 shadow-sm border border-white">{t}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-8 py-4 rounded-lg font-medium shadow-lg" style={{ background: "#ffc8dd", color: "#111827" }}>Join the Initiative</button>
            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium shadow-lg">Explore Services</button>
            <button className="px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-medium">Support the Mission</button>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-900">
        <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-10">Our impact — growing every month</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { n: "127+", label: "Students Trained",    sub: "and growing",            c: "#ffc8dd" },
            { n: "7",    label: "Free Programs",        sub: "no cost ever",           c: "#e7c6ff" },
            { n: "5",    label: "Communities Reached",  sub: "across SA",              c: "#caf0f8" },
            { n: "3",    label: "Trusted Partners",     sub: "FNB · HP · Study Trust", c: "#ffc8dd" },
          ].map(s => (
            <div key={s.label} className="flex flex-col items-center">
              <p className="text-5xl font-extrabold" style={{ color: s.c }}>{s.n}</p>
              <p className="text-white text-sm font-semibold mt-2">{s.label}</p>
              <p className="text-gray-500 text-xs mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Our Programs</h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">Comprehensive learning pathways designed to equip youth with essential digital skills</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { Icon: Users,  title: "Basic Computer Skills",   desc: "Essential computer fundamentals including typing, file management, and productivity software.", g: "from-[#caf0f8] to-[#e7c6ff]" },
              { Icon: Code,   title: "Introduction to Coding",  desc: "Start your programming journey with hands-on projects in web development and programming concepts.", g: "from-[#e7c6ff] to-[#ffc8dd]" },
              { Icon: Shield, title: "Cybersecurity Awareness", desc: "Understand digital threats and learn how to protect yourself and others in the online world.", g: "from-[#ffc8dd] to-[#caf0f8]" },
            ].map(({ Icon, title, desc, g }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className={`w-14 h-14 bg-gradient-to-br ${g} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gradient-to-br from-[#caf0f8] via-[#e7c6ff] to-[#ffc8dd]">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-14 h-14 mx-auto mb-5 text-gray-900" />
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
          <p className="text-gray-700 text-lg mb-8">Join us in bridging the digital divide and empowering the next generation of innovators.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-lg">Get in Touch</button>
            <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg">Learn More</button>
          </div>
        </div>
      </section>
      <div className="bg-gray-900 py-4 px-6 text-center">
        <p className="text-gray-500 text-xs">© 2025 ZARQ · Matatiele, Eastern Cape, South Africa</p>
      </div>
    </div>
  );
}
