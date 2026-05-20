import React from "react";
import SectionHeader from "./SectionHeader";

export default function Skills({ data, isDarkMode }) {
  const s = data.skills;

  return (
    <section id="skills" className={`relative py-24 md:py-32 px-6 md:px-10 border-t transition-colors duration-500 ${isDarkMode ? "bg-neutral-950 border-neutral-700" : "bg-white border-neutral-200"}`}>
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          num="02"
          label="Toolkit"
          description="The stack I reach for when building products that need to ship."
          isDarkMode={isDarkMode}
        />

        <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px transition-colors duration-500 ${isDarkMode ? "bg-neutral-800 border border-neutral-800" : "bg-neutral-200 border border-neutral-200"}`}>
          {s.categories.map((cat, idx) => (
            <div
              key={cat.name}
              className={`p-6 md:p-8 transition-colors duration-500 group ${isDarkMode ? "bg-neutral-900 hover:bg-neutral-800" : "bg-white hover:bg-neutral-50"}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`font-mono text-[11px] transition-colors duration-500 ${isDarkMode ? "text-neutral-500" : "text-neutral-400"}`}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className={`text-[15px] font-semibold tracking-tight transition-colors duration-500 ${isDarkMode ? "text-neutral-100" : ""}`}>
                  {cat.name}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className={`text-[12px] font-mono px-2.5 py-1 border transition-colors duration-300 cursor-default ${isDarkMode ? "text-neutral-300 border-neutral-700 hover:border-neutral-400 hover:bg-neutral-700 hover:text-neutral-50" : "text-neutral-700 border-neutral-200 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Marquee of all skills */}
        <div className={`mt-16 overflow-hidden border-y py-6 transition-colors duration-500 ${isDarkMode ? "border-neutral-700" : "border-neutral-200"}`}>
          <div className="marquee-track flex gap-10 whitespace-nowrap">
            {[...s.categories.flatMap((c) => c.items), ...s.categories.flatMap((c) => c.items)].map(
              (item, i) => (
                <span
                  key={i}
                  className={`font-serif-display italic text-3xl md:text-5xl transition-colors duration-500 ${isDarkMode ? "text-neutral-700" : "text-neutral-300"}`}
                >
                  {item} •
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
