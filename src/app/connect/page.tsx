"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export default function ConnectPage() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", address: "", age: "", howDidYouHear: "", interests: [] as string[], message: "" });
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = ["Sunday Worship", "Bible Study", "Youth Ministry", "Worship Team", "Volunteering", "Small Groups", "Outreach", "Prayer Team"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest) ? prev.interests.filter((i) => i !== interest) : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = "w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors";

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/2 w-64 h-64 rounded-full bg-[var(--gold)] blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-light)] font-sans font-semibold mb-4">Become Family</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Connect</h1>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            We&apos;d love to welcome you into the IAG family. Take the first step today.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 px-6 bg-[var(--card-bg)] border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🏠", label: "Find Community" },
              { icon: "📖", label: "Grow in Faith" },
              { icon: "🤲", label: "Serve Others" },
              { icon: "🎯", label: "Discover Purpose" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-[var(--warm-gray)]">{item.label}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Membership</p>
              <h2 className="text-3xl font-serif">Join IAG</h2>
            </div>

            {submitted ? (
              <div className="text-center p-16 border border-[var(--border)] bg-[var(--card-bg)]">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] rounded-full flex items-center justify-center text-white text-2xl">🎉</div>
                <h3 className="text-2xl font-serif mb-3">Welcome to IAG!</h3>
                <p className="text-[var(--muted)] leading-relaxed">Thank you for connecting with us. A member of our team will reach out to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 px-8 py-3 border border-[var(--purple)] text-[var(--purple)] text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[var(--purple)] hover:text-white transition-all duration-300">Submit Another Form</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">First Name *</label>
                    <input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">Last Name *</label>
                    <input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">Email *</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">Address</label>
                  <input id="address" name="address" type="text" value={formData.address} onChange={handleChange} placeholder="City, Postcode" className={`${inputClass} placeholder:text-[var(--muted)]`} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="age" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">Age Group</label>
                    <select id="age" name="age" value={formData.age} onChange={handleChange} className={inputClass}>
                      <option value="">Select</option>
                      <option value="under-18">Under 18</option>
                      <option value="18-25">18–25</option>
                      <option value="26-35">26–35</option>
                      <option value="36-50">36–50</option>
                      <option value="51-65">51–65</option>
                      <option value="65+">65+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="howDidYouHear" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">How did you hear about us?</label>
                    <select id="howDidYouHear" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} className={inputClass}>
                      <option value="">Select</option>
                      <option value="friend">Friend / Family</option>
                      <option value="social-media">Social Media</option>
                      <option value="website">Website</option>
                      <option value="event">Church Event</option>
                      <option value="walk-in">Walked In</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-4">I&apos;m interested in</label>
                  <div className="grid grid-cols-2 gap-3">
                    {interestOptions.map((interest) => (
                      <button key={interest} type="button" onClick={() => handleInterestToggle(interest)} className={`p-3 text-sm border transition-all duration-300 text-left ${formData.interests.includes(interest) ? "bg-[var(--purple)] text-white border-[var(--purple)] shadow-lg shadow-[var(--purple)]/20" : "border-[var(--border)] text-[var(--warm-gray)] hover:border-[var(--purple)]/40"}`}>{interest}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">Anything else?</label>
                  <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" className="w-full py-5 bg-[var(--purple)] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--purple-light)] transition-all duration-300 shadow-lg shadow-[var(--purple)]/20">Join IAG</button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
