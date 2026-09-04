import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e?: React.MouseEvent) => void;
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
    'group inline-flex items-center gap-2.5 font-display font-medium tracking-tight transition-all duration-200 cursor-pointer select-none rounded-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1264FF]';

  const sizes = {
    sm: 'text-xs md:text-sm px-5 py-2.5',
    md: 'text-sm md:text-base px-6 py-3',
    lg: 'text-base md:text-lg px-8 py-4',
  };

  const variants = {
    primary:
      'bg-[#1264FF] text-white hover:bg-[#1D6BFF] active:bg-[#0E52D6] shadow-sm hover:shadow-md [&>span.arrow]:translate-x-0 hover:[&>span.arrow]:translate-x-1',
    secondary:
      'bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10 [&>span.arrow]:translate-x-0 hover:[&>span.arrow]:translate-x-1',
    navy:
      'bg-[#061536] text-white hover:bg-[#0B2252] border border-[#061536] [&>span.arrow]:translate-x-0 hover:[&>span.arrow]:translate-x-1',
    ghost:
      'bg-transparent text-[#5B667A] hover:text-[#1264FF] [&>span.arrow]:translate-x-0 hover:[&>span.arrow]:translate-x-1',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
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

