import React from 'react';

export interface BrandLogoProps {
  /**
   * Layout format:
   * - 'horizontal': Inline lockup with crest emblem + typography (ideal for single-row navbar)
   * - 'badge': Full vertical artisanal crest badge (ideal for footer, hero, or cards)
   * - 'icon': Monogram crest icon only
   */
  variant?: 'horizontal' | 'badge' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

/**
 * Unique, Bespoke Brand Identity for KT's Cafe
 * 
 * Design Elements:
 * - Bespoke Culinary Ligature: Interlocking 'K' & 'T' forming a chef's knife, dining fork, and spoon
 * - Signature Colors: Golden Yellow (#FFDD17), Chilli Red (#E01E25), Luxury Dark (#050708), Pure Veg Green (#00843D)
 * - FSSAI Verified Green Dot Seal at apex
 * - Premium Micro-Typography: "KT'S CAFE" & "A BITE OF HAPPINESS"
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  animated = true,
  className = '',
}) => {
  // Height sizing maps
  const horizontalHeightMap = {
    sm: 'h-9 sm:h-10',
    md: 'h-10 sm:h-11 md:h-12',
    lg: 'h-13 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  const badgeHeightMap = {
    sm: 'h-16 sm:h-20',
    md: 'h-24 sm:h-28',
    lg: 'h-32 sm:h-36',
    xl: 'h-40 sm:h-48',
  };

  const iconSizeMap = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20 sm:w-24 sm:h-24',
  };

  // =========================================================================
  // The Bespoke Monogram Crest: Interlocking KT + Culinary Trio & Pure Veg Dot
  // =========================================================================
  const MonogramCrest = ({ className = '' }: { className?: string }) => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full overflow-visible ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Rich Ambient Gold Glow */}
        <filter id="ktGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FFDD17" floodOpacity="0.35" />
        </filter>

        {/* Dynamic Gradient for the Crest Shield */}
        <linearGradient id="crestBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFDD17" />
          <stop offset="50%" stopColor="#FFAE00" />
          <stop offset="100%" stopColor="#E01E25" />
        </linearGradient>

        <linearGradient id="shieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#141923" />
          <stop offset="100%" stopColor="#07090D" />
        </linearGradient>

        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF275" />
          <stop offset="60%" stopColor="#FFDD17" />
          <stop offset="100%" stopColor="#E59E00" />
        </linearGradient>

        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4148" />
          <stop offset="100%" stopColor="#E01E25" />
        </linearGradient>
      </defs>

      {/* Outer Shield with Smooth Squircle Contour */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="22"
        fill="url(#shieldBg)"
        stroke="url(#crestBorder)"
        strokeWidth="3.5"
        filter="url(#ktGlow)"
      />

      {/* Inner Subtle Accent Ring */}
      <rect
        x="11"
        y="11"
        width="78"
        height="78"
        rx="18"
        fill="none"
        stroke="#FFDD17"
        strokeWidth="0.75"
        strokeOpacity="0.25"
      />

      {/* Aromatic Steam Waves Rising from Center */}
      <g stroke="url(#goldGradient)" strokeWidth="1.75" strokeLinecap="round" opacity="0.8">
        <path d="M 46 22 C 45 18 49 16 47 13" />
        <path d="M 54 23 C 55 19 51 17 53 14" />
      </g>

      {/* ===================================================================
          CENTRAL MONOGRAM: Interlocking 'K' and 'T' Culinary Motif
          =================================================================== */}
      <g id="monogram">
        {/* Knife Vertical Pillar (Stem of 'K') */}
        <path
          d="M 28 32 C 34 32 35 44 34 60 L 30 60 L 30 76 L 26 76 L 26 60 L 25 60 C 25 44 26 32 28 32 Z"
          fill="url(#goldGradient)"
        />
        {/* Tiny blade reflection slit */}
        <line x1="28" y1="36" x2="28" y2="54" stroke="#050708" strokeWidth="1.2" strokeLinecap="round" />

        {/* 'K' Diagonal Upper Branch (Aroma Sweep) */}
        <path
          d="M 33 49 C 38 48 44 42 47 34 L 52 36 C 48 46 41 52 34 54 Z"
          fill="url(#goldGradient)"
        />

        {/* 'K' Diagonal Lower Branch (Culinary Leaf Taper) */}
        <path
          d="M 33 52 C 39 54 44 63 49 75 L 43 76 C 39 66 35 58 31 56 Z"
          fill="url(#goldGradient)"
        />

        {/* Dining Fork Crossbar (Horizontal bar of 'T') */}
        <path
          d="M 48 35 L 76 35 C 77 35 78 36 78 37 C 78 38 77 39 76 39 L 66 39 L 66 42 C 66 44 65 45 64 45 L 60 45 C 59 45 58 44 58 42 L 58 39 L 48 39 C 47 39 46 38 46 37 C 46 36 47 35 48 35 Z"
          fill="url(#goldGradient)"
        />
        {/* Fork Prongs Details */}
        <rect x="52" y="30" width="1.8" height="6" rx="0.9" fill="url(#goldGradient)" />
        <rect x="61" y="29" width="1.8" height="7" rx="0.9" fill="url(#goldGradient)" />
        <rect x="70" y="30" width="1.8" height="6" rx="0.9" fill="url(#goldGradient)" />

        {/* Spoon Stem & Bowl (Vertical stalk of 'T' descending into Red Accent Bowl) */}
        <path
          d="M 60.5 44 L 63.5 44 L 64 63 C 68 64 70 68 69 72 C 68 76 64 78 61 78 C 58 78 54 76 53 72 C 52 68 54 64 58 63 Z"
          fill="url(#redGradient)"
        />
        {/* Spoon Bowl Inner Shine */}
        <ellipse cx="61" cy="71" rx="4.5" ry="4" fill="#FFA5A8" opacity="0.4" />
      </g>

      {/* ===================================================================
          OFFICIAL PURE VEG MARK (Integrated into Upper-Right Shield Corner)
          =================================================================== */}
      <g transform="translate(68, 12)">
        <rect
          x="0"
          y="0"
          width="18"
          height="18"
          rx="3.5"
          fill="#FFFFFF"
          stroke="#00843D"
          strokeWidth="2.2"
        />
        <circle cx="9" cy="9" r="4.2" fill="#00843D" />
      </g>
    </svg>
  );

  // =========================================================================
  // 1. HORIZONTAL NAVBAR LOCKUP (Single-Row Navbar Champion)
  // Crest Emblem on left + High-end Typographic Wordmark on right
  // =========================================================================
  if (variant === 'horizontal') {
    return (
      <div
        className={`flex items-center gap-2.5 sm:gap-3.5 select-none group ${horizontalHeightMap[size]} ${className}`}
      >
        {/* Crest Emblem with Golden Aura */}
        <div className="relative shrink-0 h-full aspect-square flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <MonogramCrest />
          {animated && (
            <div
              className="absolute inset-0 rounded-[22%] overflow-hidden pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          )}
        </div>

        {/* High-End Culinary Typography */}
        <div className="flex flex-col justify-center min-w-0">
          {/* Brand Name Row */}
          <div className="flex items-center tracking-tight leading-none font-heading font-black">
            <span className="text-base sm:text-lg md:text-xl text-neutral-900 dark:text-white drop-shadow-sm">
              KT’S
            </span>
            <span className="ml-1.5 text-base sm:text-lg md:text-xl text-[#FFDD17] drop-shadow-[0_0_12px_rgba(255,221,23,0.4)]">
              CAFE
            </span>
          </div>

          {/* Tagline & Pure Veg Verification Row */}
          <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5 leading-none">
            <span className="text-[9px] sm:text-[10px] md:text-[10.5px] font-heading font-bold uppercase tracking-[0.24em] text-neutral-600 dark:text-neutral-300">
              A Bite of Happiness
            </span>
            <span className="w-1 h-1 rounded-full bg-[#00843D] shrink-0" title="100% Pure Veg" />
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. ARTISANAL BADGE / CREST (Vertical Seal for Footer, Hero, or Menus)
  // =========================================================================
  if (variant === 'badge') {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center select-none group ${badgeHeightMap[size]} ${className}`}
      >
        {/* Monogram Crest with Glow */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 transition-transform duration-300 group-hover:scale-105">
          <MonogramCrest />
          {animated && (
            <div
              className="absolute inset-0 rounded-[22%] overflow-hidden pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          )}
        </div>

        {/* Wordmark under Crest */}
        <div className="mt-3 flex flex-col items-center">
          <div className="flex items-center font-heading font-black tracking-tight text-lg sm:text-xl text-neutral-900 dark:text-white leading-none">
            <span>KT’S</span>
            <span className="ml-1.5 text-[#FFDD17]">CAFE</span>
          </div>

          <div className="mt-1.5 flex items-center gap-1.5 text-[9.5px] font-heading font-extrabold uppercase tracking-[0.26em] text-neutral-500 dark:text-neutral-400">
            <span className="text-[#FFDD17]">✦</span>
            <span>A Bite of Happiness</span>
            <span className="text-[#FFDD17]">✦</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 3. ICON ONLY VARIANT
  // =========================================================================
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${iconSizeMap[size]} ${className}`}
    >
      <MonogramCrest />
    </div>
  );
};
