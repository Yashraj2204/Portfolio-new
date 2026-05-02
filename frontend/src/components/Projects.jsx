import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects({ data }) {
  const projects = data.projects;
  const [filter, setFilter] = useState("all");
  const filtered = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="work" className="relative py-24 md:py-32 px-6 md:px-10 bg-white border-t border-neutral-200">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          num="04"
          label="Selected Work"
          description="A handful of recent projects — shipped, experimental and in-between."
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
                  ? "bg-neutral-950 text-white border-neutral-950"
                  : "bg-transparent text-neutral-600 border-neutral-300 hover:border-neutral-950"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto font-mono text-[11px] text-neutral-500">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p, idx) => (
            <article
              key={p.id}
              className="group relative border border-neutral-200 bg-white hover:border-neutral-950 transition-colors"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-200 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                <span>
                  {String(idx + 1).padStart(2, "0")} · {p.year}
                </span>
                <span>{p.role}</span>
              </div>

              {/* Visual placeholder block */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200 overflow-hidden border-b border-neutral-200">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center px-6">
                    <div className="font-serif-display italic text-4xl md:text-6xl text-neutral-300 leading-none">
                      {p.name.split(" ")[0]}
                    </div>
                    <div className="mt-2 font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                      {p.subtitle}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-950/5" />
                {/* Grid lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/3 inset-x-0 h-px bg-neutral-200" />
                  <div className="absolute top-2/3 inset-x-0 h-px bg-neutral-200" />
                  <div className="absolute left-1/3 inset-y-0 w-px bg-neutral-200" />
                  <div className="absolute left-2/3 inset-y-0 w-px bg-neutral-200" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                      {p.name}
                    </h3>
                    <p className="text-[13px] text-neutral-500 mt-0.5">{p.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="w-9 h-9 grid place-items-center border border-neutral-200 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors"
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
                        className="w-9 h-9 grid place-items-center border border-neutral-200 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-[14px] text-neutral-700 leading-relaxed">
                  {p.description}
                </p>

                <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-[13px] text-neutral-600">
                      <span className="font-mono text-neutral-400">·</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-neutral-200 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2 py-0.5 bg-neutral-100 text-neutral-700"
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
