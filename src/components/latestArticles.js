// src/components/LatestArticlesCard.js
import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const offsets = [
  { rotate: -3, x: -20, y: -10 },
  { rotate: 2, x: 15, y: -5 },
  { rotate: -1.5, x: -10, y: 0 },
  { rotate: 1.5, x: 10, y: -8 },
]

const LatestArticlesCard = ({ post, index, total }) => {
  const { scrollYProgress } = useScroll()

  const start = index * 0.15
  const end = start + 0.5

  const y = useTransform(scrollYProgress, [start, end], [80, 0])
  const scale = useTransform(scrollYProgress, [start, end], [0.95, 1])

  // Pick offset from array based on index, looping if needed
  const offset = offsets[index % offsets.length]

  return (
    <motion.div
      style={{
        y,
        scale,
        zIndex: total - index,
      }}
      className="sticky top-20 mb-10"
    >
      <motion.div
        initial={{ rotate: offset.rotate, x: offset.x }}
        whileHover={{ rotate: 0, x: 0, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900 shadow-xl border border-neutral-200 dark:border-neutral-800 cursor-pointer"
      >
        <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-3">
          {post.frontmatter.Genera}
        </p>

        <a
          href={"/blogs/" + post.frontmatter.slug}
          className="block text-gray-900 dark:text-white"
        >
          <h3 className="text-xl font-bold">{post.frontmatter.Title}</h3>
        </a>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {post.frontmatter.Author} — {post.frontmatter.Date}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default LatestArticlesCard
