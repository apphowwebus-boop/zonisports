import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { Product } from "../types";
import { X, MessageCircle } from "lucide-react";
import { ZONI_WHATSAPP_NUMBER } from "../data";
import ZoniLogo from "./ZoniLogo";

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailsModal({
  product,
  onClose
}: ProductDetailsModalProps) {
  const [activeImage, setActiveImage] = useState<string>("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 220, damping: 24 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 220, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClose = () => {
    setActiveImage("");
    onClose();
  };

  const handleWhatsAppInquiry = () => {
    if (!product) return;
    const text = encodeURIComponent(
      `Assalam o Alaikum ZONI SPORT (@zonisport2021)! I am interested in this item from your catalog: ${product.name}`
    );
    window.open(`https://wa.me/${ZONI_WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      {product && (
        <div id="product-details-portal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/55 backdrop-blur-xs cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: "spring", stiffness: 280, damping: 25 }}
            className="relative bg-white border border-border-hairline max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl z-10 p-4 sm:p-6 flex flex-col gap-4 max-h-[92vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between gap-4">
              <ZoniLogo variant="header" />
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg hover:bg-surface-muted text-ink-secondary hover:text-ink transition-colors cursor-pointer"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 3D Interactive Large Product Image */}
            <div
              style={{ perspective: "900px" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative aspect-[3/4] max-h-[58vh] w-full bg-white rounded-xl overflow-hidden border border-border-hairline mx-auto shadow-sm"
              >
                <img
                  src={activeImage || product.image}
                  alt={product.name}
                  className="w-full h-full object-contain bg-white"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3" style={{ transform: "translateZ(20px)" }}>
                  <ZoniLogo variant="stamp" />
                </div>
              </motion.div>
            </div>

            {/* Alternate Photo Switcher if available */}
            {product.secondaryImage && (
              <div className="flex items-center justify-center gap-2.5">
                <button
                  onClick={() => setActiveImage(product.image)}
                  className={`w-16 h-20 rounded-lg overflow-hidden border cursor-pointer bg-white transition-transform hover:scale-105 ${
                    (activeImage || product.image) === product.image ? "border-accent ring-2 ring-accent" : "border-border-hairline"
                  }`}
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
                <button
                  onClick={() => setActiveImage(product.secondaryImage!)}
                  className={`w-16 h-20 rounded-lg overflow-hidden border cursor-pointer bg-white transition-transform hover:scale-105 ${
                    activeImage === product.secondaryImage ? "border-accent ring-2 ring-accent" : "border-border-hairline"
                  }`}
                >
                  <img src={product.secondaryImage} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-border-hairline">
              <h3 className="font-display font-bold text-base text-ink">{product.name}</h3>

              <button
                onClick={handleWhatsAppInquiry}
                className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
