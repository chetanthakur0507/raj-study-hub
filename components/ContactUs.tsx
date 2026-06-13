'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CONTACT } from '@/lib/constants';

const assistanceItems = [
  'New Admissions',
  'Trial Bookings',
  'Seat Availability',
  'Membership Information',
  'Facilities & Services',
  'General Inquiries',
];

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: '📍', title: 'Address', details: CONTACT.address, link: 'https://www.google.com/maps/search/?api=1&query=RAJ+STUDY+HUB+Dhakia' },
    { icon: '📞', title: 'Phone', details: CONTACT.phoneDisplay, link: `tel:${CONTACT.phone}` },
    { icon: '💬', title: 'WhatsApp', details: CONTACT.phoneDisplay, link: `https://wa.me/${CONTACT.whatsapp}` },
    { icon: '✉️', title: 'Email', details: CONTACT.email, link: `mailto:${CONTACT.email}` },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0e14] to-[#141c28]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">REACH OUT</p>
          <h2 className="text-4xl md:text-5xl font-black gold-gradient-text mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Whether you&apos;re interested in joining, booking a trial, learning about our facilities, or have any questions — we&apos;re here to help.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div className="space-y-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                target={info.title === 'Address' ? '_blank' : undefined}
                rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-5 premium-card hover:border-yellow-400/50 transition group"
              >
                <span className="text-3xl">{info.icon}</span>
                <div>
                  <h3 className="font-bold text-yellow-400 group-hover:text-yellow-300">{info.title}</h3>
                  <p className="text-gray-300">{info.details}</p>
                </div>
              </a>
            ))}

            <div className="premium-card p-6">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">Study Hub Timings</h3>
              <p className="text-2xl font-black text-white">{CONTACT.timings}</p>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-bold text-yellow-400 mb-4">Need Assistance?</h3>
              <ul className="space-y-2">
                {assistanceItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="text-yellow-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="premium-card p-10 h-full flex items-center justify-center text-center border-yellow-400/40">
                <div>
                  <div className="text-5xl text-yellow-400 mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-300">We will get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-card p-8 space-y-5">
                <div>
                  <label className="block text-sm font-bold text-yellow-400 mb-2">Your Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-yellow-400 mb-2">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="10 digit number" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-yellow-400 mb-2">Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-yellow-400 mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none" placeholder="How can we help you?" />
                </div>
                <motion.button type="submit" className="w-full gold-btn py-3" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 rounded-2xl overflow-hidden border border-yellow-400/20 h-96 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={CONTACT.mapEmbed}
            title="RAJ STUDY HUB Location"
          />
        </motion.div>
      </div>
    </section>
  );
}
