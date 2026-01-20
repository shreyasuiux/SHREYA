import { FloatingHearts } from '@/app/components/FloatingHearts';
import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { StorySection } from '@/app/components/StorySection';
import { MemoryGallery } from '@/app/components/MemoryGallery';
import { LoveLetterSection } from '@/app/components/LoveLetterSection';
import { RelationshipStats } from '@/app/components/RelationshipStats';
import { FutureDreamBoard } from '@/app/components/FutureDreamBoard';
import { MusicExperience } from '@/app/components/MusicExperience';
import { SurpriseSection } from '@/app/components/SurpriseSection';

export default function App() {
  const storyData = [
    {
      id: 'love-story',
      title: 'Where It All Began',
      date: '21 January 2015',
      description: 'At Siddhivinayak Mandir, amidst prayers and divine blessings, our eyes met for the first time. In that sacred moment, surrounded by the fragrance of flowers and the sound of temple bells, I knew my life had changed forever. What started as a chance encounter became the foundation of the most beautiful journey of our lives.',
      imageUrl: 'https://images.unsplash.com/photo-1690476703929-0718aba7a511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBwcmF5ZXIlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzY4ODk1MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reverse: false,
    },
    {
      id: 'struggle',
      title: 'Through The Storms',
      date: '1 May 2015',
      description: 'Every love story has its trials. On this day, we faced one of our toughest moments. The weight of the world seemed heavy on our shoulders, but your hand in mine gave me strength. We learned that love isn\'t just about the happy moments—it\'s about standing together when everything feels uncertain, choosing each other even when it\'s hard.',
      imageUrl: 'https://images.unsplash.com/photo-1758524945869-24a53c8cbc1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBjb3VwbGUlMjBzdXBwb3J0fGVufDF8fHx8MTc2ODg5NTIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reverse: true,
    },
    {
      id: 'birthday',
      title: 'Celebrating You',
      date: '10 December',
      description: 'Your birthday has always been my favorite celebration. Watching your eyes light up, your beautiful smile that makes everything worthwhile—these moments remind me why I fell in love with you. Every candle you blow out, I make a silent wish: to celebrate a thousand more birthdays together, each one more special than the last.',
      imageUrl: 'https://images.unsplash.com/photo-1560026478-50d79695b185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwcm9tYW50aWN8ZW58MXx8fHwxNzY4ODk1MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reverse: false,
    },
    {
      id: 'growth',
      title: 'Growing Together',
      date: 'Our Journey',
      description: 'Through graduation caps and new careers, from police home guard duties to MSF milestones, we\'ve built our dreams side by side. Every achievement feels sweeter because you\'re there to celebrate it with me. We\'re not just partners in love—we\'re partners in life, supporting each other\'s ambitions and growing stronger with every challenge we overcome together.',
      imageUrl: 'https://images.unsplash.com/photo-1767595789539-cd012af80914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwYWNoaWV2ZW1lbnQlMjBzdWNjZXNzfGVufDF8fHx8MTc2ODg5NTIzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reverse: true,
    },
    {
      id: 'prayer',
      title: 'Faith & Devotion',
      date: 'Our Spiritual Bond',
      description: 'Our love is blessed by something greater. Whether it\'s fasting together, lighting candles in prayer, or simply holding hands in gratitude, our spiritual journey binds us in ways words cannot express. We pray not just for ourselves, but for each other\'s happiness, health, and the strength to love deeper with each passing day.',
      imageUrl: 'https://images.unsplash.com/photo-1648915662082-2db0f752c482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBjYW5kbGVzJTIwc3Bpcml0dWFsfGVufDF8fHx8MTc2ODg5NTIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reverse: false,
    },
    {
      id: 'present',
      title: 'Living Our Best Life',
      date: 'Today',
      description: 'Right here, right now, with you—this is where I want to be. Every morning I wake up next to you feels like a gift. The little moments, the inside jokes, the comfortable silences, the adventures we share—this is the life we dreamed of. And somehow, even after all these years, you still give me butterflies.',
      imageUrl: 'https://images.unsplash.com/photo-1605381942640-0a262ce59788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMHNtaWxpbmd8ZW58MXx8fHwxNzY4ODE1MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reverse: true,
    },
    {
      id: 'future',
      title: 'Forever Starts Here',
      date: 'Our Promise',
      description: 'Eleven years have been beautiful, but they\'re just the beginning. I promise you a lifetime of laughter, adventures, and unconditional love. Marriage isn\'t just a ceremony—it\'s a promise I make every single day: to choose you, to cherish you, to build our dreams together. Our forever begins with "I do," but it never ends.',
      imageUrl: 'https://images.unsplash.com/photo-1584628913500-7da703b091db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBtYXJyaWFnZXxlbnwxfHx8fDE3Njg4OTUyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reverse: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-white to-purple-50">
      {/* Floating Hearts Background Animation */}
      <FloatingHearts />

      {/* Header with Logo */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Story Sections */}
      <div className="relative z-10">
        {storyData.map((story, index) => (
          <StorySection
            key={story.id}
            id={story.id}
            title={story.title}
            date={story.date}
            description={story.description}
            imageUrl={story.imageUrl}
            reverse={story.reverse}
          />
        ))}
      </div>

      {/* Memory Gallery */}
      <MemoryGallery />

      {/* Love Letter Section */}
      <LoveLetterSection />

      {/* Relationship Stats */}
      <RelationshipStats />

      {/* Future Dream Board */}
      <FutureDreamBoard />

      {/* Music Experience */}
      <MusicExperience />

      {/* Surprise Section */}
      <SurpriseSection />

      {/* Footer */}
      <footer className="relative z-10 py-16 px-4 text-center bg-gradient-to-b from-transparent to-rose-100/50">
        <div className="container mx-auto max-w-4xl space-y-4">
          <p className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Here's to forever, my love ❤️
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            11 years down, infinity to go
          </p>
          
          {/* Signature */}
          <div className="pt-8 border-t border-rose-200/50 mt-12">
            <p className="text-sm text-gray-500">
              Designed with ❤️ by Shreyas
            </p>
            <p className="text-xs text-gray-400 mt-1">
              For the Love of My Life
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}