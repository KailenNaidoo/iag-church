interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  icon: string;
}

export default function StatCard({ label, value, change, positive = true, icon }: StatCardProps) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        {change && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${positive ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
            {change}
          </span>
        )}
      </div>
      <p className="text-3xl font-serif text-[var(--foreground)]">{value}</p>
      <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)] mt-1">{label}</p>
    </div>
  );
}
