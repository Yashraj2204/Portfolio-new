import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer({ data }) {
  const p = data.profile;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neutral-200 bg-[#fafaf9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 mb-2">
              — {p.firstName} {p.lastName}
            </div>
            <p className="text-[14px] text-neutral-700 max-w-sm">
              Designing and engineering performant web interfaces out of Jaipur, India.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-3">
              Sitemap
            </div>
            <ul className="space-y-1.5 text-[13px]">
              {data.navigation.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="link-sweep text-neutral-700 hover:text-neutral-950">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-3">
              Elsewhere
            </div>
            <ul className="space-y-1.5 text-[13px]">
              <li><a href={p.github} target="_blank" rel="noreferrer" className="link-sweep">GitHub</a></li>
              <li><a href={p.linkedin} target="_blank" rel="noreferrer" className="link-sweep">LinkedIn</a></li>
              <li><a href={`mailto:${p.email}`} className="link-sweep">Email</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-1 md:flex md:justify-end">
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Top
            </a>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <div className="font-mono text-[11px] text-neutral-500">
            © {year} {p.name}. Crafted with care.
          </div>
          <div className="font-mono text-[11px] text-neutral-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
            Available for new work — {year}
          </div>
        </div>
      </div>
    </footer>
  );
}
