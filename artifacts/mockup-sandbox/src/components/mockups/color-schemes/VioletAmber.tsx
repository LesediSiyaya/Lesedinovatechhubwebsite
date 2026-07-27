export default function VioletAmber() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#0F0A1E", color: "white", fontFamily: "'Inter', sans-serif" }}>

      {/* Nav */}
      <nav style={{ background: "#1A0F35", borderBottom: "1px solid rgba(255,255,255,0.08)" }} className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div style={{ background: "#7C3AED" }} className="w-7 h-7 rounded-lg flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ color: "white" }}>NovaTech <span style={{ color: "#F59E0B" }}>Ignite</span></span>
        </div>
        <div className="hidden md:flex items-center gap-7 text-sm" style={{ color: "#C4B5FD" }}>
          <span className="cursor-pointer hover:text-white transition-colors">About</span>
          <span className="cursor-pointer hover:text-white transition-colors">Programs</span>
          <span className="cursor-pointer hover:text-white transition-colors">Services</span>
          <span className="cursor-pointer hover:text-white transition-colors">Impact</span>
        </div>
        <button style={{ background: "#F59E0B", color: "#1A0F35" }} className="px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
          Contact
        </button>
      </nav>

      {/* Hero */}
      <section className="px-8 pt-20 pb-16 text-center relative overflow-hidden">
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(124,58,237,0.3) 0%, transparent 70%)", pointerEvents: "none" }} />
        
        <div style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", color: "#FDE68A" }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase">
          ✦ Digital Empowerment for All · South Africa
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight">
          <span style={{ color: "#C4B5FD" }}>Nova</span><span style={{ color: "#7C3AED" }}>Tech</span>{" "}
          <span style={{ color: "#F59E0B" }}>Ignite</span>
        </h1>

        <p className="text-xl md:text-2xl mb-4 font-light" style={{ color: "#DDD6FE" }}>
          Igniting the next generation of innovators
        </p>
        <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: "#A78BFA" }}>
          Bridging the digital gap for rural youth through accessible IT education, digital literacy, and emerging tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button style={{ background: "#F59E0B", color: "#1A0F35" }} className="px-8 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
            Join the Initiative
          </button>
          <button style={{ background: "#7C3AED", color: "white" }} className="px-8 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
            Explore Services
          </button>
          <button style={{ border: "1px solid rgba(196,181,253,0.4)", color: "#C4B5FD" }} className="px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-white/5 transition-colors">
            Support the Mission
          </button>
        </div>
      </section>

      {/* Partners */}
      <section className="px-8 py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-center text-xs uppercase tracking-widest mb-4" style={{ color: "#6D28D9" }}>Recognised & Supported By</p>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {["Study Trust", "First National Bank", "HP Trust"].map((p) => (
            <div key={p} className="flex items-center gap-2">
              <div style={{ background: "rgba(124,58,237,0.3)", border: "1px solid rgba(124,58,237,0.4)" }} className="w-8 h-8 rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <span className="text-sm font-medium" style={{ color: "#C4B5FD" }}>{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#160D2E" }} className="py-12 px-8">
        <p className="text-center text-xs uppercase tracking-widest mb-8" style={{ color: "#6D28D9" }}>Our Impact — Growing Every Month</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { n: "127+", l: "Students Trained", s: "and growing", c: "#F59E0B" },
            { n: "7", l: "Free Programs", s: "no cost ever", c: "#A78BFA" },
            { n: "5", l: "Communities", s: "across SA", c: "#C4B5FD" },
            { n: "3", l: "Trusted Partners", s: "FNB · HP · Study Trust", c: "#F59E0B" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-4xl font-black mb-1" style={{ color: s.c }}>{s.n}</p>
              <p className="text-sm font-semibold text-white">{s.l}</p>
              <p className="text-xs" style={{ color: "#7C3AED" }}>{s.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-12 px-8">
        <h2 className="text-2xl font-bold text-center mb-2 text-white">Free Programs</h2>
        <p className="text-center text-sm mb-8" style={{ color: "#A78BFA" }}>100% free · always · no exceptions</p>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { title: "Introduction to Coding", tag: "8 weeks", desc: "HTML, CSS, JavaScript & Python — project-based" },
            { title: "Cybersecurity Awareness", tag: "3 weeks", desc: "Password security, privacy protection, scam awareness" },
            { title: "AI Fundamentals", tag: "6 weeks", desc: "Machine learning basics, AI tools, ethical AI" },
          ].map((c) => (
            <div key={c.title} style={{ background: "#1E1040", border: "1px solid rgba(124,58,237,0.3)" }} className="rounded-2xl p-6 hover:border-violet-500 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B" }} className="text-xs font-bold px-2.5 py-1 rounded-full">FREE</div>
                <span style={{ color: "#6D28D9", fontSize: "11px" }}>{c.tag}</span>
              </div>
              <h3 className="font-bold text-white mb-2">{c.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#A78BFA" }}>{c.desc}</p>
              <button style={{ background: "#25D366", color: "white" }} className="mt-4 w-full py-2 rounded-lg text-xs font-bold">
                Apply on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #1E0B3B 0%, #2D1464 50%, #1A0F35 100%)", borderTop: "1px solid rgba(124,58,237,0.3)" }} className="py-14 px-8 text-center">
        <h2 className="text-3xl font-black mb-3 text-white">Ready to Ignite Your Future?</h2>
        <p className="mb-8 text-sm" style={{ color: "#A78BFA" }}>Join 127+ students already building their digital futures — for free.</p>
        <button style={{ background: "#F59E0B", color: "#1A0F35" }} className="px-10 py-4 rounded-xl font-black text-sm hover:opacity-90 transition-opacity">
          Get Started Today →
        </button>
      </section>
    </div>
  );
}
