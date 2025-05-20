import React from "react";
import { useTheme } from "./HookThemeToogle";
import { SunIcon, MoonIcon } from "./Icons";

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Переключить на ${isDark ? "светлую" : "тёмную"} тему`}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
