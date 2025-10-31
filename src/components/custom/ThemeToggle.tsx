"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full bg-white/80 dark:bg-[#1E293B]/90 backdrop-blur-md p-2 shadow-md hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2"
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
          }`}
        >
          <circle cx="8" cy="8" r="3" stroke="#FACC15" strokeWidth="1.5" />
          <path d="M8 1V2.5M8 13.5V15M15 8H13.5M2.5 8H1M12.5 3.5L11.5 4.5M4.5 11.5L3.5 12.5M12.5 12.5L11.5 11.5M4.5 4.5L3.5 3.5" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {/* Moon Icon */}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        >
          <path d="M14 8.5C13.5 11.5 10.5 14 7 14C3.5 14 1 11.5 1 8C1 4.5 3.5 2 7 2C7.5 2 8 2.1 8.5 2.2C7 3.5 6 5.5 6 7.5C6 10.5 8.5 13 11.5 13C12.5 13 13.5 12.7 14 12.2V8.5Z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  );
}
 