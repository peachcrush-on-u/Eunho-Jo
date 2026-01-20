
import React, { useState, useEffect } from 'react';

interface ClockProps {
  label: string;
  timeZone: string;
}

const SingleClock: React.FC<ClockProps> = ({ label, timeZone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const dateString = time.toLocaleDateString('en-US', {
    timeZone,
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 min-w-[160px]">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{label}</span>
      <span className="text-2xl font-bold text-slate-800 font-mono">{timeString}</span>
      <span className="text-[10px] text-slate-400 mt-1">{dateString}</span>
    </div>
  );
};

export const WorldClock: React.FC = () => {
  const locations = [
    { label: "Seoul", zone: "Asia/Seoul" },
    { label: "Lisbon", zone: "Europe/Lisbon" },
    { label: "Copenhagen", zone: "Europe/Copenhagen" },
    { label: "New York", zone: "America/New_York" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto mt-8">
      {locations.map((loc) => (
        <SingleClock key={loc.label} label={loc.label} timeZone={loc.zone} />
      ))}
    </div>
  );
};
