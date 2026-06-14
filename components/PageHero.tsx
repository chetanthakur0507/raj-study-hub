'use client';

import { IMAGES } from '@/lib/constants';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge = 'RAJ STUDY HUB',
  image = IMAGES.library,
}: PageHeroProps) {
  return (
    <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden hero-section">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0f1419]" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="inline-block text-yellow-400 text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase">
          {badge}
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-6" />
      </div>
    </section>
  );
}
