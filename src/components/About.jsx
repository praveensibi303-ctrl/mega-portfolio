import Reveal from "./Reveal.jsx";
import { tools } from "../data.js";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <Reveal as="p" className="eyebrow mb-4">
            About
          </Reveal>
          <Reveal as="h2" className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Every project, built like a real edit session.
          </Reveal>
          <Reveal className="mt-6 space-y-4 text-neutral-400">
            <p>
              I treat picture, sound and polish as separate tracks, then bring
              them together in a mix that holds up on any screen — from a big
              display to a phone speaker.
            </p>
            <p>
              Whether it's a property walkthrough, a brand promo or an event
              recap, the goal is the same: a clean, well-paced cut delivered on
              time, with no back-and-forth headaches.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="card p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Tools I edit in
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {tools.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-3 rounded-xl border border-line bg-ink/50 px-4 py-3"
              >
                <img
                  src={`./tools/${t.icon}.${t.type}`}
                  alt=""
                  className="h-8 w-8 object-contain"
                  onError={(e) => (e.currentTarget.style.visibility = "hidden")}
                />
                <span className="text-sm text-neutral-200">{t.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
