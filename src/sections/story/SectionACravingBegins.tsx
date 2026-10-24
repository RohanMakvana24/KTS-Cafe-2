import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Sparkles, Utensils, Flame, Clock } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { ScrollReveal } from '../../components/story/ScrollReveal';

export const SectionACravingBegins: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-linked progress for subtle parallax elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax offsets for layered ingredients & visual elements
  const yPizza = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-40, 40]);
  const rotatePizza = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-12, 16]);
  const yLeaf = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [30, -50]);
  const yTomato = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-20, 60]);
  const yPepper = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [50, -30]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative py-24 sm:py-32 lg:py-40 bg-[var(--bg-page)] overflow-hidden scroll-mt-20 sm:scroll-mt-24 transition-colors duration-200"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FFDD17]/5 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Editorial Layout: Asymmetric 2-Column Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-6 z-10 flex flex-col items-start">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-[0.2em] text-amber-600 dark:text-[#FFDD17] uppercase">
                <span className="w-2 h-2 rounded-sm bg-[#FFDD17]" aria-hidden="true" />
                <span>01 · THE CRAVING BEGINS</span>
                <span className="text-neutral-400 dark:text-neutral-600 font-mono" aria-hidden="true">·</span>
                <span className="text-neutral-600 dark:text-neutral-400 font-normal">Our Philosophy</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.18}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.12] [text-wrap:balance]">
                Every Craving Has{' '}
                <span className="text-amber-500 dark:text-[#FFDD17] relative inline-block">
                  a Story.
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#E01E25] rounded-full" />
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.25}>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-body font-normal">
                From quick street-food favourites to comforting classics, there’s always something to love.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.32}>
              <p className="mt-4 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-body">
                In Rajkot, food is never just a meal — it is the soundtrack to laughter with college friends, the pause after a bustling workday, and the warm craving satisfied at midnight. At KT’s Cafe, we slow down the craft so you can savor every bite.
              </p>
            </ScrollReveal>

            {/* Restrained Editorial Pillars */}
            <ScrollReveal direction="up" delay={0.4} className="w-full">
              <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-white/10 grid grid-cols-2 gap-6 w-full">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200/80 dark:border-white/8 text-amber-600 dark:text-[#FFDD17] shrink-0 mt-0.5">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-neutral-900 dark:text-white">Fresh Dough Daily</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-normal">
                      Hand-kneaded and stone-baked with artisanal crust integrity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200/80 dark:border-white/8 text-[#00843D] shrink-0 mt-0.5">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-neutral-900 dark:text-white">100% Vegetarian</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-normal">
                      Dedicated pure vegetarian kitchen adhering to local taste preferences.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Storytelling Canvas: Parallax-Layered Food Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient Background Aura */}
            <div
              className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#FFDD17]/10 via-[#E01E25]/10 to-transparent blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Central Pizza Presentation with Scroll-Linked Parallax */}
            <motion.div
              style={{ y: yPizza, rotate: rotatePizza }}
              className="relative z-10 w-full max-w-[420px] aspect-square rounded-full bg-[#121620] border-4 border-[#252C3D] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex items-center justify-center group"
            >
              {/* Outer Wood-Fired Crust Plate */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1E2535] to-[#0A0D13] border border-white/10 flex items-center justify-center relative overflow-hidden">
                {/* Visual Pizza Slices Artwork */}
                <svg
                  className="w-full h-full p-4 drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Artisanal Pizza Story Artwork"
                >
                  {/* Crust base */}
                  <circle cx="100" cy="100" r="90" fill="#B86F20" stroke="#7A420A" strokeWidth="4.5" />
                  {/* Melted Cheese Disc */}
                  <circle cx="100" cy="100" r="77" fill="#FFDC52" />
                  {/* Tomato sauce swirl marbling */}
                  <path d="M50 85 Q75 55 110 70 Q145 60 150 95 Q130 135 145 150 Q110 165 80 145 Q50 145 42 110 Q60 90 50 85Z" fill="#D32F2F" opacity="0.95" />
                  <path d="M65 95 Q90 85 110 100 Q130 90 140 110 Q120 135 130 145 Q105 155 85 135 Q70 140 60 120 Q75 105 65 95Z" fill="#FFE57F" />

                  {/* Toppings: Cherry Tomatoes */}
                  <circle cx="70" cy="75" r="11" fill="#E01E25" stroke="#9A0007" strokeWidth="1.5" />
                  <circle cx="130" cy="80" r="12" fill="#E01E25" stroke="#9A0007" strokeWidth="1.5" />
                  <circle cx="100" cy="140" r="13" fill="#E01E25" stroke="#9A0007" strokeWidth="1.5" />
                  <circle cx="65" cy="125" r="10.5" fill="#E01E25" stroke="#9A0007" strokeWidth="1.5" />
                  <circle cx="135" cy="130" r="11" fill="#E01E25" stroke="#9A0007" strokeWidth="1.5" />

                  {/* Basil Leaves (Pure Veg Green) */}
                  <path d="M95 90 C85 75 90 60 110 70 C114 90 102 96 95 90Z" fill="#00843D" />
                  <path d="M125 105 C145 95 140 80 125 80 C115 88 120 108 125 105Z" fill="#00843D" />
                  <path d="M75 105 C60 115 68 130 85 120 C88 110 78 100 75 105Z" fill="#00843D" />

                  {/* Golden Bell Peppers */}
                  <path d="M100 65 Q115 58 125 68 Q118 75 100 65Z" fill="#FFDD17" stroke="#D1B300" strokeWidth="1" />
                  <path d="M55 100 Q45 115 58 125 Q62 115 55 100Z" fill="#FFDD17" stroke="#D1B300" strokeWidth="1" />
                  <path d="M115 115 Q130 118 125 130 Q115 125 115 115Z" fill="#FFDD17" stroke="#D1B300" strokeWidth="1" />

                  {/* Olives */}
                  <circle cx="85" cy="115" r="6" fill="#1A1A1A" stroke="#333333" strokeWidth="2" />
                  <circle cx="115" cy="85" r="6" fill="#1A1A1A" stroke="#333333" strokeWidth="2" />
                  <circle cx="100" cy="100" r="6.5" fill="#1A1A1A" stroke="#333333" strokeWidth="2" />
                </svg>
              </div>

              {/* Floating Ingredient Layer 1: Fresh Basil Leaf (Parallax offset) */}
              <motion.div
                style={{ y: yLeaf }}
                className="absolute -top-6 -right-6 z-20 w-16 h-16 bg-[#00843D]/15 backdrop-blur-md border border-[#00843D]/30 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <div className="w-8 h-8 rounded-full bg-[#00843D] flex items-center justify-center text-white text-xs font-bold shadow-md">
                  🍃
                </div>
              </motion.div>

              {/* Floating Ingredient Layer 2: Ripe Tomato (Parallax offset) */}
              <motion.div
                style={{ y: yTomato }}
                className="absolute -bottom-5 -left-5 z-20 w-16 h-16 bg-[#E01E25]/15 backdrop-blur-md border border-[#E01E25]/30 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <div className="w-8 h-8 rounded-full bg-[#E01E25] flex items-center justify-center text-white text-xs font-bold shadow-md">
                  🍅
                </div>
              </motion.div>

              {/* Floating Ingredient Layer 3: Crispy Pepper (Parallax offset) */}
              <motion.div
                style={{ y: yPepper }}
                className="absolute top-1/2 -right-10 z-20 w-14 h-14 bg-[#FFDD17]/15 backdrop-blur-md border border-[#FFDD17]/30 rounded-xl flex items-center justify-center shadow-lg"
              >
                <div className="w-7 h-7 rounded-full bg-[#FFDD17] flex items-center justify-center text-[#050708] text-xs font-bold shadow-md">
                  🫑
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
