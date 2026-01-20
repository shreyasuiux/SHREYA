import { motion } from 'motion/react';
import { HeartLogo } from './HeartLogo';

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 py-4 px-4 sm:px-6 lg:px-8"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="container mx-auto flex justify-center">
        {/* Logo with glassmorphism background */}
        <motion.div
          className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-full p-3 shadow-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <HeartLogo />
        </motion.div>
      </div>
    </motion.header>
  );
}
