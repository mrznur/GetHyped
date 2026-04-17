import { useState, useEffect, useRef } from "react";
import Logo from "../assets/Logo.png";

export default function Header({ nav }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Show on scroll up, hide on scroll down
  useEffect(() => {
    const fn = () => {
      const current = window.scrollY;
      setVisible(current < lastScrollY.current || current < 60);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const plainLinks = nav.links.slice(0, -1);
  const lastLink = nav.links[nav.links.length - 1];

  return (
    <>
      {/* HEADER — always transparent, hides on scroll down, shows on scroll up */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] py-6 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full px-6 flex items-center justify-between">
          <a href="/" className="flex items-center z-[1001]">
            <img src={Logo} alt="Get Hyped" className="h-14 lg:h-16 w-auto" />
          </a>

          {/* Desktop nav — lg and up only */}
          <nav className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-white">
            {plainLinks.map((l) => (
              <a key={l.label} href={l.href} className="nav-hover-link">
                <span className="nav-hover-orange" />
                <span className="nav-hover-black" />
                <span className="nav-hover-text">
                  <span className="t-default">{l.label}</span>
                  <span className="t-hover">{l.label}</span>
                </span>
              </a>
            ))}

            {/* Last link */}
            <a href={lastLink.href} className="nav-hover-link">
              <span className="nav-hover-orange" />
              <span className="nav-hover-black" />
              <span className="nav-hover-text">
                <span className="t-default">{lastLink.label}</span>
                <span className="t-hover">{lastLink.label}</span>
              </span>
            </a>
          </nav>

          {/* Get Results CTA — lg and up only */}
          <div className="hover:-rotate-[5deg] hover:italic">
            <a
              href={nav.cta.href}
              className="hidden lg:inline-flex items-center gap-2 pl-5 pr-2 py-2 bg-pink border-2 border-pink rounded-lg text-xl font-semibold text-black transition-all duration-300 hover:scale-110"
            >
              <span>{nav.cta.label}</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-md bg-white text-xl">
                🔥
              </span>
            </a>
          </div>

          {/* Hamburger — visible on md and below */}
          <button
            onClick={() => setOpen((o) => !o)}
            className={`hamburger flex lg:hidden ${open ? "open" : ""}`}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      {/* White backdrop behind the menu card */}
      {open && (
        <div
          className="fixed inset-0 z-[998] bg-white"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="flex flex-col h-full px-6 py-4">
          <nav className="flex-1 flex flex-col items-center justify-center gap-3">
            {nav.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-6 py-3 text-3xl font-semibold bg-white rounded-xl transition-all duration-300 hover:bg-white/50 hover:scale-105"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex justify-center mb-10">
            <a
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 pl-3 pr-3 py-3 bg-black text-white rounded-xl font-semibold text-xl"
            >
              <span>{nav.cta.label}</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-xl">
                🔥
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
