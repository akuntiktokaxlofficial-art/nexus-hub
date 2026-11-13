import { useId } from "react";

type Props = {
  className?: string;
  /** Tampilkan ring orbit + partikel yang mengitari logo. */
  orbit?: boolean;
};

export default function NexusLogo({ className = "", orbit = false }: Props) {
  const uid = useId().replace(/:/g, "");
  const face = `face-${uid}`;
  const diag = `diag-${uid}`;
  const ring = `ring-${uid}`;
  const glow = `glow-${uid}`;
  const N = "M34 168 L34 34 L72 34 L128 118 L128 34 L166 34 L166 168 L128 168 L72 84 L72 168 Z";

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Logo Nexus"
      overflow="visible"
    >
      <defs>
        <linearGradient id={face} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E9D2FF" />
          <stop offset=".45" stopColor="#B45CFF" />
          <stop offset="1" stopColor="#5A12C8" />
        </linearGradient>
        <linearGradient id={diag} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8B2BFF" />
          <stop offset="1" stopColor="#3A0A86" />
        </linearGradient>
        <linearGradient id={ring} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8B2BFF" stopOpacity=".1" />
          <stop offset=".5" stopColor="#D9B3FF" />
          <stop offset="1" stopColor="#8B2BFF" stopOpacity=".2" />
        </linearGradient>
        <filter id={glow} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="9" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* halo */}
      <circle cx="200" cy="200" r="120" fill="#8B2BFF" opacity=".25" filter={`url(#${glow})`} />

      {/* ring belakang */}
      {orbit && (
        <g transform="rotate(-20 200 200)">
          <ellipse cx="200" cy="200" rx="190" ry="58" fill="none" stroke={`url(#${ring})`} strokeWidth="3" opacity=".5" />
        </g>
      )}

      {/* huruf N */}
      <g transform="translate(40 36) scale(1.6)" filter={`url(#${glow})`}>
        <g transform="skewX(-6) translate(12 0)">
          <path d={N} fill="#1a0540" transform="translate(7 8)" />
          <path d={N} fill={`url(#${face})`} />
          <path d="M72 34 L128 118 L128 168 L72 84 Z" fill={`url(#${diag})`} />
          <path d="M34 34 L72 34 L72 60 L34 60 Z" fill="#fff" opacity=".35" />
          <path d={N} fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.5" strokeLinejoin="round" />
        </g>
      </g>

      {/* ring depan + titik orbit */}
      {orbit && (
        <g transform="rotate(-20 200 200)">
          <path
            d="M10 200 A190 58 0 0 0 390 200"
            fill="none"
            stroke={`url(#${ring})`}
            strokeWidth="4"
            strokeLinecap="round"
            filter={`url(#${glow})`}
          />
          <circle r="5" fill="#fff" filter={`url(#${glow})`}>
            <animateMotion
              dur="9s"
              repeatCount="indefinite"
              path="M10 200 a190 58 0 1 0 380 0 a190 58 0 1 0 -380 0"
            />
          </circle>
        </g>
      )}
    </svg>
  );
}
