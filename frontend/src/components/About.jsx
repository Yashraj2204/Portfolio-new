import React from "react";
import SectionHeader from "./SectionHeader";

export default function About({ data }) {
  const a = data.about;
  const p = data.profile;

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 border-t border-neutral-200">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader num="01" label="About" />

        <div className="grid grid-cols-12 gap-6 md:gap-10 mt-10">
          <div className="col-span-12 md:col-span-7">
            <p className="text-2xl md:text-[32px] leading-[1.25] tracking-tight text-neutral-900 font-medium">
              {a.summary}
            </p>

            <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-neutral-700 max-w-xl">
              {a.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <aside className="col-span-12 md:col-span-5 md:pl-10 md:border-l border-neutral-200">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {a.highlights.map((h) => (
                <div key={h.label} className="border-t border-neutral-300 pt-3">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-1">
                    {h.label}
                  </div>
                  <div className="text-2xl font-medium tracking-tight">{h.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 border border-neutral-200 bg-white">
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3">
                — Education
              </div>
              {data.education.map((e) => (
                <div key={e.id}>
                  <div className="text-[15px] font-medium">{e.degree}</div>
                  <div className="text-[13px] text-neutral-600 mt-0.5">{e.school} · {e.location}</div>
                  <div className="font-mono text-[11px] text-neutral-500 mt-2">{e.start} — {e.end}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
