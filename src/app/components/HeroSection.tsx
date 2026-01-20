import { motion } from 'motion/react';
import { ScrollIndicator } from './ScrollIndicator';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HeroSection() {
  const handleCTAClick = () => {
    const storySection = document.getElementById('love-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 via-transparent to-pink-500/10" />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <motion.div
              className="flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                  11 Years Of Us ❤️
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                  Since 21 January 2015 — Still falling for you every day
                </p>
              </motion.div>

              {/* Glassmorphism CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center lg:justify-start"
              >
                <button
                  onClick={handleCTAClick}
                  className="group relative px-8 py-4 sm:px-10 sm:py-5 rounded-full overflow-hidden backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 text-lg sm:text-xl text-rose-700 group-hover:text-white transition-colors duration-300">
                    Start Our Love Story
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Image Container */}
            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Glassmorphism Container */}
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl p-3 sm:p-4">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1514846528774-8de9d4a07023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGxvdmV8ZW58MXx8fHwxNzY4ODE1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Romantic couple"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full blur-2xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.6, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
