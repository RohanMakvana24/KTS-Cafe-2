import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageSquareHeart, Star, ArrowUpRight } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { SITE_CONFIG } from '../data/siteConfig';
import { TestimonialsColumn, testimonials } from '@/components/ui/testimonials-columns-1';

export const ReviewsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Divide testimonials evenly for responsive multi-column layout
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section
      id="reviews"
      className="relative py-24 sm:py-32 lg:py-36 bg-[var(--bg-page)] border-t dark:border-white/10 border-neutral-200 overflow-hidden scroll-mt-20 sm:scroll-mt-24 transition-colors duration-200"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-[#FFDD17]/5 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-[#E01E25]/5 blur-[150px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionHeading
            kicker="Guest Feedback &amp; Moments"
            title="Good Food. Good Vibes. Happy Moments."
            subtitle="Every visit is another opportunity to enjoy your pure veg favourites."
            align="center"
            accentColor="yellow"
          />
        </div>

        {/* Animated Infinite Testimonials Columns Showcase */}
        <div className="relative mb-20">
          <div className="flex justify-center gap-6 sm:gap-7 max-h-[560px] sm:max-h-[620px] overflow-hidden py-2">
            <TestimonialsColumn
              testimonials={firstColumn}
              duration={shouldReduceMotion ? 90 : 32}
            />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={shouldReduceMotion ? 100 : 38}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={shouldReduceMotion ? 95 : 34}
            />
          </div>

          {/* Interactive Hint Indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-medium text-neutral-600 dark:text-neutral-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00843D] animate-pulse" />
            <span>Hover or tap any review to pause and read</span>
          </div>
        </div>

        {/* Verified Community & Google Reviews Action Panel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#121722] dark:via-[#0E131C] dark:to-[#0A0D14] border border-neutral-200/80 dark:border-white/12 p-8 sm:p-12 lg:p-14 shadow-md dark:shadow-2xl relative overflow-hidden"
          >
            {/* Subtle Accent Glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 bg-[#FFDD17]/8 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold tracking-[0.2em] text-amber-600 dark:text-[#FFDD17] uppercase">
                  <MessageSquareHeart className="w-4 h-4 text-amber-500 dark:text-[#FFDD17]" />
                  <span>Your Experience Matters</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white leading-tight">
                  Your Experience Matters to Us.
                </h3>

                <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
                  Whether you visited for our piping-hot butter Maggi, shared a stone-baked pizza with college friends, or grabbed a quick evening dabeli, we value every smile and honest memory created at KT’s Cafe.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  <span className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00843D]" />
                    Authentic Diner Feedback
                  </span>
                  <span className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD17]" />
                    Rajkot Community Driven
                  </span>
                </div>
              </div>

              {/* Action Column */}
              <div className="w-full md:w-auto shrink-0 flex flex-col items-start md:items-end gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-neutral-200 dark:border-white/10">
                {SITE_CONFIG.googleReviewUrl ? (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      if (SITE_CONFIG.googleReviewUrl) {
                        window.open(SITE_CONFIG.googleReviewUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    icon={<ArrowUpRight className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    View Google Reviews
                  </Button>
                ) : (
                  <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/8 text-left md:text-right max-w-xs shadow-sm dark:shadow-none">
                    <div className="flex items-center md:justify-end gap-1 text-[#FFDD17] mb-1">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                      Google Reviews Link
                    </p>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 leading-normal">
                      Official Google Business Profile link will be configured once verified.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Three Hospitality Pillars (Authentic & Verified) */}
            <div className="mt-10 pt-8 border-t border-neutral-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-heading text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD17]" />
                  Warm Hospitality
                </h4>
                <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-body">
                  Welcoming seating, ambient lighting, and staff dedicated to comfortable visits.
                </p>
              </div>

              <div>
                <h4 className="font-heading text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00843D]" />
                  Prepared to Order
                </h4>
                <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-body">
                  Every dish is cooked fresh from scratch — steaming hot, flavorful, and pure veg.
                </p>
              </div>

              <div>
                <h4 className="font-heading text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E01E25]" />
                  Always Listening
                </h4>
                <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-body">
                  We refine our recipes and offerings based on genuine feedback from Rajkot food lovers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
