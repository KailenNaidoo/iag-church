"use client";

import { useState } from "react";

export default function CounsellingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    sessionType: "individual",
    concern: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-[var(--gold)] blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-light)] font-sans font-semibold mb-4">Pastoral Care</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Counselling</h1>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            You don&apos;t have to walk through life&apos;s challenges alone. 
            Book a confidential session with our pastoral team.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: "🤝", title: "Confidential", desc: "All sessions are strictly private. What you share stays between you and your counsellor." },
              { icon: "💬", title: "Professional", desc: "Our counsellors are trained and experienced pastoral carers with years of ministry." },
              { icon: "🙏", title: "Faith-Based", desc: "Grounded in biblical principles, the love of Christ, and the guidance of the Holy Spirit." },
            ].map((item) => (
              <div key={item.title} className="p-8 border border-[var(--border)] bg-[var(--card-bg)] text-center hover:border-[var(--gold)]/40 transition-all duration-500">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Schedule</p>
              <h2 className="text-3xl font-serif">Book a Session</h2>
            </div>

            {submitted ? (
              <div className="text-center p-16 border border-[var(--border)] bg-[var(--card-bg)]">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] rounded-full flex items-center justify-center text-white text-2xl">✓</div>
                <h3 className="text-2xl font-serif mb-3">Booking Received</h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  Thank you for reaching out. Our pastoral team will contact you 
                  within 24–48 hours to confirm your session.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", preferredDate: "", preferredTime: "", sessionType: "individual", concern: "", message: "" }); }}
                  className="mt-8 px-8 py-3 border border-[var(--purple)] text-[var(--purple)] text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[var(--purple)] hover:text-white transition-all duration-300"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="sessionType" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">
                      Session Type *
                    </label>
                    <select
                      id="sessionType"
                      name="sessionType"
                      value={formData.sessionType}
                      onChange={handleChange}
                      className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                    >
                      <option value="individual">Individual</option>
                      <option value="couples">Couples / Marriage</option>
                      <option value="family">Family</option>
                      <option value="youth">Youth (Under 18)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">
                      Preferred Date *
                    </label>
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="concern" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">
                    Area of Concern
                  </label>
                  <select
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                  >
                    <option value="">Prefer not to say</option>
                    <option value="spiritual">Spiritual Growth</option>
                    <option value="marriage">Marriage / Relationships</option>
                    <option value="grief">Grief & Loss</option>
                    <option value="anxiety">Anxiety / Stress</option>
                    <option value="addiction">Addiction</option>
                    <option value="family">Family Issues</option>
                    <option value="career">Career / Purpose</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything you'd like us to know before the session..."
                    className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] text-sm resize-none focus:border-[var(--purple)] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-[var(--purple)] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--accent-light)] transition-all duration-300 shadow-lg shadow-[var(--purple)]/20"
                >
                  Book Session
                </button>

                <p className="text-[11px] text-[var(--muted)] text-center tracking-wide">
                  All information is kept strictly confidential. If you are in crisis, 
                  please call emergency services immediately.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
