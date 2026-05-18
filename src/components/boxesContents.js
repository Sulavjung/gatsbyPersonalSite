import React, { useState } from "react"
import { motion } from "framer-motion"
import BoxContentDisplay from "./boxContentDisplay"
import Interests from "../jsonfiles/interest.json"

export default function BoxesContents() {
  const [hasEntered, setHasEntered] = useState(false)

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">
      {/* Dashed Center Fade Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
       repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {Interests.map((record, index) => {
          const randomRotate = (Math.random() - 0.5) * 12

          return (
            <motion.div
              key={record.title}
              initial={{
                opacity: 0,
                y: 40,
                rotate: randomRotate,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              onViewportEnter={() => {
                setHasEntered(true)
              }}
              viewport={{
                amount: 0,
                margin: "-20% 0px -20% 0px",
              }}
              animate={
                hasEntered
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: index * 0.15,
              }}
            >
              <BoxContentDisplay {...record} />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
