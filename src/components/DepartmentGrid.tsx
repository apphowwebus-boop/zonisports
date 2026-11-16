import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { DEPARTMENT_CARDS } from "../data";
import { SportId } from "../types";
import ZoniLogo from "./ZoniLogo";

interface DepartmentGridProps {
  onSelectDepartment: (sportId: SportId) => void;
}

export default function DepartmentGrid({ onSelectDepartment }: DepartmentGridProps) {
  return (
    <section id="departments" className="py-12 sm:py-16 bg-surface border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="flex items-end justify-between gap-4 mb-7"
        >
          <div>
            <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-accent uppercase mb-1.5">
              Zoni Sport Collections
            </p>
            <h2 className="font-condensed font-extrabold text-3xl sm:text-4xl uppercase tracking-wide text-ink">
              Shop by <span className="text-accent">Category</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectDepartment("all")}
            className="text-xs font-display font-bold uppercase tracking-wider text-ink-secondary hover:text-accent transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>View Full Catalog</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {DEPARTMENT_CARDS.map((dept, idx) => (
            <motion.button
              key={dept.id}
              type="button"
              onClick={() => onSelectDepartment(dept.sportId)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative text-left bg-white rounded-xl border border-border-hairline hover:border-border-strong overflow-hidden shadow-xs hover:shadow-[0_20px_40px_-16px_rgba(17,24,39,0.14)] transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full bg-white overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.name}
                  draggable={false}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.06] select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5">
                  <ZoniLogo variant="stamp" />
                </div>
              </div>

              <div className="px-4 py-3.5 border-t border-border-hairline flex items-center justify-between gap-2 bg-white">
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-sm sm:text-base text-ink group-hover:text-accent transition-colors truncate">
                    {dept.name}
                  </h3>
                  <p className="font-sans text-xs text-ink-secondary truncate mt-0.5">
                    {dept.description}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent transition-colors shrink-0" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
