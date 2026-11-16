import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert } from "lucide-react";

export default function ContentProtection() {
  const [shieldActive, setShieldActive] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const shieldTimerRef = useRef<number | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToastMessage(null), 2400);
  };

  const triggerBlackoutShield = (durationMs = 2000, reason?: string) => {
    setShieldActive(true);
    if (reason) showToast(reason);
    if (shieldTimerRef.current) window.clearTimeout(shieldTimerRef.current);
    shieldTimerRef.current = window.setTimeout(() => {
      if (!document.hidden) {
        setShieldActive(false);
      }
    }, durationMs);
  };

  useEffect(() => {
    const clearClipboard = () => {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        navigator.clipboard.writeText("").catch(() => {});
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showToast("Content protected — right-click & image download disabled.");
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    const handleClipboardEvent = (e: ClipboardEvent) => {
      e.preventDefault();
      if (e.clipboardData) {
        e.clipboardData.setData("text/plain", "");
      }
      clearClipboard();
      showToast("Copy & paste is disabled on ZONI SPORTS WEAR.");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const mod = e.ctrlKey || e.metaKey;

      // Screenshot keys & OS snipping gestures
      if (
        e.key === "PrintScreen" ||
        e.code === "PrintScreen" ||
        (e.metaKey && e.shiftKey && ["s", "3", "4", "5"].includes(key)) ||
        (e.ctrlKey && e.shiftKey && key === "s")
      ) {
        e.preventDefault();
        clearClipboard();
        triggerBlackoutShield(2200, "Screenshots are restricted on ZONI SPORTS WEAR.");
        return;
      }

      // Block DevTools, View Source, Print, Save Page, Copy/Cut/Select-All
      if (
        e.key === "F12" ||
        (mod && e.shiftKey && ["i", "j", "c", "k"].includes(key)) ||
        (mod && ["c", "x", "v", "u", "s", "p", "a"].includes(key))
      ) {
        e.preventDefault();
        e.stopPropagation();
        if (key === "p" || key === "s") {
          triggerBlackoutShield(1600, "Saving and printing images is disabled.");
        } else {
          showToast("Copy, inspect & download shortcuts are disabled.");
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen" || e.code === "PrintScreen") {
        clearClipboard();
        triggerBlackoutShield(2200, "Screenshots are restricted on ZONI SPORTS WEAR.");
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setShieldActive(true);
      } else {
        window.setTimeout(() => setShieldActive(false), 350);
      }
    };

    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });
    document.addEventListener("selectstart", handleSelectStart, { capture: true });
    document.addEventListener("copy", handleClipboardEvent, { capture: true });
    document.addEventListener("cut", handleClipboardEvent, { capture: true });
    document.addEventListener("paste", handleClipboardEvent, { capture: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });
    window.addEventListener("keyup", handleKeyUp, { capture: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
      document.removeEventListener("selectstart", handleSelectStart, { capture: true });
      document.removeEventListener("copy", handleClipboardEvent, { capture: true });
      document.removeEventListener("cut", handleClipboardEvent, { capture: true });
      document.removeEventListener("paste", handleClipboardEvent, { capture: true });
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      window.removeEventListener("keyup", handleKeyUp, { capture: true });
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (shieldTimerRef.current) window.clearTimeout(shieldTimerRef.current);
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* Instant Privacy Blackout Shield on Screenshot / Tab Switch / Print */}
      <AnimatePresence>
        {shieldActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 text-center select-none"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent flex items-center justify-center mb-4">
              <ShieldAlert className="w-6 h-6 text-accent" />
            </div>
            <p className="font-condensed font-extrabold text-2xl uppercase tracking-wider text-white">
              ZONI SPORTS WEAR · PROTECTED CATALOG
            </p>
            <p className="font-sans text-sm text-zinc-400 mt-1.5 max-w-md">
              Screenshots, printing, and media downloads are restricted.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Non-blocking Protection Notice Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[110] px-4 py-2.5 rounded-lg bg-slate-brand text-white border border-accent shadow-xl flex items-center gap-2.5 pointer-events-none whitespace-nowrap"
          >
            <ShieldAlert className="w-4 h-4 text-accent shrink-0" />
            <span className="font-display font-semibold text-xs tracking-wide">
              {toastMessage}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
