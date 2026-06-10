"use client";

import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="cgpt-theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={theme === "light"}
    >
      <span className={`cgpt-theme-toggle-pill${theme === "light" ? " is-light" : ""}`}>
        <span className="cgpt-theme-toggle-knob" />
      </span>
      <span className="cgpt-theme-toggle-label">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
