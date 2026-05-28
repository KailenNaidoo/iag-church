"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export default function EventsPage() {
  const recurring = [
    { title: "Sunday Worship", date: "Every Sunday", time: "10:00 AM – 12:00 PM", location: "Main Sanctuary", desc: "Praise, worship, and the Word of God." },
    { title: "Bible Study", date: "Every Wednesday", time: "7:00 PM – 8:30 PM", location: "Fellowship Hall", desc: "Deep dive into Scripture with discussion." },
    { title: "Youth Night", date: "Every Friday", time: "6:00 PM – 8:00 PM", location: "Youth Centre", desc: "Games, worship, and teaching for ages 13–25." },
  ];
  const upcoming = [
    { title: "Prayer & Fasting Week", date: "June 2–8, 2026", time: "6:00 AM & 7:00 PM", location: "Main Sanctuary", desc: "Corporate prayer and fasting for breakthrough." },
    { title: "Community Outreach", date: "June 14, 2026", time: "9:00 AM – 3:00 PM", location: "City Centre", desc: "Food distribution, prayer, and fellowship." },
    { title: "Annual Conference", date: "July 18–20, 2026", time: "All Day", location: "Main Sanctuary", desc: "Three days of powerful ministry and renewal." },
    { title: "Marriage Seminar", date: "August 9, 2026", time: "10:00 AM – 4:00 PM", location: "Fellowship Hall", desc: "Biblical principles for stronger marriages." },
  ];

  return (
    <PageTransition>
      <section className="py-32 px-6 text-center relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent)] blur-[250px] opacity-[0.03]" /></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-5">What&apos;s Happening</p>
          <h1 className="text-4xl md:text-7xl font-serif font-normal mb-6">Events</h1>
          <p className="text-base text-[var(--muted-light)] font-light max-w-xl mx-auto">Stay connected with the life of IAG.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[var(--accent-dim)] to-transparent" /></div>

      <section className="py-28 px-6 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal><p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Every Week</p><h2 className="text-3xl font-serif mb-14">Weekly Services</h2></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recurring.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 0.12}>
                <div className="glass-card p-8 hover:border-[var(--accent)]/20 transition-all duration-700">
                  <h3 className="font-serif text-lg mb-4">{e.title}</h3>
                  <div className="space-y-2 text-sm text-[var(--muted-light)] font-light">
                    <p>{e.date}</p><p>{e.time}</p><p className="text-[var(--accent)] text-xs">{e.location}</p>
                  </div>
                  <p className="text-sm mt-4 text-[var(--muted)] leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-[var(--background-secondary)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal><p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Mark Your Calendar</p><h2 className="text-3xl font-serif mb-14">Upcoming</h2></ScrollReveal>
          <div className="space-y-4">
            {upcoming.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 0.08}>
                <div className="glass-card p-8 hover:border-[var(--accent)]/20 transition-all duration-700 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-36 shrink-0">
                    <p className="text-sm font-medium text-[var(--accent)]">{e.date}</p>
                    <p className="text-xs text-[var(--muted)] mt-1">{e.time}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl mb-1">{e.title}</h3>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-[var(--accent-dim)] mb-2">{e.location}</p>
                    <p className="text-sm text-[var(--muted)] font-light">{e.desc}</p>
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
