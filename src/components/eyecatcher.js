import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative h-screen md:h-[80vh] flex items-center text-neutral-100 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e1e8f0 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 100%)",
        }}
      />

      {/* Purple Glow Top */}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Intro Line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-blue-800 dark:text-blue-200 mb-6"
        >
          Hi, I’m Sulav.
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="text-4xl md:text-6xl font-[var(--font-inter)] text-black dark:text-white leading-tight tracking-tight"
        >
          I{" "}
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.08, rotate: 0 }}
            className="inline-block font-serif italic text-orange-500 "
          >
            design
          </motion.span>{" "}
          and{" "}
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.4,
            }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="inline-block font-[var(--font-grotesk)] text-blue-600 dark:text-blue-400 skew-x-[8deg]"
          >
            build
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 12,
              delay: 0.6,
            }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="inline-block font-[var(--font-grotesk)] font-bold text-emerald-600 dark:text-emerald-400 skew-x-[-6deg]"
          >
            clean
          </motion.span>
          ,{" "}
          <motion.span
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 12,
              delay: 0.8,
            }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="inline-block font-[var(--font-grotesk)] text-purple-600 dark:text-purple-400 skew-x-[6deg]"
          >
            scalable
          </motion.span>{" "}
          software systems.
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 text-lg text-blue-900 dark:text-blue-200 max-w-2xl leading-relaxed"
        >
          Computer Science student focused on full-stack development,
          distributed systems, and AI. I care about structure, clarity, and
          long-term thinking.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-12 flex gap-8 text-sm items-center"
        >
          <a
            href="/resume"
            className="group inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition hover:scale-105 dark:bg-gray-800 dark:text-purple-600 dark:hover:bg-gray-700"
          >
            View Resume
            <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
          </a>

          <a
            href="/blogs"
            className="text-blue-900 dark:text-blue-200 hover:text-black dark:hover:text-white transition"
          >
            Read Blogs →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
