export default function TealCoral() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#F8FFFE", color: "#0F2623", fontFamily: "'Inter', sans-serif" }}>

      {/* Nav */}
      <nav style={{ background: "white", borderBottom: "1px solid #E0F5F3" }} className="px-8 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div style={{ background: "linear-gradient(135deg, #0D9488, #0F766E)" }} className="w-7 h-7 rounded-lg flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ color: "#0F2623" }}>NovaTech <span style={{ color: "#EA580C" }}>Ignite</span></span>
        </div>
        <div className="hidden md:flex items-center gap-7 text-sm" style={{ color: "#0F766E" }}>
          <span className="cursor-pointer hover:text-teal-900 transition-colors">About</span>
          <span className="cursor-pointer hover:text-teal-900 transition-colors">Programs</span>
          <span className="cursor-pointer hover:text-teal-900 transition-colors">Services</span>
          <span className="cursor-pointer hover:text-teal-900 transition-colors">Impact</span>
        </div>
        <button style={{ background: "#EA580C", color: "white" }} className="px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
          Contact
        </button>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #0D9488 0%, #0F766E 40%, #134E4A 100%)" }} className="px-8 pt-20 pb-20 text-center relative overflow-hidden">
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(ellipse, rgba(234,88,12,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "200px", height: "200px", background: "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ background: "rgba(234,88,12,0.2)", border: "1px solid rgba(234,88,12,0.5)", color: "#FDBA74" }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase">
          ✦ Digital Empowerment for All · South Africa
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight text-white">
          NovaTech <span style={{ color: "#FB923C" }}>Ignite</span>
        </h1>

        <p className="text-xl md:text-2xl mb-4 font-light text-teal-100">
          Igniting the next generation of innovators
        </p>
        <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: "#99F6E4" }}>
          Bridging the digital gap for rural youth through accessible IT education, digital literacy, and emerging tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button style={{ background: "#EA580C", color: "white" }} className="px-8 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg">
            Join the Initiative
          </button>
          <button style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(4px)" }} className="px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors">
            Explore Services
          </button>
          <button style={{ background: "white", color: "#0F766E" }} className="px-8 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
            Support the Mission
          </button>
        </div>
      </section>

      {/* Partners */}
      <section className="px-8 py-5" style={{ background: "white", borderBottom: "1px solid #E0F5F3" }}>
        <p className="text-center text-xs uppercase tracking-widest mb-4" style={{ color: "#5EEAD4" }}>Recognised & Supported By</p>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {["Study Trust", "First National Bank", "HP Trust"].map((p) => (
            <div key={p} className="flex items-center gap-2">
              <div style={{ background: "#CCFBF1", border: "1px solid #99F6E4" }} className="w-8 h-8 rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <span className="text-sm font-medium" style={{ color: "#0F766E" }}>{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#134E4A" }} className="py-12 px-8">
        <p className="text-center text-xs uppercase tracking-widest mb-8" style={{ color: "#5EEAD4" }}>Our Impact — Growing Every Month</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { n: "127+", l: "Students Trained", s: "and growing", c: "#FB923C" },
            { n: "7", l: "Free Programs", s: "no cost ever", c: "#99F6E4" },
            { n: "5", l: "Communities", s: "across SA", c: "#5EEAD4" },
            { n: "3", l: "Trusted Partners", s: "FNB · HP · Study Trust", c: "#FB923C" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-4xl font-black mb-1" style={{ color: s.c }}>{s.n}</p>
              <p className="text-sm font-semibold text-white">{s.l}</p>
              <p className="text-xs" style={{ color: "#5EEAD4" }}>{s.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-12 px-8" style={{ background: "#F0FDFA" }}>
        <h2 className="text-2xl font-bold text-center mb-2" style={{ color: "#0F2623" }}>Free Programs</h2>
        <p className="text-center text-sm mb-8" style={{ color: "#0D9488" }}>100% free · always · no exceptions</p>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { title: "Introduction to Coding", tag: "8 weeks", desc: "HTML, CSS, JavaScript & Python — project-based" },
            { title: "Cybersecurity Awareness", tag: "3 weeks", desc: "Password security, privacy protection, scam awareness" },
            { title: "AI Fundamentals", tag: "6 weeks", desc: "Machine learning basics, AI tools, ethical AI" },
          ].map((c) => (
            <div key={c.title} style={{ background: "white", border: "1px solid #CCFBF1" }} className="rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div style={{ background: "#CCFBF1", color: "#0D9488" }} className="text-xs font-bold px-2.5 py-1 rounded-full">FREE</div>
                <span style={{ color: "#5EEAD4", fontSize: "11px" }}>{c.tag}</span>
              </div>
              <h3 className="font-bold mb-2" style={{ color: "#0F2623" }}>{c.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#0F766E" }}>{c.desc}</p>
              <button style={{ background: "#25D366", color: "white" }} className="mt-4 w-full py-2 rounded-lg text-xs font-bold">
                Apply on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #EA580C 0%, #C2410C 100%)" }} className="py-14 px-8 text-center">
        <h2 className="text-3xl font-black mb-3 text-white">Ready to Ignite Your Future?</h2>
        <p className="mb-8 text-sm" style={{ color: "#FED7AA" }}>Join 127+ students already building their digital futures — for free.</p>
        <button style={{ background: "white", color: "#EA580C" }} className="px-10 py-4 rounded-xl font-black text-sm hover:opacity-90 transition-opacity">
          Get Started Today →
        </button>
      </section>
    </div>
  );
}
