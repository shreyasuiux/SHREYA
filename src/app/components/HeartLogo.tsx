import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function HeartLogo() {
  return (
    <motion.div
      className="relative inline-flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      {/* Heart Shape Container */}
      <div className="relative">
        {/* Outer glow */}
        <motion.div
          className="absolute inset-0 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Heart className="w-32 h-32 sm:w-40 sm:h-40 fill-rose-500 text-rose-500" />
        </motion.div>

        {/* Main heart with gradient */}
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-32 h-32 sm:w-40 sm:h-40"
          >
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="2" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M80 140 C 80 140, 20 90, 20 60 C 20 30, 40 20, 60 20 C 75 20, 80 30, 80 30 C 80 30, 85 20, 100 20 C 120 20, 140 30, 140 60 C 140 90, 80 140, 80 140 Z"
              fill="url(#heartGradient)"
              filter="url(#shadow)"
            />
          </svg>

          {/* Text inside heart */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <motion.div
              className="text-center leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-1">
                <span className="text-lg sm:text-xl font-bold tracking-tight drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                  SHREYAS
                </span>
              </div>
              <motion.div
                className="flex items-center justify-center my-0.5"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="w-3 h-3 fill-white text-white" />
              </motion.div>
              <div className="flex items-center justify-center gap-1">
                <span className="text-lg sm:text-xl font-bold tracking-tight drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                  SONA
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
