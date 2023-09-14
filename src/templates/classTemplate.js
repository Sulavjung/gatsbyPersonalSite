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
import "prismjs/components/prism-java"
import "prismjs/components/prism-bash"
require(`katex/dist/katex.min.css`)


const ClassTemplate = ({ data }) => {
  const { html, tableOfContents } = data.markdownRemark
  const { Title, tags, Description, slug, Author } = data.markdownRemark.frontmatter
  const { allMarkdownRemark } = data

  
  useEffect(() => {
    Prism.highlightAll()
  }, [])



  let tagsString = "";

  if(tags && tags.length > 0){
     tagsString = tags.join(", ");
  } else {
    tagsString = "web technologies, react, web development, tech, news, update, ios, apple, macbook"
  }



  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="robots" content="nofollow"/>
        <meta name="keywords"/>

        <meta name="keywords" content={tagsString}/>

        <meta name="title" property="og:title" content={Title} />
        <meta  property="og:url" content={`https://sulavhamal.com/blogs/${slug}/`} />
        
        <meta name="description" property="og:description" content={Description} />
        <meta name="image" property="og:image" content="https://source.unsplash.com//M5s9Ffs1KqU/1320x400" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="author" content={Author} />

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={Title} />
        <meta name="twitter:description" content={Description} />
        <meta name="twitter:image" content="https://source.unsplash.com//M5s9Ffs1KqU/1320x400"/>
        <meta name="twitter:site" content="@sulav_J_hamal" />
        <meta name="twitter:creator" content="@sulav_J_hamal" />
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
                    <div className="p-1 ">
                      <div className="blogPost"><h5 className="p-0 m-0">
                        {node.frontmatter.Title}
                      </h5></div>
                      <p className="p-0 m-0">{node.frontmatter.Description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ExploreAndBlog fourArticles={data.fourArticles} />
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
        Description
        Title
        Author
        Date
        Cover_Image
        slug
        Class
        tags
        Author
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
    fourArticles: allMarkdownRemark(
      sort: {frontmatter: {Date: DESC}}
      filter: {frontmatter: {slug: {ne: ""}}}
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
