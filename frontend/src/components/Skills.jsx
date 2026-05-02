import React from "react";
import SectionHeader from "./SectionHeader";

export default function Skills({ data }) {
  const s = data.skills;

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-10 bg-white border-t border-neutral-200">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          num="02"
          label="Toolkit"
          description="The stack I reach for when building products that need to ship."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
          {s.categories.map((cat, idx) => (
            <div
              key={cat.name}
              className="bg-white p-6 md:p-8 hover:bg-neutral-50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] text-neutral-400">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[15px] font-semibold tracking-tight">
                  {cat.name}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-[12px] font-mono text-neutral-700 px-2.5 py-1 border border-neutral-200 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Marquee of all skills */}
        <div className="mt-16 overflow-hidden border-y border-neutral-200 py-6">
          <div className="marquee-track flex gap-10 whitespace-nowrap">
            {[...s.categories.flatMap((c) => c.items), ...s.categories.flatMap((c) => c.items)].map(
              (item, i) => (
                <span
                  key={i}
                  className="font-serif-display italic text-3xl md:text-5xl text-neutral-300"
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
