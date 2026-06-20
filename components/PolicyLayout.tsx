'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { CONTACT, SITE } from '@/lib/constants';

interface PolicyLayoutProps {
  title: string;
  children: ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
  return (
    <article className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-yellow-400 mb-8 pb-4 border-b border-yellow-400/20">
            {title}
          </h2>
          <div className="prose-policy space-y-6 text-gray-300 leading-relaxed">
            {children}
          </div>
          <div className="mt-12 p-6 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 rounded-xl border border-yellow-400/20">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-yellow-400">📍</span> {CONTACT.address}</p>
              <p>
                <span className="text-yellow-400">📞</span>{' '}
                <a href={`tel:${CONTACT.phone}`} className="hover:text-yellow-400 transition">
                  {CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-yellow-400">📧</span>{' '}
                <a href={`mailto:${CONTACT.emailDisplay}`} className="hover:text-yellow-400 transition">
                  {CONTACT.emailDisplay}
                </a>
              </p>
            </div>
          </div>
          <p className="text-center text-yellow-400/80 font-semibold mt-8 tracking-wide">
            {SITE.tagline}
          </p>
        </motion.div>
      </div>
    </article>
  );
}
