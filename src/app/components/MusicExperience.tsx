import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Play, Pause, Music2 } from 'lucide-react';

export function MusicExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isPlaying, setIsPlaying] = useState(false);

  const playlist = [
    { title: 'Perfect', artist: 'Ed Sheeran' },
    { title: 'All of Me', artist: 'John Legend' },
    { title: 'A Thousand Years', artist: 'Christina Perri' },
    { title: 'Thinking Out Loud', artist: 'Ed Sheeran' },
  ];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-blue-50/30 via-purple-50/40 to-pink-50/30"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Love Soundtrack 🎵
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Songs that remind us of each other
          </p>
        </motion.div>

        {/* Music Player Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Floating glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-3xl transform translate-y-4" />

          {/* Player Container */}
          <div className="relative backdrop-blur-xl bg-white/60 border border-white/80 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col items-center space-y-8">
              {/* Vinyl Disk Animation */}
              <div className="relative">
                {/* Outer glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50"
                  animate={{
                    scale: isPlaying ? [1, 1.2, 1] : 1,
                    opacity: isPlaying ? [0.5, 0.7, 0.5] : 0.5,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isPlaying ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />

                {/* Vinyl Disk */}
                <motion.div
                  className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl overflow-hidden"
                  animate={{
                    rotate: isPlaying ? 360 : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: isPlaying ? Infinity : 0,
                    ease: 'linear',
                  }}
                >
                  {/* Vinyl grooves */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 rounded-full border border-gray-700/30"
                      style={{
                        margin: `${i * 8}px`,
                      }}
                    />
                  ))}

                  {/* Center label */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-xl">
                    <Music2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  {/* Reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-full" />
                </motion.div>
              </div>

              {/* Now Playing */}
              <div className="text-center space-y-2">
                <motion.p
                  className="text-sm text-gray-500 uppercase tracking-wide"
                  animate={{ opacity: isPlaying ? [1, 0.5, 1] : 1 }}
                  transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
                >
                  {isPlaying ? 'Now Playing' : 'Ready to Play'}
                </motion.p>
                <h3 className="text-2xl sm:text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {playlist[0].title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">{playlist[0].artist}</p>
              </div>

              {/* Play/Pause Button */}
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                className="group relative px-12 py-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button glow */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                  animate={{
                    scale: isPlaying ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isPlaying ? Infinity : 0,
                  }}
                />

                <div className="relative flex items-center gap-3">
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                  <span className="text-lg">{isPlaying ? 'Pause' : 'Play'}</span>
                </div>
              </motion.button>

              {/* Playlist */}
              <div className="w-full space-y-3">
                <p className="text-sm text-gray-500 text-center uppercase tracking-wide">Playlist</p>
                <div className="space-y-2">
                  {playlist.map((song, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className={`flex items-center justify-between p-3 rounded-xl ${
                        index === 0
                          ? 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200'
                          : 'bg-white/50'
                      } transition-colors`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">{song.title}</p>
                          <p className="text-xs text-gray-500">{song.artist}</p>
                        </div>
                      </div>
                      {index === 0 && isPlaying && (
                        <motion.div
                          className="flex gap-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
                              animate={{
                                height: ['8px', '20px', '8px'],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
