import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import ExploreAndBlog from "../components/exploreAndBlog"
import { Helmet } from "react-helmet"
import Prism from "prismjs"
import { BsPlayCircle, BsStopwatch } from "react-icons/bs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb"
import "prismjs/components/prism-java"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-python"
import { SidebarCloseIcon } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet"
import { useIsMobile } from "../hooks/use-mobile"
require(`katex/dist/katex.min.css`)

const BlogTemplate = ({ data }) => {
  const { html, tableOfContents, timeToRead, wordCount } = data.markdownRemark
  const { Author, Date, Title, Type, Cover_Image, Description, slug, tags } =
    data.markdownRemark.frontmatter

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const [activeSection, setActiveSection] = useState("")
  const [isTocOpen, setIsTocOpen] = useState(true)
  const [showMobileToc, setShowMobileToc] = useState(false)
  const isMobile = useIsMobile()

  const [tocItems, setTocItems] = useState([])

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined" || !tableOfContents) {
      setTocItems([])
      return
    }

    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(tableOfContents, "text/html")
      const links = doc.querySelectorAll("a")

      const items = Array.from(links).map(link => ({
        id: link.getAttribute("href")?.replace("#", "") || "",
        text: link.textContent || "",
        level: link.closest("ul")?.previousElementSibling ? 2 : 1,
      }))

      setTocItems(items)
    } catch (err) {
      console.error("TOC parsing failed:", err)
      setTocItems([])
    }
  }, [tableOfContents])

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems
        .map(item => document.getElementById(item.id))
        .filter(Boolean)

      if (headings.length === 0) return

      const viewportCenter = window.innerHeight / 2
      let closestHeading = null
      let minDistance = Infinity

      headings.forEach((heading, index) => {
        const rect = heading.getBoundingClientRect()
        const headingCenter = rect.top + rect.height / 2
        const distance = Math.abs(headingCenter - viewportCenter)

        if (distance < minDistance) {
          minDistance = distance
          closestHeading = tocItems[index].id
        }
      })

      if (closestHeading) {
        setActiveSection(closestHeading)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [tocItems])

  // Smooth scroll to section
  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  let tagsString = ""

  if (tags && tags.length > 0) {
    tagsString = tags.join(", ")
  } else {
    tagsString =
      "web technologies, react, web development, tech, news, update, ios, apple, macbook"
  }

  const TitleBox = props => {
    let img = null

    if (props.cover !== "NONE") {
      img = require(`../content/blogPost/Images/${props.cover}`)
    }

    const handleClick = () => {
      if (isMobile) {
        setShowMobileToc(prev => !prev)
      } else {
        setIsTocOpen(prev => !prev)
      }
    }

    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col pb-4 md:mt-20 mt-20"
        >
          <Breadcrumb className="my-2 px-2 py-1 bg-gray-50 dark:bg-gray-700 rounded-lg w-max text-sm">
            <BreadcrumbList className="mb-0 p-0">
              <BreadcrumbItem>
                <button
                  onClick={() => handleClick()}
                  className="p-1 rounded bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <SidebarCloseIcon
                    className={`w-5 h-5 transition-transform ${isTocOpen ? "rotate-0 text-orange-500" : "rotate-180 text-green-500"}`}
                  />
                </button>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-black dark:text-white">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/blogs"
                  className="text-black dark:text-white"
                >
                  Blogs
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <>
            <div>
              <header className="py-0 pb-0 font-bold text-start">
                <h1 className="text-2xl md:text-4xl font-bold pb-0">
                  {props.titlename}
                </h1>
              </header>

              <div className="font-normal text-sm text-start pt-0">
                <p className="p-0 m-0 pb-4">
                  <small>
                    {props.authorName} - {props.type} - {props.dateCreated}{" "}
                  </small>
                </p>
              </div>
            </div>
          </>
          <div className=" mt-4">
            {img ? (
              <img
                src={`/images/${props.cover}`}
                alt={props.titlename}
                className="w-full rounded-lg object-cover"
              />
            ) : (
              <></>
            )}
          </div>
        </motion.div>
      </>
    )
  }
  return (
    <>
      <Helmet>
        <Navbar />

        <meta name="title" property="og:title" content={Title} />
        <meta
          property="og:url"
          content={`https://sulavhamal.com/blogs/${slug}/`}
        />

        <meta
          name="description"
          property="og:description"
          content={Description}
        />
        <meta
          name="image"
          property="og:image"
          content={`https://sulavhamal.com/images/${Cover_Image}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="author" content={Author} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={Title} />
        <meta name="twitter:description" content={Description} />
        <meta
          name="twitter:image"
          content={`https://sulavhamal.com/images/${Cover_Image}`}
        />
        <meta name="twitter:site" content="@sulav_J_hamal" />
        <meta name="twitter:creator" content="@sulav_J_hamal" />

        <meta name="robots" content="nofollow" />

        <meta name="keywords" content={tagsString} />
      </Helmet>
      <Navbar />
      <div className="max-w-7xl mx-auto pb-2 px-2 md:px-4  flex gap-8 relative">
        <AnimatePresence>
          {isTocOpen && (
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-80 mt-8 hidden lg:block"
            >
              {/* Table of Contents */}
              <div className="sticky top-24 bg-neutral text-black dark:text-white dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 max-h-[70vh] overflow-y-auto">
                <div className="">
                  <h2 className="p-2 font-bold text-lg border-b border-gray-200 dark:border-gray-700 mb-4">
                    Table of contents
                  </h2>
                  <div className="tocContentsContainer">
                    {tocItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className={`mb-2 ${item.level === 2 ? "ml-4" : ""}`}
                      >
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`text-left w-full transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                            activeSection === item.id
                              ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded"
                              : "text-gray-700 dark:text-gray-300"
                          } ${item.level === 2 ? "text-sm" : "text-base"}`}
                        >
                          {item.text}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: tocItems.length * 0.1, duration: 0.3 }}
                  className="mt-8 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-2">
                    <BsStopwatch className="text-xl mr-2" />
                    <p className="text-sm">
                      <span className="font-semibold text-blue-600">
                        {timeToRead} mins
                      </span>{" "}
                      to finish this{" "}
                      <span className="font-medium text-green-600">blog.</span>
                    </p>
                  </div>

                  <div className="flex items-center">
                    <BsPlayCircle className="text-xl mr-2 text-blue-600" />
                    <p className="text-sm">
                      <span className="font-bold text-blue-600">
                        {wordCount.words}
                      </span>{" "}
                      words read.{" "}
                      <span className="text-blue-600 font-medium">
                        Hooray!
                      </span>{" "}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-1 ">
          <TitleBox
            titlename={Title}
            authorName={Author}
            dateCreated={Date}
            type={Type}
            cover={Cover_Image}
          />

          <div className="prose prose-md md:prose-lg max-w-none pb-0 dark:prose-invert">
            {html
              ? html
                  .split("</p>") // split paragraphs
                  .filter(Boolean)
                  .map((p, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.8 }}
                      dangerouslySetInnerHTML={{ __html: p + "</p>" }}
                    />
                  ))
              : null}
          </div>
        </div>
      </div>

      <Sheet
        open={showMobileToc}
        onOpenChange={setShowMobileToc}
        className="md:hidden"
      >
        <SheetContent
          side="left"
          className="w-80 p-0 bg-gray-50 dark:bg-gray-900 text-black dark:text-white overflow-y-auto rounded-r-2xl "
        >
          <SheetHeader className="p-4 border-b">
            <SheetTitle>Table of Contents</SheetTitle>
          </SheetHeader>

          <div className="p-4  bg-gray-50 dark:bg-gray-900 text-black dark:text-white ">
            {tocItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className={`mb-2 ${item.level === 2 ? "ml-4" : ""}`}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left w-full transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded"
                      : "text-gray-700 dark:text-gray-300"
                  } ${item.level === 2 ? "text-sm" : "text-base"}`}
                >
                  {item.text}
                </button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: tocItems.length * 0.1, duration: 0.3 }}
              className="mt-8 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-2">
                <BsStopwatch className="text-xl mr-2" />
                <p className="text-sm">
                  <span className="font-semibold text-blue-600">
                    {timeToRead} mins
                  </span>{" "}
                  to finish this{" "}
                  <span className="font-medium text-green-600">blog.</span>
                </p>
              </div>

              <div className="flex items-center">
                <BsPlayCircle className="text-xl mr-2 text-blue-600" />
                <p className="text-sm">
                  <span className="font-bold text-blue-600">
                    {wordCount.words}
                  </span>{" "}
                  words read.{" "}
                  <span className="text-blue-600 font-medium">
                    Hooray!
                  </span>{" "}
                </p>
              </div>
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>

      <ExploreAndBlog currentSlug={slug} fourArticles={data.fourArticles} />
      <Footer />
    </>
  )
}

export default BlogTemplate

export const singleBlog = graphql`
  query MyBlogQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        Author
        Date
        Fun_Meter
        Genera
        Status
        tags
        slug
        Title
        Type
        Cover_Image
        Description
      }
      timeToRead
      tableOfContents(maxDepth: 3)
      wordCount {
        words
      }
    }

    # Query for the four articles using a fragment
    fourArticles: allMarkdownRemark(
      sort: { frontmatter: { Date: DESC } }
      filter: {
        frontmatter: { Type: { eq: "Blog" }, slug: { ne: $slug } } # Exclude the current slug
      }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            Author
            Date
            Fun_Meter
            Genera
            Status
            Tag
            slug
            Title
            Type
          }
          id
        }
      }
    }
  }
`
