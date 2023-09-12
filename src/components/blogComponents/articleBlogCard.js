import React from 'react'
import { useStaticQuery } from 'gatsby'
import BlogCards from './blogCards'
import { graphql } from 'gatsby'




const ArticleBlogCard = () => {

	var data = useStaticQuery(graphql`
	query boxLinksArticle {
		allMarkdownRemark(
		  filter: {frontmatter: {Tag: {eq: "Article"}}}
		  sort: {frontmatter: {Date: DESC}}
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
		<div className="container-xxl caraso d-flex pt-2 px-2 pb-4 mb-4" id='caraso'>
		{data.allMarkdownRemark.edges.map(post => (
			<BlogCards key = {post.node.id} title = {post.node.frontmatter.Title} img = {post.node.frontmatter.Cover_Image} slug = {post.node.frontmatter.slug}/>
		))}
		{/* <BlogCards key = {post.node.id} title = {post.node.frontmatter.Title} img = {post.node.frontmatter.Cover_Image}/> */}
		</div>
	</>
  )
}
export default ArticleBlogCard;
