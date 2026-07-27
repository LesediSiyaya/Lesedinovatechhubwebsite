export default function NavyOrange() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#07111F", color: "white", fontFamily: "'Inter', sans-serif" }}>

      {/* Nav */}
      <nav style={{ background: "#0D1F35", borderBottom: "1px solid rgba(255,107,0,0.15)" }} className="px-8 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div style={{ background: "linear-gradient(135deg, #FF6B00, #FF8C00)" }} className="w-7 h-7 rounded-lg flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-white">NovaTech <span style={{ color: "#FF6B00" }}>Ignite</span></span>
        </div>
        <div className="hidden md:flex items-center gap-7 text-sm" style={{ color: "#94A3B8" }}>
          <span className="cursor-pointer hover:text-white transition-colors">About</span>
          <span className="cursor-pointer hover:text-white transition-colors">Programs</span>
          <span className="cursor-pointer hover:text-white transition-colors">Services</span>
          <span className="cursor-pointer hover:text-white transition-colors">Impact</span>
        </div>
        <button style={{ background: "linear-gradient(135deg, #FF6B00, #FF8C00)", color: "white" }} className="px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
          Contact
        </button>
      </nav>

      {/* Hero */}
      <section className="px-8 pt-20 pb-16 text-center relative overflow-hidden">
        {/* Orange glow top */}
        <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(255,107,0,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.35)", color: "#FFBA7B" }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase">
          ✦ Digital Empowerment for All · South Africa
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight">
          <span style={{ color: "#CBD5E1" }}>Nova</span><span style={{ color: "#3B82F6" }}>Tech</span>{" "}
          <span style={{ background: "linear-gradient(90deg, #FF6B00, #FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ignite</span>
        </h1>

        <p className="text-xl md:text-2xl mb-4 font-light" style={{ color: "#CBD5E1" }}>
          Igniting the next generation of innovators
        </p>
        <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: "#64748B" }}>
          Bridging the digital gap for rural youth through accessible IT education, digital literacy, and emerging tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button style={{ background: "linear-gradient(135deg, #FF6B00, #FF8C00)", color: "white" }} className="px-8 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg">
            Join the Initiative
          </button>
          <button style={{ background: "#1E3A5F", color: "#CBD5E1", border: "1px solid #2563EB" }} className="px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-900/40 transition-colors">
            Explore Services
          </button>
          <button style={{ border: "1px solid rgba(255,107,0,0.3)", color: "#FF8C00" }} className="px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-orange-500/10 transition-colors">
            Support the Mission
          </button>
        </div>
      </section>

      {/* Partners */}
      <section className="px-8 py-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#0D1F35" }}>
        <p className="text-center text-xs uppercase tracking-widest mb-4" style={{ color: "#FF6B00" }}>Recognised & Supported By</p>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {["Study Trust", "First National Bank", "HP Trust"].map((p) => (
            <div key={p} className="flex items-center gap-2">
              <div style={{ background: "rgba(255,107,0,0.15)", border: "1px solid rgba(255,107,0,0.3)" }} className="w-8 h-8 rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <span className="text-sm font-medium" style={{ color: "#94A3B8" }}>{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#0A1628" }} className="py-12 px-8">
        <p className="text-center text-xs uppercase tracking-widest mb-8" style={{ color: "#334155" }}>Our Impact — Growing Every Month</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { n: "127+", l: "Students Trained", s: "and growing", c: "#FF6B00" },
            { n: "7", l: "Free Programs", s: "no cost ever", c: "#3B82F6" },
            { n: "5", l: "Communities", s: "across SA", c: "#94A3B8" },
            { n: "3", l: "Trusted Partners", s: "FNB · HP · Study Trust", c: "#FF6B00" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-4xl font-black mb-1" style={{ color: s.c }}>{s.n}</p>
              <p className="text-sm font-semibold text-white">{s.l}</p>
              <p className="text-xs" style={{ color: "#475569" }}>{s.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-12 px-8" style={{ background: "#07111F" }}>
        <h2 className="text-2xl font-bold text-center mb-2 text-white">Free Programs</h2>
        <p className="text-center text-sm mb-8" style={{ color: "#FF6B00" }}>100% free · always · no exceptions</p>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { title: "Introduction to Coding", tag: "8 weeks", desc: "HTML, CSS, JavaScript & Python — project-based" },
            { title: "Cybersecurity Awareness", tag: "3 weeks", desc: "Password security, privacy protection, scam awareness" },
            { title: "AI Fundamentals", tag: "6 weeks", desc: "Machine learning basics, AI tools, ethical AI" },
          ].map((c) => (
            <div key={c.title} style={{ background: "#0D1F35", border: "1px solid rgba(59,130,246,0.2)" }} className="rounded-2xl p-6 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div style={{ background: "rgba(255,107,0,0.15)", color: "#FF8C00" }} className="text-xs font-bold px-2.5 py-1 rounded-full">FREE</div>
                <span style={{ color: "#475569", fontSize: "11px" }}>{c.tag}</span>
              </div>
              <h3 className="font-bold text-white mb-2">{c.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{c.desc}</p>
              <button style={{ background: "#25D366", color: "white" }} className="mt-4 w-full py-2 rounded-lg text-xs font-bold">
                Apply on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0D1F35", borderTop: "1px solid rgba(255,107,0,0.2)" }} className="py-14 px-8 text-center relative overflow-hidden">
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "500px", height: "200px", background: "radial-gradient(ellipse, rgba(255,107,0,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <h2 className="text-3xl font-black mb-3 text-white relative">Ready to Ignite Your Future?</h2>
        <p className="mb-8 text-sm relative" style={{ color: "#64748B" }}>Join 127+ students already building their digital futures — for free.</p>
        <button style={{ background: "linear-gradient(135deg, #FF6B00, #FF8C00)", color: "white" }} className="px-10 py-4 rounded-xl font-black text-sm hover:opacity-90 transition-opacity relative shadow-lg">
          Get Started Today →
        </button>
      </section>
    </div>
  );
}
