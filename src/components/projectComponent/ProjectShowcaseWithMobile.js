import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import registerImage from "../../assets/registerManagement.png"
import registerLogo from "../../assets/RegisterManagementLogo.png"

import businessImage from "../../assets/realEstateAnalysis.png"
import businessLogo from "../../assets/realEstateAnalysislogo.png"

import javaImage from "../../assets/Java Cheat.png"
import javaLogo from "../../assets/javacheatlogo.png"

import allStarLogo from "../../assets/allStarLiquorLogo.png"
import allStarWebPage from "../../assets/AllStarLiquorWebPage.png"

import bobsLiquorLogo from "../../assets/bobsLiquorLLCLogo.png"
import bobsLiquorWebPage from "../../assets/BobsLiquorLLCWebPage.png"
import { ArrowDown, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "All Star Liquor Market",
    type: "Website",
    year: "2026",
    description:
      "Created and launched a modern website for All Star Liquor Market focused on increasing online visibility and improving customer engagement.",
    link: "https://allstarliquormarket.netlify.app",
    mainImage: allStarWebPage,
    logo: allStarLogo,
    imgAlt: "All Star Liquor",
  },

  {
    title: "Register System",
    type: "Utility",
    year: "2023",
    description:
      "This project came out of the necessity to build something useful for small businesses.",
    link: "https://registermanagement.onrender.com",
    mainImage: registerImage,
    logo: registerLogo,
    imgAlt: "Register System",
  },

  {
    title: "Bob's Liquor LLC Website",
    type: "Website",
    year: "2026",
    description:
      "Developed and deployed a full website for Bob’s Liquor LLC to increase discoverability and customer acquisition.",
    link: "https://bobliquorllc.netlify.app",
    mainImage: bobsLiquorWebPage,
    logo: bobsLiquorLogo,
    imgAlt: "Bob Website",
  },

  {
    title: "Business Tools",
    type: "Utility",
    year: "2023",
    description: "Affordable and user-friendly tools for small businesses.",
    link: "https://sulavtools.netlify.app",
    mainImage: businessImage,
    logo: businessLogo,
    imgAlt: "Business Tools",
  },

  {
    title: "Java Reference",
    type: "Guide",
    year: "2023",
    description: "Quick and easy Java cheat sheets.",
    link: "https://sulavhamal.com/cheatsheet",
    mainImage: javaImage,
    logo: javaLogo,
    imgAlt: "Java",
  },
]

const ProjectShowcase = () => {
  const [selected, setSelected] = useState("All Star Liquor Market")

  const [showPicker, setShowPicker] = useState(false)

  const active = projects.find(project => project.title === selected)

  return (
    <section className="py-32">
      <div
        className="
max-w-7xl
mx-auto
px-3
md:px-0
"
      >
        {/* HEADER */}

        <div className="mb-12">
          <p
            className="
uppercase
tracking-widest
text-sm
text-blue-600
font-semibold
"
          >
            Projects
          </p>

          <h2
            className="
text-4xl
md:text-5xl

font-bold

mt-3

text-zinc-800
dark:text-zinc-200
"
          >
            Things I Built
          </h2>
        </div>

        <div
          className="
grid
lg:grid-cols-[320px_1fr]
gap-16
items-start
"
        >
          {/* DESKTOP SIDEBAR */}

          <div
            className="
hidden
lg:block
space-y-4
"
          >
            {projects.map((project, index) => {
              const activeCard = project.title === selected

              return (
                <button
                  key={project.title}
                  onClick={() => setSelected(project.title)}
                  className="
w-full
text-left
"
                >
                  <motion.div
                    animate={{
                      scale: activeCard ? 1 : 0.96,

                      opacity: activeCard ? 1 : 0.55,
                    }}
                    className={` rounded-3xl p-3 border transition ${activeCard ? "bg-white/10 border-white/20" : "border-transparent"} flex flex-row items-center gap-2 `}
                  >
                    <img
                      src={project.logo}
                      className=" w-8 h-8 rounded-lg mb-1  "
                    />
                    <div>
                      <div className=" font-medium text-zinc-500 dark:text-zinc-50 ">
                        {project.title}
                      </div>

                      <div className=" text-sm text-zinc-500 dark:text-zinc-400 ">
                        {project.type}
                      </div>
                    </div>
                  </motion.div>
                </button>
              )
            })}
          </div>

          {/* CONTENT */}

          <div className="relative">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={selected}
                initial={{
                  opacity: 0,
                  y: 40,
                  z: 3,
                  scale: 0.98,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                  z: -3,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  z: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className=" rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl "
              >
                {/* IMAGE */}

                <div className=" relative h-[320px] md:h-[520px] overflow-hidden ">
                  <img
                    src={active.mainImage}
                    alt={active.imgAlt}
                    className=" w-full h-full object-cover "
                  />
                  <div className=" absolute inset-0 bg-gradient-to-t from-black/70 to-transparent " />
                </div>

                {/* CONTENT */}

                <div className=" p-6 md:p-10 ">
                  <div className=" flex gap-4 items-center mb-8 ">
                    <img src={active.logo} className=" w-14 h-14 rounded-xl " />

                    <div>
                      <p className=" text-sm text-zinc-500 dark:text-zinc-400 ">
                        {active.type}
                        {" • "}
                        {active.year}
                      </p>

                      <h3 className=" text-2xl md:text-4xl text-zinc-800 dark:text-zinc-200 font-bold ">
                        {active.title}
                      </h3>
                    </div>
                  </div>

                  <p className=" leading-8 text-zinc-700 dark:text-zinc-300 ">
                    {active.description}
                  </p>

                  <a
                    href={active.link}
                    target="_blank"
                    rel="noreferrer"
                    className=" inline-flex mt-10 px-6 py-3 rounded-full bg-zinc-900 dark:bg-zinc-900 text-white dark:text-zinc-900 "
                  >
                    Explore Project <ArrowRight className=" w-6 h-6 ml-2 " />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* APPLE GLASS SELECTOR */}

            <div className=" lg:hidden sticky bottom-6 mt-10 z-10 flex flex-row justify-center ">
              <div className="relative">
                <motion.div
                  initial={{
                    y: 60,
                    opacity: 0,
                    scale: 0.12,
                  }}
                  whileInView={{
                    y: [60, -60, 18, -6, 0],
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    y: {
                      duration: 0.9,
                      ease: "easeIn",
                      times: [0, 0.35, 0.65, 0.85, 1],
                    },
                    opacity: {
                      duration: 0.5,
                      ease: "easeIn",
                    },
                    scale: {
                      duration: 0.5,
                      ease: "easeIn",
                    },
                  }}
                  className=" overflow-hidden rounded-[32px] backdrop-blur-2xl bg-red/55 dark:bg-zinc-900/55 border border-white/30 shadow-2xl min-w-[300px] p-2  "
                >
                  <motion.button
                    whileTap={{
                      scale: 0.87,
                    }}
                    key={active.title}
                    exit={{
                      opacity: 0,
                      scale: 0.57,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      x: 0,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0.57,
                      y: 25,
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.1,
                      duration: 0.1,
                    }}
                    onClick={() => {
                      setSelected(active.title)
                      setShowPicker(!showPicker)
                    }}
                    className={` p-2 px-3 rounded-2xl text-left transition hover:bg-white/30 dark:hover:bg-zinc-800/30 flex items-center gap-3 w-full `}
                  >
                    <img
                      src={active.logo}
                      className=" w-8 h-8 rounded-lg mb-1 "
                    />
                    <div>
                      <div className=" font-medium text-zinc-500 dark:text-zinc-400 ">
                        {active.title}
                      </div>

                      <div className=" text-sm text-zinc-500 dark:text-zinc-400 ">
                        {active.type}
                      </div>
                    </div>
                  </motion.button>

                  <AnimatePresence mode="wait">
                    {showPicker && (
                      <motion.div
                        layout
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          type: "spring",
                          bounce: 0.1,
                          duration: 0.95,
                          opacity: {
                            duration: 0.5,
                          },
                        }}
                        className=" overflow-hidden"
                      >
                        <div className=" flex flex-col p-0 m-0">
                          <AnimatePresence mode="wait">
                            {projects
                              .filter(
                                (project, i) => project.title !== active.title,
                              )
                              .map((project, index) => (
                                <motion.button
                                  initial={{
                                    opacity: 0,
                                    y: 25,
                                  }}
                                  whileTap={{
                                    scale: 0.87,
                                  }}
                                  key={project.title}
                                  whileInView={{
                                    opacity: 1,
                                    y: 0,
                                  }}
                                  transition={{
                                    duration: 0.04,
                                    opacity: { duration: 0.2 },
                                  }}
                                  onClick={() => {
                                    setSelected(project.title)
                                    setShowPicker(false)
                                  }}
                                  className={` p-2 px-3 rounded-2xl text-left transition ${project.title === active.title ? "bg-white/70 dark:bg-zinc-800/80" : "hover:bg-white/30 dark:hover:bg-zinc-800/30"} flex items-center gap-3 `}
                                >
                                  <img
                                    src={project.logo}
                                    className=" w-8 h-8 rounded-lg mb-1  "
                                  />
                                  <div>
                                    <div className=" font-medium text-zinc-500 dark:text-zinc-50 ">
                                      {project.title}
                                    </div>

                                    <div className=" text-sm text-zinc-500 dark:text-zinc-400 ">
                                      {project.type}
                                    </div>
                                  </div>
                                </motion.button>
                              ))}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.button
                  whileTap={{
                    scale: 0.87,
                  }}
                  initial={{
                    y: 60,
                    opacity: 0,
                    scale: 0.12,
                  }}
                  whileInView={{
                    y: [60, -60, 18, -6, 0],
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    y: {
                      duration: 0.9,
                      ease: "easeIn",
                      times: [0, 0.35, 0.65, 0.85, 1],
                    },
                    opacity: {
                      duration: 0.5,
                      ease: "easeIn",
                    },
                    scale: {
                      duration: 0.5,
                      ease: "easeIn",
                    },
                  }}
                  onClick={() => setShowPicker(!showPicker)}
                  className=" p-1 rounded-full backdrop-blur-2xl bg-red/55 dark:bg-zinc-900/55 border border-white/30 shadow-2xl absolute -top-6 -right-8 flex items-center justify-center "
                >
                  <motion.div
                    animate={{
                      rotate: showPicker ? 0 : 180,
                    }}
                  >
                    <ArrowDown className=" w-full h-full text-blue-500 dark:text-orange-400 " />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase
