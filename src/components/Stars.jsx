import { useMemo } from "react";

/* Twinkling starfield — gold & white specks scattered on a dark backdrop. */
export default function Stars({ count = 70, className = "" }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2.2 + 0.8,
        delay: Math.random() * 5,
        dur: Math.random() * 3 + 2.5,
        gold: Math.random() > 0.45,
      })),
    [count]
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.gold ? "#e9b872" : "#ffffff",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
