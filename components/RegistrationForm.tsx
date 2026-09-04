'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BOOKMISEAT, CONTACT, SITE } from '@/lib/constants';
import { submitToFormSubmit } from '@/lib/formSubmit';

const initialFormData = {
  name: '',
  gender: '',
  category: '',
  dob: '',
  mobile: '',
  email: '',
  fatherName: '',
  fatherMobile: '',
  aadharNo: '',
  address: '',
  exam: '',
};

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none';

function restrictDigits(value: string, maxLen: number) {
  return value.replace(/\D/g, '').slice(0, maxLen);
}

export default function RegistrationForm({ hideHeader = false }: { hideHeader?: boolean }) {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'mobile' || name === 'fatherMobile') {
      setFormData((prev) => ({ ...prev, [name]: restrictDigits(value, 10) }));
      return;
    }
    if (name === 'aadharNo') {
      setFormData((prev) => ({ ...prev, [name]: restrictDigits(value, 12) }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData(initialFormData);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.mobile.length !== 10) {
      setError('Mobile number must be exactly 10 digits');
      return;
    }
    if (formData.fatherMobile.length !== 10) {
      setError("Father's mobile number must be exactly 10 digits");
      return;
    }
    if (formData.aadharNo.length !== 12) {
      setError('Aadhaar number must be exactly 12 digits');
      return;
    }

    setLoading(true);

    try {
      await submitToFormSubmit(
        {
          form_type: 'Registration',
          ...formData,
        },
        `New Registration — ${formData.name} | ${SITE.name}`
      );
      setSubmitted(true);
    } catch {
      setError('Submission failed. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
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
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-green-400">✓</span>
            </div>
            <h2 className="text-3xl font-black text-yellow-400 mb-4">Registration Successful!</h2>
            <p className="text-gray-300 mb-2">
              Welcome to RAJ STUDY HUB, <strong className="text-white">{formData.name}</strong>!
            </p>
            <p className="text-gray-400 mb-4">
              Your details have been sent. We will contact you at{' '}
              <strong className="text-yellow-400">{formData.mobile}</strong> for seat confirmation.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Call: {CONTACT.phoneDisplay} | {CONTACT.emailDisplay}
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
              </div>
            </div>

            <motion.button onClick={resetForm} className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold" whileHover={{ scale: 1.05 }}>
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
        {!hideHeader && (
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
        )}

        <motion.form
          onSubmit={handleSubmit}
          className="premium-card p-8 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="As per ID proof" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-yellow-400 mb-2">Gender *</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required className={inputClass}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-yellow-400 mb-2">Category *</label>
              <select name="category" value={formData.category} onChange={handleChange} required className={inputClass}>
                <option value="">Select Category</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Date of Birth *</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className={inputClass} />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-yellow-400 mb-2">Mobile Number *</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                maxLength={10}
                inputMode="numeric"
                className={inputClass}
                placeholder="10 digit number only"
              />
              <p className="text-gray-500 text-xs mt-1">{formData.mobile.length}/10 digits</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-yellow-400 mb-2">Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="email@example.com" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-yellow-400 mb-2">Father&apos;s Name *</label>
              <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required className={inputClass} placeholder="Father / Guardian name" />
            </div>
            <div>
              <label className="block text-sm font-bold text-yellow-400 mb-2">Father&apos;s Mobile No. *</label>
              <input
                type="tel"
                name="fatherMobile"
                value={formData.fatherMobile}
                onChange={handleChange}
                required
                maxLength={10}
                inputMode="numeric"
                className={inputClass}
                placeholder="10 digit number only"
              />
              <p className="text-gray-500 text-xs mt-1">{formData.fatherMobile.length}/10 digits</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Aadhaar Number *</label>
            <input
              type="text"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
              required
              maxLength={12}
              inputMode="numeric"
              className={inputClass}
              placeholder="12 digit Aadhaar number"
            />
            <p className="text-gray-500 text-xs mt-1">{formData.aadharNo.length}/12 digits</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Address *</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required rows={2} className={`${inputClass} resize-none`} placeholder="Your complete address" />
          </div>

          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Exam / Course Preparing For *</label>
            <input type="text" name="exam" value={formData.exam} onChange={handleChange} required className={inputClass} placeholder="e.g. UPSC, NEET, SSC, Banking, etc." />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/30 rounded-lg px-4 py-3">{error}</p>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full gold-btn py-3.5 text-lg disabled:opacity-60"
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
          >
            {loading ? 'Submitting...' : 'Submit Registration'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
