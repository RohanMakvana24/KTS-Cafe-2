import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'subtle' | 'bordered';
  interactive?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  interactive = false,
  className = '',
  children,
  ...props
}) => {
  const variantStyles = {
    elevated: 'bg-white dark:bg-[#0D1015] border border-neutral-200/80 dark:border-white/8 shadow-sm dark:shadow-none',
    subtle: 'bg-[#F6F2E9] dark:bg-[#141923] border border-neutral-200/60 dark:border-white/6 shadow-sm dark:shadow-none',
    bordered: 'bg-transparent border border-neutral-300 dark:border-white/12',
  }[variant];

  const hoverStyle = interactive
    ? 'hover:border-neutral-400 dark:hover:border-white/20 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-lg transition-all duration-200 cursor-pointer'
    : '';

  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 ${variantStyles} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
