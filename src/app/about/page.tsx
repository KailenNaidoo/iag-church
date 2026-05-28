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
      <section className="py-24 px-6 bg-gradient-to-b from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-[var(--gold)] blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-light)] font-sans font-semibold mb-4">Who We Are</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Discover our heart, our mission, and the people who make IAG a home.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div className="relative">
                <span className="text-6xl font-serif text-[var(--gold)]/10 absolute -top-4 -left-2">M</span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Our Purpose</p>
                <h2 className="text-2xl font-serif mb-6">Our Mission</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  To reach the lost, disciple believers, and transform communities through 
                  the power of the Gospel. We are committed to spreading the love of Christ 
                  locally and globally, equipping every member to live out their God-given purpose.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <span className="text-6xl font-serif text-[var(--gold)]/10 absolute -top-4 -left-2">V</span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Our Dream</p>
                <h2 className="text-2xl font-serif mb-6">Our Vision</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  To be a vibrant, Spirit-filled community that impacts nations for Christ. 
                  We envision a church where every person is known, loved, and empowered to 
                  make a difference in their world.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-4">
        <div className="h-px w-16 bg-[var(--gold)]/30" />
        <span className="mx-4 text-[var(--gold)] text-xs">✦</span>
        <div className="h-px w-16 bg-[var(--gold)]/30" />
      </div>

      {/* What We Believe */}
      <section className="py-24 px-6 bg-[var(--card-bg)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Our Foundation</p>
              <h2 className="text-3xl md:text-4xl font-serif">What We Believe</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "The Bible", text: "The inspired, infallible Word of God and our ultimate authority for faith and practice." },
              { title: "Salvation", text: "Through faith in Jesus Christ alone, available to all who believe and receive Him." },
              { title: "The Holy Spirit", text: "The baptism and gifts of the Holy Spirit for empowerment and service today." },
              { title: "The Church", text: "The body of Christ, called to worship, fellowship, discipleship, and mission." },
              { title: "Prayer", text: "The privilege of every believer to communicate with God and see His power at work." },
              { title: "Community", text: "We are called to love one another, bear each other's burdens, and grow together." },
            ].map((belief, i) => (
              <ScrollReveal key={belief.title} delay={i * 0.1}>
                <div className="p-8 border border-[var(--border)] bg-[var(--background)] hover:border-[var(--gold)]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-500">
                  <h3 className="font-serif text-lg mb-3 text-[var(--purple)]">{belief.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{belief.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Our Team</p>
              <h2 className="text-3xl md:text-4xl font-serif">Leadership</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, i) => (
              <ScrollReveal key={leader.name} delay={i * 0.1}>
                <div className="p-8 border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--gold)]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--purple)] to-[var(--purple-light)] text-white rounded-full flex items-center justify-center text-xl font-serif mb-5 group-hover:shadow-lg group-hover:shadow-[var(--purple)]/20 transition-shadow duration-500">
                    {leader.name.split(" ")[1]?.charAt(0) || leader.name.charAt(0)}
                  </div>
                  <h3 className="font-serif text-xl mb-1">{leader.name}</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--gold)] font-sans mb-3">{leader.role}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{leader.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white blur-[150px]" />
        </div>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-light)] font-sans font-semibold mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Our Story</h2>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              International Assemblies of God was founded with a heart to bring people 
              from all nations together in worship. What started as a small gathering has 
              grown into a thriving community of believers united by faith, love, and purpose. 
              Through the years, God has been faithful, and we continue to see lives transformed 
              by His grace.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
