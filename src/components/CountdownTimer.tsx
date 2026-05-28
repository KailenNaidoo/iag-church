"use client";

import { useEffect, useState } from "react";

function getNextSunday10AM(): Date {
  const now = new Date();
  const next = new Date(now);
  const dayOfWeek = now.getDay();
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  next.setDate(now.getDate() + daysUntilSunday);
  next.setHours(10, 0, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 7);
  return next;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = getNextSunday10AM().getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5">
      {blocks.map((block, i) => (
        <div key={block.label} className="flex items-center gap-3 md:gap-5">
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 glass-card flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-serif text-[var(--foreground)] font-light">
                {String(block.value).padStart(2, "0")}
              </span>
            </div>
            <p className="text-[8px] uppercase tracking-[0.3em] text-[var(--muted)] mt-3 font-medium">
              {block.label}
            </p>
          </div>
          {i < blocks.length - 1 && (
            <span className="text-[var(--accent-dim)] text-lg font-light mb-5">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
