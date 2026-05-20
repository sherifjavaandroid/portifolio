"use client";

import { useI18n } from "../providers";

export default function Toggles() {
  const { lang, theme, toggleLang, toggleTheme } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleLang}
        aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
        className="tg"
      >
        {/* Show the OTHER language as the label */}
        <span>{lang === "ar" ? "EN" : "عربي"}</span>
      </button>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={
          theme === "dark"
            ? lang === "ar" ? "وضع فاتح" : "Switch to light"
            : lang === "ar" ? "وضع داكن" : "Switch to dark"
        }
        className="tg"
      >
        <span aria-hidden>{theme === "dark" ? "○" : "●"}</span>
      </button>
    </div>
  );
}
