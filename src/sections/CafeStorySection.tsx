import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Sparkles, Heart, Coffee, Utensils } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Container } from '../components/common/Container';

export interface CafeStorySectionProps {
  onExploreMenu: () => void;
}

export const CafeStorySection: React.FC<CafeStorySectionProps> = ({ onExploreMenu }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 lg:py-40 bg-[var(--bg-subtle)] border-t dark:border-white/10 border-neutral-200 overflow-hidden scroll-mt-20 sm:scroll-mt-24 transition-colors duration-200"
    >
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/2 -left-20 -translate-y-1/2 w-[550px] h-[550px] bg-[#E01E25]/5 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#FFDD17]/5 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Compelling Cafe Experience Artwork & Frame */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Layered Decorative Backdrop Border */}
            <div className="relative rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#151B27] dark:via-[#0E131C] dark:to-[#0A0D14] border border-neutral-200/80 dark:border-white/12 p-6 sm:p-9 shadow-md dark:shadow-2xl overflow-hidden group">
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200/70 dark:border-white/8 mb-6">
                <div className="flex items-center gap-2">
                  <div className="veg-indicator" title="100% Pure Vegetarian" />
                  <span className="text-xs font-semibold text-[#00843D] tracking-wide uppercase">
                    Pure Vegetarian Kitchen
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">Rajkot, Gujarat</span>
              </div>

              {/* Graphic Composition: Cafe Atmosphere Artwork */}
              <div className="relative aspect-[4/3] rounded-2xl bg-neutral-900 border border-neutral-700/60 dark:border-white/8 overflow-hidden flex items-center justify-center p-4">
                <svg
                  className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
                  viewBox="0 0 360 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Cafe gathering table with pizza, noodles, and cold beverages"
                >
                  {/* Warm Cafe Table Surface */}
                  <rect width="360" height="260" fill="#13100D" />
                  <ellipse cx="180" cy="140" rx="160" ry="105" fill="#1E1712" stroke="#33241A" strokeWidth="4" />
                  {/* Subtle Table Grain */}
                  <path d="M40 140 Q180 155 320 140" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />

                  {/* 1. Wood-fired Pizza Slice Plate */}
                  <ellipse cx="115" cy="135" rx="55" ry="40" fill="#241E19" stroke="#423429" strokeWidth="2" />
                  <circle cx="115" cy="135" r="34" fill="#C4792B" />
                  <circle cx="115" cy="135" r="28" fill="#FFDC52" />
                  {/* Tomato sauce & basil */}
                  <path d="M100 125 Q115 115 130 128" stroke="#D32F2F" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="120" cy="132" r="4" fill="#00843D" />
                  <circle cx="110" cy="140" r="4.5" fill="#E01E25" />

                  {/* 2. Steaming Maggie Bowl */}
                  <ellipse cx="230" cy="120" rx="46" ry="32" fill="#171A21" stroke="#2B303C" strokeWidth="2" />
                  <ellipse cx="230" cy="118" rx="38" ry="24" fill="#F59E0B" />
                  <path d="M210 115 Q225 105 240 120 Q250 110 255 122" stroke="#FEF08A" strokeWidth="3" strokeLinecap="round" />
                  {/* Steam */}
                  <path d="M225 90 Q220 78 227 68" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M238 88 Q242 76 236 66" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />

                  {/* 3. Chilled Beverage Glass */}
                  <path d="M175 160 L180 205 Q190 208 200 205 L205 160 Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <path d="M177 172 L181 202 Q190 205 199 202 L203 172 Z" fill="#5D3A1A" />
                  {/* Straw */}
                  <path d="M195 150 L205 135" stroke="#FFDD17" strokeWidth="3" strokeLinecap="round" />

                  {/* Ambient Table Glow */}
                  <circle cx="180" cy="130" r="90" fill="#FFDD17" opacity="0.04" />
                </svg>

                {/* Overlaid Badge */}
                <div className="absolute bottom-3 right-3 bg-[#050708]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-200 flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-[#FFDD17]" />
                  <span>The Cafe Experience</span>
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-5 pt-4 border-t border-neutral-200/70 dark:border-white/8 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span>Dine-In &amp; Takeaway</span>
                <span aria-hidden="true">·</span>
                <span>Casual &amp; Welcoming</span>
                <span aria-hidden="true">·</span>
                <span>Everyday Celebrations</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Editorial Cafe Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Small Eyebrow Label as requested */}
            <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-[0.2em] text-amber-600 dark:text-[#FFDD17] uppercase">
              <span className="w-2 h-2 rounded-sm bg-[#FFDD17]" aria-hidden="true" />
              <span>OUR STORY</span>
            </div>

            {/* Main Heading as requested */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.12] [text-wrap:balance]">
              More Than Just{' '}
              <span className="text-amber-500 dark:text-[#FFDD17] relative inline-block">
                a Bite.
                <span className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-[#E01E25] rounded-full" />
              </span>
            </h2>

            {/* Supporting Copy as requested */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-body font-normal">
              At KT’s Cafe, every visit is an opportunity to enjoy your favourite flavours, take a little break, and make everyday moments special.
            </p>

            {/* Additional Paragraph as requested */}
            <p className="mt-4 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-body">
              From comforting Maggie to street-food favourites and refreshing drinks, explore a menu designed for different cravings and moments.
            </p>

            {/* Quiet Hospitality Touchpoints */}
            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD17] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  Comforting street snacks and authentic local flavours
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E01E25] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  Relaxed ambiance ideal for conversations and gatherings
                </p>
              </div>
            </div>

            {/* CTA labelled “Explore Our Menu” navigating to #menu */}
            <div className="mt-8">
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
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
