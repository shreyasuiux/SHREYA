import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Globe, Home, Heart, Sparkles, Baby, X } from 'lucide-react';

interface Dream {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  details: string;
}

export function FutureDreamBoard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedDream, setSelectedDream] = useState<Dream | null>(null);

  const dreams: Dream[] = [
    {
      id: 1,
      icon: <Globe className="w-8 h-8" />,
      title: 'Travel Goals',
      description: 'Explore the world together',
      color: 'from-blue-500 to-cyan-500',
      details: 'From the romantic streets of Paris to the serene beaches of Maldives, from the ancient temples of Kyoto to the vibrant markets of Marrakech - we\'ll create memories in every corner of this beautiful world. Each journey will be an adventure, each destination a new chapter in our story.',
    },
    {
      id: 2,
      icon: <Home className="w-8 h-8" />,
      title: 'Dream Home',
      description: 'Build our perfect sanctuary',
      color: 'from-amber-500 to-orange-500',
      details: 'A cozy home filled with laughter and love. A garden where we can grow flowers together, a kitchen where we cook our favorite meals, a living room for movie nights, and a balcony to watch sunsets. A place that\'s truly ours, where every corner holds a piece of our hearts.',
    },
    {
      id: 3,
      icon: <Heart className="w-8 h-8" />,
      title: 'Pet Life',
      description: 'Fur babies to love',
      color: 'from-pink-500 to-rose-500',
      details: 'A playful puppy or a cuddly kitten (or both!) to complete our family. Imagine morning walks together, coming home to wagging tails and purrs, and watching them grow just like our love. They\'ll be loved, spoiled, and part of every adventure we take.',
    },
    {
      id: 4,
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Marriage',
      description: 'Our forever promise',
      color: 'from-purple-500 to-pink-500',
      details: 'The day we officially declare our love in front of everyone. A beautiful ceremony, surrounded by loved ones, making vows that echo what our hearts have known for years. It\'ll be the celebration of us - our journey, our love, and the beginning of our forever.',
    },
    {
      id: 5,
      icon: <Baby className="w-8 h-8" />,
      title: 'Family',
      description: 'Little versions of us',
      color: 'from-rose-500 to-red-500',
      details: 'One day, when we\'re ready, we\'ll welcome little ones who have your smile and my laugh. Teaching them about love through the example we set every day. Bedtime stories, first steps, birthday parties, and unconditional love. Our legacy of love continuing through them.',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-pink-50/30 via-purple-50/40 to-blue-50/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Future Together ✨
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Dreams we'll make reality, hand in hand
          </p>
        </motion.div>

        {/* Dreams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dreams.map((dream, index) => (
            <motion.div
              key={dream.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedDream(dream)}
              className="cursor-pointer group"
            >
              <div className="relative h-full backdrop-blur-xl bg-white/50 border-2 border-transparent hover:border-white/80 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Soft glow border effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${dream.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${dream.color} text-white shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {dream.icon}
                  </motion.div>

                  {/* Text */}
                  <div>
                    <h3 className={`text-xl sm:text-2xl mb-2 bg-gradient-to-r ${dream.color} bg-clip-text text-transparent`}>
                      {dream.title}
                    </h3>
                    <p className="text-sm text-gray-600">{dream.description}</p>
                  </div>

                  {/* Tap hint */}
                  <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Tap to explore
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expand Modal */}
      <AnimatePresence>
        {selectedDream && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDream(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDream(null)}
                className="absolute -top-12 right-0 text-white hover:text-rose-300 transition-colors p-2 z-10"
              >
                <X size={32} />
              </button>

              <div className="relative backdrop-blur-xl bg-white/95 border-2 border-white/80 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedDream.color} opacity-10`} />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${selectedDream.color} text-white shadow-xl`}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {selectedDream.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-3xl sm:text-4xl bg-gradient-to-r ${selectedDream.color} bg-clip-text text-transparent`}>
                    {selectedDream.title}
                  </h3>

                  {/* Details */}
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {selectedDream.details}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
