import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Compass, ExternalLink, Instagram } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { ContactForm } from '../components/contact/ContactForm';
import { SITE_CONFIG } from '../data/siteConfig';

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleOpenDirections = () => {
    if (SITE_CONFIG.googleMapsDestinationUrl) {
      window.open(SITE_CONFIG.googleMapsDestinationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 lg:py-40 bg-[var(--bg-page)] border-t dark:border-white/10 border-neutral-200 overflow-hidden scroll-mt-20 sm:scroll-mt-24 transition-colors duration-200"
    >
      {/* Background atmospheric glows */}
      <div
        className="absolute top-1/4 right-10 w-[550px] h-[500px] bg-[#FFDD17]/5 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[#E01E25]/5 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section Heading as requested */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <SectionHeading
            kicker="Connect With Us"
            title="Let’s Make Your Next Visit Delicious."
            subtitle="Have a question or want to get in touch? We’d love to hear from you."
            align="center"
            accentColor="yellow"
          />
        </div>

        {/* 2-Column Layout: Contact Channels Left, Contact Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Channels & Cafe Info */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Main Info Card */}
            <div className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#121722] dark:via-[#0E131C] dark:to-[#0A0D14] border border-neutral-200/80 dark:border-white/12 p-7 sm:p-9 shadow-md dark:shadow-2xl">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold tracking-[0.2em] text-amber-600 dark:text-[#FFDD17] uppercase">
                <Compass className="w-4 h-4 text-amber-500 dark:text-[#FFDD17]" />
                <span>DIRECT CHANNELS</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                Get in Touch
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-body leading-relaxed mb-6">
                Planning a birthday celebration, college gathering, or bulk street-snack order in Rajkot? We are here to help.
              </p>

              {/* Verified Contact Methods */}
              <div className="space-y-4">
                {/* Phone Call Method */}
                {SITE_CONFIG.verifiedPhoneNumber ? (
                  <a
                    href={`tel:${SITE_CONFIG.verifiedPhoneNumber}`}
                    className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 flex items-center justify-between text-neutral-900 dark:text-white transition-all group shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#FFDD17] text-[#050708] font-bold">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-400 uppercase tracking-wider block">
                          Phone Call
                        </span>
                        <span className="text-sm font-semibold">{SITE_CONFIG.verifiedPhoneNumber}</span>
                      </div>
                    </div>
                    <span className="text-xs text-amber-600 dark:text-[#FFDD17] font-semibold group-hover:translate-x-1 transition-transform">
                      Call Now →
                    </span>
                  </a>
                ) : null}

                {/* WhatsApp Chat Method */}
                {SITE_CONFIG.verifiedWhatsAppNumber ? (
                  <a
                    href={`https://wa.me/${SITE_CONFIG.verifiedWhatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 flex items-center justify-between text-neutral-900 dark:text-white transition-all group shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#00843D] text-white font-bold">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-400 uppercase tracking-wider block">
                          WhatsApp
                        </span>
                        <span className="text-sm font-semibold">Message on WhatsApp</span>
                      </div>
                    </div>
                    <span className="text-xs text-[#00843D] font-semibold group-hover:translate-x-1 transition-transform">
                      Chat →
                    </span>
                  </a>
                ) : null}

                {/* Instagram Channel */}
                {SITE_CONFIG.instagramUrl ? (
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 flex items-center justify-between text-neutral-900 dark:text-white transition-all group shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#FFDD17] via-[#E01E25] to-[#FF007A] text-[#050708] font-bold">
                        <Instagram className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-400 uppercase tracking-wider block">
                          Instagram
                        </span>
                        <span className="text-sm font-semibold">{SITE_CONFIG.instagramHandle}</span>
                      </div>
                    </div>
                    <span className="text-xs text-amber-600 dark:text-[#FFDD17] font-semibold group-hover:translate-x-1 transition-transform">
                      Follow →
                    </span>
                  </a>
                ) : null}

                {/* Location & Navigation Channel */}
                <div
                  onClick={handleOpenDirections}
                  className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 flex items-center justify-between text-neutral-900 dark:text-white transition-all cursor-pointer group shadow-sm dark:shadow-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenDirections()}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#E01E25] text-white font-bold">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-400 uppercase tracking-wider block">
                        Location
                      </span>
                      <span className="text-sm font-semibold">{SITE_CONFIG.landmark || 'Rajkot, Gujarat'}</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#E01E25] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Directions <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Quick Hours Note */}
              <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-white/8 flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 font-body">
                <Clock className="w-4 h-4 text-amber-500 dark:text-[#FFDD17] shrink-0" />
                <span>Open for evening gatherings, college breaks &amp; street cravings.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Accessible Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
