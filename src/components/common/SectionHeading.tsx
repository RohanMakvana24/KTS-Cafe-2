import React from 'react';

export type AccentColor = 'yellow' | 'red' | 'green' | 'none';
export type HeadingAlignment = 'left' | 'center' | 'right';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  align?: HeadingAlignment;
  accentColor?: AccentColor;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  kicker,
  align = 'left',
  accentColor = 'yellow',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  const accentStyles: Record<AccentColor, { bar: string; kicker: string }> = {
    yellow: {
      bar: 'bg-[#FFDD17]',
      kicker: 'text-[#FFDD17]',
    },
    red: {
      bar: 'bg-[#E01E25]',
      kicker: 'text-[#E01E25]',
    },
    green: {
      bar: 'bg-[#00843D]',
      kicker: 'text-[#00843D]',
    },
    none: {
      bar: '',
      kicker: 'text-neutral-400',
    },
  };

  return (
    <div className={`flex flex-col ${alignClass} mb-8 sm:mb-12 max-w-3xl ${className}`}>
      {/* Optional Clean Kicker (Anti-slop: clean text, no pill badge, no comment prefix) */}
      {kicker && (
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider uppercase">
          {accentColor !== 'none' && (
            <span
              className={`w-2 h-2 rounded-sm ${accentStyles[accentColor].bar}`}
              aria-hidden="true"
            />
          )}
          <span className={accentStyles[accentColor].kicker}>{kicker}</span>
        </div>
      )}

      {/* Primary Section Title with text balance */}
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight [text-wrap:balance]">
        {title}
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed [text-wrap:balance]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
