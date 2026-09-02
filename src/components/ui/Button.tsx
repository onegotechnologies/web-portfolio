import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const base =
    'inline-flex items-center gap-2 font-display font-medium tracking-tight transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B7FF3C]';

  const sizes = {
    sm: 'text-sm px-5 py-2.5',
    md: 'text-base px-6 py-3.5',
    lg: 'text-lg px-8 py-4',
  };

  const variants = {
    primary:
      'bg-[#B7FF3C] text-[#050505] hover:bg-[#c8ff5e] active:bg-[#a5e62e] [&>span.arrow]:translate-x-0 hover:[&>span.arrow]:translate-x-1',
    secondary:
      'bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5 [&>span.arrow]:translate-x-0 hover:[&>span.arrow]:translate-x-1',
    ghost:
      'bg-transparent text-[#8A8A86] hover:text-white [&>span.arrow]:translate-x-0 hover:[&>span.arrow]:translate-x-1',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      <span className="arrow inline-block transition-transform duration-200">→</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} aria-label={ariaLabel} type="button">
      {content}
    </button>
  );
};
