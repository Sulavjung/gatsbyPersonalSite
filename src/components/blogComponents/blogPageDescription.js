import React from "react"
import img from "../../images/blogSideProfileImage.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import BlogCards from "./blogCards"
import ArticleBlogCard from "./articleBlogCard"
import { ArrowRight, ArrowRightIcon } from "lucide-react"

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
              Author
              Date
            }
            id
          }
        }
      }
    }
  `)

  const link = "/blogs/" + props.slug
  return (
    <div className="text-gray-900 dark:text-white md:mt-30 mt-20 px-2 md:px-4">
      <div
        className="absolute inset-0 z-[-1] opacity-60"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e1e8f0 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 100%)",
        }}
      />

      {/* Here goes the Image and the Blogs Title */}
      <div className="max-w-7xl mx-auto py-0  md:py-4 flex justify-between">
        <h1 className="text-2xl md:text-3xl font-bold mt-2">Blogs</h1>
        <img
          className="rounded-full h-10 w-10 my-2"
          src={img}
          alt="Profile"
          height="37px"
          width="auto"
        />
      </div>

      {/* Short Description of the Blog. */}
      <div className="max-w-7xl mx-auto mb-5">
        <p className="text-lg py-1 mb-1">
          Discover the power of learning, creation and inspiration with Blogs.
        </p>
        <a className="text-blue-600 no-underline" href={link}>
          Recent blog post &nbsp;
          {/* This is the svg file of the arrow.  */}
          <ArrowRightIcon className="inline-block w-4 h-4" />
        </a>
      </div>

      {/* Books */}
      <div className="max-w-7xl mx-auto pb-0">
        <h2 className="font-bold pb-2">Book Suggestions</h2>
        <p className="text-lg mb-0">
          Dive into the world of literature, learn essential skills, and
          experiment with different genres with my book suggestions.
        </p>
      </div>

      {/* Here is the list of book suggestion articles. */}

      {/* Here are the cards feature. */}
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto  pt-4 pb-4 mb-4 gap-6">
        {" "}
        {data.allMarkdownRemark.edges.map(post => {
          if (post.node.frontmatter.Genera === "Book") {
            return (
              <BlogCards
                key={post.node.id}
                title={post.node.frontmatter.Title}
                img={post.node.frontmatter.Cover_Image}
                slug={post.node.frontmatter.slug}
                date={post.node.frontmatter.Date}
                author={post.node.frontmatter.Author}
              />
            )
          } else {
            // You can include optional logic here for posts that don't match the condition.
            return null // or any other rendering logic
          }
        })}
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold pb-2">Articles</h2>
        <p className="text-lg mb-0">
          Unlock the power of clear and compelling articles on topics such as
          technology, science, personal growth, and more.
        </p>
      </div>

      {/* Here are the cards feature. */}
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto  pt-4 px-2 pb-4 mb-4 gap-6">
        {" "}
        {data.allMarkdownRemark.edges.map(post => {
          if (post.node.frontmatter.Genera !== "Book") {
            return (
              <BlogCards
                key={post.node.id}
                title={post.node.frontmatter.Title}
                img={post.node.frontmatter.Cover_Image}
                slug={post.node.frontmatter.slug}
                date={post.node.frontmatter.Date}
                author={post.node.frontmatter.Author}
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
