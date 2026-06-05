import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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



const ProjectShowcase = () => {
  const [selected, setSelected] = useState(0)

  const active = projects[selected]

  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">

          {/* LEFT */}

          <div className="space-y-4">

            <div className="mb-10">

              <p className="uppercase text-sm tracking-widest text-zinc-500">

                Projects

              </p>

              <h2 className="text-5xl font-bold mt-3 text-zinc-800 dark:text-zinc-200">

                Things I Built

              </h2>

            </div>

            {projects.map((project, index) => {

              const activeCard =
                selected === index

              return (

                <button
                  key={project.title}
                  onClick={() =>
                    setSelected(index)
                  }
                  className="
                  w-full
                  text-left
                  "
                >

                  <motion.div

                    animate={{
                      scale: activeCard
                        ? 1
                        : .96,

                      opacity: activeCard
                        ? 1
                        : .55
                    }}

                    className={`
                    rounded-3xl
                    px-3
                    py-3
                    transition
                    border text-zinc-800 dark:text-zinc-200


                    ${activeCard
                        ?
                        "bg-white/10 border-white/20"
                        :
                        "border-transparent"
                      }
                    `}
                  >

                    <div className="
                    flex
                    items-center
                    justify-between
                    ">

                      <div>

                        <h3 className="
                        font-semibold
                        text-lg
                        ">

                          {project.title}

                        </h3>

                        <p className="
                        text-zinc-400
                        text-sm
                        ">

                          {project.type}

                        </p>

                      </div>


                      <div className="
                      w-3
                      h-3
                      rounded-full
                        bg-zinc-800 dark:bg-zinc-200
                      " />

                    </div>

                  </motion.div>

                </button>

              )

            })}

          </div>


          {/* RIGHT SIDE */}

          <div className="relative">

            <AnimatePresence mode="wait">

              <motion.div

                key={selected}

                initial={{
                  opacity: 0,
                  y: 40
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                exit={{
                  opacity: 0,
                  y: -40
                }}

                transition={{
                  duration: .45
                }}

                className="
                rounded-[40px]
                overflow-hidden
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                "
              >

                {/* IMAGE */}

                <div className="
                h-[500px]
                overflow-hidden
                relative
                ">

                  <img
                    src={active.mainImage}
                    alt={active.imgAlt}
                    className="
                    object-cover
                    w-full
                    h-full
                    "
                  />

                  <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-transparent
                  " />

                </div>


                {/* CONTENT */}

                <div className="
                p-10
                ">

                  <div className="
                  flex
                  items-center
                  gap-4
                  mb-8
                  ">

                    <img
                      src={active.logo}
                      className="
                      w-14
                      h-14
                      rounded-xl
                      "
                    />

                    <div>

                      <p className="
                      text-sm
                      text-zinc-500
                      ">

                        {active.type}
                        •
                        {active.year}

                      </p>

                      <h3 className="
                      text-4xl
                      font-bold
                      text-zinc-800 dark:text-zinc-100
                      ">

                        {active.title}

                      </h3>

                    </div>

                  </div>


                  <p className="
                  text-zinc-700 dark:text-zinc-300
                  text-lg
                  leading-8
                  max-w-3xl
                  ">

                    {active.description}

                  </p>


                  <motion.a

                    whileHover={{
                      scale: 1.04
                    }}

                    href={active.link}

                    className="
                    inline-flex
                    mt-10
                    px-6
                    py-3
                    rounded-full
                    dark:bg-zinc-50 bg-zinc-900
                    text-zinc-50 dark:text-zinc-900
                    font-medium
                    "
                  >

                    Explore Project →

                  </motion.a>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ProjectShowcase
