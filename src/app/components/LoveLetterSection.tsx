import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export function LoveLetterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const loveLetterText = `My Dearest Love,

As I sit here thinking about us, my heart overflows with gratitude. Eleven years ago, when our paths crossed at Siddhivinayak Mandir, I never imagined that moment would become the best chapter of my life.

You are my anchor in storms and my celebration in joy. Through every challenge we've faced, every milestone we've achieved, and every quiet moment we've shared, my love for you has only grown deeper.

Thank you for choosing me every single day. Thank you for your patience, your kindness, and your unwavering support. You've made me a better person simply by being yourself.

Here's to our past, our present, and the beautiful future we're building together. I promise to love you fiercely, laugh with you often, and stand by your side through every season of life.

Forever yours,
With all my heart ❤️`;

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    const typingSpeed = 30; // milliseconds per character

    const typingInterval = setInterval(() => {
      if (currentIndex < loveLetterText.length) {
        setDisplayedText(loveLetterText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50/30 to-rose-50/30"
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiLz48L3N2Zz4=')]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-amber-700 to-rose-600 bg-clip-text text-transparent">
            A Letter To You 💌
          </h2>
        </motion.div>

        {/* Paper Letter */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Shadow layers for depth */}
          <div className="absolute inset-0 bg-amber-200/20 blur-xl transform translate-y-4" />
          <div className="absolute inset-0 bg-rose-200/20 blur-2xl transform translate-y-6" />

          {/* Paper card */}
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200/50 shadow-2xl p-8 sm:p-12 rounded-lg">
            {/* Vintage corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/40" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-amber-400/40" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-amber-400/40" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/40" />

            {/* Letter content */}
            <div
              className="text-gray-800 whitespace-pre-line leading-relaxed text-base sm:text-lg"
              style={{
                fontFamily: "'Indie Flower', 'Dancing Script', cursive",
                textShadow: '0 1px 2px rgba(0,0,0,0.05)',
              }}
            >
              {displayedText}
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 bg-rose-600 ml-1"
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
