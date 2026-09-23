import { useEffect, useState } from "react";
import { brand } from "../data.js";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Packages", "#packages"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      const h =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (y / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Show the navbar logo as soon as the big hero logo slips behind the fixed
  // navbar (its top edge passes under the ~64px header).
  useEffect(() => {
    const el = document.getElementById("hero-logo");
    if (!el) {
      setShowLogo(true);
      return;
    }
    const check = () => setShowLogo(el.getBoundingClientRect().top < -200);
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "border-b border-line bg-ink/80 backdrop-blur" : ""
      }`}
    >
      {/* Scroll progress indicator */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-line/40">
        <div
          className="h-full bg-gold transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav aria-label="Main navigation" className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2"
          aria-label={brand.name}
        >
          <img
            src="./logo/logonav.webp"
            alt={`${brand.name} logo`}
            width="284"
            height="100"
            className={`h-10 w-auto transition-opacity duration-500 ${
              showLogo ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-neutral-400 transition hover:text-gold"
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-gold px-5 py-2">
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden text-neutral-200"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 md:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-neutral-300 hover:text-gold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
