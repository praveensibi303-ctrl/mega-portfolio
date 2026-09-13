import { brand, contact } from "../data.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            {brand.name}
          </p>
          <p className="text-xs text-neutral-500">
            {brand.editor} · {brand.role}
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <a href={`mailto:${contact.email}`} className="text-neutral-400 hover:text-gold">
            Email
          </a>
          {contact.whatsapp && (
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                "Hi Megavarman, I'd like to discuss a video project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-gold"
            >
              WhatsApp
            </a>
          )}
          <a href="#top" className="text-neutral-400 hover:text-gold">
            Back to top ↑
          </a>
        </div>
      </div>
      <p className="container-x mt-6 text-center text-xs text-neutral-600">
        © {year} {brand.name}. Edited with care.
      </p>
    </footer>
  );
}
