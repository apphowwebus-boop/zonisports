import React from "react";
import zoniLogoImg from "../assets/images/zonilogo.png";

interface ZoniLogoProps {
  variant?: "header" | "light" | "stamp";
  showText?: boolean;
  className?: string;
}

export default function ZoniLogo({
  variant = "header",
  className = ""
}: ZoniLogoProps) {
  if (variant === "stamp") {
    return (
      <div
        className={`inline-flex items-center justify-center px-2 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-black/15 shadow-xs select-none pointer-events-none ${className}`}
      >
        <img
          src={zoniLogoImg}
          alt="ZONI SPORTS WEAR"
          className="h-5 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (variant === "light") {
    return (
      <div
        className={`inline-flex items-center justify-center px-3.5 py-2 rounded-xl bg-white border border-white/20 shadow-sm select-none ${className}`}
      >
        <img
          src={zoniLogoImg}
          alt="ZONI SPORTS WEAR — Manufacturer & Supplier"
          className="h-10 sm:h-11 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={zoniLogoImg}
        alt="ZONI SPORTS WEAR — Manufacturer & Supplier"
        className="h-11 sm:h-12 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
