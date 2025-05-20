import { useState, useEffect } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldEnableDark =
      savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    if (shouldEnableDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = !isDark;
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  };

  return { isDark, toggleTheme };
};
