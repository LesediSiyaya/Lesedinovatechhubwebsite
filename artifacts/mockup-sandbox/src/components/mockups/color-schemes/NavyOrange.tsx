// Option C — Sky Blue (professional, digital)
// Accent swap: #ffc8dd → #38BDF8  |  #e7c6ff → #7DD3FC  |  #caf0f8 → #BAE6FD
// Everything else is identical to the real site

import { Code, Shield, Users, Sparkles } from "lucide-react";

export default function NavyOrange() {
  const a1 = "#38BDF8"; // sky-400   (was pink #ffc8dd)
  const a2 = "#7DD3FC"; // sky-300   (was lavender #e7c6ff)
  const a3 = "#BAE6FD"; // sky-200   (was baby blue #caf0f8)

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* ── Nav ── */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div style={{ background: `linear-gradient(135deg, ${a3}, ${a1})` }} className="w-7 h-7 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-gray-900" />
          </div>
          <span className="font-bold text-gray-900 text-base tracking-tight">NovaTech Ignite</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          {["Home", "About", "Programs", "Services", "Impact"].map(l => (
            <span key={l} className="hover:text-gray-900 cursor-pointer transition-colors">{l}</span>
          ))}
        </div>
        <button style={{ background: "#111827", color: "white" }} className="px-4 py-2 rounded-lg text-sm font-medium">
          Contact
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-12 pb-12 px-6 relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div style={{ background: a1, opacity: 0.12 }} className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl" />
          <div style={{ background: a3, opacity: 0.12 }} className="absolute top-1/2 -left-32 w-80 h-80 rounded-full blur-3xl" />
          <div style={{ background: a2, opacity: 0.10 }} className="absolute -bottom-16 right-1/3 w-72 h-72 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div style={{ background: `linear-gradient(to right, ${a3}, ${a2}, ${a1})` }} className="inline-block px-5 py-2 rounded-full mb-5">
            <span className="text-xs font-medium text-gray-800">Digital Empowerment for All · South Africa</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-5 bg-clip-text text-transparent px-2"
            style={{ backgroundImage: `linear-gradient(to right, #030213, ${a2}, ${a1})` }}
          >
            NovaTech Ignite
          </h1>
          <p className="text-xl text-gray-700 mb-4">Igniting the next generation of innovators</p>
          <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto">
            Bridging the digital gap between rural and urban youth through accessible IT education, digital literacy, and emerging technologies.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {["Community-driven initiative", "Youth-focused innovation hub", "Empowering the next generation"].map(t => (
              <span key={t} className="px-4 py-2 bg-white/80 rounded-full text-xs text-gray-700 shadow-sm border border-white">{t}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button style={{ background: a1, color: "#111827" }} className="px-8 py-4 rounded-lg font-medium shadow-lg hover:opacity-90 transition-opacity">
              Join the Initiative
            </button>
            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium shadow-lg hover:bg-gray-800 transition-colors">
              Explore Services
            </button>
            <button className="px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Support the Mission
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 px-6 bg-gray-900">
        <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-10 font-medium">Our impact — growing every month</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { n: "127+", label: "Students Trained",    sub: "and growing",            c: a1 },
            { n: "7",    label: "Free Programs",        sub: "no cost ever",           c: a2 },
            { n: "5",    label: "Communities Reached",  sub: "across SA",              c: a3 },
            { n: "3",    label: "Trusted Partners",     sub: "FNB · HP · Study Trust", c: a1 },
          ].map(s => (
            <div key={s.label} className="flex flex-col items-center">
              <p className="text-5xl font-extrabold tabular-nums" style={{ color: s.c }}>{s.n}</p>
              <p className="text-white text-sm font-semibold mt-2">{s.label}</p>
              <p className="text-gray-500 text-xs mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Programs ── */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Our Programs</h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">Comprehensive learning pathways designed to equip youth with essential digital skills</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Users,  title: "Basic Computer Skills",   desc: "Essential computer fundamentals including typing, file management, and productivity software.", g: [a3, a2] },
              { icon: Code,   title: "Introduction to Coding",  desc: "Start your programming journey with hands-on projects in web development and programming concepts.", g: [a2, a1] },
              { icon: Shield, title: "Cybersecurity Awareness", desc: "Understand digital threats and learn how to protect yourself and others in the online world.", g: [a1, a3] },
            ].map(({ icon: Icon, title, desc, g }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div style={{ background: `linear-gradient(135deg, ${g[0]}, ${g[1]})` }} className="w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: `linear-gradient(135deg, ${a3}, ${a2}, ${a1})` }} className="py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-14 h-14 mx-auto mb-5 text-gray-900" />
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
          <p className="text-gray-700 text-lg mb-8">Join us in bridging the digital divide and empowering the next generation of innovators.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all">Get in Touch</button>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-lg transition-all">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}
