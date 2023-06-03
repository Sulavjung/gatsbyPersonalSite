import React from "react"
import { graphql, Link } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import "./personal.css"
import ExploreAndBlog from "../components/exploreAndBlog"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

export default function ClassOverviewTemplate({ data }) {
  const { markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const imglink = `../pages/programming/AssetsProgramming/${frontmatter.slug}.png`

  return (
    <>
      <Helmet>
        <title>{frontmatter.Title}</title>
      </Helmet>
      <Navbar />
      <div className="container-xxl px-2 p-xl-0" id="classRandom">
        <StaticImage
          className="img-fluid rounded shadow cursor-pointer animate__animated animate__bounce"
          src={imglink}
          alt="Class Image"
        />

        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className="container-xxl mt-4 p-0 pb-3">
          <h1 className="text-dark">Related Topics</h1>
          <hr className="mt-0" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-0">
            {allMarkdownRemark.nodes.map(node => (
              <div className="col my-1 ">
                <Link
                  to={`/programming/${frontmatter.Class}/${node.frontmatter.slug}`}
                  className="text-decoration-none"
                >
                  <div className="personal-background p-3 py-sm-3 h-100 d-flex align-items-center m-0">
                    <div className="p-3">
                      <h5 className="p-0 m-0">{node.frontmatter.Title}</h5>
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
