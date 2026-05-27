"use client";

import { useState } from "react";

export default function DonationsPage() {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [category, setCategory] = useState("general");
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = ["10", "25", "50", "100", "250", "500"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-[var(--gold)] blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-light)] font-sans font-semibold mb-4">Generosity</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Give</h1>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Your generosity fuels the mission. Every gift makes an eternal difference.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center p-16 border border-[var(--border)] bg-[var(--card-bg)]">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] rounded-full flex items-center justify-center text-white text-2xl">✓</div>
              <h2 className="text-3xl font-serif mb-3">Thank You</h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Your generosity is a blessing. God loves a cheerful giver.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-8 py-3 border border-[var(--purple)] text-[var(--purple)] text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[var(--purple)] hover:text-white transition-all duration-300"
              >
                Give Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Donation Type */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-4">Frequency</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType("one-time")}
                    className={`flex-1 py-4 border text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 ${
                      donationType === "one-time"
                        ? "bg-[var(--purple)] text-white border-[var(--purple)] shadow-lg shadow-[var(--purple)]/20"
                        : "border-[var(--border)] text-[var(--warm-gray)] hover:border-[var(--purple)]/40"
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType("recurring")}
                    className={`flex-1 py-4 border text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 ${
                      donationType === "recurring"
                        ? "bg-[var(--purple)] text-white border-[var(--purple)] shadow-lg shadow-[var(--purple)]/20"
                        : "border-[var(--border)] text-[var(--warm-gray)] hover:border-[var(--purple)]/40"
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-4">
                  Giving Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                >
                  <option value="general">General Fund</option>
                  <option value="tithe">Tithes</option>
                  <option value="offering">Offering</option>
                  <option value="missions">Missions</option>
                  <option value="building">Building Fund</option>
                  <option value="youth">Youth Ministry</option>
                  <option value="outreach">Community Outreach</option>
                </select>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-4">Select Amount</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => { setAmount(preset); setCustomAmount(""); }}
                      className={`py-4 border text-sm font-medium transition-all duration-300 ${
                        amount === preset
                          ? "bg-[var(--purple)] text-white border-[var(--purple)] shadow-lg shadow-[var(--purple)]/20"
                          : "border-[var(--border)] text-[var(--warm-gray)] hover:border-[var(--purple)]/40"
                      }`}
                    >
                      £{preset}
                    </button>
                  ))}
                </div>
                <div>
                  <label htmlFor="custom-amount" className="sr-only">Custom amount</label>
                  <input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter custom amount (£)"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setAmount(""); }}
                    className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                    min="1"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!amount && !customAmount}
                className="w-full py-5 bg-[var(--purple)] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--accent-light)] transition-all duration-300 shadow-lg shadow-[var(--purple)]/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
              >
                Donate £{amount || customAmount || "0"} {donationType === "recurring" ? "Monthly" : ""}
              </button>

              <p className="text-[11px] text-[var(--muted)] text-center tracking-wide">
                Your donation is secure and encrypted. A confirmation will be sent to your email.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Why Give */}
      <section className="py-24 px-6 bg-[var(--card-bg)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Impact</p>
            <h2 className="text-3xl md:text-4xl font-serif">Where Your Gift Goes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🏛", title: "Church Operations", desc: "Maintaining a welcoming space for worship, ministry, and community gatherings." },
              { icon: "🌍", title: "Missions & Outreach", desc: "Supporting missionaries and community programmes locally and across the globe." },
              { icon: "🌱", title: "Ministry Growth", desc: "Funding youth, counselling, discipleship, and leadership development programmes." },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 border border-[var(--border)] bg-[var(--background)] hover:border-[var(--gold)]/40 transition-all duration-500">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
