import React from 'react';
import logoHorizontalLight from '../../assets/logo-horizontal-light.png';
import logoHorizontalDark from '../../assets/logo-horizontal-dark.png';
import logoFullLight from '../../assets/logo-full-light.png';
import logoFullDark from '../../assets/logo-full-dark.png';
import logoMarkLight from '../../assets/logo-mark-light.png';
import logoMarkDark from '../../assets/logo-mark-dark.png';

export interface LogoMarkProps {
  className?: string;
  height?: number | string;
  variant?: 'horizontal' | 'stacked' | 'mark';
  theme?: 'light' | 'dark'; // 'light' is for dark backgrounds (white+blue text), 'dark' is for light backgrounds (navy+blue text)
  onDark?: boolean; // legacy compatibility: if true, forces theme='light'
}

/**
 * Official OneGo Technologies Brand Logo.
 * Renders high-resolution transparent assets without clunky framing or solid boxes.
 */
export const LogoMark: React.FC<LogoMarkProps> = ({
  className = '',
  height = 38,
  variant = 'horizontal',
  theme = 'light',
  onDark,
}) => {
  const isLightVersion = onDark !== undefined ? onDark : theme === 'light';

  let src: string;
  if (variant === 'mark') {
    src = isLightVersion ? logoMarkLight : logoMarkDark;
  } else if (variant === 'stacked') {
    src = isLightVersion ? logoFullLight : logoFullDark;
  } else {
    // default: horizontal lockup
    src = isLightVersion ? logoHorizontalLight : logoHorizontalDark;
  }

  const numericHeight = typeof height === 'number' ? height : parseInt(height as string, 10) || 38;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={src}
        alt="OneGo Technologies"
        style={{
          height: typeof height === 'number' ? `${height}px` : height,
          width: 'auto',
          maxHeight: `${numericHeight}px`,
        }}
        className="object-contain block transition-opacity duration-200 hover:opacity-90"
      />
    </div>
  );
};
