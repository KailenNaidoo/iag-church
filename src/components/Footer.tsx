import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-5">
              <Image src="/logo.png" alt="IAG Logo" width={36} height={40} />
              <span className="text-lg font-serif text-[var(--foreground)]">IAG</span>
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)] font-sans mb-4">
              International Assemblies of God
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
              Building faith, community, and purpose together.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-[var(--accent)] mb-6 font-medium">Explore</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/events", label: "Events" },
                { href: "/live", label: "Live Stream" },
                { href: "/donations", label: "Giving" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--muted-light)] hover:text-[var(--accent)] transition-colors duration-500">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-[var(--accent)] mb-6 font-medium">Get Involved</h4>
            <ul className="space-y-3">
              {[
                { href: "/connect", label: "Join Us" },
                { href: "/counselling", label: "Counselling" },
                { href: "/attendance", label: "Attendance" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--muted-light)] hover:text-[var(--accent)] transition-colors duration-500">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-[var(--accent)] mb-6 font-medium">Services</h4>
            <ul className="space-y-3 text-sm text-[var(--muted-light)]">
              <li>Sunday Worship — 10:00 AM</li>
              <li>Wednesday Study — 7:00 PM</li>
              <li className="pt-2 text-[var(--muted)] text-xs">info@iag-church.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[var(--muted)] tracking-wider">
            &copy; {new Date().getFullYear()} International Assemblies of God
          </p>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              Admin
            </Link>
            <p className="text-[11px] text-[var(--muted)] italic font-serif">
              &ldquo;For where two or three gather in my name, there am I with them.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
