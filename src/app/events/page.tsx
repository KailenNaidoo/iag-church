"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export default function EventsPage() {
  const events = [
    { title: "Sunday Worship Service", date: "Every Sunday", time: "10:00 AM – 12:00 PM", location: "Main Sanctuary", description: "Join us for praise, worship, and the Word of God.", recurring: true },
    { title: "Wednesday Bible Study", date: "Every Wednesday", time: "7:00 PM – 8:30 PM", location: "Fellowship Hall", description: "Deep dive into Scripture with group discussion and prayer.", recurring: true },
    { title: "Youth Night", date: "Every Friday", time: "6:00 PM – 8:00 PM", location: "Youth Centre", description: "Games, worship, and teaching for young people aged 13–25.", recurring: true },
    { title: "Prayer & Fasting Week", date: "June 2–8, 2026", time: "6:00 AM & 7:00 PM Daily", location: "Main Sanctuary", description: "A dedicated week of corporate prayer and fasting for breakthrough.", recurring: false },
    { title: "Community Outreach Day", date: "June 14, 2026", time: "9:00 AM – 3:00 PM", location: "City Centre", description: "Serving our community through food distribution, prayer, and fellowship.", recurring: false },
    { title: "Annual Church Conference", date: "July 18–20, 2026", time: "All Day", location: "Main Sanctuary", description: "Three days of powerful ministry, guest speakers, and spiritual renewal.", recurring: false },
    { title: "Marriage Enrichment Seminar", date: "August 9, 2026", time: "10:00 AM – 4:00 PM", location: "Fellowship Hall", description: "Strengthening marriages through biblical principles and practical tools.", recurring: false },
  ];

  const recurringEvents = events.filter((e) => e.recurring);
  const upcomingEvents = events.filter((e) => !e.recurring);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-[var(--gold)] blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-light)] font-sans font-semibold mb-4">What&apos;s Happening</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Events</h1>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Stay connected with the life of IAG. There&apos;s always something happening.
          </p>
        </div>
      </section>

      {/* Regular Services */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Every Week</p>
              <h2 className="text-3xl font-serif">Weekly Services</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recurringEvents.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 0.15}>
                <div className="p-8 border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--gold)]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-500">
                  <h3 className="font-serif text-lg mb-4">{event.title}</h3>
                  <div className="space-y-2 text-sm text-[var(--muted)]">
                    <p className="flex items-center gap-2"><span className="text-[var(--gold)]">◆</span> {event.date}</p>
                    <p className="flex items-center gap-2"><span className="text-[var(--gold)]">◆</span> {event.time}</p>
                    <p className="flex items-center gap-2"><span className="text-[var(--gold)]">◆</span> {event.location}</p>
                  </div>
                  <p className="text-sm mt-4 text-[var(--warm-gray)] leading-relaxed">{event.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-4">
        <div className="h-px w-16 bg-[var(--gold)]/30" />
        <span className="mx-4 text-[var(--gold)] text-xs">✦</span>
        <div className="h-px w-16 bg-[var(--gold)]/30" />
      </div>

      {/* Upcoming Events */}
      <section className="py-24 px-6 bg-[var(--card-bg)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Mark Your Calendar</p>
              <h2 className="text-3xl font-serif">Upcoming Events</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {upcomingEvents.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 0.1}>
                <div className="p-8 border border-[var(--border)] bg-[var(--background)] hover:border-[var(--gold)]/40 hover:shadow-lg transition-all duration-500 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-40 shrink-0">
                    <p className="text-sm font-semibold text-[var(--purple)]">{event.date}</p>
                    <p className="text-xs text-[var(--muted)] mt-1">{event.time}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl mb-1">{event.title}</h3>
                    <p className="text-xs uppercase tracking-[0.1em] text-[var(--gold)] mb-2">{event.location}</p>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
