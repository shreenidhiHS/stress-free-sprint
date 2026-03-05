"use client";

import { useEffect, useRef, useState } from "react";
import "./animate-on-scroll.css";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before animation runs (for stagger) */
  delay?: number;
  /** Root margin for Intersection Observer (e.g. "0px 0px -60px 0px" to trigger slightly before in view) */
  rootMargin?: string;
};

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  rootMargin = "0px 0px -40px 0px",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setInView(true), delay);
        }
      },
      { rootMargin, threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay, rootMargin]);

  return (
    <div
      ref={ref}
      className={`${inView ? "animate-on-scroll-in-view" : ""} ${className}`}
      style={inView && delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
