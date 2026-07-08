"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { upcomingEvents } from "@/lib/dashboardData";

const pastEvents = [
  { title: "Annual Church Conference", date: "2026-06-15", attendees: 312 },
  { title: "Community Outreach Day", date: "2026-06-08", attendees: 145 },
  { title: "Marriage Enrichment Seminar", date: "2026-05-24", attendees: 68 },
];

export default function EventsPage() {
  return (
    <div className="p-6 md:p-10">
      <DashboardHeader title="Events" subtitle="Manage services, programmes, and gatherings" />

      <div className="flex justify-end mb-6">
        <button className="px-5 py-3 rounded-lg bg-[var(--accent)] text-white text-xs font-medium hover:bg-[var(--accent-light)] transition-colors">
          + Create Event
        </button>
      </div>

      {/* Upcoming */}
      <h3 className="font-serif text-lg text-[var(--foreground)] mb-4">Upcoming</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {upcomingEvents.map((e) => (
          <div key={e.id} className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-center shrink-0 w-16 bg-[var(--accent)]/10 rounded-lg py-3">
                <p className="text-[10px] text-[var(--accent)] uppercase font-semibold">{new Date(e.date).toLocaleDateString("en-GB", { month: "short" })}</p>
                <p className="text-2xl font-serif text-[var(--accent)]">{new Date(e.date).getDate()}</p>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-[var(--foreground)]">{e.title}</h4>
                <p className="text-xs text-[var(--muted)] mt-1">{e.time}</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[var(--muted)]">Registered</span>
                    <span className="text-[var(--foreground)] font-medium">{e.attendees} / {e.capacity}</span>
                  </div>
                  <div className="w-full h-2 bg-[var(--border)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--accent)] rounded-full" style={{ width: `${(e.attendees / e.capacity) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Past */}
      <h3 className="font-serif text-lg text-[var(--foreground)] mb-4">Past Events</h3>
      <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--background)]">
              <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Event</th>
              <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Date</th>
              <th className="text-right p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {pastEvents.map((e, i) => (
              <tr key={i} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--highlight)] transition-colors">
                <td className="p-4 text-sm font-medium text-[var(--foreground)]">{e.title}</td>
                <td className="p-4 text-sm text-[var(--muted)]">{new Date(e.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</td>
                <td className="p-4 text-sm font-medium text-[var(--accent)] text-right">{e.attendees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
