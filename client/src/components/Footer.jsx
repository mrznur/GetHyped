const icons = {
  LinkedIn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  TikTok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  ),
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/>
    </svg>
  ),
  YouTube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
};

export default function Footer({ footer }) {
  return (
    <footer className="bg-[#e8e3da] pt-10 pb-8 overflow-hidden px-8">
      <div className="w-full">

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:block">
          <div className="flex items-end justify-between gap-8">
            {/* Big outlined logo — bottom left */}
            <div className="flex-shrink-0">
              <span
                className="block font-black text-[80px] leading-none tracking-[-2px] uppercase select-none"
                style={{
                  WebkitTextStroke: '3px #000',
                  color: 'transparent',
                  fontFamily: "'Inter','Arial Black',sans-serif",
                }}
              >
                {footer.logo}
              </span>
            </div>

            {/* Center + right block */}
            <div className="flex flex-col items-end gap-6 pb-1">
              {/* Nav + socials row */}
              <div className="flex items-center gap-10">
                {/* Nav pills */}
                <nav className="flex items-center gap-2">
                  {footer.nav.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="px-4 py-1.5 text-sm font-medium border border-black/20 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>

                {/* Contact block */}
                <div className="text-right text-sm">
                  <p className="font-semibold text-black/70 mb-0.5">Contact</p>
                  <a href={`mailto:${footer.contact.email}`} className="block text-black/60 hover:text-[#FF4D00] transition-colors">{footer.contact.email}</a>
                  <a href={`tel:${footer.contact.phone.replace(/\s/g,'')}`} className="block text-black/60 hover:text-[#FF4D00] transition-colors">{footer.contact.phone}</a>
                </div>

                {/* Address block */}
                <div className="text-right text-sm">
                  <p className="font-semibold text-black/70 mb-0.5">Adres</p>
                  <a href={footer.addressHref} target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-[#FF4D00] transition-colors leading-snug">
                    {footer.address.split(',').map((line, i) => (
                      <span key={i} className="block">{line.trim()}</span>
                    ))}
                  </a>
                </div>
              </div>

              {/* Follow us + socials */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Follow us</span>
                <div className="flex gap-2">
                  {footer.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-black/20 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                    >
                      {icons[s.name]}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="flex items-center gap-6 text-xs text-black/40">
                <span>{footer.copyright}</span>
                <a href={footer.design.href} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">{footer.design.label}</a>
                <a href="#" className="hover:text-black transition-colors">{footer.privacy}</a>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex flex-col items-center text-center gap-6 md:hidden">
          {/* Big outlined logo */}
          <div className="self-start">
            <span
              className="block font-black text-[64px] leading-none tracking-[-2px] uppercase select-none"
              style={{
                WebkitTextStroke: '3px #000',
                color: 'transparent',
                fontFamily: "'Inter','Arial Black',sans-serif",
              }}
            >
              {footer.logo}
            </span>
          </div>

          {/* Orange CTA button */}
          <a
            href={`mailto:${footer.contact.email}`}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#FF4D00] text-white font-semibold text-base rounded-full"
          >
            <span>Get Hyped! Neem contact op</span>
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-base">🔥</span>
          </a>

          {/* Nav pills */}
          <nav className="flex flex-wrap justify-center gap-2">
            {footer.nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-5 py-2 text-sm font-medium border border-black/20 rounded-full hover:bg-black hover:text-white transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social icons — circular outline */}
          <div className="flex gap-3">
            {footer.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-black/20 text-black hover:bg-black hover:text-white transition-all duration-200"
              >
                {icons[s.name]}
              </a>
            ))}
          </div>

          {/* Contact info */}
          <div className="text-sm text-black/60 flex flex-col gap-1">
            <a href={`mailto:${footer.contact.email}`} className="hover:text-[#FF4D00] transition-colors">{footer.contact.email}</a>
            <a href={`tel:${footer.contact.phone.replace(/\s/g,'')}`} className="hover:text-[#FF4D00] transition-colors">{footer.contact.phone}</a>
          </div>

          {/* Address */}
          <div className="text-sm text-black/60">
            <a href={footer.addressHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D00] transition-colors leading-relaxed">
              {footer.address.split(',').map((line, i) => (
                <span key={i} className="block">{line.trim()}</span>
              ))}
            </a>
          </div>

          {/* Privacy + copyright */}
          <div className="flex flex-col gap-1 text-xs text-black/35 pb-2">
            <a href="#" className="hover:text-black transition-colors">{footer.privacy}</a>
            <span>{footer.copyright}</span>
            <a href={footer.design.href} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">{footer.design.label}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
