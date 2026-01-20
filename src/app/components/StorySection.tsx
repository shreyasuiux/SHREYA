import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface StorySectionProps {
  id?: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export function StorySection({ id, title, date, description, imageUrl, reverse = false }: StorySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id={id}
      ref={ref}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          
          {/* Image Side */}
          <motion.div
            className={`relative ${reverse ? 'lg:col-start-2' : ''}`}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/5 border border-white/20 p-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating decoration */}
            <motion.div
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-rose-300/20 to-purple-300/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            className={`space-y-4 sm:space-y-6 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Date Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-700 text-sm sm:text-base tracking-wide">
                {date}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {description}
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
