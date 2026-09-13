import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { contact } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New project enquiry${form.type ? ` — ${form.type}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\n\n${form.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const wa = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        "Hi Megavarman, I'd like to discuss a video project."
      )}`
    : "";

  return (
    <section id="contact" className="border-t border-line py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <Reveal as="p" className="eyebrow mb-4">
            Contact
          </Reveal>
          <Reveal as="h2" className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Let's cut something good
          </Reveal>
          <Reveal className="mt-4 max-w-md text-neutral-400">
            Send over your project details and I'll reply within 24 hours with
            next steps and a rough timeline.
          </Reveal>

          <Reveal className="mt-8 space-y-3 text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-neutral-300 hover:text-gold"
            >
              <span className="text-gold">✉</span> {contact.email}
            </a>
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-300 hover:text-gold"
              >
                <span className="text-gold">✆</span> WhatsApp
              </a>
            )}
            {contact.instagram && (
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-300 hover:text-gold"
              >
                <span className="text-gold">◎</span> Instagram
              </a>
            )}
            <p className="pt-2 text-neutral-500">{contact.location}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="card p-6 sm:p-8">
          <form onSubmit={onSubmit} className="space-y-4">
            <Field label="Name" name="name" value={form.name} onChange={onChange} required />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
            />
            <div>
              <label className="mb-1.5 block text-xs text-neutral-400">
                Project type
              </label>
              <select
                name="type"
                value={form.type}
                onChange={onChange}
                className="w-full rounded-lg border border-line bg-ink/60 px-3 py-2.5 text-sm text-neutral-200 outline-none focus:border-gold"
              >
                <option value="">Select…</option>
                <option>Real estate</option>
                <option>Promotional / brand</option>
                <option>Event / highlights</option>
                <option>Testimonial</option>
                <option>Social / Reels</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-neutral-400">
                Project details
              </label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={onChange}
                required
                className="w-full resize-none rounded-lg border border-line bg-ink/60 px-3 py-2.5 text-sm text-neutral-200 outline-none focus:border-gold"
              />
            </div>
            <button type="submit" className="btn-gold w-full">
              Send project details
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-neutral-400">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg border border-line bg-ink/60 px-3 py-2.5 text-sm text-neutral-200 outline-none focus:border-gold"
      />
    </div>
  );
}
