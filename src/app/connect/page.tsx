"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export default function ConnectPage() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", address: "", age: "", howDidYouHear: "", interests: [] as string[], message: "" });
  const [submitted, setSubmitted] = useState(false);
  const interestOptions = ["Sunday Worship", "Bible Study", "Youth Ministry", "Worship Team", "Volunteering", "Small Groups", "Outreach", "Prayer Team"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };
  const handleInterestToggle = (interest: string) => { setFormData((p) => ({ ...p, interests: p.interests.includes(interest) ? p.interests.filter((i) => i !== interest) : [...p.interests, interest] })); };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const inputClass = "w-full p-4 border border-[var(--border-light)] bg-[var(--card-bg)] text-[var(--foreground)] text-sm focus:border-[var(--accent)] focus:outline-none transition-colors duration-500";

  return (
    <PageTransition>
      <section className="py-32 px-6 text-center relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#122a4a] via-[#1b4d8a] to-[#122a4a]" />
        <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent)] blur-[250px] opacity-[0.03]" /></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/70 font-sans font-medium mb-5">Become Family</p>
          <h1 className="text-4xl md:text-7xl font-serif font-normal mb-6 text-white">Connect</h1>
          <p className="text-base text-white/65 font-light max-w-xl mx-auto">We&apos;d love to welcome you into the IAG family.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[var(--accent-dim)] to-transparent" /></div>

      <section className="py-28 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Membership</p>
              <h2 className="text-3xl font-serif">Join IAG</h2>
            </div>
            {submitted ? (
              <div className="text-center p-16 glass-card">
                <div className="w-14 h-14 mx-auto mb-6 border border-[var(--accent)] rounded-full flex items-center justify-center text-[var(--accent)] text-xl">✓</div>
                <h3 className="text-2xl font-serif mb-3">Welcome to IAG</h3>
                <p className="text-[var(--muted)] font-light">We&apos;ll be in touch shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 px-8 py-3 border border-[var(--accent-dim)] text-[var(--accent)] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-500">Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label htmlFor="firstName" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">First Name *</label><input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} className={inputClass} /></div>
                  <div><label htmlFor="lastName" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Last Name *</label><input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} className={inputClass} /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label htmlFor="email" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Email *</label><input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} /></div>
                  <div><label htmlFor="phone" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Phone</label><input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} /></div>
                </div>
                <div><label htmlFor="address" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Address</label><input id="address" name="address" type="text" value={formData.address} onChange={handleChange} placeholder="City, Postcode" className={`${inputClass} placeholder:text-[var(--muted)]`} /></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label htmlFor="age" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Age Group</label><select id="age" name="age" value={formData.age} onChange={handleChange} className={inputClass}><option value="">Select</option><option value="under-18">Under 18</option><option value="18-25">18–25</option><option value="26-35">26–35</option><option value="36-50">36–50</option><option value="51+">51+</option></select></div>
                  <div><label htmlFor="howDidYouHear" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">How did you find us?</label><select id="howDidYouHear" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} className={inputClass}><option value="">Select</option><option value="friend">Friend</option><option value="social">Social Media</option><option value="website">Website</option><option value="event">Event</option><option value="other">Other</option></select></div>
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-4">Interests</label>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map((interest) => (
                      <button key={interest} type="button" onClick={() => handleInterestToggle(interest)} className={`p-3 text-sm border transition-all duration-500 text-left ${formData.interests.includes(interest) ? "bg-[var(--accent)] text-[var(--background)] border-[var(--accent)]" : "border-[var(--border-light)] text-[var(--muted-light)] hover:border-[var(--accent-dim)]"}`}>{interest}</button>
                    ))}
                  </div>
                </div>
                <div><label htmlFor="message" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Anything else?</label><textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} /></div>
                <button type="submit" className="w-full py-5 bg-[var(--accent)] text-[var(--background)] text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-[var(--accent-light)] transition-all duration-500">Join IAG</button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
