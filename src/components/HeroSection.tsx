import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ZONI_INSTAGRAM_URL, ZONI_WHATSAPP_NUMBER } from "../data";
import { SportId } from "../types";
import ZoniLogo from "./ZoniLogo";

import hoodiesBanner from "../assets/images/zoni_hero_hoodies_1794774732215.jpg";
import varsityBanner from "../assets/images/zoni_hero_varsity_1794774732565.jpg";
import activewearBanner from "../assets/images/zoni_hero_activewear_1794774733620.jpg";

interface HeroSectionProps {
  onSelectSport: (sport: SportId) => void;
  onScrollToProducts: () => void;
}

interface HeroBannerSlide {
  id: number;
  kicker: string;
  titleTop: string;
  titleAccent: string;
  subtitle: string;
  ctaLabel: string;
  targetSport: SportId;
  image: string;
  alt: string;
}

const SLIDES: HeroBannerSlide[] = [
  {
    id: 1,
    kicker: "ZONI SPORT · SIALKOT · WORLDWIDE SHIPPING",
    titleTop: "CUSTOM HOODIES",
    titleAccent: "MANUFACTURER",
    subtitle: "Heavyweight fleece hoodies, waffle caramel sets & charcoal tracksuits crafted for custom logos and bulk export.",
    ctaLabel: "Explore Hoodies",
    targetSport: "hoodies",
    image: hoodiesBanner,
    alt: "Zoni Sport Custom Fleece Hoodies and Tracksuits Collection"
  },
  {
    id: 2,
    kicker: "SIALKOT EXPORT OUTERWEAR · PRIVATE LABEL",
    titleTop: "VARSITY JACKETS &",
    titleAccent: "TRACKSUITS",
    subtitle: "Black & amber chenille varsity bombers, magenta letterman jackets & emerald striped tracksuits.",
    ctaLabel: "Explore Jackets",
    targetSport: "varsity-jackets",
    image: varsityBanner,
    alt: "Zoni Sport Varsity Letterman Jackets and Striped Tracksuits"
  },
  {
    id: 3,
    kicker: "GYM CO-ORDS · SUBLIMATED TEAMWEAR",
    titleTop: "ACTIVEWEAR &",
    titleAccent: "TEAM POLOS",
    subtitle: "Burgundy seamless gym sets, cobalt blue team kits & black-crimson raglan polos shipped globally.",
    ctaLabel: "Explore Activewear",
    targetSport: "activewear",
    image: activewearBanner,
    alt: "Zoni Sport Seamless Activewear Gym Sets and Team Polos"
  }
];

export default function HeroSection({
  onSelectSport,
  onScrollToProducts
}: HeroSectionProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked 3D parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const imageParallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const textParallaxY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  // Interactive 3D tilt on mouse move over hero banner
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
  };

  const slide = SLIDES[currentIdx];

  const tickerItems = [
    "ZONI SPORT SIALKOT",
    "CUSTOM HOODIES MANUFACTURER",
    "VARSITY JACKETS & TRACKSUITS",
    "SEAMLESS ACTIVEWEAR",
    "CUSTOM LOGO + BULK ORDERS",
    "WORLDWIDE SHIPPING"
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full bg-white border-b border-border-hairline overflow-hidden"
    >
      {/* Top Hero Headline + Controls Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <motion.div style={{ y: textParallaxY }} className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-accent uppercase mb-2">
                  {slide.kicker}
                </p>

                <h1
                  className="font-condensed font-extrabold uppercase tracking-tight leading-[0.94] text-ink"
                  style={{ fontSize: "clamp(2.35rem, 4.4vw, 4rem)", textWrap: "balance" }}
                >
                  {slide.titleTop}{" "}
                  <span className="text-accent">{slide.titleAccent}</span>
                </h1>

                <p className="font-sans text-sm sm:text-[15px] text-ink-secondary mt-2.5 max-w-xl">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Primary Actions + Slide Arrows */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => {
                onSelectSport(slide.targetSport);
                onScrollToProducts();
              }}
              className="px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-sm"
            >
              <span>{slide.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={ZONI_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg border border-border-strong bg-surface hover:bg-surface-muted text-ink font-display font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              @zonisport2021
            </a>

            <div className="flex items-center gap-1.5 ml-1">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-lg border border-border-hairline bg-white hover:bg-surface-muted text-ink flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-lg border border-border-hairline bg-white hover:bg-surface-muted text-ink flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Large Full-Width 3D Interactive 16:9 Hero Slide Stage */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6"
        style={{ perspective: "1400px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full aspect-[16/9] max-h-[540px] bg-white rounded-2xl border border-border-hairline overflow-hidden shadow-[0_24px_60px_-20px_rgba(17,24,39,0.12)]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <motion.img
                src={slide.image}
                alt={slide.alt}
                style={{ y: imageParallaxY, scale: imageParallaxScale }}
                className="w-full h-full object-cover object-center will-change-transform"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>

          {/* 3D Floating Zoni Sport Logo Stamp */}
          <div
            className="absolute top-4 left-4 z-20"
            style={{ transform: "translateZ(30px)" }}
          >
            <ZoniLogo variant="stamp" className="px-3 py-1.5 shadow-md" />
          </div>

          {/* Slide Progress Overlay Bottom-Left */}
          <div
            className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-border-hairline px-3 py-2 rounded-lg shadow-sm"
            style={{ transform: "translateZ(24px)" }}
          >
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIdx(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIdx === idx ? "w-8 bg-accent" : "w-2.5 bg-border-strong hover:bg-ink-muted"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
            <span className="ml-1.5 text-[11px] font-mono font-bold text-ink tabular-nums">
              0{currentIdx + 1} / 0{SLIDES.length}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Smooth Continuous Kinetic Marquee Bar */}
      <div className="bg-slate-brand text-white border-t border-black/10 overflow-hidden py-2.5">
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-8 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-white/90"
            >
              <span>{item}</span>
              <span className="text-accent">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
