'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FEATURED_SUCCESS, GOOGLE_REVIEWS_URL } from '@/lib/constants';

const testimonials = [
  { id: 1, name: 'Ankit', achievement: 'SSC GD Aspirant', photo: '/review 8.jpeg', quote: 'The peaceful environment and digital attendance system helped me stay consistent with my preparation. RAJ STUDY HUB is truly premium.' },
  { id: 2, name: 'Ranveer', achievement: '(Civil Engineer) Railway Aspirant', photo: '/review 9.jpeg', quote: 'AC, WiFi, charging points — everything I needed was here. The disciplined atmosphere made a huge difference in my focus.' },
  { id: 3, name: 'Praveen', achievement: 'SSC CGL Aspirant', photo: '/review 7.jpeg', quote: 'QR entry and CCTV security gave me peace of mind. I could study without worrying about anything else.' },
  { id: 4, name: 'Rohit Suryavanshi', achievement: 'SSC Aspirant', photo: '/review 6.jpeg', quote: 'The community of focused learners here motivates me every day. Best decision for my exam preparation.' },
  { id: 5, name: 'Prasoon', achievement: 'DMLT Student', photo: '/review boy 5.jpeg', quote: 'Clean, quiet, and well-managed. Nitin has built something special in memory of his father.' },
  { id: 6, name: 'Rohit', achievement: 'SSC GD/Airforce Aspirant', photo: '/review boy 4.jpeg', quote: 'Discipline, cleanliness aur focus — teen cheezein jo yahan automatically milti hain. Meri sabse acchi choice thi.' },
];

const extraReviews = [
  
  { id: 7, name: 'Sanjay', achievement: 'Competitive Exam', photo: '/review boy 2.jpeg', quote: '24×7 access aur shant environment ne meri preparation ko naya direction diya. Bahut shukriya RAJ STUDY HUB ko.' },
  { id: 8, name: 'Prashant', achievement: 'NDA/Airforce Aspirant', photo: '/review boy 3.jpeg', quote: 'Digital attendance aur comfortable seating — yahan padhai karna easy ho jata hai. Best study library in Dhakia.' },
  {id: 9, name: 'Deependra Upadhyay', achievement: 'NDA(Defence Exams)', photo: '/review boy 1.jpeg', quote: 'Environment,location,cleanliness  — teen cheezein hai environment and location bahut badhiya hai Raj Study Hub ki.' },
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

        <motion.div
          className="premium-card p-8 md:p-10 mb-12 text-center border-yellow-400/30"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={FEATURED_SUCCESS.photo}
            alt={FEATURED_SUCCESS.achievement}
            className="w-full max-w-sm md:max-w-md mx-auto h-72 md:h-96 object-cover rounded-2xl border-2 border-yellow-400/40 shadow-xl shadow-yellow-500/10 mb-6"
            loading="lazy"
            decoding="async"
          />
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-2">FEATURED SUCCESS</p>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{FEATURED_SUCCESS.achievement}</h3>
          <div className="flex justify-center mb-4">{[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-lg">★</span>)}</div>
          <p className="text-gray-300 italic text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            &ldquo;{FEATURED_SUCCESS.quote}&rdquo;
          </p>
        </motion.div>

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
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400/50"
                  loading="lazy"
                  decoding="async"
                />
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {extraReviews.map((t, i) => (
            <motion.div
              key={t.id}
              className="premium-card p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400/50" loading="lazy" decoding="async" />
                <div>
                  <h3 className="font-bold text-yellow-400 text-sm">{t.name}</h3>
                  <p className="text-yellow-400/60 text-xs">{t.achievement}</p>
                </div>
              </div>
              <p className="text-gray-400 italic text-xs leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center premium-card p-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-black text-yellow-400 mb-4">You Could Be Our Next Success Story!</h3>
          <p className="text-gray-400 mb-6">Join RAJ STUDY HUB and focus on what matters — your goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/registration">
              <motion.span className="gold-btn inline-block cursor-pointer" whileHover={{ scale: 1.05 }}>Start Your Journey</motion.span>
            </Link>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-yellow-400/50 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 transition"
            >
              ⭐ Read Google Reviews
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
