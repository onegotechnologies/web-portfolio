import React from 'react';

interface LogoMarkProps {
  className?: string;
  color?: string;
  height?: number;
}

/* OneGo Technologies SVG logomark — geometric blocks + arrow */
export const LogoMark: React.FC<LogoMarkProps> = ({
  className = '',
  color = '#FFFFFF',
  height = 36,
}) => {
  const ratio = 3.2;
  const width = height * ratio;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 50"
      width={width}
      height={height}
      className={className}
      aria-label="OneGo Technologies"
      role="img"
    >
      {/* Geometric block mark — three connected squares with arrow */}
      <g transform="translate(0, 5)">
        {/* Block 1 */}
        <rect x="0" y="0" width="14" height="14" fill={color} opacity="1" />
        {/* Block 2 */}
        <rect x="17" y="0" width="14" height="14" fill={color} opacity="0.75" />
        {/* Block 3 (small, offset) */}
        <rect x="8" y="17" width="14" height="14" fill={color} opacity="0.55" />
        {/* Arrow pointing right */}
        <path
          d="M34 7 L42 7 M38 3 L42 7 L38 11"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      {/* ONEGO wordmark */}
      <text
        x="52"
        y="33"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontWeight="600"
        fontSize="22"
        fill={color}
        letterSpacing="-0.5"
      >
        ONEGO
      </text>
      {/* TECHNOLOGIES label */}
      <text
        x="53"
        y="46"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontWeight="400"
        fontSize="8.5"
        fill={color}
        opacity="0.55"
        letterSpacing="2.5"
      >
        TECHNOLOGIES
      </text>
    </svg>
  );
};
