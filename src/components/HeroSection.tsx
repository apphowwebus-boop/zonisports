import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ZONI_INSTAGRAM_URL } from "../data";
import { SportId } from "../types";
import ZoniLogo from "./ZoniLogo";

import heroMaleStreetwear from "../assets/images/zoni_hero_male_streetwear_1794861705554.jpg";
import heroFemaleFitness from "../assets/images/zoni_hero_female_fitness_1794861705996.jpg";
import heroDuoCampaign from "../assets/images/zoni_hero_duo_campaign_1794861705212.jpg";

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
    kicker: "ZONI SPORTS WEAR · MEN'S STREET & SPORTS LINE",
    titleTop: "STREETWEAR &",
    titleAccent: "SPORTS APPAREL",
    subtitle: "Jet-black and crimson fleece hoodies, joggers, and performance kits engineered with official ZONI SPORTS WEAR branding.",
    ctaLabel: "Explore Men's Line",
    targetSport: "men",
    image: heroMaleStreetwear,
    alt: "Male model wearing black and red Zoni Sports Wear streetwear hoodie and joggers"
  },
  {
    id: 2,
    kicker: "ZONI SPORTS WEAR · WOMEN'S GYM & FITNESS LINE",
    titleTop: "GYM & FITNESS",
    titleAccent: "ACTIVEWEAR",
    subtitle: "High-compression seamless sports bras, sculpted leggings, and zip track jackets built for studio and training performance.",
    ctaLabel: "Explore Women's Line",
    targetSport: "women",
    image: heroFemaleFitness,
    alt: "Female fitness athlete wearing black and crimson Zoni Sports Wear sports bra, leggings, and track jacket"
  },
  {
    id: 3,
    kicker: "ZONI SPORTS WEAR · MANUFACTURER & SUPPLIER",
    titleTop: "SPORTS, STREET &",
    titleAccent: "FITNESS CO-ORDS",
    subtitle: "Signature red and black tracksuits, varsity bombers, and athletic essentials manufactured for brands and clubs worldwide.",
    ctaLabel: "Explore Full Catalog",
    targetSport: "all",
    image: heroDuoCampaign,
    alt: "Male and female models wearing matching red and black Zoni Sports Wear sportswear and streetwear"
  }
];

export default function HeroSection({
  onSelectSport,
  onScrollToProducts
}: HeroSectionProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [0, 44]);
  const imageParallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const textParallaxY = useTransform(scrollYProgress, [0, 1], [0, -20]);

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
    "ZONI SPORTS WEAR",
    "MANUFACTURER & SUPPLIER",
    "SPORTS WEAR",
    "STREET WEAR",
    "GYM & FITNESS WEAR",
    "CUSTOM LOGO + BULK ORDERS"
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full bg-white border-b border-border-hairline overflow-hidden"
    >
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
              className="px-4 py-2.5 rounded-lg border border-ink bg-slate-brand hover:bg-neutral-800 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              @zonisport2021
            </a>

            <div className="flex items-center gap-1.5 ml-1">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-lg border border-border-strong bg-white hover:bg-slate-brand hover:text-white text-ink flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-lg border border-border-strong bg-white hover:bg-slate-brand hover:text-white text-ink flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6"
        style={{ perspective: "1400px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full aspect-[16/9] max-h-[560px] bg-white rounded-2xl border border-black/15 overflow-hidden shadow-[0_24px_60px_-20px_rgba(10,10,10,0.2)]"
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
                className="w-full h-full object-cover object-top will-change-transform"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>

          <div
            className="absolute top-4 left-4 z-20"
            style={{ transform: "translateZ(30px)" }}
          >
            <ZoniLogo variant="stamp" className="px-2.5 py-1.5 shadow-md" />
          </div>

          <div
            className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-slate-brand/90 backdrop-blur-sm border border-white/15 px-3 py-2 rounded-lg shadow-md"
            style={{ transform: "translateZ(24px)" }}
          >
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIdx(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIdx === idx ? "w-8 bg-accent" : "w-2.5 bg-white/35 hover:bg-white/60"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
            <span className="ml-1.5 text-[11px] font-mono font-bold text-white tabular-nums">
              0{currentIdx + 1} / 0{SLIDES.length}
            </span>
          </div>
        </motion.div>
      </div>

      <div className="bg-slate-brand text-white border-t border-accent/40 overflow-hidden py-2.5">
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-8 font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-white"
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
