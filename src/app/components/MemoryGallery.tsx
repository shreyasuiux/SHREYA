import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { X } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface Memory {
  id: number;
  imageUrl: string;
  caption: string;
  date: string;
}

export function MemoryGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const memories: Memory[] = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1514846528774-8de9d4a07023?w=600',
      caption: 'Our first date - couldn\'t stop smiling',
      date: 'Jan 2015',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1605381942640-0a262ce59788?w=600',
      caption: 'That spontaneous road trip',
      date: 'Mar 2016',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1560026478-50d79695b185?w=600',
      caption: 'Your birthday surprise',
      date: 'Dec 2017',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600',
      caption: 'Dancing in the rain',
      date: 'Jul 2018',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1529635997389-7676b6885fdf?w=600',
      caption: 'Beach sunset memories',
      date: 'Aug 2019',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600',
      caption: 'Cozy winter nights',
      date: 'Dec 2020',
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600',
      caption: 'Adventure awaits',
      date: 'May 2021',
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600',
      caption: 'Coffee dates forever',
      date: 'Sep 2022',
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-purple-50/50 via-pink-50/30 to-rose-50/50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Memory Gallery 📸
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Every moment with you is worth capturing
          </p>
        </motion.div>

        {/* Desktop: Masonry Grid, Mobile: Swipe Carousel */}
        <div className="hidden sm:block">
          <Masonry columnsCount={3} gutter="1.5rem">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedMemory(memory)}
                className="cursor-pointer group"
              >
                {/* Polaroid Card */}
                <div className="bg-white p-4 pb-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-rotate-1 hover:scale-105">
                  <div className="relative aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={memory.imageUrl}
                      alt={memory.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="mt-4 text-center space-y-1">
                    <p className="text-sm text-gray-700 italic">{memory.caption}</p>
                    <p className="text-xs text-gray-500">{memory.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>

        {/* Mobile Swipe Carousel */}
        <div className="sm:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 pb-4">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedMemory(memory)}
                className="flex-shrink-0 w-[280px] snap-center cursor-pointer"
              >
                <div className="bg-white p-4 pb-12 shadow-lg active:shadow-xl transition-shadow">
                  <div className="relative aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={memory.imageUrl}
                      alt={memory.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center space-y-1">
                    <p className="text-sm text-gray-700 italic">{memory.caption}</p>
                    <p className="text-xs text-gray-500">{memory.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute -top-12 right-0 text-white hover:text-rose-300 transition-colors p-2"
              >
                <X size={32} />
              </button>
              
              <div className="bg-white p-6 sm:p-8">
                <div className="relative aspect-video overflow-hidden mb-6">
                  <ImageWithFallback
                    src={selectedMemory.imageUrl}
                    alt={selectedMemory.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center space-y-2"
                >
                  <p className="text-lg sm:text-xl text-gray-800 italic">{selectedMemory.caption}</p>
                  <p className="text-sm text-gray-500">{selectedMemory.date}</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
