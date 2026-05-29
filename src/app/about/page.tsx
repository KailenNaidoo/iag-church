"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export default function AboutPage() {
  const leaders = [
    { name: "Pastor John", role: "Senior Pastor", bio: "Leading IAG with vision and compassion for over 15 years." },
    { name: "Pastor Sarah", role: "Associate Pastor", bio: "Passionate about discipleship and community outreach." },
    { name: "Deacon Michael", role: "Head Deacon", bio: "Serving the church with dedication and faithfulness." },
    { name: "Sister Grace", role: "Worship Leader", bio: "Leading the congregation into God's presence through music." },
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-32 px-6 text-center relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#122a4a] via-[#1b4d8a] to-[#122a4a]" />
        <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent)] blur-[250px] opacity-[0.03]" /></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/70 font-sans font-medium mb-5">Who We Are</p>
          <h1 className="text-4xl md:text-7xl font-serif font-normal mb-6 text-white">About Us</h1>
          <p className="text-base text-white/65 font-light max-w-xl mx-auto">
            Discover our heart, our mission, and the people who make IAG a home.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[var(--accent-dim)] to-transparent" /></div>

      {/* Mission & Vision */}
      <section className="py-28 px-6 bg-[#f0f2f5]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <ScrollReveal direction="left">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Our Purpose</p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6">Mission</h2>
            <p className="text-[var(--muted-light)] leading-relaxed font-light">
              To reach the lost, disciple believers, and transform communities through the power of the Gospel. We are committed to spreading the love of Christ locally and globally.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Our Dream</p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6">Vision</h2>
            <p className="text-[var(--muted-light)] leading-relaxed font-light">
              To be a vibrant, Spirit-filled community that impacts nations for Christ. A church where every person is known, loved, and empowered to make a difference.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-28 px-6 bg-[#e8ecf1]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Our Foundation</p>
              <h2 className="text-3xl md:text-5xl font-serif">What We Believe</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "The Bible", text: "The inspired, infallible Word of God and our ultimate authority." },
              { title: "Salvation", text: "Through faith in Jesus Christ alone, available to all who believe." },
              { title: "The Holy Spirit", text: "The baptism and gifts of the Spirit for empowerment today." },
              { title: "The Church", text: "The body of Christ, called to worship, fellowship, and mission." },
              { title: "Prayer", text: "The privilege of every believer to see God's power at work." },
              { title: "Community", text: "Called to love one another and grow together in Christ." },
            ].map((belief, i) => (
              <ScrollReveal key={belief.title} delay={i * 0.08}>
                <div className="glass-card p-8 hover:border-[var(--accent)]/20 transition-all duration-700">
                  <h3 className="font-serif text-lg mb-3 text-[var(--accent)]">{belief.title}</h3>
                  <p className="text-sm text-[var(--muted-light)] leading-relaxed font-light">{belief.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-28 px-6 bg-[#f0f2f5]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Our Team</p>
              <h2 className="text-3xl md:text-5xl font-serif">Leadership</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {leaders.map((leader, i) => (
              <ScrollReveal key={leader.name} delay={i * 0.1}>
                <div className="glass-card p-8 hover:border-[var(--accent)]/20 transition-all duration-700 group">
                  <div className="w-14 h-14 border border-[var(--accent-dim)] text-[var(--accent)] rounded-full flex items-center justify-center text-lg font-serif mb-5 group-hover:bg-[var(--accent)] group-hover:text-[var(--background)] transition-all duration-500">
                    {leader.name.split(" ")[1]?.charAt(0)}
                  </div>
                  <h3 className="font-serif text-xl mb-1">{leader.name}</h3>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--accent)] font-sans mb-3">{leader.role}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed font-light">{leader.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 px-6 bg-[#e8ecf1] border-t border-[var(--border)]">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent)] font-sans font-medium mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Our Story</h2>
            <p className="text-base text-[var(--muted-light)] leading-relaxed font-light">
              International Assemblies of God was founded with a heart to bring people from all nations together in worship. What started as a small gathering has grown into a thriving community united by faith, love, and purpose.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
