import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { graphql } from 'gatsby'
import '../blogbox.css'
import ExploreForFullPage from '../../components/exploreForFullPage'
//import '../components/index.css'



const blogs = ({data}) => {
  return (
	<>
		<Navbar />
		<ExploreForFullPage />
		<Footer />
	</>
  )
}

export const pageQuery = graphql`
query MyBlogsQuery {
	allMarkdownRemark(
	  sort: {frontmatter: {Date: ASC}}
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
