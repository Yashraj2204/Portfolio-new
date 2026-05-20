import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard3DAnimation = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 3D card entrance animation
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 25%',
          markers: false,
          once: true,
        },
        opacity: 0,
        rotationX: 45,
        rotationY: -45,
        scale: 0.6,
        y: 80,
        duration: 1.2,
        ease: 'back.out(1.5)',
        transformOrigin: 'center center',
      });

      // Hover 3D effect
      containerRef.current.addEventListener('mouseenter', () => {
        gsap.to(containerRef.current, {
          rotationX: 5,
          rotationY: -5,
          scale: 1.02,
          duration: 0.6,
          ease: 'power2.out',
          transformStyle: 'preserve-3d',
        });
      });

      containerRef.current.addEventListener('mouseleave', () => {
        gsap.to(containerRef.current, {
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        });
      });

      // Scroll-based perspective
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
        rotationZ: (i) => Math.sin(Math.random()) * 2,
        y: -20,
        ease: 'none',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
};

export default ProjectCard3DAnimation;
