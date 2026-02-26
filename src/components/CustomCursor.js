import React, { useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"
import { useTypewriter } from "react-simple-typewriter"
import { useIsMobile } from "../hooks/use-mobile"

export default function CustomCursor() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-100)

  const words = ["Hi there!", "Welcome", "Learn", "Connect", "Create"]
  const colors = ["#7c3aed", "#f43f5e", "#22c55e", "#facc15", "#3b82f6"]

  const typeSpeed = 80
  const deleteSpeed = 80
  const delaySpeed = 3000

  // Calculate the total time for each word (type + delete + delay)
  const totalDurations = words.map(
    w => w.length * typeSpeed + w.length * deleteSpeed + delaySpeed,
  )

  // Calculate the keyframes and times for Framer Motion
  const keyframes = []
  const times = []
  let cumulative = 0
  const totalCycle = totalDurations.reduce((a, b) => a + b, 0)

  totalDurations.forEach((duration, i) => {
    // Start of this color
    keyframes.push(colors[i])
    times.push(i === 0 ? 0 : cumulative / totalCycle) // First color starts at 0

    // End of this color (same color until next word)
    cumulative += duration
    keyframes.push(colors[i])
    times.push(cumulative / totalCycle)
  })

  // Typewriter hook
  const [text] = useTypewriter({
    words,
    loop: 0, // infinite
    typeSpeed,
    deleteSpeed,
    delaySpeed,
  })

  // Cursor follow logic
  useEffect(() => {
    const moveCursor = e => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{ translateX: mouseX, translateY: mouseY }}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    >
      <div className="relative">
        {/* SVG Arrow */}
        <svg width="28" height="28" viewBox="0 0 24 24">
          <path
            d="M2 2 L2 16 L6 12 L10 12 Z"
            fill="#ee00ff"
            stroke="black"
            strokeWidth="1"
          />
        </svg>

        {/* Name Tag */}
        <motion.div
          className="absolute left-3 top-4 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-lg whitespace-nowrap"
          animate={{ backgroundColor: keyframes }}
          transition={{
            times: times,
            duration: totalCycle / 1000, // Framer Motion uses seconds
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {text}
          <span className="pl-2 inline-block animate-blink">|</span>
          <style>{`
            @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
            .animate-blink { animation: blink 1s infinite; }
          `}</style>
        </motion.div>
      </div>
    </motion.div>
  )
}
