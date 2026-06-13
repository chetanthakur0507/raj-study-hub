'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BOOKMISEAT } from '@/lib/constants';

export default function BookFreeTrial() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    preferredDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-gradient-to-b from-[#0a0e14] to-[#141c28]">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="premium-card p-12 text-center border-yellow-400/40"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <motion.div
              className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-4xl text-green-400">✓</span>
            </motion.div>
            <h2 className="text-3xl font-black text-yellow-400 mb-4">Trial Booked Successfully!</h2>
            <p className="text-gray-300 mb-2">
              Thank you, <strong className="text-white">{formData.name}</strong>! We have received your trial booking request.
            </p>
            <p className="text-gray-400 mb-8">
              Our team will contact you at <strong className="text-yellow-400">{formData.mobile}</strong> to confirm your visit.
            </p>

            <div className="premium-card p-6 mb-6 bg-yellow-400/5">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">Download BookMiSeat App</h3>
              <p className="text-gray-400 text-sm mb-4">
                Manage your seat bookings, track attendance, and stay updated — all from the BookMiSeat app.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={BOOKMISEAT.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black border border-yellow-400/30 rounded-xl hover:border-yellow-400 transition"
                >
                  <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                  </svg>
                  <span className="text-white font-semibold text-sm">Google Play</span>
                </a>
                <a
                  href={BOOKMISEAT.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 gold-btn text-sm"
                >
                  Visit BookMiSeat
                </a>
              </div>
            </div>

            <motion.button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', mobile: '', email: '', preferredDate: '', message: '' });
              }}
              className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Book Another Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0e14] to-[#141c28]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">START YOUR JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-black gold-gradient-text mb-4">Book Free Trial</h2>
          <p className="text-gray-300">
            Experience our facilities firsthand and discover how the right environment can make a difference in your preparation journey.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="premium-card p-8 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Mobile Number *</label>
            <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required pattern="[0-9]{10}" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="10 digit mobile number" />
          </div>
          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="email@example.com" />
          </div>
          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Preferred Visit Date *</label>
            <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Message (Optional)</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none" placeholder="Any specific requirements or questions?" />
          </div>
          <motion.button type="submit" className="w-full gold-btn py-3.5 text-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Book My Free Trial
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
