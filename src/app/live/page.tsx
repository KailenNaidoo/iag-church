export default function LiveStreamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-[var(--gold)] blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-light)] font-sans font-semibold mb-4">Worship Online</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Live Stream</h1>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Join us from anywhere in the world. Experience worship without boundaries.
          </p>
        </div>
      </section>

      {/* Live Stream Player */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto">
          {/* Stream Status */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--warm-gray)]">
              Live Now — Sunday Service
            </span>
          </div>

          {/* Video Embed Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-[#0c1a2e] to-[#081220] border border-[var(--border)] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--gold)] blur-[120px]" />
            </div>
            <div className="text-center text-white relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-white/20 rounded-full flex items-center justify-center hover:border-[var(--gold)] transition-colors duration-300 cursor-pointer">
                <svg
                  className="w-8 h-8 ml-1 opacity-70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-lg font-serif">Live Stream</p>
              <p className="text-sm text-white/50 mt-2 font-light">
                The stream will appear here during service times
              </p>
              <p className="text-[10px] text-white/30 mt-6 uppercase tracking-[0.15em]">
                YouTube / Facebook Live embed
              </p>
            </div>
          </div>

          {/* Stream Info */}
          <div className="mt-10 p-8 border border-[var(--border)] bg-[var(--card-bg)]">
            <h2 className="font-serif text-xl mb-3">About Our Live Stream</h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              We stream every Sunday at 10:00 AM and Wednesday at 7:00 PM. 
              If you&apos;re joining us online, we&apos;d love to know — drop a comment 
              or reach out through our Connect page. You are part of this family.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24 px-6 bg-[var(--card-bg)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">When To Tune In</p>
            <h2 className="text-3xl md:text-4xl font-serif">Stream Schedule</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Sunday Worship", time: "Every Sunday at 10:00 AM", desc: "Full worship service including praise, prayer, and the Word." },
              { title: "Wednesday Bible Study", time: "Every Wednesday at 7:00 PM", desc: "Midweek teaching and prayer session." },
              { title: "Special Events", time: "As announced", desc: "Conferences, guest speakers, and special services." },
              { title: "Past Services", time: "Available on demand", desc: "Missed a service? Watch previous recordings anytime." },
            ].map((item) => (
              <div key={item.title} className="p-8 border border-[var(--border)] bg-[var(--background)] hover:border-[var(--gold)]/40 transition-all duration-500">
                <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--purple)] mb-2">{item.time}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Watch */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-sans font-semibold mb-4">Platforms</p>
          <h2 className="text-3xl font-serif mb-12">How to Watch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "💻", title: "Website", desc: "Watch right here on this page" },
              { icon: "▶️", title: "YouTube", desc: "Subscribe to our channel" },
              { icon: "📘", title: "Facebook", desc: "Follow us on Facebook Live" },
            ].map((platform) => (
              <div key={platform.title} className="p-8 border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--gold)]/40 transition-all duration-500">
                <div className="text-3xl mb-4">{platform.icon}</div>
                <h3 className="font-serif text-lg mb-2">{platform.title}</h3>
                <p className="text-sm text-[var(--muted)]">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
