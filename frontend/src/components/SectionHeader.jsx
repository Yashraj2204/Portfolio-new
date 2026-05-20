import React from "react";
import useScatterText from "../hooks/useScatterText";

export default function SectionHeader({ num, label, description, isDarkMode }) {
  const scatterRef = useScatterText();

  return (
    <div className={`flex items-end justify-between gap-6 border-b transition-colors duration-500 pb-4 ${isDarkMode ? "border-neutral-700" : "border-neutral-300"}`}>
      <div className="flex items-baseline gap-4">
        <span className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
          {num}
        </span>
        <h2
          ref={scatterRef}
          className={`text-3xl md:text-5xl tracking-tight font-medium cursor-pointer transition-colors duration-500 ${isDarkMode ? "text-neutral-50" : ""}`}
          style={{ perspective: '1000px' }}
        >
          {label}
        </h2>
      </div>
      {description && (
        <p className={`hidden md:block text-[13px] max-w-xs text-right transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
