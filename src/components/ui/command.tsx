"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Search, Compass, Copy, Download, X, Check } from "lucide-react";

interface CommandItem {
  icon: React.ReactNode;
  label: string;
  category: string;
  action: () => void;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const paletteRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
      setActiveIndex(0);
    } else {
      document.body.style.overflow = "";
      setSearch("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    return () => { if (toastTimer.current) clearTimeout(toastTimer.current); };
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-ctp-mauve/50", "ring-offset-2", "ring-offset-ctp-base");
      setTimeout(() => el.classList.remove("ring-2", "ring-ctp-mauve/50", "ring-offset-2", "ring-offset-ctp-base"), 1500);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => showToast(`${label} copied`));
    setIsOpen(false);
  };

  const commands: CommandItem[] = [
    { icon: <Compass className="h-4 w-4 text-ctp-lavender" aria-hidden="true" />, label: "Navigate to Intro",         category: "Navigation", action: () => scrollToSection("hero") },
    { icon: <Compass className="h-4 w-4 text-ctp-lavender" aria-hidden="true" />, label: "Navigate to Projects",      category: "Navigation", action: () => scrollToSection("projects") },
    { icon: <Compass className="h-4 w-4 text-ctp-lavender" aria-hidden="true" />, label: "Navigate to Skills",        category: "Navigation", action: () => scrollToSection("skills") },
    { icon: <Compass className="h-4 w-4 text-ctp-lavender" aria-hidden="true" />, label: "Navigate to My Journey",    category: "Navigation", action: () => scrollToSection("experience") },
    { icon: <Compass className="h-4 w-4 text-ctp-lavender" aria-hidden="true" />, label: "Navigate to Contact",       category: "Navigation", action: () => scrollToSection("contact") },
    { icon: <Copy     className="h-4 w-4 text-ctp-teal"    aria-hidden="true" />, label: "Copy Email Address",        category: "Actions",    action: () => copyToClipboard("pjmotsumi06@gmail.com", "Email address") },
    { icon: <Copy     className="h-4 w-4 text-ctp-teal"    aria-hidden="true" />, label: "Copy Phone Number",         category: "Actions",    action: () => copyToClipboard("+26776011993", "Phone number") },
    { icon: <Download className="h-4 w-4 text-ctp-teal"   aria-hidden="true" />, label: "Download CV / Resume",      category: "Actions",    action: () => { window.open("/cv.pdf", "_blank", "noopener,noreferrer"); setIsOpen(false); } },
    { icon: <Download className="h-4 w-4 text-ctp-teal"   aria-hidden="true" />, label: "Open GitHub Profile",       category: "Actions",    action: () => { window.open("https://github.com/enchantrezzz", "_blank", "noopener,noreferrer"); setIsOpen(false); } },
    { icon: <Download className="h-4 w-4 text-ctp-teal"   aria-hidden="true" />, label: "Open LinkedIn Profile",     category: "Actions",    action: () => { window.open("https://www.linkedin.com/in/pako-jack-motsumi-338b19401", "_blank", "noopener,noreferrer"); setIsOpen(false); } },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(search.toLowerCase()) ||
      cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((p) => Math.min(p + 1, filteredCommands.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex((p) => Math.max(p - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); filteredCommands[activeIndex]?.action(); }
  };

  useEffect(() => { setActiveIndex(0); }, [search]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.querySelector<HTMLElement>("[data-active='true']")?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  let flatIndex = 0;

  return (
    <>
      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 flex items-center gap-2 rounded-lg border border-ctp-surface1 bg-ctp-mantle px-4 py-2.5 text-xs text-ctp-text shadow-xl"
        >
          <Check className="h-3.5 w-3.5 text-ctp-green" aria-hidden="true" />
          {toast}
        </div>
      )}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
          style={{ background: "color-mix(in srgb, var(--ctp-crust) 80%, transparent)", backdropFilter: "blur(12px)" }}
        >
          <div
            ref={paletteRef}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-ctp-surface1 bg-ctp-mantle shadow-2xl"
            onKeyDown={handleKeyDown}
          >
            {/* Search */}
            <div className="flex items-center border-b border-ctp-surface0 px-4 py-3">
              <Search className="h-5 w-5 text-ctp-overlay0 mr-3 shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-autocomplete="list"
                aria-controls="command-list"
                aria-activedescendant={`cmd-item-${activeIndex}`}
                placeholder="Type a command or navigate..."
                className="flex-1 bg-transparent text-sm text-ctp-text placeholder-ctp-overlay0 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close command palette"
                className="rounded p-1 text-ctp-overlay0 hover:bg-ctp-surface0 hover:text-ctp-text transition-colors"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* List */}
            <div id="command-list" role="listbox" ref={listRef} className="max-h-[350px] overflow-y-auto px-2 py-3">
              {filteredCommands.length > 0 ? (
                (["Navigation", "Actions"] as const).map((cat) => {
                  const catCmds = filteredCommands.filter((c) => c.category === cat);
                  if (catCmds.length === 0) return null;
                  return (
                    <div key={cat} className="mb-3 last:mb-0">
                      <div role="group" aria-label={cat} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ctp-overlay0">
                        {cat}
                      </div>
                      <div className="mt-1 space-y-0.5">
                        {catCmds.map((cmd) => {
                          const itemIndex = flatIndex++;
                          const isActive = itemIndex === activeIndex;
                          return (
                            <button
                              key={cmd.label}
                              id={`cmd-item-${itemIndex}`}
                              role="option"
                              aria-selected={isActive}
                              data-active={isActive}
                              onClick={cmd.action}
                              onMouseEnter={() => setActiveIndex(itemIndex)}
                              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                                isActive ? "bg-ctp-surface0 text-ctp-text" : "text-ctp-subtext0 hover:bg-ctp-surface0 hover:text-ctp-text"
                              }`}
                            >
                              {cmd.icon}
                              <span>{cmd.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-6 text-center text-sm text-ctp-overlay0">
                  No results for &quot;{search}&quot;
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-ctp-surface0 bg-ctp-crust/40 px-4 py-2 text-[10px] text-ctp-overlay0">
              <span>
                <kbd className="rounded bg-ctp-surface0 px-1 text-ctp-subtext0">↑↓</kbd> navigate
                {" · "}
                <kbd className="rounded bg-ctp-surface0 px-1 text-ctp-subtext0">↵</kbd> select
              </span>
              <span><kbd className="rounded bg-ctp-surface0 px-1 text-ctp-subtext0">Esc</kbd> close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
