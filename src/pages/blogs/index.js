import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { graphql } from 'gatsby'
import '../blogbox.css'
import ExploreForFullPage from '../../components/exploreForFullPage'
import BlogPageDescription from '../../components/blogComponents/blogPageDescription'
//import '../components/index.css'



const blogs = ({data}) => {
	const {slug} = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
	<>
		<Navbar />
		<BlogPageDescription slug = {slug} />
		<ExploreForFullPage />
		<Footer />
	</>
  )
}

export const pageQuery = graphql`
query MyBlogsQuery {
	allMarkdownRemark(
	  sort: {frontmatter: {Date: DESC}}
	  filter: {frontmatter: {}}
	  limit: 4
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
		  }
		  html
		  wordCount {
			words
		  }
		  tableOfContents
		  id
		}
	  }
	}
  }
`

export default blogs;
