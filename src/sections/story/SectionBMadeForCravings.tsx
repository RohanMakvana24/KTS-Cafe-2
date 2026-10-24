import React from 'react';
import { Flame, Sparkles, Coffee, Heart, ArrowRight, Utensils } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { ScrollReveal } from '../../components/story/ScrollReveal';

export const SectionBMadeForCravings: React.FC = () => {
  return (
    <section
      id="favourites"
      className="relative py-24 sm:py-32 bg-[var(--bg-subtle)] border-y border-neutral-200/80 dark:border-white/8 overflow-hidden scroll-mt-20 sm:scroll-mt-24 transition-colors duration-200"
    >
      {/* Background architectural glow accents */}
      <div
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#E01E25]/5 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#FFDD17]/5 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center gap-2 mb-3 text-xs font-bold tracking-[0.2em] text-amber-600 dark:text-[#FFDD17] uppercase">
              <span className="w-2 h-2 rounded-sm bg-[#FFDD17]" aria-hidden="true" />
              <span>02 · CRAFTED FOR GATHERINGS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.18}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight [text-wrap:balance]">
              Your Favourites.{' '}
              <span className="text-amber-500 dark:text-[#FFDD17] relative inline-block">
                Your Moments.
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#E01E25] rounded-full" />
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl font-body">
              Every dish is prepared to order, bringing people together over steaming bowls, crispy slices, and comforting street-food goodness.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Asymmetrical Food Highlights */}
        <div className="space-y-16 sm:space-y-24">
          {/* Highlight 1: Wood-Fired Pizza */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#141A26] dark:to-[#0A0D14] border border-neutral-200/80 dark:border-white/10 p-6 sm:p-8 shadow-md dark:shadow-2xl group hover:border-[#FFDD17]/40 transition-all duration-300">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200/70 dark:border-white/8">
                    <div className="flex items-center gap-2">
                      <div className="veg-indicator" title="100% Pure Vegetarian" />
                      <span className="text-xs font-semibold text-[#00843D] tracking-wide uppercase">
                        100% Pure Veg
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">Stone-Baked</span>
                  </div>

                  {/* Artwork Showcase */}
                  <div className="mt-6 aspect-[4/3] rounded-2xl bg-neutral-900 border border-neutral-700/60 dark:border-white/6 flex items-center justify-center relative overflow-hidden">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-[#B86F20] border-4 border-[#7A420A] shadow-2xl flex items-center justify-center relative transform group-hover:scale-105 transition-transform duration-500">
                      {/* Cheese surface */}
                      <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#FFDC52] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-2 rounded-full border-4 border-[#D32F2F]/60" />
                        <div className="flex flex-col items-center justify-center text-center">
                          <Flame className="w-12 h-12 text-[#E01E25] drop-shadow" />
                          <span className="text-xs font-bold text-[#6D280B] mt-1 font-heading uppercase tracking-wider">
                            Fresh Baked
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-[#050708]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-200 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-[#E01E25]" />
                      <span>Wood-Fired Crust</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-[#FFDD17] uppercase tracking-wider mb-2">
                  <span>Highlight 01</span>
                  <span className="text-neutral-400 dark:text-neutral-600" aria-hidden="true">·</span>
                  <span>Signature Classic</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
                  Artisanal Wood-Fired Pizzas
                </h3>
                <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
                  Hand-stretched dough fired at intense heat, yielding an airy, blistered crust with melted mozzarella cheese, vibrant bell peppers, and fragrant basil leaves.
                </p>
                <div className="mt-6 space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD17]" />
                    <span>Stone-baked for authentic Neapolitan-inspired crust</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD17]" />
                    <span>House-crafted San Marzano tomato reduction</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD17]" />
                    <span>10-inch shareable portions for friends and family</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Highlight 2: Steaming Maggi Bowl */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E01E25] uppercase tracking-wider mb-2">
                  <span>Highlight 02</span>
                  <span className="text-neutral-400 dark:text-neutral-600" aria-hidden="true">·</span>
                  <span>Street-Side Soul Food</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
                  Signature Cafe Maggi Bowls
                </h3>
                <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
                  The quintessential Indian cafe comfort dish. Wok-tossed noodles simmered in aromatic masala spices, golden sweet corn, crisp capsicum, and generous dollops of butter.
                </p>
                <div className="mt-6 space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E01E25]" />
                    <span>Prepared steaming hot with house spice blends</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E01E25]" />
                    <span>Tossed with garden-fresh sweet corn &amp; bell peppers</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E01E25]" />
                    <span>The ultimate late-afternoon craving in Rajkot</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="relative rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#141A26] dark:to-[#0A0D14] border border-neutral-200/80 dark:border-white/10 p-6 sm:p-8 shadow-md dark:shadow-2xl group hover:border-[#E01E25]/40 transition-all duration-300">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200/70 dark:border-white/8">
                    <div className="flex items-center gap-2">
                      <div className="veg-indicator" title="100% Pure Vegetarian" />
                      <span className="text-xs font-semibold text-[#00843D] tracking-wide uppercase">
                        100% Pure Veg
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">Steaming Hot</span>
                  </div>

                  {/* Artwork Showcase: Steaming Maggi Bowl */}
                  <div className="mt-6 aspect-[4/3] rounded-2xl bg-neutral-900 border border-neutral-700/60 dark:border-white/6 flex items-center justify-center relative overflow-hidden">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-[#1A1A1A] border-4 border-[#333333] shadow-2xl flex items-center justify-center relative transform group-hover:scale-105 transition-transform duration-500">
                      {/* Rich golden soup bowl */}
                      <div className="w-48 h-48 sm:w-54 sm:h-54 rounded-full bg-gradient-to-br from-[#FFD54F] to-[#FFA000] flex items-center justify-center relative shadow-inner">
                        <div className="flex flex-col items-center justify-center text-center">
                          <Utensils className="w-12 h-12 text-[#9A3412] drop-shadow" />
                          <span className="text-xs font-bold text-[#78350F] mt-1 font-heading uppercase tracking-wider">
                            Masala Tossed
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-[#050708]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-200 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFDD17]" />
                      <span>Butter Masala Tossed</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Highlight 3: Grilled Sandwiches & Street Snacks */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#141A26] dark:to-[#0A0D14] border border-neutral-200/80 dark:border-white/10 p-6 sm:p-8 shadow-md dark:shadow-2xl group hover:border-[#00843D]/40 transition-all duration-300">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200/70 dark:border-white/8">
                    <div className="flex items-center gap-2">
                      <div className="veg-indicator" title="100% Pure Vegetarian" />
                      <span className="text-xs font-semibold text-[#00843D] tracking-wide uppercase">
                        100% Pure Veg
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">Toasted Crispy</span>
                  </div>

                  {/* Artwork Showcase: Layered Sandwiches & Snacks */}
                  <div className="mt-6 aspect-[4/3] rounded-2xl bg-neutral-900 border border-neutral-700/60 dark:border-white/6 flex items-center justify-center relative overflow-hidden">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-[#2D1F12] border-4 border-[#4E342E] shadow-2xl flex items-center justify-center relative transform group-hover:scale-105 transition-transform duration-500">
                      {/* Grilled golden layers */}
                      <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-xl bg-gradient-to-tr from-[#FFB74D] to-[#FFE082] flex items-center justify-center relative shadow-inner">
                        <div className="flex flex-col items-center justify-center text-center">
                          <Coffee className="w-12 h-12 text-[#9A3412] drop-shadow" />
                          <span className="text-xs font-bold text-[#78350F] mt-1 font-heading uppercase tracking-wider">
                            Herb Grilled
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-[#050708]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-200 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00843D]" />
                      <span>Loaded &amp; Herb-Spiced</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00843D] uppercase tracking-wider mb-2">
                  <span>Highlight 03</span>
                  <span className="text-neutral-400 dark:text-neutral-600" aria-hidden="true">·</span>
                  <span>Crunch &amp; Melt</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
                  Layered Sandwiches &amp; Street Bites
                </h3>
                <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
                  Crispy grilled sourdough packed with seasoned potato slices, crunchy cucumbers, spicy mint chutney, and generous molten cheese grilled with golden ridges.
                </p>
                <div className="mt-6 space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00843D]" />
                    <span>Slow-grilled for a distinct, satisfying crunch</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00843D]" />
                    <span>Signature green mint coriander chutney</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00843D]" />
                    <span>Paired perfectly with cold coffees and mocktails</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
