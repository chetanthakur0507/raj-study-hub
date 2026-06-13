'use client';

import { motion } from 'framer-motion';
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
    <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0f1419]" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.div>
    </section>
  );
}
