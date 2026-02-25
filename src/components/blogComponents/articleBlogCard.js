import React from "react"
import { useStaticQuery } from "gatsby"
import BlogCards from "./blogCards"
import { graphql } from "gatsby"

const ArticleBlogCard = () => {
  var data = useStaticQuery(graphql`
    query boxLinksArticle {
      allMarkdownRemark(
        filter: { frontmatter: { Tag: { eq: "Article" } } }
        sort: { frontmatter: { Date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              Cover_Image
              Title
              slug
            }
            id
          }
        }
      }
    }
  `)

  /* const post = data.allMarkdownRemark.edges[0]; */
  return (
    <>
      {/* Here are the cards feature. */}
      <div className="max-w-7xl mx-auto flex overflow-x-auto pt-2 px-2 pb-4 mb-4 scroll-snap-x-mandatory scroll-pl-5 pl-5 scrollbar-hide">
        {data.allMarkdownRemark.edges.map(post => (
          <BlogCards
            key={post.node.id}
            title={post.node.frontmatter.Title}
            img={post.node.frontmatter.Cover_Image}
            slug={post.node.frontmatter.slug}
          />
        ))}
        {/* <BlogCards key = {post.node.id} title = {post.node.frontmatter.Title} img = {post.node.frontmatter.Cover_Image}/> */}
      </div>
    </>
  )
}
export default ArticleBlogCard
