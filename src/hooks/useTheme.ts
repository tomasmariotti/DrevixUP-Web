import { useEffect, useState, useCallback } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "drevixup-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "dark" || stored === "light") return stored;
  // Respect OS preference, default to dark
  if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
  return "dark";
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const applyTheme = useCallback((t: Theme, animate = true) => {
    const root = document.documentElement;

    // Add transitioning class to enable smooth CSS transitions
    if (animate) {
      root.classList.add("theme-transitioning");
    }

    root.classList.remove("dark", "light");
    root.classList.add(t);
    localStorage.setItem(STORAGE_KEY, t);

    // Remove transition class after animation completes
    if (animate) {
      setTimeout(() => {
        root.classList.remove("theme-transitioning");
      }, 600);
    }
  }, []);

  // Apply on first mount without animation to avoid flash
  useEffect(() => {
    applyTheme(theme, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      // We need to call applyTheme inside the callback to ensure timing
      // However, we apply via useEffect on change instead
      return next;
    });
  }, []);

  // Apply theme when it changes (after initial mount)
  const mountedRef = useState({ mounted: false })[0];
  useEffect(() => {
    if (!mountedRef.mounted) {
      mountedRef.mounted = true;
      return;
    }
    applyTheme(theme, true);
  }, [theme, applyTheme, mountedRef]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
  }, []);

  return { theme, toggleTheme, setTheme };
}
