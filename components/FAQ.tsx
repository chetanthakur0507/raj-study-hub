'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { CONTACT } from '@/lib/constants';

const faqData = [
  { id: 1, question: 'What are the study hub timings?', answer: 'RAJ STUDY HUB is open from 07:00 AM to 07:00 PM (7AM - 7PM) daily.' },
  { id: 2, question: 'Is a free trial available?', answer: 'Yes! You can book a free trial visit to experience our facilities firsthand before joining. Visit our Book Trial page to schedule your visit.' },
  { id: 3, question: 'Do you have WiFi?', answer: 'Yes, we provide high-speed Wi-Fi for online classes, research, practice tests, and educational resources.' },
  { id: 4, question: 'Is the study space air-conditioned?', answer: 'Absolutely! The entire facility is air-conditioned for a comfortable study environment throughout the year.' },
  { id: 5, question: 'How does QR-based entry work?', answer: 'Registered students receive QR-based access for secure entry. Do not share your QR code or login credentials with anyone.' },
  { id: 6, question: 'Is CCTV security available?', answer: 'Yes, the entire facility is monitored through CCTV surveillance for student safety and security.' },
  { id: 7, question: 'Are charging points available?', answer: 'Yes, individual charging points are available at study desks so you can keep your devices powered throughout the day.' },
  { id: 8, question: 'Is power backup available?', answer: 'Yes, we have 24×7 power backup to ensure uninterrupted study sessions.' },
  { id: 9, question: 'Where is RAJ STUDY HUB located?', answer: 'We are located Near Panchayat Ghar, Dhakia. You can find us on Google Maps by searching "RAJ STUDY HUB".' },
  { id: 10, question: 'How can I register for membership?', answer: 'Fill out the Registration Form on our website or visit us directly. Our team will guide you through the admission process.' },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-[#141c28] to-[#0a0e14]">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black gold-gradient-text mb-4">Frequently Asked Questions</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6" />
        </motion.div>

        <div className="space-y-3">
          {faqData.map((faq) => (
            <motion.div key={faq.id} className="premium-card overflow-hidden" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-yellow-400/5 transition"
              >
                <span className="font-bold text-yellow-400 pr-4">{faq.question}</span>
                <motion.span animate={{ rotate: expandedId === faq.id ? 180 : 0 }} className="text-yellow-400 flex-shrink-0">▼</motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: expandedId === faq.id ? 'auto' : 0, opacity: expandedId === faq.id ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 premium-card p-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-yellow-400 mb-3">Still have questions?</h3>
          <p className="text-gray-400 mb-5">We&apos;re happy to help you with admissions, trials, and more.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${CONTACT.phone}`} className="gold-btn inline-block text-center">Call Us</a>
            <Link href="/contact" className="inline-block px-8 py-3 border border-yellow-400/50 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 transition text-center">Contact Page</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
