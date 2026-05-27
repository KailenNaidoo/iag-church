"use client";

import { useState } from "react";

interface AttendanceRecord {
  id: string;
  name: string;
  checkedInAt: string;
  service: string;
}

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
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: true }).toUpperCase();
    const serviceLabel = services.find(s => s.value === selectedService)?.label || selectedService;
    
    const newRecord: AttendanceRecord = {
      id: Date.now().toString(),
      name: memberName,
      checkedInAt: timeStr,
      service: serviceLabel,
    };
    
    setAttendanceRecords([newRecord, ...attendanceRecords]);
    setCheckedIn(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0c1a2e] via-[#1a3a5c] to-[#0c1a2e] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-[var(--gold)] blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-light)] font-sans font-semibold mb-4">Member Register</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Attendance</h1>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Check in when you arrive. Leaders can view the live attendance register.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-[var(--border)] bg-[var(--card-bg)]">
        <div className="max-w-4xl mx-auto flex">
          <button
            onClick={() => setView("checkin")}
            className={`flex-1 py-5 text-center text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
              view === "checkin"
                ? "border-b-2 border-[var(--gold)] text-[var(--purple)]"
                : "text-[var(--muted)] hover:text-[var(--purple)]"
            }`}
          >
            Check In
          </button>
          <button
            onClick={() => setView("register")}
            className={`flex-1 py-5 text-center text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
              view === "register"
                ? "border-b-2 border-[var(--gold)] text-[var(--purple)]"
                : "text-[var(--muted)] hover:text-[var(--purple)]"
            }`}
          >
            View Register
          </button>
        </div>
      </section>

      {/* Check In View */}
      {view === "checkin" && (
        <section className="py-24 px-6 bg-[var(--background)]">
          <div className="max-w-md mx-auto">
            {checkedIn ? (
              <div className="text-center p-16 border border-[var(--border)] bg-[var(--card-bg)]">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] rounded-full flex items-center justify-center text-white text-3xl shadow-lg shadow-[var(--gold)]/20">✓</div>
                <h2 className="text-2xl font-serif mb-3">You&apos;re Checked In</h2>
                <p className="text-[var(--muted)]">
                  Welcome, <span className="text-[var(--purple)] font-medium">{memberName}</span>. Enjoy the service today.
                </p>
                <button
                  onClick={() => { setCheckedIn(false); setMemberName(""); setMemberCode(""); }}
                  className="mt-8 px-8 py-3 border border-[var(--purple)] text-[var(--purple)] text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[var(--purple)] hover:text-white transition-all duration-300"
                >
                  Check In Another Person
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckIn} className="space-y-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--purple)] to-[var(--accent-light)] text-white rounded-full flex items-center justify-center text-3xl mb-5 shadow-lg shadow-[var(--purple)]/20">
                    📋
                  </div>
                  <h2 className="text-2xl font-serif">Service Check-In</h2>
                  <p className="text-sm text-[var(--muted)] mt-2">
                    Mark your attendance for today&apos;s service
                  </p>
                </div>

                <div>
                  <label htmlFor="service" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">
                    Service *
                  </label>
                  <select
                    id="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                  >
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="memberName" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">
                    Full Name *
                  </label>
                  <input
                    id="memberName"
                    type="text"
                    required
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="memberCode" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold mb-3">
                    Member Code <span className="normal-case tracking-normal text-[var(--muted)]">(optional)</span>
                  </label>
                  <input
                    id="memberCode"
                    type="text"
                    value={memberCode}
                    onChange={(e) => setMemberCode(e.target.value)}
                    placeholder="e.g. IAG-001"
                    className="w-full p-4 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] text-sm focus:border-[var(--purple)] focus:outline-none transition-colors"
                  />
                  <p className="text-[11px] text-[var(--muted)] mt-2">
                    If you have a member code, enter it for faster check-in.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-[var(--purple)] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--accent-light)] transition-all duration-300 shadow-lg shadow-[var(--purple)]/20"
                >
                  Check In
                </button>
              </form>
            )}
          </div>
        </section>
      )}

      {/* Register View */}
      {view === "register" && (
        <section className="py-24 px-6 bg-[var(--background)]">
          <div className="max-w-5xl mx-auto">
            {/* Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              <div className="p-8 border border-[var(--border)] bg-[var(--card-bg)] text-center">
                <p className="text-4xl font-serif text-[var(--purple)]">{attendanceRecords.length}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] mt-2 font-semibold">Checked In Today</p>
              </div>
              <div className="p-8 border border-[var(--border)] bg-[var(--card-bg)] text-center">
                <p className="text-lg font-serif text-[var(--purple)]">Sunday Morning</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] mt-2 font-semibold">Current Service</p>
              </div>
              <div className="p-8 border border-[var(--border)] bg-[var(--card-bg)] text-center">
                <p className="text-lg font-serif text-[var(--purple)]">{new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] mt-2 font-semibold">Date</p>
              </div>
            </div>

            {/* Attendance Table */}
            <div className="border border-[var(--border)] bg-[var(--card-bg)]">
              <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
                <h3 className="font-serif text-lg">Attendance Register</h3>
                <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">
                  {attendanceRecords.length} members present
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left p-5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">#</th>
                      <th className="text-left p-5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">Name</th>
                      <th className="text-left p-5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">Time</th>
                      <th className="text-left p-5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceRecords.map((record, index) => (
                      <tr key={record.id} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--highlight)] transition-colors">
                        <td className="p-5 text-sm text-[var(--muted)]">{index + 1}</td>
                        <td className="p-5 text-sm font-medium">{record.name}</td>
                        <td className="p-5 text-sm text-[var(--muted)]">{record.checkedInAt}</td>
                        <td className="p-5 text-sm text-[var(--muted)]">{record.service}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note for leaders */}
            <div className="mt-10 p-6 border border-[var(--border)] bg-[var(--highlight)]">
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--gold)] font-semibold">For Leaders</span>
                <br className="mb-1" />
                This register shows real-time attendance for the current service. 
                Members check in using the &quot;Check In&quot; tab when they arrive. Historical attendance 
                data can be exported for record-keeping.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
