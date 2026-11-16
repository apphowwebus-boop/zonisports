import React, { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Product, SportId } from "./types";
import { PRODUCTS, ZONI_CRAFT_STAGES, ZONI_INSTAGRAM_URL, ZONI_WHATSAPP_NUMBER } from "./data";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DepartmentGrid from "./components/DepartmentGrid";
import ProductCard from "./components/ProductCard";
import LookbookSplitSection from "./components/LookbookSplitSection";
import ProductDetailsModal from "./components/ProductDetailsModal";
import ZoniLogo from "./components/ZoniLogo";
import ContentProtection from "./components/ContentProtection";

export default function App() {
  const [selectedSport, setSelectedSport] = useState<SportId>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectAndScrollToCatalog = (sport: SportId) => {
    setSelectedSport(sport);
    handleNavigate("products");
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedSport === "all") return true;
    if (selectedSport === "men") return p.gender === "men";
    if (selectedSport === "women") return p.gender === "women";
    return p.sport === selectedSport;
  });

  const filterTabs: { id: SportId; label: string }[] = [
    { id: "all", label: "All" },
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "hoodies", label: "Hoodies" },
    { id: "tracksuits", label: "Tracksuits" },
    { id: "varsity-jackets", label: "Varsity & Jackets" },
    { id: "activewear", label: "Activewear" },
    { id: "polos-teamwear", label: "Polos & Kits" }
  ];

  return (
    <div
      id="zoni-sport-catalog"
      className="min-h-screen bg-white text-ink font-sans overflow-x-hidden select-none"
    >
      <ContentProtection />

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-50 pointer-events-none"
      />

      <Navbar
        onNavigate={handleNavigate}
        onSelectSport={handleSelectAndScrollToCatalog}
      />

      {/* Section 1: 3-Slide 3D Hero Carousel & Kinetic Marquee */}
      <HeroSection
        onSelectSport={setSelectedSport}
        onScrollToProducts={() => handleNavigate("products")}
      />

      {/* Section 2: Alay-Inspired 4-Column Shop by Department Grid */}
      <DepartmentGrid onSelectDepartment={handleSelectAndScrollToCatalog} />

      {/* Section 3: Pure Visual Product Catalog Grid (Male & Female Models) */}
      <section id="products" className="py-14 sm:py-18 bg-white border-b border-border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8"
          >
            <div>
              <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-accent uppercase mb-1.5">
                Designed &amp; Worn Studio Collection
              </p>
              <h2 className="font-condensed font-extrabold text-3xl sm:text-4xl uppercase tracking-wide text-ink">
                Product <span className="text-accent">Catalog</span>
              </h2>
            </div>

            <div className="flex items-center gap-1 p-1 bg-surface-muted rounded-lg border border-border-hairline overflow-x-auto max-w-full no-scrollbar">
              {filterTabs.map((tab) => {
                const active = selectedSport === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedSport(tab.id)}
                    className={`relative px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active ? "text-ink" : "text-ink-secondary hover:text-ink"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="zoni-active-tab"
                        transition={{ type: "spring", stiffness: 360, damping: 30 }}
                        className="absolute inset-0 bg-white rounded-md shadow-xs"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((p, idx) => (
              <ProductCard
                key={p.id}
                product={p}
                index={idx}
                onSelect={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Men & Women Editorial Lookbook Split with Opposing Parallax */}
      <LookbookSplitSection onSelectGender={handleSelectAndScrollToCatalog} />

      {/* Section 5: Custom Logo & Private-Label Manufacturing (Sialkot OEM) */}
      <section id="factory" className="py-14 sm:py-18 bg-white border-b border-border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
          >
            <div>
              <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-accent uppercase mb-1.5">
                Private Label &amp; Bulk Orders
              </p>
              <h2 className="font-condensed font-extrabold text-3xl sm:text-4xl uppercase tracking-wide text-ink">
                Sialkot <span className="text-accent">Manufacturing</span>
              </h2>
            </div>

            <p className="font-sans text-sm text-ink-secondary max-w-md">
              Direct factory production with custom embroidery, chenille crests, woven neck tags, and global export dispatch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {ZONI_CRAFT_STAGES.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="group bg-white border border-border-hairline hover:border-border-strong rounded-xl overflow-hidden shadow-xs hover:shadow-[0_18px_38px_-14px_rgba(17,24,39,0.14)] transition-all"
              >
                <div className="relative aspect-[4/3] w-full bg-surface-muted overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.step}
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <ZoniLogo variant="stamp" />
                  </div>
                </div>
                <div className="p-4 border-t border-border-hairline">
                  <h3 className="font-display font-bold text-sm text-ink">{stage.step}</h3>
                  <p className="font-sans text-xs text-ink-secondary mt-1">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Direct Wholesale WhatsApp & Instagram Catalog CTA Band */}
      <section id="contact-band" className="py-14 sm:py-16 bg-surface border-b border-border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-brand text-white rounded-2xl border border-black/15 p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-md"
          >
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-accent uppercase mb-2">
                ZONI SPORTS WEAR · Manufacturer &amp; Supplier
              </p>
              <h2
                className="font-condensed font-extrabold text-3xl sm:text-4xl uppercase tracking-wide text-white"
                style={{ textWrap: "balance" }}
              >
                Launch Your Brand or <span className="text-accent">Bulk Order</span>
              </h2>
              <p className="font-sans text-sm text-zinc-300 mt-2">
                Send your logo or select any sports, street, or gym wear design from our catalog for worldwide dispatch.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${ZONI_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 whitespace-nowrap shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href={ZONI_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg border border-white/25 bg-white/10 hover:bg-white hover:text-ink text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Instagram @zonisport2021</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bold Jet-Black & Crimson Red Footer with Official ZONI SPORTS WEAR Logo */}
      <footer id="zoni-footer" className="bg-slate-brand text-white py-10 border-t-2 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2.5">
            <ZoniLogo variant="light" />
            <p className="font-mono text-[11px] text-zinc-400">
              ZONI SPORTS WEAR · Sports, Street &amp; Gym Wear Manufacturer · Sialkot
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-display font-bold uppercase tracking-wider text-zinc-300">
            <a
              href={ZONI_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent underline underline-offset-4 transition-colors"
            >
              Instagram @zonisport2021
            </a>
            <a
              href={`https://wa.me/${ZONI_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent underline underline-offset-4 transition-colors"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </footer>

      {/* 3D Animated Image Lightbox Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
