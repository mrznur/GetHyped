import { useState, useEffect, useRef } from 'react';
import Logo from '../assets/Logo.png';

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
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const plainLinks = nav.links.slice(0, -1);
  const lastLink = nav.links[nav.links.length - 1];

  return (
    <>
      {/* HEADER — always transparent, hides on scroll down, shows on scroll up */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] py-6 transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-full px-6 flex items-center justify-between">

          <a href="/" className="flex items-center z-[1001]">
            <img src={Logo} alt="Get Hyped" className="h-14 lg:h-16 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 px-3 py-3 rounded-lg bg-white">
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

          {/* Get Results CTA */}
          <a href={nav.cta.href} className="hidden md:inline-flex items-center gap-2 pl-5 pr-2 py-2 bg-pink border-2 border-pink rounded-lg text-sm font-semibold text-black transition-all duration-300 hover:bg-[#d98ef5]">
            <span>{nav.cta.label}</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-white text-sm">🔥</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className={`hamburger flex md:hidden ${open ? 'open' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="flex flex-col h-full px-6 py-4">
          <div className="flex items-center justify-between">
            <img src={Logo} alt="Get Hyped" className="h-8 w-auto" />
            <button onClick={() => setOpen(false)} className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors" aria-label="Sluit menu">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-3">
            {nav.links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="px-9 py-3.5 text-lg font-semibold bg-white/65 rounded-xl transition-all duration-300 hover:bg-white hover:scale-105">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex justify-center mb-10">
            <a href={nav.cta.href} onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 pl-6 pr-3 py-3 bg-black text-white rounded-xl font-semibold text-sm">
              <span>{nav.cta.label}</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white text-sm">🔥</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
