import { graphql } from "gatsby"
import React, { useEffect } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "./personal.css"
import Prism from "prismjs"
import "./prism.css"
import ExploreAndBlog from "../components/exploreAndBlog"
import { Helmet } from "react-helmet"
require(`katex/dist/katex.min.css`)


const ClassTemplate = ({ data }) => {
  const { html, tableOfContents } = data.markdownRemark
  const { Title, Author, Date, Cover_Image } = data.markdownRemark.frontmatter

  console.log(html)

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
      <ExploreAndBlog />
      <Footer />
    </>
  )
}

export default ClassTemplate

export const classQuery = graphql`
  query ClassBySlug($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents(maxDepth: 2)
      frontmatter {
        Title
        Author
        Date
        Cover_Image
      }
    }
  }
`
