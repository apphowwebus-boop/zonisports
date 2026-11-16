import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Product } from "../types";
import ZoniLogo from "./ZoniLogo";

interface ProductCardProps {
  product: Product;
  onSelect: (p: Product) => void;
  index?: number;
  key?: string | number;
}

export default function ProductCard({ product, onSelect, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 260, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 260, damping: 22 });
  const sheenX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), { stiffness: 220, damping: 25 });
  const sheenY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), { stiffness: 220, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const currentSrc = isHovered && product.secondaryImage ? product.secondaryImage : product.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: Math.min((index % 4) * 0.06, 0.24), ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: "950px" }}
    >
      <motion.article
        id={`product-card-${product.id}`}
        onClick={() => onSelect(product)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.18 }}
        className="group relative bg-white rounded-xl border border-border-hairline hover:border-border-strong overflow-hidden flex flex-col cursor-pointer shadow-xs hover:shadow-[0_18px_38px_-14px_rgba(17,24,39,0.16)] transition-shadow duration-300"
      >
        <div className="relative aspect-[3/4] w-full bg-white overflow-hidden">
          {!imgError ? (
            <img
              src={currentSrc}
              alt={product.name}
              draggable={false}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05] select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full bg-surface-muted flex flex-col items-center justify-center p-6 text-center gap-3">
              <ZoniLogo variant="stamp" />
              <span className="font-display font-semibold text-xs text-ink-secondary">{product.name}</span>
            </div>
          )}

          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: useTransform(
                [sheenX, sheenY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.32), transparent 55%)`
              )
            }}
          />

          <div
            className="absolute top-2.5 left-2.5 z-10"
            style={{ transform: "translateZ(20px)" }}
          >
            <ZoniLogo variant="stamp" />
          </div>
        </div>

        <div className="px-3.5 py-3 border-t border-border-hairline bg-white relative z-10">
          <h3 className="font-display font-semibold text-sm text-ink group-hover:text-accent transition-colors line-clamp-1">
            {product.name}
          </h3>
        </div>
      </motion.article>
    </motion.div>
  );
}
