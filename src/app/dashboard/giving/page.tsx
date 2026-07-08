"use client";

import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import { givingTrend, givingByCategory, recentGiving } from "@/lib/dashboardData";

const COLORS = ["#1b4d8a", "#4a8ec9", "#8fa3b8", "#c4d4e4"];

export default function GivingPage() {
  const totalYear = givingByCategory.reduce((sum, c) => sum + c.value, 0);

  return (
    <div className="p-6 md:p-10">
      <DashboardHeader title="Giving" subtitle="Financial contributions and stewardship" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard label="This Month" value="R125k" change="+12.1%" positive icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7" />
        <StatCard label="This Year" value={`R${(totalYear / 1000).toFixed(0)}k`} change="+18.4%" positive icon="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01" />
        <StatCard label="Avg. per Member" value="R366" change="+5.2%" positive icon="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
        <StatCard label="Recurring Givers" value="187" change="+9" positive icon="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        {/* Monthly Bar */}
        <div className="lg:col-span-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
          <div className="mb-6">
            <h3 className="font-serif text-lg text-[var(--foreground)]">Monthly Giving</h3>
            <p className="text-xs text-[var(--muted)]">Breakdown by category (ZAR)</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={givingTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4eaf2" vertical={false} />
              <XAxis dataKey="month" stroke="#8fa3b8" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#8fa3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e4eaf2", fontSize: 13 }} formatter={(v) => `R${Number(v).toLocaleString()}`} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="tithes" name="Tithes" stackId="a" fill="#1b4d8a" />
              <Bar dataKey="offerings" name="Offerings" stackId="a" fill="#4a8ec9" />
              <Bar dataKey="missions" name="Missions" stackId="a" fill="#8fa3b8" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Pie */}
        <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
          <div className="mb-4">
            <h3 className="font-serif text-lg text-[var(--foreground)]">By Category</h3>
            <p className="text-xs text-[var(--muted)]">Year to date</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={givingByCategory} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2}>
                {givingByCategory.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e4eaf2", fontSize: 13 }} formatter={(v) => `R${Number(v).toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {givingByCategory.map((c, i) => (
              <div key={c.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm" style={{ background: COLORS[i] }} />
                  <span className="text-[var(--muted)]">{c.name}</span>
                </div>
                <span className="text-[var(--foreground)] font-medium">R{(c.value / 1000).toFixed(0)}k</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl overflow-hidden">
        <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
          <h3 className="font-serif text-lg text-[var(--foreground)]">Recent Contributions</h3>
          <button className="text-xs text-[var(--accent)] font-medium hover:underline">Export</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Member</th>
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold hidden sm:table-cell">Category</th>
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold hidden md:table-cell">Method</th>
                <th className="text-left p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold hidden md:table-cell">Date</th>
                <th className="text-right p-4 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentGiving.map((g) => (
                <tr key={g.id} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--highlight)] transition-colors">
                  <td className="p-4 text-sm font-medium text-[var(--foreground)]">{g.member}</td>
                  <td className="p-4 text-sm text-[var(--muted)] hidden sm:table-cell">{g.category}</td>
                  <td className="p-4 text-sm text-[var(--muted)] hidden md:table-cell">{g.method}</td>
                  <td className="p-4 text-sm text-[var(--muted)] hidden md:table-cell">{new Date(g.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</td>
                  <td className="p-4 text-sm font-medium text-[var(--accent)] text-right">R{g.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
