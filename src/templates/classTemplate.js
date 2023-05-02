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
  const Class = "dataStructure"

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
      <div className="container-xxl" id="classRandom">
        {/* <div dangerouslySetInnerHTML={{ __html: tableOfContents }}></div> */}
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
      <div className="container-xxl mt-4">
      <h4>Related Topics</h4>
      <hr className="mt-0" />
      <div className="border rounded p-0 mt-1 shadow">
        {allMarkdownRemark.edges.map(({ node }) => (
          <Link
            to={`/programming/${node.frontmatter.Class}/${node.frontmatter.slug}`}
            className="text-decoration-none"
            key={node.frontmatter.slug}
          >
            <div className="border-top border-bottom p-3">
              <h5 className="p-0 m-0">{node.frontmatter.Title}</h5>
              <p className="p-0 m-0 text-decoration-none">{node.frontmatter.Description}</p>
            </div>
          </Link>
        ))}
      </div>
      <hr />
      </div>

      <ExploreAndBlog />
      <Footer />
    </>
  )
}

export default ClassTemplate

export const classQuery = graphql`
  query ClassBySlug($classnames: String, $slug: String ) {
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
      filter: { frontmatter: {  slug: { ne: $slug }, Type: {eq: "Class" }, Class: { eq: $classnames } } }
      limit: 5
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
