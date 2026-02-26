import React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function BoxContentDisplay({
  title,
  icon,
  description,
  link,
  buttons,
}) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const smoothX = useSpring(rotateX, { stiffness: 180, damping: 20 })
  const smoothY = useSpring(rotateY, { stiffness: 180, damping: 20 })

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateYValue = (x / width - 0.5) * 25
    const rotateXValue = -(y / height - 0.5) * 25

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const handleCardClick = () => {
    if (!buttons || buttons.length === 0) {
      if (link.startsWith("/")) {
        window.location.href = link
      } else {
        window.open(link, "_blank", "noopener,noreferrer")
      }
    }
  }

  const handleButtonClick = (e, buttonLink) => {
    e.stopPropagation()
    if (buttonLink.startsWith("/")) {
      window.location.href = buttonLink
    } else {
      window.open(buttonLink, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <motion.div
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothX,
        rotateY: smoothY,
        transformPerspective: 1000,
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`relative group cursor-pointer rounded-2xl p-6 h-full
                 bg-gray-50 dark:bg-gray-900
                 border border-neutral-200 dark:border-neutral-700
                 shadow-sm transition-shadow duration-300
                 ${!buttons || buttons.length === 0 ? "hover:shadow-2xl" : ""}`}
    >
      <div
        className="absolute top-4 right-4 w-6 h-6 rounded-full 
                bg-white dark:bg-black 
                border border-neutral-200 dark:border-neutral-700
                z-20"
        style={{
          boxShadow: `
      inset 0 4px 6px rgba(0,0,0,0.25),
      inset 0 -2px 4px rgba(255,255,255,0.2)
    `,
        }}
      />
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <motion.div className="text-4xl mb-4">{icon}</motion.div>

          <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <div>
          <p className="mt-4 text-md text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {description}
          </p>

          {buttons && buttons.length > 0 && (
            <div className="mt-6 flex flex-row gap-2">
              {buttons.map((button, index) => (
                <motion.button
                  key={index}
                  onClick={e => handleButtonClick(e, button.link)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-50 hover:bg-blue-700 dark:hover:bg-blue-600 text-gray-50 dark:text-gray-900 font-medium transition-colors duration-200"
                >
                  {button.name}
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
