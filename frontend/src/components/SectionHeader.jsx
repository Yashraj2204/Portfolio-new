import React from "react";

export default function SectionHeader({ num, label, description }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-neutral-300 pb-4">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-[0.2em]">
          {num}
        </span>
        <h2 className="text-3xl md:text-5xl tracking-tight font-medium">
          {label}
        </h2>
      </div>
      {description && (
        <p className="hidden md:block text-[13px] text-neutral-500 max-w-xs text-right">
          {description}
        </p>
      )}
    </div>
  );
}
