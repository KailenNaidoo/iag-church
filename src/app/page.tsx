import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[var(--gold)] blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white blur-[150px]" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2Mmgxem0tMi0ydi0ySDI2djJoOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Image
            src="/logo.svg"
            alt="IAG Logo"
            width={100}
            height={120}
            className="mx-auto mb-8 drop-shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4">
            International<br />
            <span className="gold-gradient">Assemblies of God</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            A sanctuary of worship, fellowship, and spiritual transformation. 
            Where faith meets community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/connect"
              className="px-10 py-4 bg-[var(--gold)] text-[#1a1a1a] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--gold-light)] transition-all duration-300 shadow-lg shadow-[var(--gold)]/20"
            >
              Join Our Family
            </Link>
            <Link
              href="/live"
              className="px-10 py-4 border border-white/30 text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
            >
              Watch Live
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Service Times */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Join Us In Person</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-16">Service Times</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { day: "Sunday", time: "10:00 AM", desc: "Main Worship Service", icon: "✦" },
              { day: "Wednesday", time: "7:00 PM", desc: "Bible Study & Prayer", icon: "✦" },
              { day: "Friday", time: "6:00 PM", desc: "Youth Fellowship", icon: "✦" },
            ].map((service) => (
              <div key={service.day} className="p-10 border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--gold)]/40 transition-all duration-500 group">
                <span className="text-[var(--gold)] text-lg mb-4 block opacity-60 group-hover:opacity-100 transition-opacity">{service.icon}</span>
                <h3 className="text-xl font-serif mb-2">{service.day}</h3>
                <p className="text-2xl font-light text-[var(--purple)] mb-2">{service.time}</p>
                <p className="text-sm text-[var(--muted)]">{service.desc}</p>
              </div>
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

      {/* Quick Links Section */}
      <section className="py-24 px-6 bg-[var(--card-bg)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Discover More</p>
            <h2 className="text-3xl md:text-4xl font-serif">Get Connected</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "About Us", desc: "Our mission, vision, and leadership", href: "/about" },
              { title: "Events", desc: "Upcoming gatherings and programmes", href: "/events" },
              { title: "Counselling", desc: "Book a confidential pastoral session", href: "/counselling" },
              { title: "Give", desc: "Support the work of the Kingdom", href: "/donations" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-8 border border-[var(--border)] bg-[var(--background)] hover:border-[var(--gold)]/50 hover:shadow-lg hover:shadow-[var(--gold)]/5 transition-all duration-500 group"
              >
                <h3 className="font-serif text-lg mb-2 group-hover:text-[var(--purple)] transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
                <span className="inline-block mt-4 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] font-sans font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-28 px-6 bg-[var(--background)]">
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
            className="inline-block mt-10 px-10 py-4 bg-[var(--purple)] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--accent-light)] transition-all duration-300 shadow-lg shadow-[var(--purple)]/20"
          >
            Become a Member
          </Link>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-serif italic font-light leading-relaxed opacity-90">
            &ldquo;But those who hope in the Lord will renew their strength. 
            They will soar on wings like eagles; they will run and not grow weary, 
            they will walk and not be faint.&rdquo;
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/50 font-sans">
            Isaiah 40:31
          </p>
        </div>
      </section>
    </div>
  );
}
