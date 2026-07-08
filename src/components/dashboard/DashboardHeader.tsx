export default function DashboardHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pl-12 lg:pl-0">
      <div>
        <h1 className="text-2xl md:text-3xl font-serif text-[var(--foreground)]">{title}</h1>
        <p className="text-sm text-[var(--muted)] mt-1">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-[var(--foreground)]">Admin</p>
          <p className="text-xs text-[var(--muted)]">admin@iag-church.org</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-serif">
          A
        </div>
      </div>
    </div>
  );
}
