"use client";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

type Theme = "light" | "dark" | "system";

const themeAtom = atomWithStorage<Theme>("theme", "system");

export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const root = document.documentElement;
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const appliedTheme = theme === "system" ? systemPreference : theme;
    root.classList.remove("light", "dark");
    root.classList.add(appliedTheme);
  }, [theme]);

  return { theme, setTheme };
};
