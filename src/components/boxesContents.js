import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import BoxContentDisplay from "./boxContentDisplay"
import Interests from "../jsonfiles/interest.json"

export default function BoxesContents() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {Interests.map((record, index) => (
          <motion.div
            key={record.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              delay: index * 0.08,
            }}
          >
            <BoxContentDisplay {...record} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
