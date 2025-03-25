import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { graphql } from "gatsby"

import { Helmet } from "react-helmet"

const PaperReviewTemplate = ({ data }) => {
  const paper = data.markdownRemark

  return (
    <>
      <Helmet>
        <title>Sulav | {paper.frontmatter.Title}</title>
        <meta
          name="description"
          content={`Review of ${paper.frontmatter.Title} by ${paper.frontmatter.Author}.`}
        />
        <meta name="robots" content="nofollow" />
      </Helmet>
      <Navbar />
      <section className="container-xxl py-4 pbg-white">
        <h1 className="h2 fw-semibold text-black mb-4 ">
          {paper.frontmatter.Title}
        </h1>
        <div className="">
          <div className=" py-3">
            <p className="text-muted small mb-0">
              {paper.frontmatter.Author} • {paper.frontmatter.Date}
            </p>
            <p className="text-secondary small mb-3">
              {paper.frontmatter.Research_Field}
            </p>
            <div
              className="text-black"
              dangerouslySetInnerHTML={{ __html: paper.html }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export const query = graphql`
  query PaperReviewQuery($slug: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, Type: { eq: "Activity" } }
    ) {
      html
      frontmatter {
        Title
        Date
        Author
        Research_Field
      }
    }
  }
`

export default PaperReviewTemplate
