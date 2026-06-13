'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md shadow-2xl shadow-yellow-500/10 border-b border-yellow-400/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <motion.div
            className="text-xl md:text-2xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            RAJ STUDY HUB
          </motion.div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className={`px-3 py-2 text-sm font-semibold transition relative group block ${
                    isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-transform origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </motion.span>
              </Link>
            );
          })}
        </nav>

        <Link href="/registration" className="hidden lg:block">
          <motion.span
            className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-yellow-500/40 transition inline-block text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.span>
        </Link>

        <motion.button
          className="lg:hidden text-yellow-400 p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </motion.button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden"
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-gray-950 border-t border-yellow-400/20 max-h-[70vh] overflow-y-auto">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2.5 rounded-lg font-medium transition ${
                pathname === item.href
                  ? 'text-yellow-400 bg-yellow-400/10'
                  : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/registration" onClick={() => setIsOpen(false)}>
            <span className="block w-full text-center px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-bold mt-3">
              Join Now
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
