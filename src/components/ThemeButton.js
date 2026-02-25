import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Moon, Sun } from "lucide-react"

const ThemeButton = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <button
          onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          className="p-1 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-500 animate-spin-slow" />
          ) : (
            <Moon className="w-5 h-5 text-blue-600" />
          )}
        </button>
      )}
    </ThemeToggler>
  )
}

export default ThemeButton
