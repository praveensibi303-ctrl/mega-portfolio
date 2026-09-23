import { useState } from "react";
import Stars from "./Stars.jsx";
import { brand, stats } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32">
      {/* Starry backdrop */}
      <Stars count={80} className="opacity-70" />

      {/* Centered brand logo (like the reference) */}
      <div className="relative mb-10 flex flex-col items-center text-center">
        <img
          id="hero-logo"
          src="./logo/varman_visuals_logo.png"
          alt={brand.name}
          className="animate-floaty w-[min(72vw,440px)] drop-shadow-[0_10px_40px_rgba(233,184,114,0.25)]"
        />
      </div>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <div>
          <p className="eyebrow mb-5">{brand.role}</p>
          <div className="font-display text-xl font-semibold leading-[1.1] text-white sm:text-3xl">
            {brand.tagline.split(".").map((part, i) =>
              part.trim() ? (
                <span key={i} className="block">
                  {part.trim()}
                  <span className="text-gold">.</span>
                </span>
              ) : null
            )}
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            I'm <span className="text-neutral-200">{brand.editor}</span> — {brand.intro}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {brand.description}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {brand.closing}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-gold">
              View my work
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-semibold text-gold sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-neutral-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo */}
        <PhotoFrame />
      </div>
    </section>
  );
}

function PhotoFrame() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-sm lg:mx-0">
      <div className="animate-floaty rounded-3xl border border-line bg-panel p-2 shadow-2xl shadow-black/40">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900">
          {/* Real photo: drop public/profile.jpg and it shows here */}
          <img
            src={brand.photo}
            alt={brand.editor}
            onLoad={() => setLoaded(true)}
            onError={(e) => (e.currentTarget.style.display = "none")}
            className="h-full w-full object-cover"
          />
          {/* Placeholder shown until a real photo is present */}
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <svg
                width="46"
                height="46"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gold/70"
              >
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <p className="px-6 text-xs text-neutral-500">
                Add your photo as{" "}
                <span className="text-neutral-300">public/profile.jpg</span>
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Little badge */}
      <div className="absolute -bottom-4 -left-4 rounded-xl border border-line bg-ink px-4 py-3 shadow-lg">
        <p className="text-xs text-neutral-500">Now booking</p>
        <p className="text-sm font-semibold text-white">Remote · Worldwide</p>
      </div>
    </div>
  );
}
