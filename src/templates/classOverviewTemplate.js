import React from "react"
import { graphql, Link } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import "./personal.css"

export default function ClassOverviewTemplate({ data }) {
  const { markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <Navbar />
      <div className="container-xxl" id="classRandom">

        <div dangerouslySetInnerHTML={{ __html: html }} />
		<h4>Related Topics</h4>
        <div className="border rounded p-0 mt-1 shadow">
          {allMarkdownRemark.nodes.map(node => (
            <Link
              to={`/programming/${frontmatter.Class}/${node.frontmatter.slug}`}
              className="text-decoration-none"
            >
              <div className="border-top border-bottom p-3">
                <h5 className="p-0 m-0">{node.frontmatter.Title}</h5>
                <p className="p-0 m-0">{node.frontmatter.Description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        Class
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { Class: { eq: $slug }, Type: { eq: "Class" } } }
    ) {
      nodes {
        frontmatter {
          Title
          slug
          Description
        }
      }
    }
  }
`
