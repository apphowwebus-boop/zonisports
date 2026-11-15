import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ZoniLogo from "./ZoniLogo";
import { ZONI_WHATSAPP_NUMBER } from "../data";
import { SportId } from "../types";

interface NavbarProps {
  onNavigate: (section: string) => void;
  onSelectSport: (sport: SportId) => void;
}

export default function Navbar({ onNavigate, onSelectSport }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const categories: { id: SportId; label: string }[] = [
    { id: "all", label: "All Products" },
    { id: "men", label: "Men's Collection" },
    { id: "women", label: "Women's Collection" },
    { id: "hoodies", label: "Custom Hoodies" },
    { id: "tracksuits", label: "Tracksuits & Sets" },
    { id: "varsity-jackets", label: "Varsity & Jackets" },
    { id: "activewear", label: "Activewear & Gym" },
    { id: "polos-teamwear", label: "Polos & Team Kits" }
  ];

  return (
    <header
      id="zoni-navbar-header"
      className="sticky top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-border-hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("hero");
          }}
          className="whitespace-nowrap shrink-0"
          aria-label="Zoni Sport Home"
        >
          <ZoniLogo variant="header" />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-xs font-display font-bold tracking-wider uppercase text-ink-secondary">
          <button
            onClick={() => handleLinkClick("departments")}
            className="hover:text-ink transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Collections
          </button>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-ink transition-colors whitespace-nowrap shrink-0 cursor-pointer inline-flex items-center gap-1"
            >
              <span>Catalog</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-52 bg-white border border-border-hairline rounded-lg shadow-xl p-1.5 z-50">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectSport(cat.id);
                      handleLinkClick("products");
                    }}
                    className="w-full text-left px-3 py-2 rounded text-xs font-semibold text-ink-secondary hover:bg-surface-muted hover:text-ink transition-colors cursor-pointer"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick("lookbook")}
            className="hover:text-ink transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Lookbook
          </button>

          <button
            onClick={() => handleLinkClick("factory")}
            className="hover:text-ink transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Manufacturing
          </button>

          <button
            onClick={() => handleLinkClick("contact-band")}
            className="hover:text-ink transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${ZONI_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white font-display font-bold text-[11px] tracking-wider uppercase transition-colors whitespace-nowrap shrink-0"
          >
            Order on WhatsApp
          </a>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden rounded-lg border border-border-hairline text-ink hover:bg-surface-muted transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border-hairline px-4 py-3 flex flex-col gap-1">
          <button
            onClick={() => handleLinkClick("departments")}
            className="text-left py-2.5 px-3 rounded text-xs font-bold uppercase text-ink hover:bg-surface-muted cursor-pointer"
          >
            Collections
          </button>
          <button
            onClick={() => handleLinkClick("products")}
            className="text-left py-2.5 px-3 rounded text-xs font-bold uppercase text-ink hover:bg-surface-muted cursor-pointer"
          >
            Catalog
          </button>
          <button
            onClick={() => handleLinkClick("lookbook")}
            className="text-left py-2.5 px-3 rounded text-xs font-bold uppercase text-ink hover:bg-surface-muted cursor-pointer"
          >
            Lookbook
          </button>
          <button
            onClick={() => handleLinkClick("factory")}
            className="text-left py-2.5 px-3 rounded text-xs font-bold uppercase text-ink hover:bg-surface-muted cursor-pointer"
          >
            Manufacturing
          </button>
          <button
            onClick={() => handleLinkClick("contact-band")}
            className="text-left py-2.5 px-3 rounded text-xs font-bold uppercase text-ink hover:bg-surface-muted cursor-pointer"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
