import React, { useRef, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { Briefcase, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export default function Experience({ data, isDarkMode }) {
  const exp = data.experience;
  const cardRefs = useRef([]);

  useEffect(() => {
    // Hover animation for experience cards
    cardRefs.current.forEach((card) => {
      if (!card) return;

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -8,
          boxShadow: isDarkMode ? "0 20px 40px rgba(255, 255, 255, 0.08)" : "0 20px 40px rgba(0, 0, 0, 0.08)",
          duration: 0.3,
          ease: "power2.out",
        });

        // Animate stack badges on hover
        const badges = card.querySelectorAll('[data-badge]');
        gsap.to(badges, {
          scale: 1.05,
          duration: 0.3,
          stagger: 0.05,
          ease: "back.out(1.2)",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out",
        });

        const badges = card.querySelectorAll('[data-badge]');
        gsap.to(badges, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", null);
        card.removeEventListener("mouseleave", null);
      });
    };
  }, [isDarkMode]);

  return (
    <section id="experience" className={`relative py-24 md:py-32 px-6 md:px-10 border-t transition-colors duration-500 ${isDarkMode ? "border-neutral-700 bg-neutral-950" : "border-neutral-200"}`}>
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          num="03"
          label="Experience"
          description="A timeline of roles, teams, and what I shipped."
          isDarkMode={isDarkMode}
        />

        <div className="mt-14 space-y-0">
          {exp.map((e, i) => (
            <article
              ref={(el) => (cardRefs.current[i] = el)}
              key={e.id}
              className={`group grid grid-cols-12 gap-6 py-8 md:py-10 border-b transition-all -mx-3 px-3 rounded-lg cursor-pointer ${isDarkMode ? "border-neutral-700 hover:bg-neutral-900/50" : "border-neutral-200 hover:bg-neutral-50"}`}
            >
              {/* Index + years */}
              <div className="col-span-12 md:col-span-2 flex md:flex-col items-start gap-3">
                <span className={`font-mono text-[11px] transition-colors duration-300 ${isDarkMode ? "text-neutral-500 group-hover:text-neutral-400" : "text-neutral-400 group-hover:text-neutral-600"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={`font-mono text-[11px] uppercase tracking-wider transition-colors duration-300 ${isDarkMode ? "text-neutral-400 group-hover:text-neutral-100" : "text-neutral-600 group-hover:text-neutral-900"}`}>
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
                  <Briefcase className={`w-3.5 h-3.5 transition-colors duration-300 ${isDarkMode ? "text-neutral-400 group-hover:text-neutral-100" : "text-neutral-500 group-hover:text-neutral-900"}`} />
                  <span className={`text-[11px] font-mono uppercase tracking-widest transition-colors duration-300 ${isDarkMode ? "text-neutral-400 group-hover:text-neutral-300" : "text-neutral-500 group-hover:text-neutral-700"}`}>
                    {e.type}
                  </span>
                </div>
                <h3 className={`text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 ${isDarkMode ? "text-neutral-100 group-hover:text-neutral-50" : "group-hover:text-neutral-900"}`}>
                  {e.role}
                </h3>
                <div className={`mt-1 text-[14px] flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? "text-neutral-300" : "text-neutral-950"}`}>
                  <span className={`font-semibold transition-colors duration-300 ${isDarkMode ? "text-neutral-200" : "text-neutral-950"}`}>{e.company}</span>
                  <span className={`transition-colors duration-300 ${isDarkMode ? "text-neutral-600" : "text-neutral-400"}`}>·</span>
                  <span>{e.location}</span>
                  <ArrowUpRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-all ${isDarkMode ? "text-neutral-600" : "text-neutral-400"}`} />
                </div>
                <p className={`mt-4 text-[15px] leading-relaxed max-w-2xl transition-colors duration-300 ${isDarkMode ? "text-neutral-300 group-hover:text-neutral-200" : "text-neutral-950 group-hover:text-neutral-900"}`}>
                  {e.description}
                </p>
                <ul className="mt-4 space-y-1.5 max-w-2xl">
                  {e.bullets.map((b, k) => (
                    <li key={k} className={`flex gap-3 text-[14px] transition-colors duration-300 ${isDarkMode ? "text-neutral-300 group-hover:text-neutral-200" : "text-neutral-950 group-hover:text-neutral-900"}`}>
                      <span className={`font-mono mt-0.5 transition-colors duration-300 ${isDarkMode ? "text-neutral-600" : "text-neutral-400"}`}>—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div className={`col-span-12 md:col-span-3 md:pl-6 md:border-l transition-colors duration-300 ${isDarkMode ? "border-neutral-700" : "border-neutral-200"}`}>
                <div className={`font-mono text-[10px] uppercase tracking-widest mb-3 transition-colors duration-300 ${isDarkMode ? "text-neutral-400 group-hover:text-neutral-300" : "text-neutral-500 group-hover:text-neutral-700"}`}>
                  Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      data-badge
                      className={`font-mono text-[11px] px-2 py-0.5 border rounded transition-all ${isDarkMode ? "bg-neutral-800 text-neutral-200 border-neutral-700 group-hover:border-neutral-600 group-hover:bg-neutral-700" : "bg-neutral-100 text-neutral-950 border-neutral-200 group-hover:border-neutral-300 group-hover:bg-neutral-50"}`}
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
