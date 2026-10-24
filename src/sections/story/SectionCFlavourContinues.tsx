import React from 'react';
import { ArrowRight, Sparkles, Heart, Compass, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import { ScrollReveal } from '../../components/story/ScrollReveal';

export interface SectionCFlavourContinuesProps {
  onExploreMenu: () => void;
  onDiscoverCafe: () => void;
}

export const SectionCFlavourContinues: React.FC<SectionCFlavourContinuesProps> = ({
  onExploreMenu,
  onDiscoverCafe,
}) => {
  return (
    <section
      id="connection"
      className="relative py-24 sm:py-36 bg-[var(--bg-page)] overflow-hidden scroll-mt-20 sm:scroll-mt-24 transition-colors duration-200"
    >
      {/* Background warm atmospheric glow */}
      <div
        className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-[#FFDD17]/8 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-10 w-[400px] h-[400px] bg-[#E01E25]/6 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide">
        <div className="relative rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#121722] dark:to-[#090C12] border border-neutral-200/80 dark:border-white/12 p-8 sm:p-14 lg:p-16 shadow-xl dark:shadow-[0_30px_70px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Subtle Accent Glow Inside Card */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 bg-[#FFDD17]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
            {/* Story Eyebrow */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-[0.2em] text-amber-600 dark:text-[#FFDD17] uppercase">
                <span className="w-2 h-2 rounded-sm bg-[#FFDD17]" aria-hidden="true" />
                <span>03 · THE FLAVOUR CONTINUES</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal direction="up" delay={0.18}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-neutral-900 dark:text-white tracking-tight leading-[1.1] [text-wrap:balance]">
                Good Food Brings{' '}
                <span className="text-amber-500 dark:text-[#FFDD17] relative inline-block">
                  Us Together.
                  <span className="absolute -bottom-1.5 left-0 w-full h-[3.5px] bg-[#E01E25] rounded-full" />
                </span>
              </h2>
            </ScrollReveal>

            {/* Narrative Supporting Text */}
            <ScrollReveal direction="up" delay={0.26}>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
                Whether dropping in for a rapid street-food snack after work, sharing a stone-baked pizza with loved ones, or satisfying midnight hunger pangs with piping hot Maggi — KT’s Cafe is Rajkot’s comfort dining haven.
              </p>
            </ScrollReveal>

            {/* Trust Points */}
            <ScrollReveal direction="up" delay={0.34} className="w-full">
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00843D]" />
                  <span>100% Pure Vegetarian</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFDD17]" />
                  <span>Fresh Ingredients Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E01E25]" />
                  <span>Affordable Everyday Prices</span>
                </div>
              </div>
            </ScrollReveal>

            {/* High-Intent CTAs */}
            <ScrollReveal direction="up" delay={0.42}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onExploreMenu}
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Explore Menu
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={onDiscoverCafe}
                  icon={<Compass className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />}
                >
                  Find Us in Rajkot
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
