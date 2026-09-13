import Reveal from "./Reveal.jsx";
import { services } from "../data.js";

/* Inline icons — gold stroke, matched to each service. */
const icons = {
  building: (
    <path
      d="M4 21V6l7-3v18M11 21h9V10l-9-4M14 9v.01M14 13v.01M14 17v.01M17 10v.01M17 14v.01M17 18v.01M7 9v.01M7 13v.01M7 17v.01"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  megaphone: (
    <path
      d="M3 11v2a1 1 0 001 1h2l4 4V6L6 10H4a1 1 0 00-1 1zM14 8a4 4 0 010 8M16.5 5.5a7 7 0 010 13"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  calendar: (
    <path
      d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 9h16M8 3v4M16 3v4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  people: (
    <path
      d="M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2.5 20c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5M16 4.2a3.5 3.5 0 010 6.6M18 14.3c2 .8 3.5 2.5 3.5 4.7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  mobile: (
    <path
      d="M7 3a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H7zM11 18h2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

function Icon({ name }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-gold/40 bg-gold/5 text-gold">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {icons[name]}
      </svg>
    </span>
  );
}

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-20 sm:py-28">
      <div className="container-x">
        <Reveal as="p" className="eyebrow mb-4">
          Services
        </Reveal>
        <Reveal as="h2" className="font-display text-3xl font-semibold text-white sm:text-4xl">
          What's on the timeline
        </Reveal>
        <Reveal className="mt-4 max-w-xl text-neutral-400">
          Pick a specialty, or hand over everything end to end.
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.06}
              className={`card group p-6 transition hover:border-gold/60 ${
                s.featured ? "border-gold/60 ring-1 ring-gold/30" : ""
              }`}
            >
              <Icon name={s.icon} />
              <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {s.body}
              </p>
            </Reveal>
          ))}

          {/* Last cell — custom / CTA card */}
          <Reveal
            delay={services.length * 0.06}
            className="card flex flex-col items-center justify-center border-gold/60 p-6 text-center ring-1 ring-gold/30"
          >
            <h3 className="font-display text-xl font-semibold text-white">
              Need Something Custom?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Reach out and let's discuss your specific video editing
              requirements.
            </p>
            <a href="#contact" className="btn-gold mt-6 tracking-wider">
              Contact me
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
