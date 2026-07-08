"use client";

import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import { visitors as initialVisitors } from "@/lib/dashboardData";

export default function VisitorsPage() {
  const [visitors, setVisitors] = useState(initialVisitors);

  const updateFollowUp = (id: string, status: "Pending" | "Contacted" | "Joined") => {
    setVisitors((prev) => prev.map((v) => (v.id === id ? { ...v, followUp: status } : v)));
  };

  const pending = visitors.filter((v) => v.followUp === "Pending").length;
  const joined = visitors.filter((v) => v.followUp === "Joined").length;

  const badge = (status: string) =>
    status === "Joined" ? "bg-green-100 text-green-700" :
    status === "Contacted" ? "bg-blue-100 text-blue-700" :
    "bg-amber-100 text-amber-700";

  return (
    <div className="p-6 md:p-10">
      <DashboardHeader title="Visitors" subtitle="First-time guests and follow-up tracking" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <StatCard label="Total Visitors" value={String(visitors.length)} icon="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <StatCard label="Pending Follow-up" value={String(pending)} icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        <StatCard label="Converted to Members" value={String(joined)} change="Great!" positive icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </div>

      <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl overflow-hidden">
        <div className="p-6 border-b border-[var(--border)]">
          <h3 className="font-serif text-lg text-[var(--foreground)]">Visitor Log</h3>
          <p className="text-xs text-[var(--muted)]">Update follow-up status as you connect with guests</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Name</th>
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold hidden sm:table-cell">Date</th>
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold hidden md:table-cell">Invited By</th>
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Status</th>
                <th className="text-right p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map((v) => (
                <tr key={v.id} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--highlight)] transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-sm font-medium">{v.name.charAt(0)}</div>
                      <span className="text-sm font-medium text-[var(--foreground)]">{v.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-[var(--muted)] hidden sm:table-cell">{new Date(v.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</td>
                  <td className="p-4 text-sm text-[var(--muted)] hidden md:table-cell">{v.invitedBy}</td>
                  <td className="p-4"><span className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${badge(v.followUp)}`}>{v.followUp}</span></td>
                  <td className="p-4 text-right">
                    <select
                      value={v.followUp}
                      onChange={(e) => updateFollowUp(v.id, e.target.value as "Pending" | "Contacted" | "Joined")}
                      className="text-xs border border-[var(--border)] rounded-lg px-2 py-1.5 bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
                      aria-label={`Update status for ${v.name}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Joined">Joined</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
