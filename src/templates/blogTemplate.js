import { graphql } from "gatsby"
import React, { useEffect } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "./notion.css"
import ExploreAndBlog from "../components/exploreAndBlog"
import { Helmet } from "react-helmet"
import Prism from "prismjs"
import "./prism.css"
require(`katex/dist/katex.min.css`)

const BlogTemplate = ({ data }) => {
  console.log(data)

  const { html } = data.markdownRemark
  const { Author, Date, Title, Type, Cover_Image } =
    data.markdownRemark.frontmatter

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const TitleBox = props => {
    return (
      <>
        <div className="d-flex flex-sm-column flex-row curvy-line pb-4">
          <div className="sulav ">
            <img src={props.cover} alt="Cover" />
          </div>

          <>
            <div>
              <div className="text-start py-4  pb-0 fw-bold text-sm-center">
                <h4 className="fs-sm-1 fw-bold">{props.titlename}</h4>
              </div>

              <div className="text-start  fw-regular fs-10 text-sm-center">
                <p className="p-0 m-0"><small>{props.authorName} - {props.type} - {props.dateCreated}</small></p>
              </div>
            </div>
          </>
          
        </div>

      </>
    )
  }
  return (
    <>
      <Helmet>
        <title>{Title}</title>
      </Helmet>
      <Navbar />
      <div className="container-xxl pb-2">
        <TitleBox
          titlename={Title}
          authorName={Author}
          dateCreated={Date}
          type={Type}
          cover={Cover_Image}
        />

        <div
          className="blogPost pb-0"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <hr className="pt-2 border border-start-0 border-end-0 border-dark" />
      </div>

      <ExploreAndBlog />
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
        Tag
        slug
        Title
        Type
        Cover_Image
      }
      timeToRead
      tableOfContents
    }
  }
`
