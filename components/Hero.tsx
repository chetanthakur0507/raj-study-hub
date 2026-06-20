'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HERO_SLIDES, CONTACT, SITE } from '@/lib/constants';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    HERO_SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center hero-section">
      <div className="absolute inset-0">
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center hero-slide"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === currentSlide ? 1 : 0,
            }}
            aria-hidden={i !== currentSlide}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-xs font-bold tracking-widest mb-6">
            PREMIUM STUDY LIBRARY
          </span>
          <h1 className="text-5xl md:text-7xl font-black gold-gradient-text mb-6 leading-tight">
            {SITE.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Where Discipline Meets Success
          </p>
          <p className="text-yellow-400/90 font-semibold mb-8 tracking-wide">{SITE.tagline}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/registration" className="gold-btn inline-block text-center">
              Join Now
            </Link>
            <Link
              href="/book-trial"
              className="inline-block px-8 py-3 border-2 border-yellow-400/60 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 transition text-center"
            >
              Book Free Trial
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Digital Access', value: 'QR Entry' },
              { label: 'Environment', value: 'AC + WiFi' },
              { label: 'Timings', value: CONTACT.timings },
            ].map((stat) => (
              <div key={stat.label} className="premium-card p-4 text-center">
                <p className="text-yellow-400 font-black text-lg">{stat.value}</p>
                <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative rounded-2xl overflow-hidden border border-yellow-400/30 shadow-2xl shadow-yellow-500/10 h-[480px]">
            {HERO_SLIDES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="RAJ STUDY HUB library"
                className="absolute inset-0 w-full h-full object-cover hero-slide-img"
                style={{ opacity: i === currentSlide ? 1 : 0 }}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                aria-hidden={i !== currentSlide}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
              <div>
                <p className="text-white font-bold text-lg">Peaceful • Secure • Focused</p>
                <p className="text-yellow-400 text-sm">Near Panchayat Ghar, Dhakia</p>
              </div>
              <div className="flex gap-1.5">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentSlide ? 'bg-yellow-400 w-5' : 'bg-white/40 w-2 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2 lg:hidden">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === currentSlide ? 'bg-yellow-400 w-6' : 'bg-white/40 w-1.5'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-yellow-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
