import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Sparkles, MapPin, Heart } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Container } from '../components/common/Container';
import { HeroFoodVisual } from '../components/hero/HeroFoodVisual';

export interface HeroSectionProps {
  onExploreMenu: () => void;
  onDiscoverCafe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onDiscoverCafe,
}) => {
  // Motion container variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center pt-8 pb-16 sm:py-16 lg:py-20 overflow-hidden bg-[var(--bg-page)] scroll-mt-20 sm:scroll-mt-24 transition-colors duration-200"
    >
      {/* Background Architectural Atmosphere */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[400px] bg-[#FFDD17]/10 dark:bg-[#FFDD17]/7 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#E01E25]/8 dark:bg-[#E01E25]/6 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT SIDE: Brand Narrative & High-Conversion CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small Brand Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-2 h-2 rounded-sm bg-[#FFDD17]" aria-hidden="true" />
              <span className="font-heading text-xs font-bold tracking-[0.2em] text-[#E01E25] dark:text-[#FFDD17] uppercase">
                WELCOME TO KT’S CAFE
              </span>
              <span className="text-neutral-400 dark:text-neutral-600 font-mono text-xs" aria-hidden="true">·</span>
              <span className="text-neutral-600 dark:text-neutral-400 text-xs font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#E01E25]" />
                Rajkot, Gujarat
              </span>
            </motion.div>

            {/* Large Expressive Headline with Red Accent */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-neutral-900 dark:text-white tracking-tight leading-[1.08] [text-wrap:balance]"
            >
              Good Food.{' '}
              <span className="relative inline-block text-amber-500 dark:text-[#FFDD17]">
                Great{' '}
                <span className="text-[#E01E25]">Moments.</span>
                {/* Subtle curved underline accent */}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#E01E25]"
                  viewBox="0 0 240 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6.5C55 2 155 1.5 238 7.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Short Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl font-normal font-body"
            >
              From your favourite street-food bites to cheesy comfort classics, discover something delicious at <strong className="text-neutral-950 dark:text-white font-semibold">KT’s Cafe</strong>. Handcrafted with authentic spices, fresh dough, and pure vegetarian passion.
            </motion.p>

            {/* Action Buttons: Primary & Secondary */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onExploreMenu}
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="shadow-[0_4px_24px_rgba(255,221,23,0.3)] hover:shadow-[0_6px_30px_rgba(255,221,23,0.45)]"
              >
                Explore Our Menu
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onDiscoverCafe}
                icon={<Compass className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />}
              >
                Discover Our Cafe
              </Button>
            </motion.div>

            {/* Supporting Micro-Line & Trust Strip */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-neutral-200 dark:border-white/10 w-full flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600 dark:text-neutral-400 font-medium"
            >
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00843D]" />
                <span className="text-[#00843D]">Fresh cravings. Happy moments.</span>
              </div>

              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                <span>100% Pure Veg</span>
                <span aria-hidden="true">·</span>
                <span>Wood-Fired Crust</span>
                <span aria-hidden="true">·</span>
                <span>Rajkot Favorite</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Appetizing 3D Pizza Focal Point */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center z-10"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <HeroFoodVisual onExploreMenu={onExploreMenu} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
