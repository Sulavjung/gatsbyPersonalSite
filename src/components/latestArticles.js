import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import './latestArticles.css'



const LatestArticles = () => {

	var data = useStaticQuery(graphql`
	query MyQuery {
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
				Type
			  }
			  id
			}
		  }
		}
	  }
	`)


	return (
		<div >
				{data.allMarkdownRemark.edges.map(post => (
					<div key={post.node.id}>
						<p className='pb-0 mb-1 type '>{post.node.frontmatter.Type}</p>
						<a className='text-decoration-none link' href={'/blogs/' + post.node.frontmatter.slug}>
							<h3 className='p-0 my-1 fw-bold fs-4'>{post.node.frontmatter.Title}</h3>
						</a>
						<p>{post.node.frontmatter.Author} - {post.node.frontmatter.Date}- <span className='genera'>{post.node.frontmatter.Genera}</span></p>
						
						<hr />
					</div>
				))}
		</div>
	);
}

export default LatestArticles;



