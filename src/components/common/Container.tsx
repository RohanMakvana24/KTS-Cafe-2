import React from 'react';

export type ContainerSize = 'default' | 'narrow' | 'wide' | 'full';

export interface ContainerProps {
  as?: React.ElementType;
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  size = 'default',
  className = '',
  children,
}) => {
  const sizeStyles: Record<ContainerSize, string> = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}
    >
      {children}
    </Component>
  );
};
