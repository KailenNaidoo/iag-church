"use client";

import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const services = [
  { value: "sunday-morning", label: "Sunday Morning Service" },
  { value: "wednesday-bible", label: "Wednesday Bible Study" },
  { value: "friday-youth", label: "Friday Youth Night" },
  { value: "special-event", label: "Special Event" },
];

interface CheckIn { name: string; time: string; }

export default function CheckInPage() {
  const [service, setService] = useState("sunday-morning");
  const [sessionId, setSessionId] = useState("");
  const [recentCheckIns, setRecentCheckIns] = useState<CheckIn[]>([
    { name: "John Smith", time: "09:45 AM" },
    { name: "Mary Johnson", time: "09:47 AM" },
    { name: "Grace Mokoena", time: "09:51 AM" },
  ]);

  // Generate a unique session token for the QR code
  useEffect(() => {
    setSessionId(`${service}-${Date.now()}`);
  }, [service]);

  // Simulate live check-ins arriving
  useEffect(() => {
    const names = ["Peter Ndlovu", "Linda Van Wyk", "Emily Carter", "Sipho Khumalo", "Rachel Adams", "Thabo Dlamini", "David Williams"];
    const interval = setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: true }).toUpperCase();
      setRecentCheckIns((prev) => [{ name, time }, ...prev].slice(0, 8));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const checkInUrl = `https://iag-church.vercel.app/attendance?session=${sessionId}`;
  const serviceLabel = services.find((s) => s.value === service)?.label || "";

  return (
    <div className="p-6 md:p-10">
      <DashboardHeader title="QR Door Check-In" subtitle="Display this code at the entrance for contactless check-in" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* QR Display */}
        <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-8 flex flex-col items-center text-center">
          <div className="mb-6 w-full">
            <label htmlFor="service" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3 text-left">Select Service</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full p-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
            >
              {services.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-[var(--accent)]/20 shadow-lg">
            {sessionId && (
              <QRCodeSVG
                value={checkInUrl}
                size={220}
                level="H"
                fgColor="#1b4d8a"
                bgColor="#ffffff"
              />
            )}
          </div>

          <p className="mt-6 font-serif text-lg text-[var(--foreground)]">{serviceLabel}</p>
          <p className="text-xs text-[var(--muted)] mt-1">Members scan to check in instantly</p>

          <div className="mt-6 flex gap-3">
            <button className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-xs font-medium hover:bg-[var(--accent-light)] transition-colors">
              Print QR Code
            </button>
            <button
              onClick={() => setSessionId(`${service}-${Date.now()}`)}
              className="px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--muted)] text-xs font-medium hover:text-[var(--foreground)] transition-colors"
            >
              Refresh Code
            </button>
          </div>
        </div>

        {/* Live Check-ins */}
        <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif text-lg text-[var(--foreground)]">Live Check-Ins</h3>
              <p className="text-xs text-[var(--muted)]">Updates in real time as members scan</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-[var(--muted)]">Live</span>
            </div>
          </div>

          <div className="mb-4 p-4 rounded-lg bg-[var(--accent)]/5 border border-[var(--accent)]/10 flex items-center justify-between">
            <span className="text-sm text-[var(--muted)]">Checked in today</span>
            <span className="text-2xl font-serif text-[var(--accent)]">{recentCheckIns.length}</span>
          </div>

          <div className="space-y-2">
            {recentCheckIns.map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-xs font-medium">
                  {c.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-[var(--foreground)] flex-1">{c.name}</span>
                <span className="text-xs text-[var(--muted)]">{c.time}</span>
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
