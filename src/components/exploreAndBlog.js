import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import LatestArticles from "./latestArticles"
import LatestArticlesCard from "./latestArticles"

const ExploreAndBlog = ({ fourArticles }) => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  return (
    <section
      ref={sectionRef}
      className="relative  bg-neutral dark:bg-neutral-950 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 py-32">
        {/* Sticky Left Content */}
        <div className="lg:w-1/2 sticky top-32 h-fit">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-600 font-semibold mb-3">
            Explore & Blog
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Latest Posts
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-md">
            Thoughts, experiments, and insights from my journey building
            products and exploring technology.
          </p>
        </div>

        {/* Stacked Articles */}
        <div className="lg:w-1/2 relative">
          {fourArticles.edges.map((post, i) => (
            <LatestArticlesCard key={post.node.id} post={post.node} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreAndBlog
