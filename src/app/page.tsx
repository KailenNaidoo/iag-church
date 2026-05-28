"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CountdownTimer from "@/components/CountdownTimer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  const testimonials = [
    {
      quote: "IAG has been a home for my family. The love and support we've received here is beyond words.",
      name: "The Williams Family",
      role: "Members since 2018",
    },
    {
      quote: "I found purpose and community here. The teaching is powerful and the people are genuine.",
      name: "David M.",
      role: "Youth Leader",
    },
    {
      quote: "The counselling ministry helped me through the hardest season of my life. Forever grateful.",
      name: "Sarah K.",
      role: "Member since 2020",
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#4a90c4] blur-[150px] opacity-10 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white blur-[180px] opacity-5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#6aafe0] blur-[200px] opacity-5" />
        </div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==')]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src="/logo.svg"
              alt="IAG Logo"
              width={110}
              height={130}
              className="mx-auto mb-8 drop-shadow-2xl"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4"
          >
            International<br />
            <span className="gold-gradient">Assemblies of God</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl font-light text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            A sanctuary of worship, fellowship, and spiritual transformation. 
            Where faith meets community.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/connect"
              className="px-10 py-4 bg-white text-[#1a3a5c] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/10"
            >
              Join Our Family
            </Link>
            <Link
              href="/live"
              className="px-10 py-4 border border-white/30 text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
            >
              Watch Live
            </Link>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Countdown to Next Service */}
      <section className="py-20 px-6 bg-[var(--background)]">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-3">Next Sunday Service In</p>
            <CountdownTimer />
          </div>
        </ScrollReveal>
      </section>

      {/* Service Times */}
      <section className="py-24 px-6 bg-[var(--card-bg)]">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Join Us In Person</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-16">Service Times</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { day: "Sunday", time: "10:00 AM", desc: "Main Worship Service", icon: "✦" },
              { day: "Wednesday", time: "7:00 PM", desc: "Bible Study & Prayer", icon: "✦" },
              { day: "Friday", time: "6:00 PM", desc: "Youth Fellowship", icon: "✦" },
            ].map((service, i) => (
              <ScrollReveal key={service.day} delay={i * 0.15}>
                <div className="p-10 border border-[var(--border)] bg-[var(--background)] hover:border-[var(--gold)]/50 hover:shadow-xl hover:shadow-[var(--gold)]/5 transition-all duration-500 group hover:-translate-y-1">
                  <span className="text-[var(--gold)] text-lg mb-4 block opacity-60 group-hover:opacity-100 transition-opacity">{service.icon}</span>
                  <h3 className="text-xl font-serif mb-2">{service.day}</h3>
                  <p className="text-2xl font-light text-[var(--purple)] mb-2">{service.time}</p>
                  <p className="text-sm text-[var(--muted)]">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-4 bg-[var(--background)]">
        <div className="h-px w-16 bg-[var(--gold)]/30" />
        <span className="mx-4 text-[var(--gold)] text-xs">✦</span>
        <div className="h-px w-16 bg-[var(--gold)]/30" />
      </div>

      {/* Quick Links Section */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Discover More</p>
              <h2 className="text-3xl md:text-4xl font-serif">Get Connected</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "About Us", desc: "Our mission, vision, and leadership", href: "/about" },
              { title: "Events", desc: "Upcoming gatherings and programmes", href: "/events" },
              { title: "Counselling", desc: "Book a confidential pastoral session", href: "/counselling" },
              { title: "Give", desc: "Support the work of the Kingdom", href: "/donations" },
            ].map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 0.1}>
                <Link
                  href={item.href}
                  className="block p-8 border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--gold)]/50 hover:shadow-xl hover:shadow-[var(--gold)]/5 transition-all duration-500 group hover:-translate-y-1"
                >
                  <h3 className="font-serif text-lg mb-2 group-hover:text-[var(--purple)] transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
                  <span className="inline-block mt-4 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] font-sans font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[var(--card-bg)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Testimonies</p>
              <h2 className="text-3xl md:text-4xl font-serif">What Our Members Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} delay={i * 0.15}>
                <div className="p-8 border border-[var(--border)] bg-[var(--background)] hover:border-[var(--gold)]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <svg className="w-8 h-8 text-[var(--gold)]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/>
                  </svg>
                  <p className="text-sm text-[var(--warm-gray)] leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-[11px] text-[var(--muted)]">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-28 px-6 bg-[var(--background)]">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">A Word From Us</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Welcome Home</h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed font-light">
              Whether you&apos;re exploring faith for the first time or seeking a church 
              to call home, IAG welcomes you with open arms. We believe in the power of 
              community, the truth of God&apos;s Word, and the transforming work of the Holy Spirit.
            </p>
            <Link
              href="/connect"
              className="inline-block mt-10 px-10 py-4 bg-[var(--purple)] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--purple-light)] transition-all duration-300 shadow-lg shadow-[var(--purple)]/20"
            >
              Become a Member
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Scripture Banner */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white blur-[150px]" />
        </div>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto relative z-10">
            <p className="text-xl md:text-2xl font-serif italic font-light leading-relaxed opacity-90">
              &ldquo;But those who hope in the Lord will renew their strength. 
              They will soar on wings like eagles; they will run and not grow weary, 
              they will walk and not be faint.&rdquo;
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/40 font-sans">
              Isaiah 40:31
            </p>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
