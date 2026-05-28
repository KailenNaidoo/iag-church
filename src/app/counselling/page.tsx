"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export default function CounsellingPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", preferredDate: "", preferredTime: "", sessionType: "individual", concern: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const inputClass = "w-full p-4 border border-[var(--border-light)] bg-[var(--card-bg)] text-[var(--foreground)] text-sm focus:border-[var(--accent)] focus:outline-none transition-colors duration-500";

  return (
    <PageTransition>
      <section className="py-32 px-6 text-center relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent)] blur-[250px] opacity-[0.03]" /></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-5">Pastoral Care</p>
          <h1 className="text-4xl md:text-7xl font-serif font-normal mb-6">Counselling</h1>
          <p className="text-base text-[var(--muted-light)] font-light max-w-xl mx-auto">You don&apos;t have to walk alone. Book a confidential session.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[var(--accent-dim)] to-transparent" /></div>

      <section className="py-20 px-6 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: "🤝", title: "Confidential", desc: "What you share stays private." },
            { icon: "💬", title: "Professional", desc: "Trained pastoral counsellors." },
            { icon: "🙏", title: "Faith-Based", desc: "Grounded in biblical truth." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.12}>
              <div className="glass-card p-8 text-center hover:border-[var(--accent)]/20 transition-all duration-700">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-base mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] font-light">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-28 px-6 bg-[var(--background-secondary)]">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Schedule</p>
              <h2 className="text-3xl font-serif">Book a Session</h2>
            </div>
            {submitted ? (
              <div className="text-center p-16 glass-card">
                <div className="w-14 h-14 mx-auto mb-6 border border-[var(--accent)] rounded-full flex items-center justify-center text-[var(--accent)] text-xl">✓</div>
                <h3 className="text-2xl font-serif mb-3">Booking Received</h3>
                <p className="text-[var(--muted)] font-light">We&apos;ll contact you within 24–48 hours.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", preferredDate: "", preferredTime: "", sessionType: "individual", concern: "", message: "" }); }} className="mt-8 px-8 py-3 border border-[var(--accent-dim)] text-[var(--accent)] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-500">Book Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label htmlFor="name" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Full Name *</label><input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputClass} /></div>
                  <div><label htmlFor="email" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Email *</label><input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label htmlFor="phone" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Phone</label><input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} /></div>
                  <div><label htmlFor="sessionType" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Type *</label><select id="sessionType" name="sessionType" value={formData.sessionType} onChange={handleChange} className={inputClass}><option value="individual">Individual</option><option value="couples">Couples</option><option value="family">Family</option><option value="youth">Youth</option></select></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label htmlFor="preferredDate" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Date *</label><input id="preferredDate" name="preferredDate" type="date" required value={formData.preferredDate} onChange={handleChange} className={inputClass} /></div>
                  <div><label htmlFor="preferredTime" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Time *</label><select id="preferredTime" name="preferredTime" required value={formData.preferredTime} onChange={handleChange} className={inputClass}><option value="">Select</option><option value="09:00">9 AM</option><option value="10:00">10 AM</option><option value="11:00">11 AM</option><option value="14:00">2 PM</option><option value="15:00">3 PM</option><option value="16:00">4 PM</option></select></div>
                </div>
                <div><label htmlFor="concern" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Area of Concern</label><select id="concern" name="concern" value={formData.concern} onChange={handleChange} className={inputClass}><option value="">Prefer not to say</option><option value="spiritual">Spiritual Growth</option><option value="marriage">Relationships</option><option value="grief">Grief</option><option value="anxiety">Anxiety</option><option value="family">Family</option><option value="other">Other</option></select></div>
                <div><label htmlFor="message" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Notes</label><textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="Anything we should know..." className={`${inputClass} placeholder:text-[var(--muted)] resize-none`} /></div>
                <button type="submit" className="w-full py-5 bg-[var(--accent)] text-[var(--background)] text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-[var(--accent-light)] transition-all duration-500">Book Session</button>
                <p className="text-[10px] text-[var(--muted)] text-center">All information is strictly confidential.</p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
