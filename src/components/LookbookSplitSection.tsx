import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { LOOKBOOK_MEDIA } from "../data";
import { SportId } from "../types";
import ZoniLogo from "./ZoniLogo";

interface LookbookSplitSectionProps {
  onSelectGender: (gender: SportId) => void;
}

export default function LookbookSplitSection({ onSelectGender }: LookbookSplitSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <section
      ref={sectionRef}
      id="lookbook"
      className="py-14 sm:py-20 bg-surface border-b border-border-hairline overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-9"
        >
          <div>
            <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-accent uppercase mb-1.5">
              2026 Studio Lookbook
            </p>
            <h2
              className="font-condensed font-extrabold text-3xl sm:text-4xl uppercase tracking-wide text-ink"
              style={{ textWrap: "balance" }}
            >
              Styled for <span className="text-accent">Men & Women</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-ink-secondary max-w-md">
            Tailored athletic cuts photographed in clean white studio light for direct retail and private-label sampling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Men's Editorial Lookbook Panel */}
          <motion.div
            style={{ y: leftY }}
            className="group relative bg-white rounded-2xl border border-border-hairline overflow-hidden shadow-xs hover:shadow-[0_24px_50px_-20px_rgba(17,24,39,0.16)] transition-shadow duration-300 flex flex-col"
          >
            <div className="grid grid-cols-2 gap-2 p-2 bg-white">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-muted">
                <img
                  src={LOOKBOOK_MEDIA.menFeatured}
                  alt="Men's Waffle Caramel Hoodie Set"
                  draggable={false}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5">
                  <ZoniLogo variant="stamp" />
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-muted">
                <img
                  src={LOOKBOOK_MEDIA.menSecondary}
                  alt="Men's Cobalt Training Jersey and Track Pant Kit"
                  draggable={false}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="px-6 py-5 border-t border-border-hairline flex items-center justify-between gap-4 bg-white">
              <div>
                <h3 className="font-condensed font-extrabold text-2xl uppercase tracking-wide text-ink">
                  Men&apos;s Performance & Fleece
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ink-secondary mt-0.5">
                  Waffle hoodies, varsity jackets & matchday training kits
                </p>
              </div>
              <button
                type="button"
                onClick={() => onSelectGender("men")}
                className="px-4 py-2.5 rounded-lg bg-slate-brand hover:bg-accent text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Men&apos;s Line</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Women's Editorial Lookbook Panel */}
          <motion.div
            style={{ y: rightY }}
            className="group relative bg-white rounded-2xl border border-border-hairline overflow-hidden shadow-xs hover:shadow-[0_24px_50px_-20px_rgba(17,24,39,0.16)] transition-shadow duration-300 flex flex-col"
          >
            <div className="grid grid-cols-2 gap-2 p-2 bg-white">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-muted">
                <img
                  src={LOOKBOOK_MEDIA.womenFeatured}
                  alt="Women's Burgundy Seamless Sports Bra and Legging Set"
                  draggable={false}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5">
                  <ZoniLogo variant="stamp" />
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-muted">
                <img
                  src={LOOKBOOK_MEDIA.womenSecondary}
                  alt="Women's Blush Cropped Hoodie and Jogger Set"
                  draggable={false}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="px-6 py-5 border-t border-border-hairline flex items-center justify-between gap-4 bg-white">
              <div>
                <h3 className="font-condensed font-extrabold text-2xl uppercase tracking-wide text-ink">
                  Women&apos;s Seamless & Co-ords
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ink-secondary mt-0.5">
                  4-way stretch gym sets, cropped fleece & varsity styles
                </p>
              </div>
              <button
                type="button"
                onClick={() => onSelectGender("women")}
                className="px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Women&apos;s Line</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
