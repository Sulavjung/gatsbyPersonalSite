// ModernBlogCard.js
import React, { useMemo } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

function getRandomEmoji() {
  const emojis = ["📚", "📝", "🔬", "💡", "🎨", "🧩", "🚀", "🌱", "💻", "📖"]
  return emojis[Math.floor(Math.random() * emojis.length)]
}

function PlaceholderImage({ className }) {
  const emoji = useMemo(() => getRandomEmoji(), [])
  const colors = [
    "from-purple-500/40",
    "from-pink-500/40",
    "from-blue-500/40",
    "from-green-500/40",
    "from-amber-500/40",
  ]
  const color = useMemo(
    () => colors[Math.floor(Math.random() * colors.length)],
    [],
  )

  return (
    <div className={` flex items-center justify-center ${className}`}>
      <span className="text-7xl md:text-8xl drop-shadow-lg">{emoji}</span>
    </div>
  )
}

export default function ModernBlogCard({
  title,
  img: imgName,
  genera,
  author,
  date,
  slug,
}) {
  let imgSrc = null
  if (imgName && imgName !== "NONE") {
    try {
      imgSrc = require(`../../content/blogPost/Images/${imgName}`).default
    } catch (err) {
      imgSrc = null
    }
  }

  const parentVariants = {
    rest: {},
    hover: { height: 250 }, // parent hover triggers child
  }

  const imageVariants = {
    rest: { rotate: 5, scale: 0.8, y: 0 },
    hover: {
      rotate: 0,
      scale: 1.1,
      y: -60,
      transition: { type: "spring", stiffness: 180, damping: 15 },
    },
  }

  return (
    <motion.div
      className="relative w-full mx-auto cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md"
      variants={parentVariants}
      initial="rest"
      whileHover="hover"
      whileInView="hover"
      viewport={{ amount: 0.9, margin: "-30% 60px -30% 0px", once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image container controlled by parent hover */}
      <motion.div
        className="absolute top-20 right-0 z-0"
        variants={imageVariants}
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-40 object-contain rounded-t-2xl"
          />
        ) : (
          <div className="w-50 h-40 flex items-center justify-center rounded-t-2xl">
            <PlaceholderImage className="w-full h-full rounded-t-2xl" />
          </div>
        )}
      </motion.div>

      {/* Flex container to push inner div to bottom */}
      <div className="flex flex-col justify-end h-full">
        <div className="relative flex flex-col rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-lg p-6 w-full">
          <div className="flex items-center gap-3 mb-2">
            <p className="text-xs text-blue-600 font-semibold">{genera}</p>
          </div>

          <Link to={`/blogs/${slug}`} className="block text-gray-900">
            <h3 className="text-lg text-gray-900 dark:text-white font-bold">
              {title}
            </h3>
          </Link>

          <p className="text-sm text-gray-500 mt-1">
            {author} — {date}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
