import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "./themeToggle.css"

const ThemeButton = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="themeToggler">
          <button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              class="bi bi-circle-half toggle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16" />
            </svg>
          </button>
        </div>
      )}
    </ThemeToggler>
  )
}

export default ThemeButton
