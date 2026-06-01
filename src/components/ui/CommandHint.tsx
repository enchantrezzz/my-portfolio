"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export function CommandHint() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect touch/mobile device
  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  // Show after page animations settle
  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 1800);
    // Auto-hide after 8 seconds regardless
    const hide = setTimeout(() => setDismissed(true), 9800);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  // Also hide when the palette is opened via keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        setDismissed(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const openPalette = () => {
    setDismissed(true);
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true })
    );
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2"
        >
          <button
            onClick={openPalette}
            aria-label="Open command palette"
            className="flex items-center gap-2.5 rounded-full border border-ctp-surface1 bg-ctp-mantle/90 px-4 py-2 text-xs text-ctp-subtext0 shadow-lg backdrop-blur-md transition-colors hover:border-ctp-surface2 hover:text-ctp-text"
          >
            <Terminal className="h-3.5 w-3.5 text-ctp-mauve shrink-0" aria-hidden="true" />
            <span>Quick actions</span>
            {isMobile ? (
              <span className="ml-1 rounded bg-ctp-surface0 px-1.5 py-0.5 text-[10px] text-ctp-subtext1 border border-ctp-surface1">
                Tap
              </span>
            ) : (
              <span className="flex items-center gap-1 ml-1">
                <kbd className="rounded bg-ctp-surface0 px-1.5 py-0.5 text-[10px] text-ctp-subtext1 border border-ctp-surface1">
                  Ctrl
                </kbd>
                <kbd className="rounded bg-ctp-surface0 px-1.5 py-0.5 text-[10px] text-ctp-subtext1 border border-ctp-surface1">
                  K
                </kbd>
              </span>
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
