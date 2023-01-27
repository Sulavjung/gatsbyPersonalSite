import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { graphql } from 'gatsby'
import '../blogbox.css'
import LatestArticles from '../../components/latestArticles'
//import '../components/index.css'


export const ExploreForFullPage = () => {
  return (
	<div className="container">
			<h1 className='m-0 fw-bold'>Latest Articles</h1>
			<hr className='mt-0'/>
			{/* Here will go the most recent articles. At least four recent. Or we could have all these taken care from the home page.*/}
			<LatestArticles />
	</div>
  )
}


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
