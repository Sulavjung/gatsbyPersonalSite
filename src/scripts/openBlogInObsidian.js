const { spawn } = require("child_process")
const pathLib = require("path")

const rootPath = process.argv[2] || process.cwd()
const blogPath = pathLib.join(rootPath, "src", "content")

console.log(`Constructed blog path: ${blogPath}`)

// Spawn Neovim and attach to your terminal
const nvim = spawn("nvim", [blogPath], { stdio: "inherit" })

nvim.on("error", err => {
  console.error("Failed to open Neovim:", err)
})

nvim.on("exit", (code, signal) => {
  if (code !== 0) {
    console.log(`Neovim exited with code ${code} and signal ${signal}`)
  } else {
    console.log("Closed Neovim")
  }
})
