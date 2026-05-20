import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { portfolioData } from "../mock/data";
import ScrollAnimation from "../components/ScrollAnimation";
import AdvancedParallax from "../components/AdvancedParallax";
import SectionZoomTransition from "../components/SectionZoomTransition";
import ZoomTextAnimation from "../components/ZoomTextAnimation";
import MorphingTextAnimation from "../components/MorphingTextAnimation";
import StaggeredZoomReveal from "../components/StaggeredZoomReveal";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("dark-mode", isDarkMode);
    return () => {
      document.documentElement.classList.remove("dark-mode");
      document.body.classList.remove("dark-mode");
    };
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "work", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`relative grain min-h-screen transition-colors duration-500 ${isDarkMode ? "dark-mode bg-neutral-950 text-neutral-50" : "bg-[#fafaf9] text-neutral-950"}`}>
      <Header data={portfolioData} activeSection={activeSection} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <main className="relative z-10">
        <AdvancedParallax intensity={80}>
          <ScrollAnimation type="blur">
            <Hero data={portfolioData} isDarkMode={isDarkMode} />
          </ScrollAnimation>
        </AdvancedParallax>

        <About data={portfolioData} isDarkMode={isDarkMode} />

        <MorphingTextAnimation>
          <AdvancedParallax intensity={40}>
            <ScrollAnimation type="scale" delay={100}>
              <Skills data={portfolioData} isDarkMode={isDarkMode} />
            </ScrollAnimation>
          </AdvancedParallax>
        </MorphingTextAnimation>

        <ZoomTextAnimation>
          <StaggeredZoomReveal>
            <Experience data={portfolioData} isDarkMode={isDarkMode} />
          </StaggeredZoomReveal>
        </ZoomTextAnimation>

        <AdvancedParallax intensity={40}>
          <ScrollAnimation type="scale" delay={100}>
            <Projects data={portfolioData} isDarkMode={isDarkMode} />
          </ScrollAnimation>
        </AdvancedParallax>

        <ScrollAnimation type="scale" delay={100}>
          <Contact data={portfolioData} isDarkMode={isDarkMode} />
        </ScrollAnimation>
      </main>
      <Footer data={portfolioData} isDarkMode={isDarkMode} />
    </div>
  );
}
