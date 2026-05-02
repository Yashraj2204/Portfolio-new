import React from "react";
import SectionHeader from "./SectionHeader";
import { Briefcase } from "lucide-react";

export default function Experience({ data }) {
  const exp = data.experience;

  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-10 border-t border-neutral-200">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          num="03"
          label="Experience"
          description="A timeline of roles, teams, and what I shipped."
        />

        <div className="mt-14 space-y-0">
          {exp.map((e, i) => (
            <article
              key={e.id}
              className="group grid grid-cols-12 gap-6 py-8 md:py-10 border-b border-neutral-200 hover:bg-neutral-100/60 transition-colors -mx-3 px-3 rounded-sm"
            >
              {/* Index + years */}
              <div className="col-span-12 md:col-span-2 flex md:flex-col items-start gap-3">
                <span className="font-mono text-[11px] text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="font-mono text-[11px] text-neutral-600 uppercase tracking-wider">
                  {e.start} — {e.end}
                </div>
                {e.current && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
                    Current
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="col-span-12 md:col-span-7">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                    {e.type}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                  {e.role}
                </h3>
                <div className="mt-1 text-[14px] text-neutral-600">
                  {e.company} · {e.location}
                </div>
                <p className="mt-4 text-[15px] text-neutral-700 leading-relaxed max-w-2xl">
                  {e.description}
                </p>
                <ul className="mt-4 space-y-1.5 max-w-2xl">
                  {e.bullets.map((b, k) => (
                    <li key={k} className="flex gap-3 text-[14px] text-neutral-700">
                      <span className="font-mono text-neutral-400 mt-0.5">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div className="col-span-12 md:col-span-3 md:pl-6 md:border-l border-neutral-200">
                <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3">
                  Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2 py-0.5 bg-neutral-100 text-neutral-700 border border-neutral-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
