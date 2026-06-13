'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CONTACT, SITE } from '@/lib/constants';

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
            <h3 className="text-xl font-black bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-4">
              {SITE.name}
            </h3>
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
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-yellow-400 transition">
                  📧 {CONTACT.email}
                </a>
              </li>
              <li>⏰ {CONTACT.timings}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-400/20 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved. | Dedicated to Shri Raj Kumar Singh
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
