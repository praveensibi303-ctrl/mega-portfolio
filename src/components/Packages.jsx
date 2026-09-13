import Reveal from "./Reveal.jsx";
import { packages, pricingNote } from "../data.js";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-gold">
    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Packages() {
  return (
    <section id="packages" className="border-t border-line py-20 sm:py-28">
      <div className="container-x">
        <Reveal as="p" className="eyebrow mb-4">
          Packages
        </Reveal>
        <Reveal as="h2" className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Pick your export
        </Reveal>
        <Reveal className="mt-4 max-w-xl text-neutral-400">
          Three ways to work together. Custom scopes available on request.
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.08}
              className={`card relative flex flex-col p-7 ${
                p.featured ? "border-gold/70 ring-1 ring-gold/40" : ""
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
                  Most booked
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold text-white">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-400">{p.tagline}</p>
              <p className="mt-4 text-sm font-medium text-gold">{p.delivery}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-neutral-300">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 ${p.featured ? "btn-gold" : "btn-ghost"} w-full`}
              >
                Book {p.name}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center text-xs text-neutral-500">
          {pricingNote}
        </Reveal>
      </div>
    </section>
  );
}
