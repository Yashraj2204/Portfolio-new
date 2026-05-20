import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Lamp } from "lucide-react";
import gsap from "gsap";

export default function Header({ data, activeSection, isDarkMode, onToggleDarkMode }) {
  const [open, setOpen] = useState(false);
  const nav = data.navigation;
  const logoRef = useRef(null);

  useEffect(() => {
    if (!logoRef.current) return;

    const logo = logoRef.current;

    logo.addEventListener("mouseenter", () => {
      const logoText = logo.querySelector(".logo-text");
      if (logoText) {
        gsap.to(logoText, {
          letterSpacing: "0.05em",
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });

    logo.addEventListener("mouseleave", () => {
      const logoText = logo.querySelector(".logo-text");
      if (logoText) {
        gsap.to(logoText, {
          letterSpacing: "0em",
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-colors duration-500 ${
      isDarkMode 
        ? "bg-neutral-950/75 border-b border-neutral-800/70" 
        : "bg-[#fafaf9]/75 border-b border-neutral-200/70"
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a ref={logoRef} href="#top" className="flex items-center gap-3 group cursor-pointer">
          {isDarkMode ? (
            <>
              <img
                src="/Yashraj.png"
                alt="Yashraj Singh Chauhan"
                className="h-11 md:h-12 w-auto max-w-[320px] object-contain transition-all duration-300 group-hover:opacity-75 filter brightness-0 invert"
                loading="eager"
                decoding="async"
              />
              <div className="hidden sm:flex flex-col leading-tight logo-text">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-[0.18em] transition-colors duration-300 group-hover:text-emerald-400">
                  Salesforce · Frontend
                </span>
              </div>
            </>
          ) : (
            <>
              <img
                src="/Yashraj.png"
                alt="Yashraj Singh Chauhan"
                className="h-11 md:h-12 w-auto max-w-[320px] object-contain transition-opacity duration-300 group-hover:opacity-90"
                loading="eager"
                decoding="async"
              />

              <div className="hidden sm:flex flex-col leading-tight logo-text">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.18em] transition-colors duration-300 group-hover:text-emerald-600">
                  Salesforce · Frontend
                </span>
              </div>
            </>
          )}
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
                  active
                    ? isDarkMode
                      ? "text-neutral-400"
                      : "text-neutral-950"
                    : isDarkMode
                      ? "text-neutral-400 hover:text-neutral-50"
                      : "text-neutral-500 hover:text-neutral-950"
                }`}
              >
                <span
                  className={`font-mono text-[10px] transition-colors ${
                    active
                      ? isDarkMode
                        ? "text-neutral-600"
                        : "text-neutral-400"
                      : isDarkMode
                        ? "text-neutral-600 group-hover:text-neutral-400"
                        : "text-neutral-400 group-hover:text-neutral-950"
                  }`}
                >
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
          <button
            onClick={onToggleDarkMode}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDarkMode
                ? "bg-neutral-800 text-yellow-400 hover:bg-neutral-700"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
            aria-label="Toggle dark mode"
            title="Toggle night/day mode"
          >
            <Lamp className="w-5 h-5" />
          </button>
          <a
            href={`mailto:${data.profile.email}`}
            className="text-[13px] font-medium px-4 py-2 bg-neutral-950 text-[#fafaf9] hover:bg-neutral-800 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleDarkMode}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDarkMode
                ? "bg-neutral-800 text-yellow-400 hover:bg-neutral-700"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
            aria-label="Toggle dark mode"
            title="Toggle night/day mode"
          >
            <Lamp className="w-5 h-5" />
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`md:hidden border-t transition-colors duration-300 ${
          isDarkMode 
            ? "border-neutral-800 bg-neutral-950" 
            : "border-neutral-200 bg-[#fafaf9]"
        }`}>
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
