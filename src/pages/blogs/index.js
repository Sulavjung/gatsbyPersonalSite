import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { graphql } from 'gatsby'
import '../blogbox.css'
import BlogPageDescription from '../../components/blogComponents/blogPageDescription'
import ExploreAndBlog from '../../components/exploreAndBlog'
import { Helmet } from 'react-helmet'
//import '../components/index.css'



const Blogs = ({data}) => {
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
		<ExploreAndBlog fourArticles={data.fourArticles} />
		<Footer />
	</>
  )
}

export const pageQuery = graphql`query MyBlogsQuery {
  fourArticles: allMarkdownRemark(
    sort: {frontmatter: {Date: DESC}}
    filter: {frontmatter: {slug: {ne: ""}}}
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
          Type
        }
        id
      }
    }
  }
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
}`

export default Blogs;

