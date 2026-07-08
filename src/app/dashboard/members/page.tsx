"use client";

import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { members } from "@/lib/dashboardData";

export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | "Active" | "New" | "Inactive">("All");

  const filtered = members.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase()) || m.id.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || m.status === filter;
    return matchesSearch && matchesFilter;
  });

  const statusColor = (status: string) =>
    status === "Active" ? "bg-green-100 text-green-700" :
    status === "New" ? "bg-blue-100 text-blue-700" :
    "bg-gray-200 text-gray-600";

  return (
    <div className="p-6 md:p-10">
      <DashboardHeader title="Members" subtitle={`${members.length} registered members`} />

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name, email, or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
          />
        </div>
        <div className="flex gap-2">
          {(["All", "Active", "New", "Inactive"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-3 rounded-lg text-xs font-medium transition-all ${filter === f ? "bg-[var(--accent)] text-white" : "bg-[var(--card-bg)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <button className="px-5 py-3 rounded-lg bg-[var(--accent)] text-white text-xs font-medium hover:bg-[var(--accent-light)] transition-colors whitespace-nowrap">
          + Add Member
        </button>
      </div>

      {/* Table */}
      <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Member</th>
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold hidden md:table-cell">ID</th>
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold hidden lg:table-cell">Group</th>
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold hidden lg:table-cell">Joined</th>
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((m) => (
                <tr key={m.id} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--highlight)] transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-sm font-medium shrink-0">
                        {m.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[var(--foreground)]">{m.name}</p>
                        <p className="text-xs text-[var(--muted)] truncate">{m.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-[var(--muted)] hidden md:table-cell">{m.id}</td>
                  <td className="p-4 text-sm text-[var(--muted)] hidden lg:table-cell">{m.group}</td>
                  <td className="p-4 text-sm text-[var(--muted)] hidden lg:table-cell">{new Date(m.joined).toLocaleDateString("en-GB", { year: "numeric", month: "short" })}</td>
                  <td className="p-4">
                    <span className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${statusColor(m.status)}`}>{m.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="p-12 text-center text-[var(--muted)] text-sm">No members found matching your search.</div>
        )}
      </div>
    </div>
  );
}
