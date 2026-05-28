"use client";

import { useEffect, useState } from "react";

function getNextSunday10AM(): Date {
  const now = new Date();
  const next = new Date(now);
  const dayOfWeek = now.getDay();
  
  // Calculate days until next Sunday
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  next.setDate(now.getDate() + daysUntilSunday);
  next.setHours(10, 0, 0, 0);
  
  // If it's Sunday but past 10 AM, go to next Sunday
  if (next <= now) {
    next.setDate(next.getDate() + 7);
  }
  
  return next;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const target = getNextSunday10AM();
      const diff = target.getTime() - Date.now();
      
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

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
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      {blocks.map((block) => (
        <div key={block.label} className="text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 border border-[var(--border)] bg-[var(--card-bg)] flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-serif text-[var(--purple)]">
              {String(block.value).padStart(2, "0")}
            </span>
          </div>
          <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] mt-2 font-semibold">
            {block.label}
          </p>
        </div>
      ))}
    </div>
  );
}
