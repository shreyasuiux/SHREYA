import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Heart, Smile, Camera, Users, Infinity } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix: string;
  color: string;
  isInfinite?: boolean;
}

function AnimatedCounter({ value, duration = 2000, isInView }: { value: number; duration?: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isInView]);

  return <span>{count.toLocaleString()}</span>;
}

export function RelationshipStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Calculate days together since January 21, 2015
  const startDate = new Date('2015-01-21');
  const today = new Date();
  const daysTogether = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  const stats: Stat[] = [
    {
      icon: <Heart className="w-8 h-8" />,
      label: 'Days Together',
      value: daysTogether,
      suffix: ' days',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: <Smile className="w-8 h-8" />,
      label: 'Laughs Shared',
      value: 50000,
      suffix: '+',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      label: 'Memories Created',
      value: 10000,
      suffix: '+',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: 'Hugs Given',
      value: 25000,
      suffix: '+',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: <Infinity className="w-8 h-8" />,
      label: 'Love Level',
      value: 0,
      suffix: 'Infinite',
      color: 'from-rose-600 to-red-600',
      isInfinite: true,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-rose-50/30 via-purple-50/40 to-pink-50/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Our Love Story In Numbers 💖
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Every stat tells a beautiful story
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              {/* Glass Card */}
              <div className="relative h-full backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {/* Icon with pulse animation */}
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.2,
                    }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Value */}
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl mb-2">
                      {stat.isInfinite ? (
                        <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          ∞
                        </span>
                      ) : (
                        <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          <AnimatedCounter value={stat.value} isInView={isInView} />
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">{stat.label}</p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
