import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { ArrowUpRight, Github } from "lucide-react";
import SmoothProjectReveal from "./SmoothProjectReveal";

export default function Projects({ data, isDarkMode }) {
  const projects = data.projects;
  const [filter, setFilter] = useState("all");
  const filtered = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="work" className={`relative py-24 md:py-32 px-6 md:px-10 border-t transition-colors duration-500 ${isDarkMode ? "bg-neutral-950 border-neutral-700" : "bg-white border-neutral-200"}`}>
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          num="04"
          label="Selected Work"
          description="A handful of recent projects — shipped, experimental and in-between."
          isDarkMode={isDarkMode}
        />

        {/* Filter */}
        <div className="mt-8 flex items-center gap-2">
          {[
            { key: "all", label: "All" },
            { key: "featured", label: "Featured" }
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`font-mono text-[11px] uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                filter === f.key
                  ? isDarkMode ? "bg-neutral-50 text-neutral-950 border-neutral-50" : "bg-neutral-950 text-white border-neutral-950"
                  : isDarkMode ? "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-400" : "bg-transparent text-neutral-600 border-neutral-300 hover:border-neutral-950"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className={`ml-auto font-mono text-[11px] transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        <div className="mt-10">
          <SmoothProjectReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((p, idx) => (
                <article
                  key={p.id}
                  className={`group relative border transition-colors duration-300 ${isDarkMode ? "border-neutral-700 bg-neutral-900 hover:border-neutral-500" : "border-neutral-200 bg-white hover:border-neutral-950"}`}
                >
                  {/* Top bar */}
                  <div className={`flex items-center justify-between px-5 py-3 border-b font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${isDarkMode ? "border-neutral-700 text-neutral-400" : "border-neutral-200 text-neutral-500"}`}>
                    <span>
                      {String(idx + 1).padStart(2, "0")} · {p.year}
                    </span>
                    <span>{p.role}</span>
                  </div>

                  {/* Visual placeholder block */}
                  <div className={`relative aspect-[16/10] overflow-hidden border-b flex items-center justify-center transition-colors duration-300 ${isDarkMode ? "bg-neutral-800 border-neutral-700" : "bg-white border-neutral-200"}`}>
                    {p.image ? (
                      <img src={p.image} alt={p.subtitle} className="w-full h-full object-contain" />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="text-center px-6">
                          <div className={`font-serif-display italic text-4xl md:text-6xl leading-none transition-colors duration-300 ${isDarkMode ? "text-neutral-700" : "text-neutral-300"}`}>
                            {p.name.split(" ")[0]}
                          </div>
                          <div className={`mt-2 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 ${isDarkMode ? "text-neutral-600" : "text-neutral-400"}`}>
                            {p.subtitle}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? "bg-neutral-50/5" : "bg-neutral-950/5"}`} />
                    {/* Grid lines - only show when no image */}
                    {!p.image && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className={`absolute top-1/3 inset-x-0 h-px transition-colors duration-300 ${isDarkMode ? "bg-neutral-700" : "bg-neutral-200"}`} />
                        <div className={`absolute top-2/3 inset-x-0 h-px transition-colors duration-300 ${isDarkMode ? "bg-neutral-700" : "bg-neutral-200"}`} />
                        <div className={`absolute left-1/3 inset-y-0 w-px transition-colors duration-300 ${isDarkMode ? "bg-neutral-700" : "bg-neutral-200"}`} />
                        <div className={`absolute left-2/3 inset-y-0 w-px transition-colors duration-300 ${isDarkMode ? "bg-neutral-700" : "bg-neutral-200"}`} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 ${isDarkMode ? "text-neutral-100" : ""}`}>
                          {p.name}
                        </h3>
                        <p className={`text-[13px] mt-0.5 transition-colors duration-300 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>{p.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className={`w-9 h-9 grid place-items-center border transition-colors duration-300 ${isDarkMode ? "border-neutral-700 hover:border-neutral-400 hover:bg-neutral-700 hover:text-neutral-50" : "border-neutral-200 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"}`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Live site"
                            className={`w-9 h-9 grid place-items-center border transition-colors duration-300 ${isDarkMode ? "border-neutral-700 hover:border-neutral-400 hover:bg-neutral-700 hover:text-neutral-50" : "border-neutral-200 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"}`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className={`mt-4 text-[14px] leading-relaxed transition-colors duration-300 ${isDarkMode ? "text-neutral-300" : "text-neutral-700"}`}>
                      {p.description}
                    </p>

                    <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1">
                      {p.features.map((f) => (
                        <li key={f} className={`flex gap-2 text-[13px] transition-colors duration-300 ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                          <span className={`font-mono transition-colors duration-300 ${isDarkMode ? "text-neutral-600" : "text-neutral-400"}`}>·</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className={`mt-5 pt-4 border-t flex flex-wrap gap-1.5 transition-colors duration-300 ${isDarkMode ? "border-neutral-700" : "border-neutral-200"}`}>
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className={`font-mono text-[11px] px-2 py-0.5 transition-colors duration-300 ${isDarkMode ? "bg-neutral-800 text-neutral-300" : "bg-neutral-100 text-neutral-700"}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </SmoothProjectReveal>
        </div>
      </div>
    </section>
  );
}
