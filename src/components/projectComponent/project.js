import React, { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion"

import registerImage from "../../assets/registerManagement.png"
import registerLogo from "../../assets/RegisterManagementLogo.png"
import businessImage from "../../assets/realEstateAnalysis.png"
import businessLogo from "../../assets/realEstateAnalysislogo.png"
import javaImage from "../../assets/Java Cheat.png"
import javaLogo from "../../assets/javacheatlogo.png"

const projects = [
  {
    title: "Register System",
    type: "Utility",
    year: "2023",
    description:
      "🧑‍💻 This project came out of the necessity to build something that would be useful for the small business who cannot afford to pay the expensive fees of the Register Systems.",
    link: "https://registermanagement.onrender.com",
    mainImage: registerImage,
    logo: registerLogo,
    imgAlt: "Register System",
  },
  {
    title: "Business Tools",
    type: "Utility",
    year: "2023",
    description:
      "💼 Affordable and user-friendly tools for small businesses, fueling productivity, efficiency, and growth. 💡",
    link: "https://sulavtools.netlify.app",
    mainImage: businessImage,
    logo: businessLogo,
    imgAlt: "Business Tools",
  },
  {
    title: "Java Reference",
    type: "Guide",
    year: "2023",
    description:
      "📖 Quick and easy Java cheat sheets for programmers and students.",
    link: "https://sulavhamal.com/cheatsheet",
    mainImage: javaImage,
    logo: javaLogo,
    imgAlt: "Java Reference",
  },
]

/* ---------------------------
   PARALLAX IMAGE
---------------------------- */

function ParallaxImage({ src, alt }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -0])

  return (
    <div ref={ref} className="relative h-full overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

function ProjectCard({ project, reverse }) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const smoothX = useSpring(rotateX, {
    stiffness: 180,
    damping: 20,
  })

  const smoothY = useSpring(rotateY, {
    stiffness: 180,
    damping: 20,
  })

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateYValue = (x / width - 0.5) * 15
    const rotateXValue = -(y / height - 0.5) * 15

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: smoothX,
          rotateY: smoothY,
          transformStyle: "preserve-3d",
        }}
        className={`flex flex-col md:flex-row items-center
          bg-gray-50 dark:bg-gray-900
          rounded-3xl shadow-lg
          transition-shadow duration-300
		  overflow-hidden
          hover:shadow-2xl
          ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        {/* Content */}
        <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center gap-6">
          <div className="flex items-center justify-start mb-4">
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="w-12 h-12 rounded-lg object-cover"
            />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {project.type} &#9864; {project.year}
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            {project.description}
          </p>

          <button
            onClick={() => window.open(project.link, "_blank")}
            className="inline-block bg-gray-900 hover:bg-blue-700 dark:bg-gray-50 text-gray-50 dark:text-gray-900 font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Live Demo
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <ParallaxImage src={project.mainImage} alt={project.imgAlt} />
        </div>
      </motion.div>
    </div>
  )
}

/* ---------------------------
   PROJECT SECTION
---------------------------- */

export default function Project() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 flex flex-col gap-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-start mb-12">
        Projects
      </h1>

      {projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          project={project}
          reverse={i % 2 === 1}
        />
      ))}
    </section>
  )
}
