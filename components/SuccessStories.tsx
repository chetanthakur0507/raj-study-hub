'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const testimonials = [
  { id: 1, name: 'Rahul Sharma', achievement: 'UPSC Aspirant', quote: 'The peaceful environment and digital attendance system helped me stay consistent with my preparation. RAJ STUDY HUB is truly premium.' },
  { id: 2, name: 'Priya Verma', achievement: 'NEET Preparation', quote: 'AC, WiFi, charging points — everything I needed was here. The disciplined atmosphere made a huge difference in my focus.' },
  { id: 3, name: 'Ankit Singh', achievement: 'SSC CGL', quote: 'QR entry and CCTV security gave me peace of mind. I could study without worrying about anything else.' },
  { id: 4, name: 'Neha Patel', achievement: 'Banking Exams', quote: 'The community of focused learners here motivates me every day. Best decision for my exam preparation.' },
  { id: 5, name: 'Vikrant Kumar', achievement: 'State PCS', quote: 'Clean, quiet, and well-managed. Nitin Sir has built something special in memory of his father.' },
  { id: 6, name: 'Divya Singh', achievement: 'CA Foundation', quote: 'Eye-comfort lighting and comfortable seating — I can study for hours without fatigue. Highly recommended!' },
];

export default function SuccessStories({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0e14] to-[#141c28]">
      <div className="max-w-6xl mx-auto">
        {!hideHeader && (
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">STUDENT ACHIEVEMENTS</p>
            <h2 className="text-4xl md:text-5xl font-black gold-gradient-text mb-4">Success Stories</h2>
            <p className="text-gray-300">Real experiences from our study community</p>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6" />
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="premium-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-black text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-yellow-400">{t.name}</h3>
                  <p className="text-yellow-400/60 text-sm">{t.achievement}</p>
                </div>
              </div>
              <div className="flex mb-3">{[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}</div>
              <p className="text-gray-400 italic text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center premium-card p-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-black text-yellow-400 mb-4">You Could Be Our Next Success Story!</h3>
          <p className="text-gray-400 mb-6">Join RAJ STUDY HUB and focus on what matters — your goals.</p>
          <Link href="/registration">
            <motion.span className="gold-btn inline-block cursor-pointer" whileHover={{ scale: 1.05 }}>Start Your Journey</motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
