import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "./notion.css"
import ExploreAndBlog from "../components/exploreAndBlog"
import { Helmet } from "react-helmet"
import Prism from "prismjs"
import "./prism.css"
import { BsPlayCircle, BsStopwatch } from "react-icons/bs"
import DownloadBlogToShare from "../components/blogComponents/blogDownloadToShare"
require(`katex/dist/katex.min.css`)

const BlogTemplate = ({ data }) => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false)
  const { html, tableOfContents, timeToRead, wordCount } = data.markdownRemark
  const { Author, Date, Title, Type, Cover_Image, Description, slug, tags } =
    data.markdownRemark.frontmatter

  const loadLanguages = require("prismjs/components/")
  loadLanguages(["python"])
  useEffect(() => {
    Prism.highlightAll()
  }, [])

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

    return (
      <>
        <div className="d-flex flex-column curvy-line pb-4 blogTitleBox">
          <>
            <div>
              <header className="py-0  pb-0 fw-bold text-start">
                <h1 className="fs-sm-1 fw-bold pb-0 blogTitle">
                  {props.titlename}
                </h1>
              </header>

              <div className="fw-regular fs-10 text-start pt-0">
                <p className="p-0 m-0 pb-4">
                  <small>
                    {props.authorName} - {props.type} - {props.dateCreated} -{" "}
                    <button
                      onClick={() => props.setShowDownloadPopup(true)}
                      className="border rounded fw-bold px-2 text-white bg-black"
                    >
                      Download
                    </button>
                  </small>
                </p>
              </div>
            </div>
          </>
          <div className="sulav ">
            {img ? (
              <img
                src={img.default}
                alt={props.titlename}
                height="200px"
                width="400px"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <Helmet>
        <title>{Title}</title>

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
        <meta name="image" property="og:image" content={Cover_Image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="author" content={Author} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={Title} />
        <meta name="twitter:description" content={Description} />
        <meta name="twitter:image" content={Cover_Image} />
        <meta name="twitter:site" content="@sulav_J_hamal" />
        <meta name="twitter:creator" content="@sulav_J_hamal" />

        <meta name="robots" content="nofollow" />

        <meta name="keywords" content={tagsString} />
      </Helmet>
      <Navbar />
      <div className="container-xxl pb-2 blogCont">
        <div>
          <TitleBox
            titlename={Title}
            authorName={Author}
            dateCreated={Date}
            type={Type}
            cover={Cover_Image}
            setShowDownloadPopup={setShowDownloadPopup}
          />
          {showDownloadPopup && (
            <DownloadBlogToShare
              coverImage={Cover_Image}
              Title={Title}
              author={Author}
              Description={Description}
              setShowDownloadPopup={setShowDownloadPopup}
            />
          )}

          <div
            className="blogPost pb-0"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="tocMainContainer">
          {/* Table of Contents */}
          <div className="tocContainerBlogs">
            <div className="">
              <h2 className="p-2">Table of contents</h2>
              <div
                className="tocContentsContainer"
                dangerouslySetInnerHTML={{ __html: tableOfContents }}
              ></div>
            </div>
          </div>
          <div className="toolsForReading">
            <div>
              <BsStopwatch className="stopwatch" />
              <p>
                <span className="actualtimetofinishthisblog">
                  {timeToRead} mins
                </span>{" "}
                to finish this <span className="blogWord">blog.</span>
              </p>
            </div>
            <div>
              <BsPlayCircle className="playcircle text-primary" />
              <p>
                <span className="text-primary fw-bold">{wordCount.words}</span>{" "}
                words read. <span className="text-primary">Hooray!</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

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
