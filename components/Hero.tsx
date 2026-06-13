'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IMAGES, SITE } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-transparent" />

      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
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
            <Link href="/registration">
              <motion.span
                className="gold-btn inline-block text-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.span>
            </Link>
            <Link href="/book-trial">
              <motion.span
                className="inline-block px-8 py-3 border-2 border-yellow-400/60 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 transition text-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Trial
              </motion.span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Digital Access', value: 'QR Entry' },
              { label: 'Environment', value: 'AC + WiFi' },
              { label: 'Timings', value: '7AM - 7PM' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="premium-card p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <p className="text-yellow-400 font-black text-lg">{stat.value}</p>
                <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:block relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-yellow-400/30 shadow-2xl shadow-yellow-500/10">
            <img src={IMAGES.study} alt="Study environment" className="w-full h-[480px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-bold text-lg">Peaceful • Secure • Focused</p>
              <p className="text-yellow-400 text-sm">Near Panchayat Ghar, Dhakia</p>
            </div>
          </div>
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 border-2 border-yellow-400/40 rounded-2xl"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-yellow-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
