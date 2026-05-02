import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ data, activeSection }) {
  const [open, setOpen] = useState(false);
  const nav = data.navigation;

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#fafaf9]/75 border-b border-neutral-200/70">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-neutral-950 text-[#fafaf9] grid place-items-center font-mono text-[11px] font-semibold">
            YC
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[13px] font-medium tracking-tight">{data.profile.firstName} Chauhan</span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
              {data.profile.title}
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`group px-3 py-2 text-[13px] font-medium flex items-center gap-2 transition-colors ${
                  active ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950"
                }`}
              >
                <span className="font-mono text-[10px] text-neutral-400 group-hover:text-neutral-950 transition-colors">
                  {item.num}
                </span>
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot"></span>
            <span className="uppercase tracking-widest">Available</span>
          </div>
          <a
            href={`mailto:${data.profile.email}`}
            className="text-[13px] font-medium px-4 py-2 bg-neutral-950 text-[#fafaf9] hover:bg-neutral-800 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-[#fafaf9]">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-2.5 text-sm"
              >
                <span className="font-mono text-[10px] text-neutral-400">{item.num}</span>
                <span>{item.label}</span>
              </a>
            ))}
            <a
              href={`mailto:${data.profile.email}`}
              className="mt-3 text-center text-[13px] font-medium px-4 py-2.5 bg-neutral-950 text-[#fafaf9]"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
