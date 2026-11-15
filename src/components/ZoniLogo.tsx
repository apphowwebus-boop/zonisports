import React from "react";

interface ZoniLogoProps {
  variant?: "header" | "light" | "stamp";
  showText?: boolean;
  className?: string;
}

export default function ZoniLogo({
  variant = "header",
  showText = true,
  className = ""
}: ZoniLogoProps) {
  if (variant === "stamp") {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-brand/90 backdrop-blur-xs border border-white/20 select-none pointer-events-none ${className}`}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18 2L32 8.5V19.5C32 27.2 26 32.6 18 34.5C10 32.6 4 27.2 4 19.5V8.5L18 2Z"
            fill="#1E293B"
            stroke="#EA580C"
            strokeWidth="2.4"
          />
          <path
            d="M11 12H25L14 24H25"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-condensed font-extrabold text-[10px] tracking-[0.14em] text-white uppercase leading-none">
          ZONI SPORT
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div className="w-9 h-9 rounded-lg bg-slate-brand flex items-center justify-center shrink-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18 2L32 8.5V19.5C32 27.2 26 32.6 18 34.5C10 32.6 4 27.2 4 19.5V8.5L18 2Z"
            fill="#1E293B"
            stroke="#EA580C"
            strokeWidth="2.5"
          />
          <path
            d="M11 12H25L14 24H25"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12L15 24"
            stroke="#EA580C"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-condensed font-extrabold text-xl tracking-wider text-ink uppercase whitespace-nowrap">
            ZONI <span className="text-accent">SPORT</span>
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-ink-muted uppercase mt-0.5 whitespace-nowrap">
            SIALKOT · FACTORY DIRECT
          </span>
        </div>
      )}
    </div>
  );
}
