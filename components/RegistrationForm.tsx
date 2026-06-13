'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    exam: '',
    shift: 'Morning (7AM - 1PM)',
    seatType: 'Open Study Desk',
    idProof: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-gradient-to-b from-[#141c28] to-[#0a0e14]">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="premium-card p-12 text-center border-yellow-400/40"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="text-5xl text-yellow-400 mb-4">✓</div>
            <h2 className="text-3xl font-black text-yellow-400 mb-4">Registration Successful!</h2>
            <p className="text-gray-300 mb-2">
              Welcome to RAJ STUDY HUB, <strong className="text-white">{formData.name}</strong>!
            </p>
            <p className="text-gray-400 mb-6">
              Your admission form has been submitted. We will contact you at <strong className="text-yellow-400">{formData.mobile}</strong> regarding seat confirmation and payment details.
            </p>
            <motion.button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', mobile: '', email: '', address: '', exam: '', shift: 'Morning (7AM - 1PM)', seatType: 'Open Study Desk', idProof: '' });
              }}
              className="gold-btn"
              whileHover={{ scale: 1.05 }}
            >
              Submit Another Form
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-b from-[#141c28] to-[#0a0e14]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">ADMISSION</p>
          <h2 className="text-4xl md:text-5xl font-black gold-gradient-text mb-4">Registration Form</h2>
          <p className="text-gray-300">Fill in your details to join RAJ STUDY HUB — your premium study destination.</p>
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
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="As per ID proof" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-yellow-400 mb-2">Mobile Number *</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required pattern="[0-9]{10}" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="10 digit number" />
            </div>
            <div>
              <label className="block text-sm font-bold text-yellow-400 mb-2">Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="email@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Address *</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required rows={2} className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none" placeholder="Your complete address" />
          </div>
          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Exam / Course Preparing For *</label>
            <input type="text" name="exam" value={formData.exam} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="e.g. UPSC, NEET, SSC, Banking, etc." />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-yellow-400 mb-2">Preferred Shift</label>
              <select name="shift" value={formData.shift} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                <option>Morning (7AM - 1PM)</option>
                <option>Afternoon (1PM - 4PM)</option>
                <option>Full Day (7AM - 7PM)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-yellow-400 mb-2">Seat Type</label>
              <select name="seatType" value={formData.seatType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                <option>Open Study Desk</option>
                <option>Individual Cabin</option>
                <option>Premium Cabin</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">ID Proof Number *</label>
            <input type="text" name="idProof" value={formData.idProof} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="Aadhaar / Voter ID / Driving License number" />
          </div>
          <p className="text-gray-500 text-xs">
            By submitting this form, you agree to follow all library rules and guidelines. Registration fees are non-refundable.
          </p>
          <motion.button type="submit" className="w-full gold-btn py-3.5 text-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Submit Registration
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
