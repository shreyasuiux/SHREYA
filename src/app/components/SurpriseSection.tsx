import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';

export function SurpriseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isRevealed, setIsRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Heart confetti
  const confettiHearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.5,
    x: Math.random() * 100,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.5,
  }));

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-pink-50/30 via-rose-50/40 to-purple-50/30"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Big Romantic Card */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 border-2 border-white/80 rounded-3xl p-8 sm:p-16 shadow-2xl overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-pink-500/10 to-purple-500/10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
              {/* Icon */}
              <motion.div
                className="inline-flex p-6 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-2xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Gift size={48} />
              </motion.div>

              {/* Main Message */}
              <div className="space-y-4">
                <motion.h2
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  I Choose You.
                  <br />
                  Always ❤️
                </motion.h2>

                <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
                  Every single day, in every single way, my heart chooses you
                </p>
              </div>

              {/* Surprise Button */}
              {!isRevealed ? (
                <motion.button
                  onClick={handleReveal}
                  className="group relative px-10 py-5 sm:px-12 sm:py-6 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden touch-manipulation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />

                  <div className="relative flex items-center gap-3 text-xl sm:text-2xl">
                    <Sparkles size={28} />
                    <span>Open Surprise</span>
                    <Sparkles size={28} />
                  </div>
                </motion.button>
              ) : (
                /* Revealed Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="space-y-6"
                >
                  {/* Surprise Message Card */}
                  <div className="backdrop-blur-lg bg-white/80 border-2 border-rose-200 rounded-2xl p-6 sm:p-10 shadow-xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex justify-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                          >
                            <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-rose-500 text-rose-500" />
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                        You Are My Forever
                      </p>

                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
                        Thank you for 11 incredible years. Thank you for your patience, your love, and your beautiful soul. I can't wait to spend the rest of my life making you as happy as you make me. Here's to our forever, my love.
                      </p>

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: 'spring', damping: 10 }}
                        className="text-6xl sm:text-7xl"
                      >
                        💕
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Heart Confetti Animation */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {confettiHearts.map((heart) => (
              <motion.div
                key={heart.id}
                className="absolute"
                style={{
                  left: `${heart.x}%`,
                  top: '-10%',
                }}
                initial={{ y: 0, opacity: 1, rotate: 0, scale: heart.scale }}
                animate={{
                  y: window.innerHeight + 100,
                  opacity: [1, 1, 0],
                  rotate: heart.rotation,
                  x: [0, (Math.random() - 0.5) * 200],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: heart.delay,
                  ease: 'easeIn',
                }}
              >
                <Heart className="w-8 h-8 fill-rose-500 text-rose-500" />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
