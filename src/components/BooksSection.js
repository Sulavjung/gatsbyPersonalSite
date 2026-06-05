import React from "react"
import { motion } from "framer-motion"

const BookSection = ({ books, metadata }) => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl font-bold tracking-tight mb-5 dark:text-white">

            {metadata.title}

          </h2>

          <p className="text-zinc-700 max-w-xl mx-auto text-lg dark:text-zinc-200">
            {metadata.subtitle}
          </p>

        </motion.div>


        {/* Books */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {books.map((book, index) => {

            const rotate = index % 2 === 0
              ? -2
              : 2

            return (

              <motion.div

                key={book.title}

                initial={{
                  opacity: 0,
                  y: 70,
                  rotate: rotate * 5
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate
                }}

                viewport={{ once: true }}

                transition={{
                  duration: .7,
                  delay: index * .1,
                  type: "spring",
                  stiffness: 80
                }}

                whileHover={{
                  y: -12,
                  rotate: 0,
                  scale: 1.02
                }}

                className="group relative"
              >

                {/* glow */}

                <div className="
                absolute
                inset-0
                rounded-3xl
                bg-gradient-to-br
                from-white/10
                to-white/0
                opacity-0
                group-hover:opacity-100
                blur-xl
                transition
                " />



                <div className="
                relative
                h-full
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-7
                shadow-2xl
                overflow-hidden
                ">


                  {/* decorative line */}

                  <div className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-1
                  bg-gradient-to-r
                  from-purple-400
                  via-blue-400
                  to-cyan-400
                  " />



                  {/* fake book */}

                  <motion.div

                    whileHover={{
                      rotateY: 12,
                      rotateX: 5
                    }}

                    className="
                    w-24
                    h-32
                    rounded-lg
                    mb-8
                    bg-gradient-to-br
                    from-zinc-700
                    to-zinc-900
                    shadow-xl
                    flex
                    items-center
                    justify-center
                    text-center
                    px-3
                    text-sm
                    font-semibold
                    text-white
                    dark:text-black
                    "
                  >

                    {book.title}

                  </motion.div>



                  <h3 className="font-semibold text-2xl mb-1 dark:text-zinc-50">

                    {book.title}

                  </h3>

                  <p className="text-zinc-800 mb-2 dark:text-zinc-200">

                    {book.author}

                  </p>

                  <p className="leading-7 text-zinc-700 dark:text-zinc-300
                    ">

                    {book.review}

                  </p>


                </div>

              </motion.div>

            )

          })}

        </div>

      </div>

    </section>
  )
}

export default BookSection
