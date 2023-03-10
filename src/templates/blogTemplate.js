import { graphql } from 'gatsby';
import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ExploreForFullPage from '../components/exploreForFullPage';
import './notion.css'

const BlogTemplate = ({data}) => {

  const {html} = data.markdownRemark;
  const {Author, Date, Title, Type, Cover_Image} = data.markdownRemark.frontmatter;
  


  const TitleBox = (props) =>{
    return(
      <>
      
      <img className = "img-fluid mt-1" height = "auto" width = "1320px" src={props.cover} alt="Cover" />
        
      <>
      <div className='text-center p-4  pb-0 fw-bold fs-1'>
        {props.titlename}
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
      <Navbar /> 
      <div className="container pb-2">
        <TitleBox titlename = {Title} authorName = {Author} dateCreated = {Date} type = {Type} cover = {Cover_Image}/>
        
        <div className = "blogPost pb-0" dangerouslySetInnerHTML={{__html: html}} />
        <hr className="pt-2 border border-start-0 border-end-0 border-dark"/>
        
      </div>

      <ExploreForFullPage />
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