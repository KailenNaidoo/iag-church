import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-2">IAG</h3>
            <p className="text-sm text-[var(--muted)]">
              International Assemblies of God
            </p>
            <p className="text-sm text-[var(--muted)] mt-2">
              Building faith, community, and purpose together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">About Us</Link></li>
              <li><Link href="/events" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Events</Link></li>
              <li><Link href="/live" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Live Stream</Link></li>
              <li><Link href="/donations" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Donations</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
              Get Involved
            </h4>
            <ul className="space-y-2">
              <li><Link href="/connect" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Join Us</Link></li>
              <li><Link href="/counselling" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Counselling</Link></li>
              <li><Link href="/attendance" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Attendance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>Sunday Service: 10:00 AM</li>
              <li>Wednesday Bible Study: 7:00 PM</li>
              <li>info@iag-church.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-8 pt-8 text-center">
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} International Assemblies of God. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
