'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const gallery = [
  { id: 1, category: 'Study Hall', image: '/library.jpeg', title: 'Main Study Hall' },
  { id: 2, category: 'Reading', image: '/library%20environment.jpeg', title: 'Reading Area' },
  { id: 3, category: 'Study Hall', image: '/achievement.jpeg', title: 'Achievement Wall' },
  { id: 9, category: 'Library', image: '/comfortable  sitting.png', title: 'Comfortable Seating' },
  { id: 4, category: 'Library', image: '/our facilities.png', title: 'Our Facilities' },
  { id: 5, category: 'Library', image: '/attendance tracking.png', title: 'Attendance Tracking' },
  { id: 6, category: 'Library', image: '/track daily activity.png', title: 'Tracking Daily Activity' },
 
];

type LightboxItem = { image: string; title: string };

export default function Gallery({ hideHeader = false }: { hideHeader?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);
  const categories = ['All', 'Study Hall', 'Reading', 'Workspace', 'Library'];
  const filtered = selectedCategory === 'All' ? gallery : gallery.filter((g) => g.category === selectedCategory);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightbox]);

  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0e14] to-[#141c28]">
      <div className="max-w-6xl mx-auto">
        {!hideHeader && (
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">OUR SPACES</p>
            <h2 className="text-4xl md:text-5xl font-black gold-gradient-text mb-4">Gallery</h2>
            <p className="text-gray-300">Explore our premium study facilities — tap any photo to view full size</p>
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
          {filtered.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setLightbox({ image: item.image, title: item.title })}
              className="relative group rounded-2xl overflow-hidden h-64 border border-yellow-400/10 hover:border-yellow-400/40 transition-colors text-left cursor-zoom-in"
              whileHover={{ scale: 1.02 }}
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
            </motion.button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-yellow-400 text-3xl font-bold z-10"
            aria-label="Close"
          >
            ×
          </button>
          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-yellow-400 font-bold mt-4 text-center">{lightbox.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
