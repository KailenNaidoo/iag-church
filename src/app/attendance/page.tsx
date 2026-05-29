"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

interface AttendanceRecord { id: string; name: string; checkedInAt: string; service: string; }

export default function AttendancePage() {
  const [view, setView] = useState<"checkin" | "register">("checkin");
  const [memberName, setMemberName] = useState("");
  const [memberCode, setMemberCode] = useState("");
  const [selectedService, setSelectedService] = useState("sunday-morning");
  const [checkedIn, setCheckedIn] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
    { id: "1", name: "John Smith", checkedInAt: "09:45 AM", service: "Sunday Morning" },
    { id: "2", name: "Mary Johnson", checkedInAt: "09:50 AM", service: "Sunday Morning" },
    { id: "3", name: "David Williams", checkedInAt: "09:52 AM", service: "Sunday Morning" },
    { id: "4", name: "Sarah Brown", checkedInAt: "09:55 AM", service: "Sunday Morning" },
    { id: "5", name: "James Wilson", checkedInAt: "09:58 AM", service: "Sunday Morning" },
  ]);
  const services = [
    { value: "sunday-morning", label: "Sunday Morning Service" },
    { value: "wednesday-bible", label: "Wednesday Bible Study" },
    { value: "friday-youth", label: "Friday Youth Night" },
    { value: "special-event", label: "Special Event" },
  ];
  const handleCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    const timeStr = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: true }).toUpperCase();
    const serviceLabel = services.find(s => s.value === selectedService)?.label || selectedService;
    setAttendanceRecords([{ id: Date.now().toString(), name: memberName, checkedInAt: timeStr, service: serviceLabel }, ...attendanceRecords]);
    setCheckedIn(true);
  };
  const inputClass = "w-full p-4 border border-[var(--border-light)] bg-[var(--card-bg)] text-[var(--foreground)] text-sm focus:border-[var(--accent)] focus:outline-none transition-colors duration-500";

  return (
    <PageTransition>
      <section className="py-32 px-6 text-center relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#122a4a] via-[#1b4d8a] to-[#122a4a]" />
        <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent)] blur-[250px] opacity-[0.03]" /></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/70 font-sans font-medium mb-5">Member Register</p>
          <h1 className="text-4xl md:text-7xl font-serif font-normal mb-6 text-white">Attendance</h1>
          <p className="text-base text-white/65 font-light max-w-xl mx-auto">Check in when you arrive. Leaders view the live register.</p>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[#f7f9fc]">
        <div className="max-w-4xl mx-auto flex">
          {["checkin", "register"].map((tab) => (
            <button key={tab} onClick={() => setView(tab as "checkin" | "register")} className={`flex-1 py-5 text-center text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-500 ${view === tab ? "text-[var(--accent)] border-b border-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--muted-light)]"}`}>{tab === "checkin" ? "Check In" : "Register"}</button>
          ))}
        </div>
      </section>

      {view === "checkin" && (
        <section className="py-28 px-6 bg-white">
          <div className="max-w-md mx-auto">
            <ScrollReveal>
              {checkedIn ? (
                <div className="text-center p-16 glass-card">
                  <div className="w-16 h-16 mx-auto mb-6 border border-[var(--accent)] rounded-full flex items-center justify-center text-[var(--accent)] text-2xl">✓</div>
                  <h2 className="text-2xl font-serif mb-3">Checked In</h2>
                  <p className="text-[var(--muted)]">Welcome, <span className="text-[var(--accent)]">{memberName}</span>.</p>
                  <button onClick={() => { setCheckedIn(false); setMemberName(""); setMemberCode(""); }} className="mt-8 px-8 py-3 border border-[var(--accent-dim)] text-[var(--accent)] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-500">Check In Another</button>
                </div>
              ) : (
                <form onSubmit={handleCheckIn} className="space-y-6">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto border border-[var(--accent-dim)] text-[var(--accent)] rounded-full flex items-center justify-center text-2xl mb-5">📋</div>
                    <h2 className="text-2xl font-serif">Check In</h2>
                    <p className="text-sm text-[var(--muted)] mt-2 font-light">Mark your attendance</p>
                  </div>
                  <div><label htmlFor="service" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Service *</label><select id="service" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className={inputClass}>{services.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}</select></div>
                  <div><label htmlFor="memberName" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Full Name *</label><input id="memberName" type="text" required value={memberName} onChange={(e) => setMemberName(e.target.value)} placeholder="Your name" className={`${inputClass} placeholder:text-[var(--muted)]`} /></div>
                  <div><label htmlFor="memberCode" className="block text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium mb-3">Member Code</label><input id="memberCode" type="text" value={memberCode} onChange={(e) => setMemberCode(e.target.value)} placeholder="e.g. IAG-001" className={`${inputClass} placeholder:text-[var(--muted)]`} /></div>
                  <button type="submit" className="w-full py-5 bg-[var(--accent)] text-[var(--background)] text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-[var(--accent-light)] transition-all duration-500">Check In</button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </section>
      )}

      {view === "register" && (
        <section className="py-28 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
                <div className="glass-card p-8 text-center"><p className="text-3xl font-serif text-[var(--accent)]">{attendanceRecords.length}</p><p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] mt-2">Present</p></div>
                <div className="glass-card p-8 text-center"><p className="text-base font-serif text-[var(--foreground)]">Sunday Morning</p><p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] mt-2">Service</p></div>
                <div className="glass-card p-8 text-center"><p className="text-base font-serif text-[var(--foreground)]">{new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</p><p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] mt-2">Date</p></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="glass-card overflow-hidden">
                <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
                  <h3 className="font-serif text-lg">Register</h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">{attendanceRecords.length} present</span>
                </div>
                <table className="w-full">
                  <thead><tr className="border-b border-[var(--border)]"><th className="text-left p-5 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] font-medium">#</th><th className="text-left p-5 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] font-medium">Name</th><th className="text-left p-5 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] font-medium">Time</th><th className="text-left p-5 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] font-medium hidden md:table-cell">Service</th></tr></thead>
                  <tbody>
                    {attendanceRecords.map((r, i) => (
                      <tr key={r.id} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--card-bg-hover)] transition-colors">
                        <td className="p-5 text-sm text-[var(--muted)]">{i + 1}</td>
                        <td className="p-5 text-sm">{r.name}</td>
                        <td className="p-5 text-sm text-[var(--muted)]">{r.checkedInAt}</td>
                        <td className="p-5 text-sm text-[var(--muted)] hidden md:table-cell">{r.service}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
