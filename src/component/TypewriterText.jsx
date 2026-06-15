import { useState, useEffect, useRef } from "react";

export default function TypewriterText({
  text,
  speed = 30,
  className = "",
}) {
  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible, text, speed]);

return (
  <div ref={textRef} className={className}>
    {typedText}
  </div>
);
}