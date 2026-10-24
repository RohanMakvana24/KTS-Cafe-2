import React from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'dark' | 'veg' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  loading = false,
  disabled = false,
  children,
  className = '',
  ...props
}) => {
  // Base styles: accessible focus, smooth transitions, single-line typography
  const baseStyles =
    'inline-flex items-center justify-center font-medium select-none whitespace-nowrap shrink-0 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98] hover:-translate-y-0.5 cursor-pointer';

  // Strict Brand Variant Styles
  const variantStyles: Record<ButtonVariant, string> = {
    // Primary Signature Brand Yellow (#FFDD17)
    primary:
      'bg-[#FFDD17] text-[#050708] font-bold hover:bg-[#F3D007] hover:shadow-[0_4px_20px_rgba(255,221,23,0.4)] focus-visible:ring-[#FFDD17] focus-visible:ring-offset-2 border border-[#FFDD17]',
    
    // Accent Red (#E01E25) for high-intent actions
    accent:
      'bg-[#E01E25] text-white font-semibold hover:bg-[#C8171E] hover:shadow-[0_4px_20px_rgba(224,30,37,0.4)] focus-visible:ring-[#E01E25] focus-visible:ring-offset-2 border border-[#E01E25]',
    
    // Clean Secondary Outline with subtle hover
    secondary:
      'bg-transparent text-neutral-800 dark:text-white border border-neutral-300 dark:border-white/20 hover:border-neutral-900 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2',
    
    // Neutral Luxury Surface
    dark:
      'bg-neutral-100 dark:bg-[#141923] text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 hover:bg-neutral-200 dark:hover:bg-[#1C2331] hover:border-neutral-300 dark:hover:border-white/25 focus-visible:ring-[#FFDD17] focus-visible:ring-offset-2',
    
    // Vegetarian Green (#00843D)
    veg:
      'bg-[#00843D] text-white font-semibold hover:bg-[#007034] hover:shadow-[0_4px_16px_rgba(0,132,61,0.35)] focus-visible:ring-[#00843D] focus-visible:ring-offset-2 border border-[#00843D]',
    
    // Ghost Minimal
    ghost:
      'bg-transparent text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 focus-visible:ring-neutral-400 dark:focus-visible:ring-white/40',
  };

  // Spatial Button Padding math: horizontal ≈ 2x vertical with WCAG AA touch targets
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs px-4 py-2 rounded-lg gap-1.5 min-h-[40px]',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2 min-h-[44px]',
    lg: 'text-base px-7 py-3.5 rounded-xl gap-2.5 min-h-[50px]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <span className="inline-flex shrink-0">{icon}</span>
      )}
    </button>
  );
};
