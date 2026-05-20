import React from "react";
import { ArrowUpRight, ArrowDown, MapPin, Github, Linkedin } from "lucide-react";
import useSandParticleText from "../hooks/useSandParticleText";

export default function Hero({ data, isDarkMode }) {
  const p = data.profile;
  const sandParticleRef = useSandParticleText(isDarkMode);

  return (
    <section id="top" className={`relative pt-28 md:pt-36 pb-10 md:pb-14 px-6 md:px-10 transition-colors duration-500 ${isDarkMode ? "bg-neutral-950" : ""}`}>
      <div className="max-w-[1400px] mx-auto">

        {/* Eyebrow grid */}
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16">
          <div className="col-span-12 md:col-span-4 flex items-center gap-3">
            <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-[0.2em]">
              — Portfolio / 2026
            </span>
          </div>
          <div className="hidden md:flex col-span-8 items-center gap-2 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
            <MapPin className="w-3 h-3" /> {p.location}
          </div>
        </div>

        {/* Main headline + photo */}
        <div className="grid grid-cols-12 gap-6 items-start mt-6">

          {/*
            This div is the canvas wrapper.
            The hook sets position:relative on it and injects
            the canvas as a child — so everything scrolls together.
          */}
          <div className="col-span-12 md:col-span-8">
            <h1
              ref={sandParticleRef}
              className="text-[13vw] md:text-[9vw] leading-[0.92] tracking-tight font-semibold select-none"
              style={{ perspective: "1200px" }}
            >
              {/* "Yashraj" — dark grains */}
              <span className="block">
                <span data-particle="true" className={`transition-colors duration-500 ${isDarkMode ? "!text-white" : "text-neutral-950"}`}>
                  {p.firstName}
                </span>
              </span>

              {/* "Singh Chauhan." — grey grains for Singh, dark for Chauhan */}
              <span className="block">
                <span
                  data-particle="true"
                  data-particle-grey="true"
                  className={`font-serif-display italic font-normal transition-colors duration-500 ${isDarkMode ? "text-neutral-600" : "text-neutral-500"}`}
                >
                  Singh
                </span>
                {" "}
                <span data-particle="true" className={`transition-colors duration-500 ${isDarkMode ? "!text-white" : "text-neutral-950"}`}>
                  {p.lastName}.
                </span>
              </span>
            </h1>
          </div>

          {/* Photo */}
          <div className="col-span-12 md:col-span-4 flex justify-center md:justify-end">
            <img
              src="/Yashraj.jpeg"
              alt="Yashraj Singh Chauhan"
              className="w-48 md:w-80 h-auto rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>

        {/* Meta row */}
        <div className={`mt-12 md:mt-20 grid grid-cols-12 gap-6 items-end border-t transition-colors duration-500 ${isDarkMode ? "border-neutral-700" : "border-neutral-300"} pt-8`}>
          <div className="col-span-12 md:col-span-5">
            <p className={`font-mono text-[11px] uppercase tracking-widest mb-3 transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
              — Currently
            </p>
            <p className={`text-xl md:text-2xl font-semibold tracking-tight leading-snug transition-colors duration-500 ${isDarkMode ? "text-neutral-50" : "text-neutral-950"}`}>
              Associate Software Developer
            </p>
            <p className={`mt-1 text-[15px] transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
              <span className={`font-medium transition-colors duration-500 ${isDarkMode ? "text-neutral-200" : "text-neutral-800"}`}>Zenyus.ai</span>
              <span className={`mx-2 transition-colors duration-500 ${isDarkMode ? "text-neutral-600" : "text-neutral-400"}`}>·</span>
              <span className={`font-serif-display italic transition-colors duration-500 ${isDarkMode ? "text-neutral-300" : "text-neutral-700"}`}>
                Salesforce Consulting Partner
              </span>
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className={`font-mono text-[11px] uppercase tracking-widest mb-3 transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
              — What I do
            </p>
            <p className={`text-base md:text-[17px] leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-neutral-300" : "text-neutral-700"}`}>
              {p.tagline}
            </p>
          </div>

          <div className="col-span-12 md:col-span-3 flex md:justify-end">
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <a
                href="#work"
                className={`group inline-flex items-center justify-between gap-4 px-5 py-3 transition-colors ${isDarkMode ? "bg-white !text-neutral-950 hover:bg-neutral-100" : "bg-neutral-950 text-[#fafaf9] hover:bg-neutral-800"}`}
              >
                <span className="text-[13px] font-medium">See selected work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href={`mailto:${p.email}`}
                className={`group inline-flex items-center justify-between gap-4 px-5 py-3 border transition-colors ${isDarkMode ? "border-neutral-400 hover:border-neutral-300 text-neutral-50 hover:text-white" : "border-neutral-300 hover:border-neutral-950 text-neutral-950"}`}
              >
                <span className="text-[13px] font-medium">Say hello</span>
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Social strip */}
        <div className={`mt-10 flex flex-wrap items-center gap-5 text-[12px] font-mono uppercase tracking-widest transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className={`link-sweep flex items-center gap-2 transition-colors duration-500 ${isDarkMode ? "hover:text-neutral-50" : "hover:text-neutral-950"}`}
          >
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href={p.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`link-sweep flex items-center gap-2 transition-colors duration-500 ${isDarkMode ? "hover:text-neutral-50" : "hover:text-neutral-950"}`}
          >
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <a href={`mailto:${p.email}`} className={`link-sweep transition-colors duration-500 ${isDarkMode ? "hover:text-neutral-50" : "hover:text-neutral-950"}`}>
            {p.email}
          </a>
        </div>

      </div>
    </section>
  );
}