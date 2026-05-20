import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimation = (animationType = 'default', options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const {
      delay = 0,
      duration = 1.2,
      stagger = 0,
      triggerStart = 'top 85%',
      triggerEnd = 'top 35%',
      once = true,
      intensity = 50,
    } = options;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: triggerStart,
          end: triggerEnd,
          markers: false,
          once,
        },
      });

      switch (animationType) {
        case 'fadeInUp':
          timeline.from(ref.current, {
            opacity: 0,
            y: 60,
            duration,
            ease: 'power3.out',
            delay,
          });
          break;

        case 'fadeInScale':
          timeline.from(ref.current, {
            opacity: 0,
            scale: 0.85,
            duration,
            ease: 'back.out(1.7)',
            delay,
          });
          break;

        case 'fadeInBlur':
          timeline.from(ref.current, {
            opacity: 0,
            filter: 'blur(10px)',
            y: 40,
            duration,
            ease: 'power2.out',
            delay,
          });
          break;

        case 'slideInLeft':
          timeline.from(ref.current, {
            opacity: 0,
            x: -100,
            duration,
            ease: 'power3.out',
            delay,
          });
          break;

        case 'slideInRight':
          timeline.from(ref.current, {
            opacity: 0,
            x: 100,
            duration,
            ease: 'power3.out',
            delay,
          });
          break;

        case 'rotateIn':
          timeline.from(ref.current, {
            opacity: 0,
            scale: 0.8,
            duration,
            ease: 'back.out(1.7)',
            delay,
          });
          break;

        default:
          timeline.from(ref.current, {
            opacity: 0,
            y: 60,
            duration,
            ease: 'power3.out',
            delay,
          });
      }

      // Parallax effect
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1.5,
          markers: false,
        },
        y: -intensity,
        ease: 'none',
      });
    });

    return () => ctx.revert();
  }, [animationType, options]);

  return ref;
};

export default useGSAPAnimation;
