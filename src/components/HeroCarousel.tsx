'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const SLIDES = [
  { src: '/images/hero/hero-01.jpg', alt: 'Star Citizen spacecraft approaching a space station above a gas giant' },
  { src: '/images/hero/hero-02.jpg', alt: 'Explorer on foot on a rocky alien moon with a spacecraft in the distance' },
  { src: '/images/hero/hero-03.jpg', alt: 'Interior of a capital ship hangar with multiple docked spacecraft' },
  { src: '/images/hero/hero-04.jpg', alt: 'Aerial view of a Star Citizen landing zone city at dusk' },
  { src: '/images/hero/hero-05.jpg', alt: 'Two spacecraft flying in formation through an asteroid field' },
  { src: '/images/hero/hero-06.jpg', alt: 'Ground crew near a landed starship on an alien planet surface' },
  { src: '/images/hero/hero-07.jpg', alt: 'Star Citizen pilot cockpit view overlooking a space station dock' },
  { src: '/images/hero/hero-08.jpg', alt: 'Massive capital ship silhouetted against a bright star in deep space' },
  { src: '/images/hero/hero-09.jpg', alt: 'Quantum travel light-tunnel effect surrounding a spacecraft at jump' },
  { src: '/images/hero/hero-10.jpg', alt: 'Space station exterior with approaching ships against a nebula backdrop' },
  { src: '/images/hero/hero-11.jpg', alt: 'Star Citizen spacecraft hull detail with planet curvature in background' },
  { src: '/images/hero/hero-12.jpg', alt: 'Combat spacecraft banking through an asteroid field debris cloud' },
];

const INTERVAL_MS = 5000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <div
      className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl border border-greenMid bg-greenMid shadow-glow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero images of various space simulation games"
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover"
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deepGreen via-deepGreen/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-deepGreen/60 via-transparent to-transparent" />

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-6 bg-purple' : 'w-1.5 bg-offwhite/40 hover:bg-offwhite/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
