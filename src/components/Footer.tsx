import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.svg"
                alt="IAG Logo"
                width={36}
                height={44}
              />
              <div>
                <h3 className="text-xl font-serif text-[var(--purple)]">IAG</h3>
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)] font-sans mb-4">
              International Assemblies of God
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
              Building faith, community, and purpose together in the love of Christ.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[var(--gold)] mb-6 font-semibold">
              Explore
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-[var(--warm-gray)] hover:text-[var(--purple)] transition-colors duration-300">About Us</Link></li>
              <li><Link href="/events" className="text-sm text-[var(--warm-gray)] hover:text-[var(--purple)] transition-colors duration-300">Events</Link></li>
              <li><Link href="/live" className="text-sm text-[var(--warm-gray)] hover:text-[var(--purple)] transition-colors duration-300">Live Stream</Link></li>
              <li><Link href="/donations" className="text-sm text-[var(--warm-gray)] hover:text-[var(--purple)] transition-colors duration-300">Giving</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[var(--gold)] mb-6 font-semibold">
              Get Involved
            </h4>
            <ul className="space-y-3">
              <li><Link href="/connect" className="text-sm text-[var(--warm-gray)] hover:text-[var(--purple)] transition-colors duration-300">Join Us</Link></li>
              <li><Link href="/counselling" className="text-sm text-[var(--warm-gray)] hover:text-[var(--purple)] transition-colors duration-300">Counselling</Link></li>
              <li><Link href="/attendance" className="text-sm text-[var(--warm-gray)] hover:text-[var(--purple)] transition-colors duration-300">Attendance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[var(--gold)] mb-6 font-semibold">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-[var(--warm-gray)]">
              <li>Sunday Worship — 10:00 AM</li>
              <li>Wednesday Study — 7:00 PM</li>
              <li className="pt-2 text-[var(--muted)] text-xs">info@iag-church.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-[var(--muted)] tracking-wide">
            &copy; {new Date().getFullYear()} International Assemblies of God. All rights reserved.
          </p>
          <p className="text-[11px] text-[var(--muted)] italic font-serif">
            &ldquo;For where two or three gather in my name, there am I with them.&rdquo; — Matthew 18:20
          </p>
        </div>
      </div>
    </footer>
  );
}
