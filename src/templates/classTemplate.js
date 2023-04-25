import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import './personal.css'
import Prism from 'prismjs';
import './prism.css'



const ClassTemplate = ({ data}) => {
  const { html, tableOfContents } = data.markdownRemark;
  const { Title, Author, Date, Cover_Image } = data.markdownRemark.frontmatter;

  console.log(html);



  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-md" id='classRandom'>
      {/* <div dangerouslySetInnerHTML={{ __html: tableOfContents }}></div> */}
			<div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
      <Footer />
    </>
  );
};

export default ClassTemplate;

export const classQuery = graphql`
  query ClassBySlug($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug }}) {
      html
      tableOfContents(maxDepth: 2)
      frontmatter {
        Title
        Author
        Date
        Cover_Image
      }
    }
  }
`;
