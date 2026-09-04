import React from 'react';

/* 
  GeometricCanvas — Hero visual language
  Extends the OneGo logo's block+arrow geometric motif into 
  a sophisticated structural composition spread across the full canvas.
  Pure SVG — no external dependencies.
*/
export const GeometricCanvas: React.FC = () => {
  return (
    <div className="relative w-full h-full" aria-hidden="true">
      <svg
        viewBox="0 0 560 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ── Fine grid background */}
        <defs>
          <pattern id="finegrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="560" height="500" fill="url(#finegrid)" />

        {/* ── LARGE anchor block — top-left area */}
        <rect className="geo-block-1" x="20" y="30" width="110" height="110" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <rect className="geo-block-1" x="36" y="46" width="78" height="78" fill="rgba(255,255,255,0.04)" />

        {/* ── ACCENT block — top-right, offset from large */}
        <rect className="geo-block-2" x="160" y="20" width="70" height="70" fill="none" stroke="rgba(18,100,255,0.4)" strokeWidth="1" />
        <rect className="geo-block-2" x="170" y="30" width="50" height="50" fill="rgba(18,100,255,0.08)" />

        {/* ── MID-SIZED block — right-center */}
        <rect className="geo-block-3" x="380" y="80" width="90" height="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect className="geo-block-3" x="394" y="94" width="62" height="62" fill="rgba(255,255,255,0.03)" />

        {/* ── Small blue accent — far right */}
        <rect className="geo-block-4" x="490" y="60" width="38" height="38" fill="rgba(18,100,255,0.2)" />
        <rect className="geo-block-4" x="498" y="68" width="22" height="22" fill="rgba(29,107,255,0.3)" />

        {/* ── MEDIUM block — center-left */}
        <rect className="geo-block-2" x="60" y="200" width="80" height="80" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
        <rect className="geo-block-3" x="72" y="212" width="56" height="56" fill="rgba(255,255,255,0.025)" />

        {/* ── MEDIUM block — center-right  */}
        <rect className="geo-block-3" x="330" y="230" width="75" height="75" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

        {/* ── SMALL block bottom-right cluster */}
        <rect className="geo-block-4" x="450" y="280" width="50" height="50" fill="none" stroke="rgba(18,100,255,0.3)" strokeWidth="1" />
        <rect className="geo-block-4" x="458" y="288" width="34" height="34" fill="rgba(18,100,255,0.08)" />

        {/* ── BOTTOM-LEFT block */}
        <rect className="geo-block-3" x="20" y="360" width="100" height="100" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <rect className="geo-block-4" x="35" y="375" width="70" height="70" fill="rgba(255,255,255,0.02)" />

        {/* ── BOTTOM-CENTER block */}
        <rect className="geo-block-4" x="240" y="380" width="60" height="60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

        {/* ── LARGE bottom-right */}
        <rect className="geo-block-3" x="400" y="350" width="130" height="130" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

        {/* ── Connection lines */}
        {/* Horizontal top */}
        <line className="geo-line-1" x1="130" y1="85" x2="160" y2="85" stroke="rgba(18,100,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Vertical mid-left */}
        <line className="geo-line-2" x1="100" y1="140" x2="100" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 4" />
        {/* Diagonal center to right */}
        <line className="geo-line-3" x1="230" y1="270" x2="330" y2="268" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Bottom diagonal */}
        <line className="geo-line-1" x1="140" y1="410" x2="240" y2="410" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2 6" />

        {/* ── Arrow motifs — directional */}
        {/* Top-center arrow right */}
        <g className="geo-block-2" transform="translate(250, 77)">
          <line x1="0" y1="8" x2="24" y2="8" stroke="rgba(18,100,255,0.8)" strokeWidth="1.5" strokeLinecap="round" />
          <polyline points="19,3 24,8 19,13" fill="none" stroke="rgba(18,100,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Arrow pointing down-right, center */}
        <g className="geo-block-3" transform="translate(190, 250)">
          <line x1="0" y1="0" x2="16" y2="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round" />
          <polyline points="10,16 16,16 16,10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Arrow pointing right, bottom */}
        <g className="geo-block-4" transform="translate(310, 413)">
          <line x1="0" y1="8" x2="20" y2="8" stroke="rgba(18,100,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
          <polyline points="15,3 20,8 15,13" fill="none" stroke="rgba(18,100,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* ── Active indicator dots */}
        <circle className="geo-dot" cx="160" cy="20" r="3.5" fill="#1264FF" />
        <circle className="geo-dot" cx="490" cy="60" r="2.5" fill="#1D6BFF" opacity="0.8" style={{ animationDelay: '0.5s' }} />
        <circle className="geo-dot" cx="330" cy="230" r="2" fill="rgba(18,100,255,0.7)" style={{ animationDelay: '0.9s' }} />
        <circle className="geo-dot" cx="240" cy="380" r="2" fill="rgba(18,100,255,0.5)" style={{ animationDelay: '1.4s' }} />

        {/* ── Structural axis lines (architectural feel) */}
        <line x1="0" y1="160" x2="560" y2="160" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        <line x1="0" y1="320" x2="560" y2="320" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
        <line x1="280" y1="0" x2="280" y2="500" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />

        {/* ── Annotation labels */}
        <text x="22" y="28" fontFamily="'Space Grotesk', monospace" fontSize="7.5" fill="rgba(255,255,255,0.18)" letterSpacing="1.5">SYS.01</text>
        <text x="382" y="78" fontFamily="'Space Grotesk', monospace" fontSize="7.5" fill="rgba(18,100,255,0.5)" letterSpacing="1.5">NODE.A</text>
        <text x="22" y="358" fontFamily="'Space Grotesk', monospace" fontSize="7.5" fill="rgba(255,255,255,0.12)" letterSpacing="1.5">SYS.02</text>
        <text x="450" y="278" fontFamily="'Space Grotesk', monospace" fontSize="7.5" fill="rgba(18,100,255,0.4)" letterSpacing="1.5">ACTIVE</text>
      </svg>
    </div>
  );
};
