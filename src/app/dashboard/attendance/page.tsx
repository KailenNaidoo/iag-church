"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import { attendanceTrend } from "@/lib/dashboardData";

const recentServices = [
  { date: "2026-07-05", service: "Sunday Worship", inPerson: 268, online: 91, total: 359 },
  { date: "2026-07-02", service: "Wednesday Bible Study", inPerson: 84, online: 22, total: 106 },
  { date: "2026-06-28", service: "Sunday Worship", inPerson: 252, online: 84, total: 336 },
  { date: "2026-06-27", service: "Youth Night", inPerson: 56, online: 8, total: 64 },
  { date: "2026-06-25", service: "Wednesday Bible Study", inPerson: 79, online: 19, total: 98 },
  { date: "2026-06-21", service: "Sunday Worship", inPerson: 229, online: 70, total: 299 },
];

export default function AttendancePage() {
  return (
    <div className="p-6 md:p-10">
      <DashboardHeader title="Attendance" subtitle="Track service attendance and engagement" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <StatCard label="This Sunday" value="359" change="+6.8%" positive icon="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-6 0" />
        <StatCard label="12-Week Average" value="221" change="+4.1%" positive icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z" />
        <StatCard label="Online Share" value="25%" change="+2.3%" positive icon="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3" />
      </div>

      {/* Trend Chart */}
      <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 mb-8">
        <div className="mb-6">
          <h3 className="font-serif text-lg text-[var(--foreground)]">Attendance Over Time</h3>
          <p className="text-xs text-[var(--muted)]">Last 12 weeks — in-person and online combined</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={attendanceTrend}>
            <defs>
              <linearGradient id="attGrad1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1b4d8a" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#1b4d8a" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="attGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4a8ec9" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#4a8ec9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e4eaf2" vertical={false} />
            <XAxis dataKey="week" stroke="#8fa3b8" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#8fa3b8" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e4eaf2", fontSize: 13 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Area type="monotone" dataKey="attendance" name="In-Person" stroke="#1b4d8a" strokeWidth={2} fill="url(#attGrad1)" />
            <Area type="monotone" dataKey="online" name="Online" stroke="#4a8ec9" strokeWidth={2} fill="url(#attGrad2)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Services Table */}
      <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl overflow-hidden">
        <div className="p-6 border-b border-[var(--border)]">
          <h3 className="font-serif text-lg text-[var(--foreground)]">Recent Services</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Date</th>
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Service</th>
                <th className="text-right p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">In-Person</th>
                <th className="text-right p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold hidden sm:table-cell">Online</th>
                <th className="text-right p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {recentServices.map((s, i) => (
                <tr key={i} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--highlight)] transition-colors">
                  <td className="p-4 text-sm text-[var(--muted)]">{new Date(s.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</td>
                  <td className="p-4 text-sm font-medium text-[var(--foreground)]">{s.service}</td>
                  <td className="p-4 text-sm text-[var(--foreground)] text-right">{s.inPerson}</td>
                  <td className="p-4 text-sm text-[var(--muted)] text-right hidden sm:table-cell">{s.online}</td>
                  <td className="p-4 text-sm font-medium text-[var(--accent)] text-right">{s.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
