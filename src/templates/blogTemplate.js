import { graphql } from 'gatsby';
import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ExploreForFullPage from '../components/exploreForFullPage';
import './notion.css'
import ExploreAndBlog from '../components/exploreAndBlog';
import { Helmet } from 'react-helmet';
import Prism from "prismjs"
import "./prism.css"
require(`katex/dist/katex.min.css`);


const BlogTemplate = ({data}) => {

  console.log(data);


  const {html} = data.markdownRemark;
  const {Author, Date, Title, Type, Cover_Image} = data.markdownRemark.frontmatter;
  


  const TitleBox = (props) =>{
    return(
      <>
      
      <img className = "img-fluid mt-1" style={{ height: "140px", objectFit: "cover" , width: "100%" }} src={props.cover} alt="Cover" />
        
      <>
      <div className='text-center p-4  pb-0 fw-bold'>
        <h2>{props.titlename}</h2>
      </div>
      
      <div className="text-center pb-1 fw-regular fs-6">
        {props.authorName} - {props.dateCreated} - {props.type}
        <hr />
      </div>
      </>

       
      
      </>
    )
  }
  return (
    <>
      <Helmet>
      <title>{Title}</title>
      </Helmet>
      <Navbar /> 
      <div className="container-xxl pb-2">
        <TitleBox titlename = {Title} authorName = {Author} dateCreated = {Date} type = {Type} cover = {Cover_Image}/>
        
        
        <div className = "blogPost pb-0" dangerouslySetInnerHTML={{__html: html}} />
        <hr className="pt-2 border border-start-0 border-end-0 border-dark"/>
        
      </div>
    
      <ExploreAndBlog />
      <Footer /> 
    </>
  );
}

export default BlogTemplate;


export const singleBlog = graphql`
query MyBlogQuery($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
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
      Cover_Image
    }
    timeToRead
    tableOfContents
  }
}
`