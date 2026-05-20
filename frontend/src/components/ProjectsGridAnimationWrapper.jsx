import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsGridAnimationWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Section entrance with title animation
      gsap.from(containerRef.current.querySelector('div:first-child'), {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'top 35%',
          markers: false,
          once: true,
        },
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Filter buttons staggered animation
      const filterButtons = containerRef.current.querySelectorAll('button');
      gsap.from(filterButtons, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 30%',
          markers: false,
          once: true,
        },
        opacity: 0,
        x: -20,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.3,
      });

      // Grid items cascade effect
      const gridItems = gridRef.current?.querySelectorAll('article');
      if (gridItems) {
        gsap.from(gridItems, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
            end: 'top 25%',
            markers: false,
            once: true,
          },
          opacity: 0,
          y: 100,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5,
        });
      }

      // Parallax scroll effect on entire section
      gsap.to(gridRef.current, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
        y: -30,
        ease: 'none',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {React.Children.map(children, (child, index) => {
        if (index === children.length - 1) {
          return <div ref={gridRef}>{child}</div>;
        }
        return child;
      })}
    </div>
  );
};

export default ProjectsGridAnimationWrapper;
