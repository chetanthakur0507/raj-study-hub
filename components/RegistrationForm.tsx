'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CONTACT, SITE } from '@/lib/constants';
import { notifyOwnerWhatsApp, submitFormDataToFormSubmit } from '@/lib/formSubmit';
import { formatRegistrationMessage, type RegistrationData } from '@/lib/formatRegistration';

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
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
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

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPG, PNG, etc.)');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Photo size must be under 5MB');
      return;
    }
    setError('');
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData(initialFormData);
    setPhoto(null);
    setPhotoPreview(null);
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
    if (!photo) {
      setError('Please upload your photo');
      return;
    }

    setLoading(true);

    const registrationData: RegistrationData = { ...formData, hasPhoto: true };
    const whatsappMessage = formatRegistrationMessage(registrationData);

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
    payload.append('form_type', 'Registration');
    payload.append('attachment', photo);

    try {
      await submitFormDataToFormSubmit(
        payload,
        `New Registration — ${formData.name} | ${SITE.name}`
      );
      notifyOwnerWhatsApp(whatsappMessage);
      setSubmitted(true);
    } catch {
      setError('Submission failed. Please try again or contact us directly on WhatsApp.');
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
            <div className="text-5xl text-yellow-400 mb-4">✓</div>
            <h2 className="text-3xl font-black text-yellow-400 mb-4">Registration Successful!</h2>
            <p className="text-gray-300 mb-2">
              Welcome to RAJ STUDY HUB, <strong className="text-white">{formData.name}</strong>!
            </p>
            <p className="text-gray-400 mb-4">
              Your details have been sent. We will contact you at{' '}
              <strong className="text-yellow-400">{formData.mobile}</strong> for seat confirmation.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Owner: {CONTACT.phoneDisplay} | {CONTACT.email}
            </p>
            <motion.button onClick={resetForm} className="gold-btn" whileHover={{ scale: 1.05 }}>
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
                <option value="EWS">EWS</option>
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
            <label className="block text-sm font-bold text-yellow-400 mb-2">Upload Photo *</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/20 text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-400 file:text-black file:font-bold file:cursor-pointer"
            />
            {photoPreview && (
              <img src={photoPreview} alt="Preview" className="mt-3 w-24 h-24 object-cover rounded-lg border border-yellow-400/30" loading="lazy" decoding="async" />
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Address *</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required rows={2} className={`${inputClass} resize-none`} placeholder="Your complete address" />
          </div>

          <div>
            <label className="block text-sm font-bold text-yellow-400 mb-2">Exam / Course Preparing For *</label>
            <input type="text" name="exam" value={formData.exam} onChange={handleChange} required className={inputClass} placeholder="e.g. UPSC, NEET, SSC, Banking, etc." />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            
            
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
