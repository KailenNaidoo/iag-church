"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { members } from "@/lib/dashboardData";

export default function MapPage() {
  // Group members by city
  const cityCounts = members.reduce((acc, m) => {
    acc[m.location.city] = (acc[m.location.city] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const cities = Object.entries(cityCounts).sort((a, b) => b[1] - a[1]);

  // Bounds for the Gauteng region (approx) to map lat/lng to SVG coords
  const bounds = { minLat: -26.4, maxLat: -25.7, minLng: 27.8, maxLng: 28.4 };
  const project = (lat: number, lng: number) => {
    const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 100;
    const y = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * 100;
    return { x, y };
  };

  return (
    <div className="p-6 md:p-10">
      <DashboardHeader title="Member Map" subtitle="Geographic distribution of the congregation" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Map */}
        <div className="lg:col-span-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
          <h3 className="font-serif text-lg text-[var(--foreground)] mb-4">Greater Johannesburg Region</h3>
          <div className="relative w-full aspect-[4/3] bg-[var(--background)] rounded-lg border border-[var(--border)] overflow-hidden">
            {/* Grid background */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10%" height="10%" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="var(--border)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            {/* Member pins */}
            {members.map((m) => {
              const { x, y } = project(m.location.lat, m.location.lng);
              return (
                <div
                  key={m.id}
                  className="absolute group -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--accent)]/20 hover:ring-[var(--accent)]/40 transition-all cursor-pointer" />
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-[var(--background)] text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {m.name} · {m.location.city}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-[var(--muted)] mt-3 text-center">Hover over a pin to see member details. Connect a maps API for street-level detail.</p>
        </div>

        {/* City breakdown */}
        <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
          <h3 className="font-serif text-lg text-[var(--foreground)] mb-4">By Location</h3>
          <div className="space-y-3">
            {cities.map(([city, count]) => (
              <div key={city}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-[var(--foreground)]">{city}</span>
                  <span className="text-[var(--muted)]">{count}</span>
                </div>
                <div className="w-full h-2 bg-[var(--border)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--accent)] rounded-full" style={{ width: `${(count / Math.max(...cities.map(c => c[1]))) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
