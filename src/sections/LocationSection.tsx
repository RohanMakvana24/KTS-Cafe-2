import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, Navigation, Compass, ExternalLink, Info, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { SITE_CONFIG } from '../data/siteConfig';

export const LocationSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleGetDirections = () => {
    if (SITE_CONFIG.googleMapsDestinationUrl) {
      window.open(SITE_CONFIG.googleMapsDestinationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="location"
      className="relative py-24 sm:py-32 lg:py-40 bg-[var(--bg-subtle)] border-t dark:border-white/10 border-neutral-200 overflow-hidden scroll-mt-20 sm:scroll-mt-24 transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 -left-20 -translate-y-1/2 w-[550px] h-[550px] bg-[#FFDD17]/5 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[500px] h-[450px] bg-[#E01E25]/5 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section Heading as requested */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <SectionHeading
            kicker="Visit Us in Person"
            title="Come Find Your Happy Place."
            subtitle="Planning your next food break? Find KT’s Cafe and drop by."
            align="center"
            accentColor="yellow"
          />
        </div>

        {/* 2-Column Responsive Layout: Left Info, Right Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Clean Location Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#141A26] dark:via-[#0E131C] dark:to-[#0A0D14] border border-neutral-200/80 dark:border-white/12 p-7 sm:p-9 shadow-md dark:shadow-2xl w-full">
              {/* Top Accent Eyebrow */}
              <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-[0.2em] text-amber-600 dark:text-[#FFDD17] uppercase">
                <MapPin className="w-4 h-4 text-[#E01E25]" />
                <span>LOCATION &amp; CITY</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
                {SITE_CONFIG.cafeName}
              </h3>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                <span className="w-2 h-2 rounded-full bg-[#00843D]" />
                <span>{SITE_CONFIG.city}, {SITE_CONFIG.state}, {SITE_CONFIG.country}</span>
              </div>

              {/* Address Details with strict truthfulness */}
              <div className="mt-6 p-4 rounded-2xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/8 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 dark:text-[#FFDD17] block mb-1">
                    Verified Address &amp; Landmark
                  </span>
                  <p className="font-semibold text-neutral-900 dark:text-white text-sm leading-snug">
                    {SITE_CONFIG.verifiedAddress}
                  </p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-2 font-mono">
                    Landmark: <span className="text-neutral-800 dark:text-neutral-200">{SITE_CONFIG.landmark}</span>
                  </p>
                </div>
              </div>

              {/* Trust markers */}
              <div className="mt-6 space-y-2.5 text-xs text-neutral-600 dark:text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                  <span>Dine-In, Takeaway &amp; Quick Street Bites</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-[#FFDD17] shrink-0" />
                  <span>Easy Access in Rajkot Metropolitan Area</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E01E25] shrink-0" />
                  <span>100% Pure Vegetarian Family-Friendly Ambience</span>
                </div>
              </div>

              {/* Prominent "Get Directions" CTA */}
              <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-white/10 w-full">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleGetDirections}
                  icon={<Navigation className="w-4 h-4" />}
                  iconPosition="left"
                  className="shadow-[0_4px_20px_rgba(255,221,23,0.3)] hover:shadow-[0_6px_28px_rgba(255,221,23,0.45)]"
                >
                  Get Directions in Google Maps
                </Button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Google Maps Embed with Clean Visual Frame */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 w-full"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-3xl overflow-hidden border border-white/12 bg-[#0D1016] shadow-2xl group">
              {/* Google Maps Embed Iframe with lazy loading and accessible title */}
              {SITE_CONFIG.googleMapsEmbedUrl ? (
                <iframe
                  title="KT’s Cafe Rajkot Google Maps Location"
                  src={SITE_CONFIG.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full relative z-10 transition-opacity duration-500"
                  onLoad={() => setMapLoaded(true)}
                />
              ) : (
                /* Fallback Map Placeholder */
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#121622] to-[#0A0D14]">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFDD17]/10 border border-[#FFDD17]/30 flex items-center justify-center text-[#FFDD17] mb-4">
                    <Compass className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white">
                    Rajkot, Gujarat Map View
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-sm">
                    Interactive map embed link can be configured directly in siteConfig.ts.
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleGetDirections}
                    className="mt-5"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Open in Google Maps
                  </Button>
                </div>
              )}

              {/* Subtle Map Overlay Watermark Card */}
              <div className="absolute bottom-4 left-4 z-20 bg-[#050708]/85 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-[#E01E25]" />
                <span className="font-medium">KT’s Cafe · Rajkot</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
