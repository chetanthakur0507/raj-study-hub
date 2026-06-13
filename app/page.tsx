'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import SuccessStories from '@/components/SuccessStories';
import FAQ from '@/components/FAQ';
import { CONTACT, SITE } from '@/lib/constants';

export default function Home() {
  return (
    <PageLayout>
      <Hero />

      <AboutUs compact />

      <Amenities compact />

      <Gallery />

      <SuccessStories />

      <section className="section-padding bg-gradient-to-r from-yellow-500/10 via-yellow-600/5 to-yellow-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black gold-gradient-text mb-4">Ready to Join?</h2>
            <p className="text-gray-300 mb-8">
              Visit us at {CONTACT.address} or call {CONTACT.phoneDisplay}. Timings: {CONTACT.timings}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registration"><span className="gold-btn inline-block cursor-pointer">Register Now</span></Link>
              <Link href="/book-trial"><span className="inline-block px-8 py-3 border border-yellow-400/50 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 transition cursor-pointer">Book Free Trial</span></Link>
            </div>
            <p className="text-yellow-400/70 mt-8 font-semibold tracking-wide">{SITE.tagline}</p>
          </motion.div>
        </div>
      </section>

      <FAQ />
    </PageLayout>
  );
}
