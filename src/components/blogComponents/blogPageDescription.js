import React from 'react';
import img from '../../images/blogSideProfileImage.jpeg'
import { useStaticQuery, graphql } from 'gatsby'
import './blogPageDescription.css'
import BlogCards from './blogCards';
import ArticleBlogCard from './articleBlogCard';


const BlogPageDescription = (props) => {

	var data = useStaticQuery(graphql`
	query boxLinks {
		allMarkdownRemark(
		  filter: {frontmatter: {Tag: {eq: "Book"}}}
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

	

	const link = "/blogs/" + props.slug;
	return (
		<>
		{/* Here goes the Image and the Blogs Title */}
		<div className='container py-4 d-flex justify-content-between'>
			<h1 className='fw-bold mt-2'>Blogs</h1>
			<img className="rounded-circle my-2" src={img} alt="Profile" height="37px" width="auto" />
		</div>

		{/* Short Description of the Blog. */}
		<div className="container mb-5">
			<p className='fs-5 py-1 mb-1'>Discover the power of learning, creation and inspiration with Blogs.</p>
			<a className='text-primary text-decoration-none' href={link}>
				 Recent blog post &nbsp;

				 {/* This is the svg file of the arrow.  */}
				 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
				</svg>
			</a>
		</div>

		{/* Books */}
		<div className="container">
			<h2 className="fw-bold pb-2">Book Suggestions</h2>
			<p className="fs-5">Dive into the world of literature, learn essential skills, and experiment with different genres with my book suggestions.</p>
		</div>

		{/* Here are the cards feature. */}
		<div className=" container-sm caraso d-flex pt-2 px-2 pb-4 mb-4" id='caraso'>
				{data.allMarkdownRemark.edges.map(post => (
					<BlogCards key = {post.node.id} title = {post.node.frontmatter.Title} img = {post.node.frontmatter.Cover_Image} slug = {post.node.frontmatter.slug}/>
				))}
		</div>
		

		{/* Articles */}
		<div className="container">
			<h2 className="fw-bold pb-2">Articles</h2>
			<p className="fs-5">Unlock the power of clear and compelling articles on topics such as technology, science, personal growth, and more.</p>
		</div>

		{/* Here are the cards feature. */}
		<ArticleBlogCard />

		</>
	);
}

export default BlogPageDescription;
