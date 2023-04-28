import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { graphql } from 'gatsby'
import '../blogbox.css'
import ExploreForFullPage from '../../components/exploreForFullPage'
import BlogPageDescription from '../../components/blogComponents/blogPageDescription'
import ExploreAndBlog from '../../components/exploreAndBlog'
import { Helmet } from 'react-helmet'
//import '../components/index.css'



const blogs = ({data}) => {
	const {slug} = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
	<>
		<Helmet>
        <title>Sulav | Blogs</title>
        <meta
          name="description"
          content="Learn about interesting topics and recent finding in the field of Science and Technology."
        />
		</Helmet>
		<Navbar />
		<BlogPageDescription slug = {slug} />
		<ExploreAndBlog />
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
