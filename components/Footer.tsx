'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CONTACT, GOOGLE_REVIEWS_URL, LOGO, SITE } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-950 to-black text-gray-200 border-t border-yellow-400/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src={LOGO} alt={`${SITE.name} logo`} fill className="object-contain rounded-lg" />
              </div>
              <span className="text-lg font-black bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent group-hover:opacity-90">
                {SITE.name}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{SITE.tagline}</p>
            <p className="text-gray-500 text-sm">{CONTACT.address}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Amenities', href: '/amenities' },
                { label: 'Book Trial', href: '/book-trial' },
                { label: 'Registration', href: '/registration' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-yellow-400 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">Policies</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { label: 'Privacy & Refund Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Shipping Policy', href: '/shipping-policy' },
                { label: 'Instructions', href: '/instructions' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-yellow-400 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href={`tel:${CONTACT.phone}`} className="hover:text-yellow-400 transition">
                  📞 {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  💬 WhatsApp: {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rajstudyhub?igsh=NmV4OWZtZTEzcHY="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  ♾️ Instagram
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.emailDisplay}`} className="hover:text-yellow-400 transition">
                  📧 {CONTACT.emailDisplay}
                </a>
              </li>
              <li>⏰ Open {CONTACT.timings}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-400/20 pt-8 text-center text-gray-500 text-sm space-y-3">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved. | Dedicated to Shri Raj Kumar Singh
          </p>
          <p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline font-semibold"
            >
              ⭐ Read Our Google Reviews
            </a>
          </p>
          <p>
            Website is designed and developed by{' '}
            <a href="https://chetanthakur.tech" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
              Chetan Thakur
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
