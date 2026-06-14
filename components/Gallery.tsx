'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const gallery = [
  { id: 1, category: 'Study Hall', image: '/library.jpeg', title: 'Main Study Hall' },
  { id: 2, category: 'Reading', image: '/library%20environment.jpeg', title: 'Reading Area' },
  { id: 3, category: 'Study Hall', image: '/achievement.jpeg', title: 'Achievement Wall' },
  { id: 4, category: 'Workspace', image: '/library.jpeg', title: 'Focused Study Zone' },
  { id: 5, category: 'Library', image: '/library%20environment.jpeg', title: 'Library Interior' },
  { id: 6, category: 'Reading', image: '/achievement.jpeg', title: 'Quiet Reading Corner' },
  { id: 7, category: 'Study Hall', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop&q=80', title: 'Premium Study Space' },
  { id: 8, category: 'Workspace', image: 'https://images.unsplash.com/photo-1497633481100-f3ad39e0b94d?w=600&h=400&fit=crop&q=80', title: 'Comfortable Seating' },
  { id: 9, category: 'Library', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&q=80', title: 'Book Collection Area' },
];

export default function Gallery({ hideHeader = false }: { hideHeader?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Study Hall', 'Reading', 'Workspace', 'Library'];
  const filtered = selectedCategory === 'All' ? gallery : gallery.filter((g) => g.category === selectedCategory);

  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0e14] to-[#141c28]">
      <div className="max-w-6xl mx-auto">
        {!hideHeader && (
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">OUR SPACES</p>
            <h2 className="text-4xl md:text-5xl font-black gold-gradient-text mb-4">Gallery</h2>
            <p className="text-gray-300">Explore our premium study facilities</p>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6" />
          </motion.div>
        )}

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                  : 'bg-gray-900 text-gray-400 border border-gray-700 hover:border-yellow-400/50 hover:text-yellow-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group rounded-2xl overflow-hidden h-64 border border-yellow-400/10 hover:border-yellow-400/40 transition-colors"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover gallery-img"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-5">
                <div>
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-yellow-400 text-sm">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
