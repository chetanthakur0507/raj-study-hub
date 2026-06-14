'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const amenities = [
  {
    icon: '💻',
    name: 'Fully Digitalized Study Environment',
    desc: 'Modern digital systems for attendance, access management, and student convenience.',
  },
  {
    icon: '📱',
    name: 'QR-Based Smart Access Control',
    desc: 'Secure QR-based entry for authorized students — safety and discipline maintained.',
  },
  {
    icon: '📊',
    name: 'Digital Attendance Tracking',
    desc: 'Monitor your study hours and maintain consistency in your preparation.',
  },
  {
    icon: '📶',
    name: 'High-Speed Wi-Fi',
    desc: 'Reliable internet for online classes, research, practice tests, and resources.',
  },
  {
    icon: '❄️',
    name: 'Air-Conditioned Environment',
    desc: 'Comfortable atmosphere throughout the year for distraction-free studying.',
  },
  {
    icon: '🔌',
    name: 'Individual Charging Points',
    desc: 'Dedicated charging at study desks to keep your devices powered all day.',
  },
  {
    icon: '💡',
    name: 'Eye-Comfort Lighting',
    desc: 'Well-planned lighting that reduces eye strain for reading and studying.',
  },
  {
    icon: '⚡',
    name: '24×7 Power Backup',
    desc: 'Uninterrupted study sessions with reliable power backup system.',
  },
  {
    icon: '📹',
    name: 'CCTV Security',
    desc: 'Complete CCTV surveillance for a safe and secure environment.',
  },
  {
    icon: '🤫',
    name: 'Peaceful Study Environment',
    desc: 'Disciplined and quiet atmosphere for maximum concentration.',
  },
  {
    icon: '👥',
    name: 'Dedicated Study Community',
    desc: 'Join focused learners who inspire and motivate each other towards success.',
  },
];

export default function Amenities({ compact = false, hideHeader = false }: { compact?: boolean; hideHeader?: boolean }) {
  const displayItems = compact ? amenities.slice(0, 6) : amenities;

  return (
    <section className="section-padding bg-gradient-to-b from-[#141c28] to-[#0a0e14]">
      <div className="max-w-6xl mx-auto">
        {!hideHeader && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">PREMIUM FEATURES</p>
            <h2 className="text-4xl md:text-5xl font-black gold-gradient-text mb-4">Our Amenities</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              At RAJ STUDY HUB, our amenities are carefully designed to provide students with comfort, convenience, security, and a distraction-free atmosphere.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6" />
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((amenity, index) => (
            <motion.div
              key={amenity.name}
              className="premium-card p-6 group hover:shadow-xl hover:shadow-yellow-500/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <motion.span
                className="text-4xl block mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
              >
                {amenity.icon}
              </motion.span>
              <h3 className="text-lg font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition">
                {amenity.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{amenity.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 premium-card p-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-black text-yellow-400 mb-4">Book a Trial</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Experience our facilities firsthand and discover how the right environment can make a difference in your preparation journey.
          </p>
          <Link href="/book-trial">
            <motion.span className="gold-btn inline-block cursor-pointer" whileHover={{ scale: 1.05 }}>
              Book Free Trial
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
