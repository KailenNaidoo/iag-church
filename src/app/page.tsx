import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            IAG
          </h1>
          <p className="text-xl md:text-2xl font-light mb-2">
            International Assemblies of God
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            A place of worship, community, and spiritual growth. 
            Join us as we build faith together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/connect"
              className="px-8 py-3 bg-white text-black font-semibold rounded-none hover:bg-gray-200 transition-colors"
            >
              Join Us
            </Link>
            <Link
              href="/live"
              className="px-8 py-3 border border-white text-white font-semibold rounded-none hover:bg-white hover:text-black transition-colors"
            >
              Watch Live
            </Link>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 px-4 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Service Times</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-[var(--border)]">
              <h3 className="text-lg font-semibold mb-2">Sunday Service</h3>
              <p className="text-[var(--muted)]">10:00 AM</p>
              <p className="text-sm text-[var(--muted)] mt-2">Main Worship Service</p>
            </div>
            <div className="p-8 border border-[var(--border)]">
              <h3 className="text-lg font-semibold mb-2">Wednesday</h3>
              <p className="text-[var(--muted)]">7:00 PM</p>
              <p className="text-sm text-[var(--muted)] mt-2">Bible Study & Prayer</p>
            </div>
            <div className="p-8 border border-[var(--border)]">
              <h3 className="text-lg font-semibold mb-2">Friday Youth</h3>
              <p className="text-[var(--muted)]">6:00 PM</p>
              <p className="text-sm text-[var(--muted)] mt-2">Youth Fellowship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-[var(--card-bg)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get Connected</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "About Us", desc: "Learn about our mission and values", href: "/about" },
              { title: "Events", desc: "See what's happening at IAG", href: "/events" },
              { title: "Counselling", desc: "Book a confidential session", href: "/counselling" },
              { title: "Donate", desc: "Support the work of the church", href: "/donations" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-6 border border-[var(--border)] bg-[var(--background)] hover:border-[var(--foreground)] transition-colors group"
              >
                <h3 className="font-semibold mb-2 group-hover:underline">{item.title}</h3>
                <p className="text-sm text-[var(--muted)]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 px-4 bg-[var(--background)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome Home</h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            Whether you&apos;re exploring faith for the first time or looking for a church 
            to call home, IAG welcomes you with open arms. We believe in the power of 
            community, the truth of God&apos;s Word, and the transforming work of the Holy Spirit.
          </p>
          <Link
            href="/connect"
            className="inline-block mt-8 px-8 py-3 bg-[var(--foreground)] text-[var(--background)] font-semibold hover:opacity-80 transition-opacity"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}
