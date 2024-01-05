import React from "react"
import img from "../../images/blogSideProfileImage.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import "./blogPageDescription.css"
import BlogCards from "./blogCards"
import ArticleBlogCard from "./articleBlogCard"
import "./blogPageDescription.css"

const BlogPageDescription = props => {
  var data = useStaticQuery(graphql`
    query boxLinks {
      allMarkdownRemark(
        filter: { frontmatter: { Type: { eq: "Blog" } } }
        sort: { frontmatter: { Date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              Cover_Image
              Title
              slug
              Genera
            }
            id
          }
        }
      }
    }
  `)

  const link = "/blogs/" + props.slug
  return (
    <div className="blogPage">
      {/* Here goes the Image and the Blogs Title */}
      <div className="container-xxl py-0 py-md-4 d-flex justify-content-between ">
        <h1 className="fw-bold mt-2">Blogs</h1>
        <img
          className="rounded-circle my-2"
          src={img}
          alt="Profile"
          height="37px"
          width="auto"
        />
      </div>

      {/* Short Description of the Blog. */}
      <div className="container-xxl mb-5">
        <p className="fs-5 py-1 mb-1">
          Discover the power of learning, creation and inspiration with Blogs.
        </p>
        <a className="text-primary text-decoration-none" href={link}>
          Recent blog post &nbsp;
          {/* This is the svg file of the arrow.  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
        </a>
      </div>

      {/* Books */}
      <div className="container-xxl pb-0">
        <h2 className="fw-bold pb-2">Book Suggestions</h2>
        <p className="fs-5 mb-0">
          Dive into the world of literature, learn essential skills, and
          experiment with different genres with my book suggestions.
        </p>
      </div>

      {/* Here are the cards feature. */}
      <div
        className=" container-xxl caraso d-flex pt-4 px-2 pb-4 mb-4"
        id="caraso"
      >
        {data.allMarkdownRemark.edges.map(post => {
          if (post.node.frontmatter.Genera === "Book") {
            return (
              <BlogCards
                key={post.node.id}
                title={post.node.frontmatter.Title}
                img={post.node.frontmatter.Cover_Image}
                slug={post.node.frontmatter.slug}
              />
            )
          } else {
            // You can include optional logic here for posts that don't match the condition.
            return null // or any other rendering logic
          }
        })}
      </div>

      {/* Articles */}
      <div className="container-xxl">
        <h2 className="fw-bold pb-2">Articles</h2>
        <p className="fs-5 mb-0">
          Unlock the power of clear and compelling articles on topics such as
          technology, science, personal growth, and more.
        </p>
      </div>

      {/* Here are the cards feature. */}
      <div
        className=" container-xxl caraso d-flex pt-4 px-2 pb-4 mb-4"
        id="caraso"
      >
        {data.allMarkdownRemark.edges.map(post => {
          if (post.node.frontmatter.Genera !== "Book") {
            return (
              <BlogCards
                key={post.node.id}
                title={post.node.frontmatter.Title}
                img={post.node.frontmatter.Cover_Image}
                slug={post.node.frontmatter.slug}
              />
            )
          } else {
            // You can include optional logic here for posts that don't match the condition.
            return null // or any other rendering logic
          }
        })}
      </div>
    </div>
  )
}

export default BlogPageDescription
