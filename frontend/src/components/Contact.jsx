import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Mail, MapPin, ArrowUpRight, Github, Linkedin, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export default function Contact({ data, isDarkMode }) {
  const p = data.profile;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(p.email);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message queued — I'll be in touch soon.");
    }, 900);
  };

  return (
    <section id="contact" className={`relative py-24 md:py-32 px-6 md:px-10 border-t transition-colors duration-500 ${isDarkMode ? "border-neutral-700 bg-neutral-950" : "border-neutral-200"}`}>
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader num="05" label="Let's talk" isDarkMode={isDarkMode} />

        <div className="mt-12 grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-6">
            <h3 className={`text-4xl md:text-6xl tracking-tight font-medium leading-[1.05] transition-colors duration-500 ${isDarkMode ? "text-neutral-50" : ""}`}>
              Have a project in mind?{" "}
              <span className={`font-serif-display italic font-normal transition-colors duration-500 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                Let's build it.
              </span>
            </h3>
            <p className={`mt-6 text-[15px] leading-relaxed max-w-lg transition-colors duration-500 ${isDarkMode ? "text-neutral-300" : "text-neutral-700"}`}>
              Drop a note — I reply within a day.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 group">
                <div className={`w-10 h-10 border grid place-items-center transition-colors duration-300 ${isDarkMode ? "border-neutral-700" : "border-neutral-200"}`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>Email</div>
                  <div className={`text-[14px] transition-colors duration-300 ${isDarkMode ? "text-neutral-100" : ""}`}>{p.email}</div>
                </div>
                <button
                  onClick={handleCopy}
                  className={`w-9 h-9 grid place-items-center border transition-colors duration-300 ${isDarkMode ? "border-neutral-700 hover:border-neutral-400" : "border-neutral-200 hover:border-neutral-950"}`}
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 border grid place-items-center transition-colors duration-300 ${isDarkMode ? "border-neutral-700" : "border-neutral-200"}`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>Location</div>
                  <div className={`text-[14px] transition-colors duration-300 ${isDarkMode ? "text-neutral-100" : ""}`}>{p.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <a href={p.github} target="_blank" rel="noreferrer" className={`group inline-flex items-center gap-2 px-4 py-2.5 border text-[13px] transition-colors ${isDarkMode ? "border-neutral-700 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100" : "border-neutral-300 hover:border-neutral-950"}`}>
                <Github className="w-4 h-4" /> GitHub
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href={p.linkedin} target="_blank" rel="noreferrer" className={`group inline-flex items-center gap-2 px-4 py-2.5 border text-[13px] transition-colors ${isDarkMode ? "border-neutral-700 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100" : "border-neutral-300 hover:border-neutral-950"}`}>
                <Linkedin className="w-4 h-4" /> LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`col-span-12 md:col-span-6 border p-6 md:p-8 transition-colors duration-500 ${isDarkMode ? "border-neutral-700 bg-neutral-900" : "bg-white border-neutral-200"}`}
          >
            <div className={`font-mono text-[10px] uppercase tracking-widest mb-6 transition-colors duration-300 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
              — Message form
            </div>

            <div className="space-y-5">
              <div>
                <label className={`font-mono text-[11px] uppercase tracking-widest block mb-2 transition-colors duration-300 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                  Your name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className={`w-full bg-transparent border-b py-2 text-[15px] focus:outline-none transition-colors ${isDarkMode ? "border-neutral-700 focus:border-neutral-400 text-neutral-100 placeholder:text-neutral-500" : "border-neutral-300 focus:border-neutral-950 placeholder:text-neutral-400"}`}
                />
              </div>
              <div>
                <label className={`font-mono text-[11px] uppercase tracking-widest block mb-2 transition-colors duration-300 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className={`w-full bg-transparent border-b py-2 text-[15px] focus:outline-none transition-colors ${isDarkMode ? "border-neutral-700 focus:border-neutral-400 text-neutral-100 placeholder:text-neutral-500" : "border-neutral-300 focus:border-neutral-950 placeholder:text-neutral-400"}`}
                />
              </div>
              <div>
                <label className={`font-mono text-[11px] uppercase tracking-widest block mb-2 transition-colors duration-300 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the project, timeline, and what you're looking for."
                  className={`w-full bg-transparent border p-3 text-[15px] focus:outline-none transition-colors resize-none ${isDarkMode ? "border-neutral-700 focus:border-neutral-400 text-neutral-100 placeholder:text-neutral-500" : "border-neutral-200 focus:border-neutral-950 placeholder:text-neutral-400"}`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`w-full group inline-flex items-center justify-between gap-3 px-5 py-3.5 text-[13px] font-medium transition-colors disabled:opacity-60 ${isDarkMode ? "bg-neutral-50 text-neutral-950 hover:bg-neutral-200" : "bg-neutral-950 text-[#fafaf9] hover:bg-neutral-800"}`}
              >
                <span>
                  {sending ? "Sending…" : "Send message"}
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
