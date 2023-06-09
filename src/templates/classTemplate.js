import { graphql, Link } from "gatsby"
import React, { useEffect } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "./personal.css"
import Prism from "prismjs"
import "./prism.css"
import ExploreAndBlog from "../components/exploreAndBlog"
import { Helmet } from "react-helmet"
import ClassTopics from "../components/classComponents/relatedClassTopics"
require(`katex/dist/katex.min.css`)

const ClassTemplate = ({ data }) => {
  const { html, tableOfContents } = data.markdownRemark
  const { Title } = data.markdownRemark.frontmatter
  const { allMarkdownRemark } = data

  console.log(allMarkdownRemark)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <Helmet>
        <title>{Title}</title>
      </Helmet>
      <Navbar />
      <div className="px-2">
        <div className="container-xxl p-0" id="classRandom">
          <div className="row">
            <div className="col-lg-9">
              {/* Content */}
              <div className="notes" dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
            <div className="tableOfContent col-lg-3">
              {/* Table of Contents */}
              {/* Render your table of contents here */}
              <div className="toc-container py-5">
                <div className="border-start">
                  <h2 className="p-2 link-underline-primary">Contents</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: tableOfContents }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl mt-4 p-0 pb-3">
          <h1 className="fw-bold pb-0 mb-0">Similar Topics</h1>
          <hr className="m-0 mb-1" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-0">
            {allMarkdownRemark.edges.map(({ node }) => (
              <div className="col my-1 " key={node.frontmatter.slug}>
                <Link
                  to={`/programming/${node.frontmatter.Class}/${node.frontmatter.slug}`}
                  className="text-decoration-none"
                  key={node.frontmatter.slug}
                >
                  <div className="personal-background p-3 py-sm-3 h-100 d-flex align-items-center m-0">
                    <div className="p-1">
                      <h5 className="p-0 m-0 text-primary fw-bold">
                        {node.frontmatter.Title}
                      </h5>
                      <p className="p-0 m-0">{node.frontmatter.Description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ExploreAndBlog />
      <Footer />
    </>
  )
}

export default ClassTemplate

export const classQuery = graphql`
  query ClassBySlug($Class: String, $slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents(maxDepth: 2)
      frontmatter {
        Title
        Author
        Date
        Cover_Image
        slug
        Class
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: {
          slug: { ne: $slug }
          Class: { eq: $Class }
          Type: { eq: "Class" }
        }
      }
      limit: 4
    ) {
      edges {
        node {
          frontmatter {
            Title
            Description
            slug
            Class
          }
        }
      }
    }
  }
`
