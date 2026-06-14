'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IMAGES } from '@/lib/constants';

const facilities = [
  'Fully Digitalized Study Environment',
  'QR-Based Smart Access Control',
  'Digital Attendance Tracking',
  'High-Speed Wi-Fi Connectivity',
  'CCTV Security Monitoring',
  'Individual Charging Points',
  'Eye-Comfort Lighting',
  '24×7 Power Backup',
  'Air-Conditioned Study Space',
  'Peaceful and Disciplined Atmosphere',
];

export default function AboutUs({ compact = false, hideHeader = false }: { compact?: boolean; hideHeader?: boolean }) {
  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0e14] via-[#141c28] to-[#0a0e14]">
      <div className="max-w-6xl mx-auto">
        {!hideHeader && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">WHO WE ARE</p>
            <h2 className="text-4xl md:text-5xl font-black gold-gradient-text mb-4">
              Welcome to RAJ STUDY HUB
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto" />
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-yellow-400/20 h-80 md:h-96"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={IMAGES.about1}
              alt="RAJ STUDY HUB"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              RAJ STUDY HUB is more than just a library — it is a dream, a vision, and a tribute built with love, respect, and purpose. Named after my late father, <strong className="text-yellow-400">Shri Raj Kumar Singh</strong>, who passed away in 2024.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Founded by <strong className="text-yellow-400">Nitin Kumar Singh</strong> in loving memory of his father, RAJ STUDY HUB provides students with a peaceful, disciplined, and modern environment to focus entirely on their studies.
            </p>
            {!compact && (
              <p className="text-gray-300 leading-relaxed">
                In today&apos;s world, many students struggle to find a suitable place to study. Distractions at home and unsuitable environments often affect concentration. We created a study hub designed specifically for serious learners.
              </p>
            )}
          </motion.div>
        </div>

        {!compact && (
          <>
            <motion.div
              className="grid md:grid-cols-2 gap-4 mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {facilities.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 p-4 premium-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div className="premium-card p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-black text-yellow-400 mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide students with a modern, peaceful, secure, and inspiring study environment where they can unlock their full potential and achieve success.
                </p>
              </motion.div>
              <motion.div className="premium-card p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-black text-yellow-400 mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become one of the most trusted and student-focused study hubs, known for discipline, innovation, and commitment to educational excellence.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="premium-card p-10 text-center border-yellow-400/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 italic leading-relaxed mb-6 max-w-3xl mx-auto">
                &ldquo;For me, this study hub is deeply personal. Every student who walks through our doors becomes part of a vision inspired by my father. His name lives on through this institution.&rdquo;
              </p>
              <p className="text-yellow-400 font-bold text-lg">Nitin Kumar Singh</p>
              <p className="text-gray-500 text-sm">Founder, RAJ STUDY HUB</p>
              <p className="text-gray-400 text-sm mt-4">
                Dedicated to the loving memory of Shri Raj Kumar Singh (my father)
              </p>
            </motion.div>
          </>
        )}

        {compact && (
          <div className="text-center">
            <Link href="/about">
              <motion.span className="gold-btn inline-block cursor-pointer" whileHover={{ scale: 1.05 }}>
                Read Full Story
              </motion.span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
