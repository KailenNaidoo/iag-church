"use client";

import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import { attendanceTrend, growthTrend, givingTrend, visitors, upcomingEvents } from "@/lib/dashboardData";

export default function DashboardOverview() {
  return (
    <div className="p-6 md:p-10">
      <DashboardHeader title="Overview" subtitle="Welcome back. Here's what's happening at IAG." />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard label="Total Members" value="341" change="+8.2%" positive icon="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-6 0m6 0a4 4 0 01-6 0" />
        <StatCard label="Avg. Attendance" value="268" change="+6.3%" positive icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <StatCard label="Giving (This Month)" value="R125k" change="+12.1%" positive icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 9v1" />
        <StatCard label="New Visitors" value="14" change="+3" positive icon="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        {/* Growth Trend */}
        <div className="lg:col-span-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif text-lg text-[var(--foreground)]">Membership Growth</h3>
              <p className="text-xs text-[var(--muted)]">Total members over the past year</p>
            </div>
            <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">+62 this year</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={growthTrend}>
              <defs>
                <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1b4d8a" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#1b4d8a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4eaf2" vertical={false} />
              <XAxis dataKey="month" stroke="#8fa3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#8fa3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e4eaf2", fontSize: 13 }} />
              <Area type="monotone" dataKey="members" stroke="#1b4d8a" strokeWidth={2} fill="url(#growthGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Visitors */}
        <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
          <h3 className="font-serif text-lg text-[var(--foreground)] mb-1">Recent Visitors</h3>
          <p className="text-xs text-[var(--muted)] mb-6">Latest first-time guests</p>
          <div className="space-y-4">
            {visitors.slice(0, 5).map((v) => (
              <div key={v.id} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-sm font-medium shrink-0">
                  {v.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[var(--foreground)] truncate">{v.name}</p>
                  <p className="text-xs text-[var(--muted)]">via {v.invitedBy}</p>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
                  v.followUp === "Joined" ? "bg-green-100 text-green-700" :
                  v.followUp === "Contacted" ? "bg-blue-100 text-blue-700" :
                  "bg-amber-100 text-amber-700"
                }`}>
                  {v.followUp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        {/* Attendance */}
        <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
          <div className="mb-6">
            <h3 className="font-serif text-lg text-[var(--foreground)]">Weekly Attendance</h3>
            <p className="text-xs text-[var(--muted)]">In-person vs online, last 12 weeks</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={attendanceTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4eaf2" vertical={false} />
              <XAxis dataKey="week" stroke="#8fa3b8" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#8fa3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e4eaf2", fontSize: 13 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="attendance" name="In-Person" fill="#1b4d8a" radius={[3, 3, 0, 0]} />
              <Bar dataKey="online" name="Online" fill="#4a8ec9" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Giving */}
        <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
          <div className="mb-6">
            <h3 className="font-serif text-lg text-[var(--foreground)]">Giving Trend</h3>
            <p className="text-xs text-[var(--muted)]">Monthly contributions (ZAR)</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={givingTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4eaf2" vertical={false} />
              <XAxis dataKey="month" stroke="#8fa3b8" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#8fa3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e4eaf2", fontSize: 13 }} formatter={(v) => `R${Number(v).toLocaleString()}`} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="tithes" name="Tithes" stroke="#1b4d8a" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="offerings" name="Offerings" stroke="#4a8ec9" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="missions" name="Missions" stroke="#8fa3b8" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
        <h3 className="font-serif text-lg text-[var(--foreground)] mb-6">Upcoming Events</h3>
        <div className="space-y-3">
          {upcomingEvents.map((e) => (
            <div key={e.id} className="flex items-center gap-4 p-4 rounded-lg bg-[var(--background)] border border-[var(--border)]">
              <div className="text-center shrink-0 w-14">
                <p className="text-xs text-[var(--muted)] uppercase">{new Date(e.date).toLocaleDateString("en-GB", { month: "short" })}</p>
                <p className="text-xl font-serif text-[var(--accent)]">{new Date(e.date).getDate()}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-[var(--foreground)] text-sm">{e.title}</p>
                <p className="text-xs text-[var(--muted)]">{e.time}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-medium text-[var(--foreground)]">{e.attendees}/{e.capacity}</p>
                <div className="w-24 h-1.5 bg-[var(--border)] rounded-full mt-1 overflow-hidden">
                  <div className="h-full bg-[var(--accent)] rounded-full" style={{ width: `${(e.attendees / e.capacity) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
