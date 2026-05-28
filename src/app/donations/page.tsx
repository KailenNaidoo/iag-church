"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export default function DonationsPage() {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [category, setCategory] = useState("general");
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = ["10", "25", "50", "100", "250", "500"];
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const inputClass = "w-full p-4 border border-[var(--border-light)] bg-[var(--card-bg)] text-[var(--foreground)] text-sm focus:border-[var(--accent)] focus:outline-none transition-colors duration-500";

  return (
    <PageTransition>
      <section className="py-32 px-6 text-center relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent)] blur-[250px] opacity-[0.03]" /></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-5">Generosity</p>
          <h1 className="text-4xl md:text-7xl font-serif font-normal mb-6">Give</h1>
          <p className="text-base text-[var(--muted-light)] font-light max-w-xl mx-auto">Your generosity fuels the mission. Every gift makes an eternal difference.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[var(--accent-dim)] to-transparent" /></div>

      <section className="py-28 px-6 bg-[var(--background)]">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            {submitted ? (
              <div className="text-center p-16 glass-card">
                <div className="w-14 h-14 mx-auto mb-6 border border-[var(--accent)] rounded-full flex items-center justify-center text-[var(--accent)] text-xl">✓</div>
                <h2 className="text-2xl font-serif mb-3">Thank You</h2>
                <p className="text-[var(--muted)] font-light">Your generosity is a blessing.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 px-8 py-3 border border-[var(--accent-dim)] text-[var(--accent)] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-500">Give Again</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-4">Frequency</label>
                  <div className="flex gap-3">
                    {["one-time", "recurring"].map((type) => (
                      <button key={type} type="button" onClick={() => setDonationType(type)} className={`flex-1 py-4 border text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500 ${donationType === type ? "bg-[var(--accent)] text-[var(--background)] border-[var(--accent)]" : "border-[var(--border-light)] text-[var(--muted-light)] hover:border-[var(--accent-dim)]"}`}>{type === "one-time" ? "One-Time" : "Monthly"}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="category" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-4">Category</label>
                  <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass}>
                    <option value="general">General Fund</option><option value="tithe">Tithes</option><option value="offering">Offering</option><option value="missions">Missions</option><option value="building">Building Fund</option><option value="youth">Youth Ministry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-4">Amount</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {presetAmounts.map((p) => (
                      <button key={p} type="button" onClick={() => { setAmount(p); setCustomAmount(""); }} className={`py-4 border text-sm transition-all duration-500 ${amount === p ? "bg-[var(--accent)] text-[var(--background)] border-[var(--accent)]" : "border-[var(--border-light)] text-[var(--muted-light)] hover:border-[var(--accent-dim)]"}`}>£{p}</button>
                    ))}
                  </div>
                  <input type="number" placeholder="Custom amount (£)" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setAmount(""); }} className={`${inputClass} placeholder:text-[var(--muted)]`} min="1" aria-label="Custom amount" />
                </div>
                <button type="submit" disabled={!amount && !customAmount} className="w-full py-5 bg-[var(--accent)] text-[var(--background)] text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-[var(--accent-light)] transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed">Donate £{amount || customAmount || "0"}{donationType === "recurring" ? " Monthly" : ""}</button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      <section className="py-28 px-6 bg-[var(--background-secondary)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal><div className="text-center mb-16"><p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Impact</p><h2 className="text-3xl md:text-4xl font-serif">Where Your Gift Goes</h2></div></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "🏛", title: "Operations", desc: "Maintaining a welcoming space for worship and community." },
              { icon: "🌍", title: "Missions", desc: "Supporting missionaries and outreach locally and globally." },
              { icon: "🌱", title: "Growth", desc: "Funding youth, counselling, and leadership programmes." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <div className="glass-card p-8 text-center hover:border-[var(--accent)]/20 transition-all duration-700">
                  <div className="text-2xl mb-4">{item.icon}</div>
                  <h3 className="font-serif text-lg mb-3">{item.title}</h3>
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
