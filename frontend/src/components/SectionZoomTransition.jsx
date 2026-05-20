import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionZoomTransition = ({ children, nextSectionTrigger = null }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Ultra zoom effect on scroll
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center center',
          end: 'bottom center',
          scrub: 1.5,
          markers: false,
        },
      })
        .to(
          containerRef.current,
          {
            scale: 1.05,
            opacity: 0.9,
            ease: 'power1.inOut',
          },
          0
        );

      // Zoom in when entering
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'top 40%',
          markers: false,
          once: true,
        },
        scale: 0.85,
        opacity: 0,
        duration: 1.3,
        ease: 'back.out(1.7)',
      });
    });

    return () => ctx.revert();
  }, [nextSectionTrigger]);

  return <div ref={containerRef}>{children}</div>;
};

export default SectionZoomTransition;
