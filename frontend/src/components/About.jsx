import React from "react";
import SectionHeader from "./SectionHeader";

export default function About({ data, isDarkMode }) {
  const a = data.about;
  const p = data.profile;

  return (
    <section id="about" className={`relative pt-12 md:pt-16 pb-24 md:pb-32 px-6 md:px-10 border-t transition-colors duration-500 ${isDarkMode ? "border-neutral-700 bg-neutral-950" : "border-neutral-200"}`}>
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader num="01" label="About" isDarkMode={isDarkMode} />

        <div className="grid grid-cols-12 gap-6 md:gap-10 mt-10">
          <div className="col-span-12 md:col-span-7">
            <p className={`text-2xl md:text-[32px] leading-[1.25] tracking-tight font-medium transition-colors duration-500 ${isDarkMode ? "text-neutral-100" : "text-neutral-900"}`}>
              {a.summary}
            </p>

            <div className={`mt-10 space-y-6 text-[15px] leading-relaxed max-w-xl transition-colors duration-500 ${isDarkMode ? "text-neutral-300" : "text-neutral-700"}`}>
              {a.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <aside className={`col-span-12 md:col-span-5 md:pl-10 md:border-l transition-colors duration-500 ${isDarkMode ? "border-neutral-700" : "border-neutral-200"}`}>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {a.highlights.map((h) => (
                <div key={h.label} className={`border-t pt-3 transition-colors duration-500 ${isDarkMode ? "border-neutral-700" : "border-neutral-300"}`}>
                  <div className={`font-mono text-[10px] uppercase tracking-widest mb-1 transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                    {h.label}
                  </div>
                  <div className={`text-2xl font-medium tracking-tight transition-colors duration-500 ${isDarkMode ? "text-neutral-100" : ""}`}>{h.value}</div>
                </div>
              ))}
            </div>

            <div className={`mt-10 p-5 border transition-colors duration-500 ${isDarkMode ? "border-neutral-700 bg-neutral-900" : "border-neutral-200 bg-white"}`}>
              <div className={`font-mono text-[10px] uppercase tracking-widest mb-3 transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                — Education
              </div>
              {data.education.map((e) => (
                <div key={e.id}>
                  <div className={`text-[15px] font-medium transition-colors duration-500 ${isDarkMode ? "text-neutral-100" : ""}`}>{e.degree}</div>
                  <div className={`text-[13px] mt-0.5 transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>{e.school} · {e.location}</div>
                  <div className={`font-mono text-[11px] mt-2 transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>{e.start} — {e.end}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
