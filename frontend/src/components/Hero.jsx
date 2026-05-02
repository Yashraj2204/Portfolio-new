import React from "react";
import { ArrowUpRight, ArrowDown, MapPin, Github, Linkedin } from "lucide-react";

export default function Hero({ data }) {
  const p = data.profile;

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Eyebrow grid */}
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16">
          <div className="col-span-12 md:col-span-4 flex items-center gap-3">
            <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-[0.2em]">
              — Portfolio / 2026
            </span>
          </div>
          <div className="hidden md:flex col-span-4 items-center gap-2 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
            <MapPin className="w-3 h-3" /> {p.location}
          </div>
          <div className="hidden md:flex col-span-4 justify-end items-center gap-2 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
            {p.availability}
          </div>
        </div>

        {/* Main headline */}
        <div className="grid grid-cols-12 gap-6">
          <h1 className="col-span-12 text-[13vw] md:text-[9vw] leading-[0.92] tracking-tight font-semibold">
            <span className="block">{p.firstName}</span>
            <span className="block">
              <span className="font-serif-display italic font-normal text-neutral-500">Singh</span>{" "}
              {p.lastName}.
            </span>
          </h1>
        </div>

        {/* Meta row */}
        <div className="mt-12 md:mt-20 grid grid-cols-12 gap-6 items-end border-t border-neutral-300 pt-8">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-3">
              — Currently
            </p>
            <p className="text-lg md:text-xl text-neutral-800 leading-snug">
              {p.currentRole}
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-3">
              — What I do
            </p>
            <p className="text-base md:text-[17px] text-neutral-700 leading-relaxed">
              {p.tagline}
            </p>
          </div>

          <div className="col-span-12 md:col-span-3 flex md:justify-end">
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <a
                href="#work"
                className="group inline-flex items-center justify-between gap-4 px-5 py-3 bg-neutral-950 text-[#fafaf9] hover:bg-neutral-800 transition-colors"
              >
                <span className="text-[13px] font-medium">See selected work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href={`mailto:${p.email}`}
                className="group inline-flex items-center justify-between gap-4 px-5 py-3 border border-neutral-300 hover:border-neutral-950 transition-colors"
              >
                <span className="text-[13px] font-medium">Say hello</span>
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Social strip */}
        <div className="mt-10 flex flex-wrap items-center gap-5 text-[12px] font-mono uppercase tracking-widest text-neutral-500">
          <a href={p.github} target="_blank" rel="noreferrer" className="link-sweep flex items-center gap-2 hover:text-neutral-950">
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
          <a href={p.linkedin} target="_blank" rel="noreferrer" className="link-sweep flex items-center gap-2 hover:text-neutral-950">
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <a href={`mailto:${p.email}`} className="link-sweep hover:text-neutral-950">
            {p.email}
          </a>
        </div>
      </div>
    </section>
  );
}
