"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export default function LiveStreamPage() {
  return (
    <PageTransition>
      <section className="py-32 px-6 text-center relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#122a4a] via-[#1b4d8a] to-[#122a4a]" />
        <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent)] blur-[250px] opacity-[0.03]" /></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/70 font-sans font-medium mb-5">Worship Online</p>
          <h1 className="text-4xl md:text-7xl font-serif font-normal mb-6 text-white">Live Stream</h1>
          <p className="text-base text-white/65 font-light max-w-xl mx-auto">Join us from anywhere. Experience worship without boundaries.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[var(--accent-dim)] to-transparent" /></div>

      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--muted-light)]">Live Now</span>
            </div>
            <div className="aspect-video glass-card flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--accent)] blur-[150px] opacity-[0.05]" /></div>
              <div className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 border border-[var(--border-light)] rounded-full flex items-center justify-center hover:border-[var(--accent)] hover:scale-110 transition-all duration-500 cursor-pointer group">
                  <svg className="w-7 h-7 ml-1 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <p className="text-lg font-serif text-[var(--foreground)]">Live Stream</p>
                <p className="text-sm text-[var(--muted)] mt-2 font-light">Stream appears here during service times</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-28 px-6 bg-[#f7f9fc]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal><div className="text-center mb-16"><p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Schedule</p><h2 className="text-3xl md:text-4xl font-serif">When To Watch</h2></div></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Sunday Worship", time: "Every Sunday at 10:00 AM", desc: "Full worship service with praise, prayer, and the Word." },
              { title: "Wednesday Study", time: "Every Wednesday at 7:00 PM", desc: "Midweek teaching and prayer." },
              { title: "Special Events", time: "As announced", desc: "Conferences, guest speakers, and special services." },
              { title: "On Demand", time: "Anytime", desc: "Watch previous recordings whenever you like." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="glass-card p-8 hover:border-[var(--accent)]/20 transition-all duration-700">
                  <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--accent)] mb-2 font-light">{item.time}</p>
                  <p className="text-sm text-[var(--muted)] font-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
