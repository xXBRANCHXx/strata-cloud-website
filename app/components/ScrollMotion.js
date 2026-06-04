'use client';

import { useEffect } from 'react';

export default function ScrollMotion() {
  useEffect(() => {
    let frame = 0;
    const revealItems = Array.from(document.querySelectorAll('.reveal'));

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-index', index % 6);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const update = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, window.scrollY / maxScroll);
      const heroProgress = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));

      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
      document.documentElement.style.setProperty('--hero-progress', heroProgress.toFixed(4));
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return null;
}
