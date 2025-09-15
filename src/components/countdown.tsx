"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SlidingNumber } from "./ui/sliding-number";

// Set your target date here
const TARGET_DATE = new Date("2025-12-31T23:59:59");

function getTimeRemaining(target: Date) {
  const total = target.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export function Countdown() {
  const [time, setTime] = useState(getTimeRemaining(TARGET_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(TARGET_DATE));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [20, -5, 0] }}
      transition={{ duration: 1.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.5 }}
      className="flex flex-col items-center justify-center px-4 py-6 sm:py-8 md:py-10 w-full"
    >
      <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 text-3xl sm:text-5xl md:text-6xl lg:text-[8rem] font-bold text-foreground font-mono leading-none text-center">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <SlidingNumber value={unit.value} padStart={true} />
            <span className="mt-2 text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase text-muted-foreground">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
