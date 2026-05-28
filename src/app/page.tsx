"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CountdownTimer from "@/components/CountdownTimer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  const testimonials = [
    { quote: "IAG has been a home for my family. The love and support we've received here is beyond words.", name: "The Williams Family", role: "Members since 2018" },
    { quote: "I found purpose and community here. The teaching is powerful and the people are genuine.", name: "David M.", role: "Youth Leader" },
    { quote: "The counselling ministry helped me through the hardest season of my life. Forever grateful.", name: "Sarah K.", role: "Member since 2020" },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden noise-bg">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b0a] via-[#141210] to-[#0d0b0a]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#c9a96e] blur-[250px] opacity-[0.04]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#f5f0e8] blur-[200px] opacity-[0.02]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src="/logo.svg"
              alt="IAG Logo"
              width={100}
              height={120}
              className="mx-auto mb-10 opacity-90"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-6"
          >
            International Assemblies of God
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-8xl font-serif font-normal tracking-tight mb-8"
          >
            Where Faith<br />
            <span className="italic font-light">Meets Home</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg font-light text-[var(--muted-light)] mb-14 max-w-xl mx-auto leading-relaxed"
          >
            A sanctuary of worship, fellowship, and spiritual transformation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link
              href="/connect"
              className="px-10 py-4 bg-[var(--accent)] text-[var(--background)] font-sans text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-[var(--accent-light)] transition-all duration-500"
            >
              Join Us
            </Link>
            <Link
              href="/live"
              className="px-10 py-4 border border-[var(--border-light)] text-[var(--foreground)] font-sans text-[11px] uppercase tracking-[0.25em] font-light hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-500"
            >
              Watch Live
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[var(--accent-dim)] to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* Countdown */}
      <section className="py-20 px-6 bg-[var(--background)] border-t border-[var(--border)]">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-6">Next Sunday Service</p>
            <CountdownTimer />
          </div>
        </ScrollReveal>
      </section>

      {/* Gold line divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent-dim)] to-transparent" />
      </div>

      {/* Service Times */}
      <section className="py-28 px-6 bg-[var(--background)] noise-bg">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Gather With Us</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-20">Service Times</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { day: "Sunday", time: "10:00 AM", desc: "Main Worship" },
              { day: "Wednesday", time: "7:00 PM", desc: "Bible Study & Prayer" },
              { day: "Friday", time: "6:00 PM", desc: "Youth Fellowship" },
            ].map((service, i) => (
              <ScrollReveal key={service.day} delay={i * 0.15}>
                <div className="glass-card p-10 hover:border-[var(--accent)]/20 transition-all duration-700 group">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4 font-medium">{service.day}</p>
                  <p className="text-3xl font-serif font-light text-[var(--foreground)] mb-3">{service.time}</p>
                  <p className="text-sm text-[var(--muted)]">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-28 px-6 bg-[var(--background-secondary)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Discover</p>
              <h2 className="text-3xl md:text-5xl font-serif">Get Connected</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "About Us", desc: "Our mission, vision & leadership", href: "/about" },
              { title: "Events", desc: "Upcoming gatherings & programmes", href: "/events" },
              { title: "Counselling", desc: "Book a confidential session", href: "/counselling" },
              { title: "Give", desc: "Support the work of the Kingdom", href: "/donations" },
            ].map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 0.1}>
                <Link
                  href={item.href}
                  className="block p-8 glass-card hover:border-[var(--accent)]/30 transition-all duration-700 group"
                >
                  <h3 className="font-serif text-lg mb-2 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-500">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
                  <div className="mt-5 h-px w-0 group-hover:w-8 bg-[var(--accent)] transition-all duration-700" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 bg-[var(--background)] noise-bg">
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Testimonies</p>
              <h2 className="text-3xl md:text-5xl font-serif">Lives Changed</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="glass-card p-8 hover:border-[var(--accent)]/20 transition-all duration-700">
                  <div className="text-[var(--accent)] opacity-30 text-4xl font-serif mb-4">&ldquo;</div>
                  <p className="text-sm text-[var(--muted-light)] leading-relaxed mb-8 italic font-light">
                    {t.quote}
                  </p>
                  <div className="border-t border-[var(--border)] pt-4">
                    <p className="text-sm font-medium text-[var(--foreground)]">{t.name}</p>
                    <p className="text-[11px] text-[var(--muted)]">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome CTA */}
      <section className="py-32 px-6 bg-[var(--background-secondary)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)] blur-[300px] opacity-[0.03]" />
        </div>
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Welcome</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-8">You Belong Here</h2>
            <p className="text-base text-[var(--muted-light)] leading-relaxed font-light mb-12">
              Whether you&apos;re exploring faith for the first time or seeking a church 
              to call home, IAG welcomes you. We believe in the power of 
              community, the truth of God&apos;s Word, and the transforming work of the Holy Spirit.
            </p>
            <Link
              href="/connect"
              className="inline-block px-10 py-4 bg-[var(--accent)] text-[var(--background)] font-sans text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-[var(--accent-light)] transition-all duration-500"
            >
              Become a Member
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Scripture */}
      <section className="py-24 px-6 bg-[var(--background)] border-t border-[var(--border)]">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-display italic font-light leading-relaxed text-[var(--muted-light)]">
              &ldquo;But those who hope in the Lord will renew their strength. 
              They will soar on wings like eagles; they will run and not grow weary, 
              they will walk and not be faint.&rdquo;
            </p>
            <p className="mt-8 text-[9px] uppercase tracking-[0.3em] text-[var(--accent-dim)] font-sans">
              Isaiah 40:31
            </p>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
