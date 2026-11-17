"use client";
import { useEffect, useRef } from "react";

/**
 * The flue rests clean. With JavaScript and motion allowed, a soot lining
 * covers it and clears from the cap downward as the page scrolls, with a
 * brush head riding the clean edge.
 */
export default function FlueSweep() {
  const soot = useRef<HTMLDivElement>(null);
  const brush = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const s = soot.current;
    const b = brush.current;
    const flue = b?.parentElement;
    if (!s || !b || !flue) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    flue.setAttribute("data-live", "");
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = flue.getBoundingClientRect();
      const edge = window.innerHeight * 0.55 - rect.top;
      const y = Math.min(Math.max(edge, 0), rect.height);
      s.style.transform = `translate3d(0, ${y}px, 0)`;
      b.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
      flue.removeAttribute("data-live");
    };
  }, []);

  return (
    <>
      <div className="dca-soot-clip" aria-hidden="true">
        <div ref={soot} className="dca-soot" />
      </div>
      <div ref={brush} className="dca-brush" aria-hidden="true" />
    </>
  );
}
