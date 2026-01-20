import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-white/80 text-sm tracking-wide">Scroll to explore</span>
        <ChevronDown size={24} className="text-white/80" />
      </div>
    </motion.div>
  );
}
