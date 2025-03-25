import React, { useState, useEffect } from "react"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import { graphql, navigate } from "gatsby"
import { Helmet } from "react-helmet"
import { motion, AnimatePresence } from "framer-motion"
import "../../components/index.css"

const AcademicPapers = ({ data }) => {
  const [visiblePapers, setVisiblePapers] = useState(5)
  const [expandedPaper, setExpandedPaper] = useState(null)
  const [isLaptop, setIsLaptop] = useState(false)
  const [groupBy, setGroupBy] = useState("Date") // Default grouping
  const allPapers = data.allMarkdownRemark.edges

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 992) // Bootstrap's lg breakpoint
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Group papers dynamically based on groupBy state
  const groupedPapers = allPapers.reduce((acc, { node }) => {
    const key =
      groupBy === "Research_Field"
        ? node.frontmatter.Research_Field || "Uncategorized"
        : node.frontmatter.Date || "Undated"
    if (!acc[key]) {
      acc[key] = {
        papers: [],
        description:
          node.frontmatter.Description || "These are related to the group.",
      }
    }
    acc[key].papers.push(node)
    return acc
  }, {})

  const handleShowMore = () => {
    setVisiblePapers(prev => prev + 5)
  }

  const handlePaperClick = (id, slug) => {
    if (isLaptop) {
      setExpandedPaper(expandedPaper === id ? null : id)
    } else {
      navigate(`/activity/${slug}`)
    }
  }

  const reviewVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  return (
    <>
      <Helmet>
        <title>Sulav | Academic Papers</title>
        <meta
          name="description"
          content="Short reviews of recent academic papers, showcasing new ideas and advancements in Science and Technology."
        />
        <meta name="robots" content="nofollow" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Navbar />
      <section className="container-xxl py-4 bg-light rounded rounded-xl pbg-normal">
        <div className="d-flex justify-content-between align-items-center mb-4 px-2">
          <h1 className="h2 fw-semibold text-black">Activity</h1>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="groupByDropdown"
              data-bs-toggle="dropdown"
            >
              Group by:{" "}
              {groupBy === "Research_Field" ? "Research Field" : "Date"}
            </button>
            <ul className="dropdown-menu" aria-labelledby="groupByDropdown">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setGroupBy("Research_Field")}
                >
                  Research Field
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setGroupBy("Date")}
                >
                  Date
                </button>
              </li>
            </ul>
          </div>
        </div>
        {Object.entries(groupedPapers).map(
          ([key, { papers, description }], groupIndex) => (
            <div key={key} className="mb-5">
              <p className="h7 text-black mb-2 px-3">{key}</p>
              <div className="card rounded rounded-xl shadow-sm">
                {papers.slice(0, visiblePapers).map((node, index) => (
                  <div key={node.id} className="list-border">
                    <div
                      className=" cursor-pointer hover-bg-light  d-flex justify-content-between align-items-center px-3 py-3 text-start "
                      onClick={() =>
                        handlePaperClick(node.id, node.frontmatter.slug)
                      }
                    >
                      <div>
                        <p className="fw-medium text-normal mb-1">
                          {node.frontmatter.Title}
                        </p>
                        <p className="text-muted small mb-0">
                          {node.frontmatter.Author} • {node.frontmatter.Date}
                        </p>
                      </div>
                      <span className="text-muted fs-4">›</span>
                    </div>
                    <AnimatePresence>
                      {isLaptop && expandedPaper === node.id && (
                        <motion.div
                          className="px-3 py-3 bg-light border-top text-black pbg-white "
                          variants={reviewVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div
                            dangerouslySetInnerHTML={{ __html: node.html }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <p className="text-muted mb-3 px-3 py-2">{description}</p>
              {papers.length > visiblePapers &&
                groupIndex === Object.keys(groupedPapers).length - 1 && (
                  <button
                    className="btn btn-primary w-100 mt-4 py-2 fw-medium"
                    onClick={handleShowMore}
                  >
                    Show More
                  </button>
                )}
            </div>
          ),
        )}
      </section>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query MyPapersQuery {
    allMarkdownRemark(
      filter: { frontmatter: { Type: { eq: "Activity" } } }
      sort: { frontmatter: { Date: DESC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            Title
            Date
            Author
            Research_Field
            slug
            Description
          }
          html
        }
      }
    }
  }
`

export default AcademicPapers
