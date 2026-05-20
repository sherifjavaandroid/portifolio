"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ar" | "en";
export type Theme = "dark" | "light";

type Ctx = {
  lang: Lang;
  theme: Theme;
  setLang: (l: Lang) => void;
  setTheme: (t: Theme) => void;
  toggleLang: () => void;
  toggleTheme: () => void;
};

const I18nCtx = createContext<Ctx | null>(null);

function readInitial<T extends string>(
  key: string,
  fallback: T,
  allowed: readonly T[],
): T {
  if (typeof document === "undefined") return fallback;
  const attr = document.documentElement.getAttribute(`data-${key}`);
  if (attr && (allowed as readonly string[]).includes(attr)) return attr as T;
  return fallback;
}

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const [theme, setThemeState] = useState<Theme>("dark");

  // hydrate from the document attributes that the no-flash inline script set
  useEffect(() => {
    setLangState(readInitial<Lang>("lang", "ar", ["ar", "en"] as const));
    setThemeState(readInitial<Theme>("theme", "dark", ["dark", "light"] as const));
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.setAttribute("lang", l);
    document.documentElement.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("data-lang", l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem("theme", t);
    } catch {}
  }, []);

  const toggleLang = useCallback(
    () => setLang(lang === "ar" ? "en" : "ar"),
    [lang, setLang],
  );
  const toggleTheme = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [theme, setTheme],
  );

  return (
    <I18nCtx.Provider
      value={{ lang, theme, setLang, setTheme, toggleLang, toggleTheme }}
    >
      {children}
    </I18nCtx.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside <Providers>");
  return ctx;
}
