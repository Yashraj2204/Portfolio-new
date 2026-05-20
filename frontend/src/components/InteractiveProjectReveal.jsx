import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InteractiveProjectReveal = ({ children, index = 0 }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered reveal from different directions
      const direction = index % 2 === 0 ? -100 : 100;

      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 30%',
          markers: false,
          once: true,
        },
        opacity: 0,
        x: direction,
        y: 60,
        duration: 1.3,
        ease: 'power3.out',
        delay: index * 0.15,
      });

      // Image zoom effect on scroll
      if (imageRef.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            markers: false,
          },
        }).to(imageRef.current, {
          scale: 1.1,
          ease: 'none',
        });
      }

      // Complex hover animation with stagger
      const content = containerRef.current.querySelectorAll('h3, p, button');
      
      containerRef.current.addEventListener('mouseenter', () => {
        gsap.to(content, {
          y: -5,
          stagger: 0.05,
          duration: 0.4,
          ease: 'power2.out',
        });

        if (imageRef.current) {
          gsap.to(imageRef.current, {
            scale: 1.15,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      });

      containerRef.current.addEventListener('mouseleave', () => {
        gsap.to(content, {
          y: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: 'power2.out',
        });

        if (imageRef.current) {
          gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={containerRef}>
      {React.cloneElement(children, { imageRef })}
    </div>
  );
};

export default InteractiveProjectReveal;
