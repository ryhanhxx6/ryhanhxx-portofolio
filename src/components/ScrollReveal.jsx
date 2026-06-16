import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);

  const isText = typeof children === "string";

  const splitText = useMemo(() => {
    if (!isText) return null;

    return children.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) return word;

      return (
        <span key={index} className="inline-block word">
          {word}
        </span>
      );
    });
  }, [children, isText]);

  useEffect(() => {
    const el = containerRef.current;

    if (!el || !isText) return;

    const scroller =
      scrollContainerRef?.current || window;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          transformOrigin: "0% 50%",
          rotate: baseRotation,
        },
        {
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom",
            end: rotationEnd,
            scrub: true,
          },
        }
      );

      const words = el.querySelectorAll(".word");

      gsap.fromTo(
        words,
        {
          opacity: baseOpacity,
        },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );

      if (enableBlur) {
        gsap.fromTo(
          words,
          {
            filter: `blur(${blurStrength}px)`,
          },
          {
            filter: "blur(0px)",
            stagger: 0.05,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top bottom-=20%",
              end: wordAnimationEnd,
              scrub: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [
    isText,
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  // Jika children berupa JSX / Component
  if (!isText) {
    return (
      <div ref={containerRef} className={containerClassName}>
        {children}
      </div>
    );
  }

  // Jika children berupa string text
  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;