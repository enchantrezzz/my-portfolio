"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Search, Compass, Copy, Download, X, Check } from "lucide-react";

interface CommandItem {
  icon: React.ReactNode;
  label: string;
  category: string;
  action: () => void;
  shortcut?: string;
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

  // Toggle Command Palette
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

  // Focus input when opened
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

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Cleanup toast timer on unmount
  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("ring-2", "ring-zinc-400", "ring-offset-4", "ring-offset-zinc-950");
      setTimeout(() => {
        element.classList.remove("ring-2", "ring-zinc-400", "ring-offset-4", "ring-offset-zinc-950");
      }, 1500);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied`);
    });
    setIsOpen(false);
  };

  const commands: CommandItem[] = [
    {
      icon: <Compass className="h-4 w-4 text-zinc-400" aria-hidden="true" />,
      label: "Navigate to Intro",
      category: "Navigation",
      action: () => scrollToSection("hero"),
    },
    {
      icon: <Compass className="h-4 w-4 text-zinc-400" aria-hidden="true" />,
      label: "Navigate to Projects",
      category: "Navigation",
      action: () => scrollToSection("projects"),
    },
    {
      icon: <Compass className="h-4 w-4 text-zinc-400" aria-hidden="true" />,
      label: "Navigate to Skills & Tools",
      category: "Navigation",
      action: () => scrollToSection("skills"),
    },
    {
      icon: <Compass className="h-4 w-4 text-zinc-400" aria-hidden="true" />,
      label: "Navigate to My Journey",
      category: "Navigation",
      action: () => scrollToSection("experience"),
    },
    {
      icon: <Compass className="h-4 w-4 text-zinc-400" aria-hidden="true" />,
      label: "Navigate to Contact",
      category: "Navigation",
      action: () => scrollToSection("contact"),
    },
    {
      icon: <Copy className="h-4 w-4 text-zinc-400" aria-hidden="true" />,
      label: "Copy Email Address",
      category: "Actions",
      action: () => copyToClipboard("pjmotsumi06@gmail.com", "Email address"),
    },
    {
      icon: <Download className="h-4 w-4 text-zinc-400" aria-hidden="true" />,
      label: "Open GitHub Profile",
      category: "Actions",
      action: () => {
        window.open("https://github.com/enchantrezzz", "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(search.toLowerCase()) ||
      cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation within the palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, filteredCommands.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filteredCommands[activeIndex]?.action();
    }
  };

  // Reset active index when search changes
  useEffect(() => {
    setActiveIndex(0);
  }, [search]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.querySelector<HTMLElement>("[data-active='true']");
    activeEl?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  // Flat index across categories for keyboard nav
  let flatIndex = 0;

  return (
    <>
      {/* Inline toast notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs font-mono text-zinc-200 shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
          {toast}
        </div>
      )}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          className="fixed inset-0 z-50 flex items-start justify-center bg-zinc-950/80 pt-[15vh] backdrop-blur-xl"
        >
          <div
            ref={paletteRef}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/90 shadow-2xl"
            onKeyDown={handleKeyDown}
          >
            {/* Search header */}
            <div className="flex items-center border-b border-zinc-800 px-4 py-3">
              <Search className="h-5 w-5 text-zinc-500 mr-3 shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-autocomplete="list"
                aria-controls="command-list"
                aria-activedescendant={`cmd-item-${activeIndex}`}
                placeholder="Type a command or navigate..."
                className="flex-1 bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close command palette"
                className="rounded p-1 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 transition-colors"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Command list */}
            <div
              id="command-list"
              role="listbox"
              ref={listRef}
              className="max-h-[350px] overflow-y-auto px-2 py-3"
            >
              {filteredCommands.length > 0 ? (
                <div>
                  {(["Navigation", "Actions"] as const).map((cat) => {
                    const catCmds = filteredCommands.filter((c) => c.category === cat);
                    if (catCmds.length === 0) return null;
                    return (
                      <div key={cat} className="mb-3 last:mb-0">
                        <div
                          role="group"
                          aria-label={cat}
                          className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                        >
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
                                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                                  isActive
                                    ? "bg-zinc-800 text-white"
                                    : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  {cmd.icon}
                                  <span>{cmd.label}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="py-6 text-center text-sm text-zinc-500">
                  No results for &quot;{search}&quot;
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-950/40 px-4 py-2 text-[10px] text-zinc-500">
              <span>
                <kbd className="rounded bg-zinc-800 px-1 text-zinc-300 font-mono">↑↓</kbd> navigate
                {" · "}
                <kbd className="rounded bg-zinc-800 px-1 text-zinc-300 font-mono">↵</kbd> select
              </span>
              <span>
                <kbd className="rounded bg-zinc-800 px-1 text-zinc-300 font-mono">Esc</kbd> close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
