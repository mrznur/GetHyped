import { useEffect, useRef, useState } from 'react';

export function useWrapperScroll() {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const wrapperH = el.offsetHeight;
      const windowH = window.innerHeight;
      const scrolled = -rect.top / (wrapperH - windowH);
      setProgress(Math.min(Math.max(scrolled, 0), 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { wrapperRef, progress };
}
