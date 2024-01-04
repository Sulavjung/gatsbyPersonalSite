import React from 'react';
import './latestArticles.css'
import "./index.css"


const LatestArticles = (props) => {
  // Extract currentSlug from props
  const { fourArticles } = props;


  return (
    <div className='latestPostContainer'>
      {fourArticles.edges.map(post => (
        <div key={post.node.id} className='postsOfLatestPost'>
          <div><p className='pb-0 mb-1 type'>{post.node.frontmatter.Genera}</p></div>
          <a className='text-decoration-none link' href={'/blogs/' + post.node.frontmatter.slug}>
            <h3 className='p-0 my-1 fw-bold fs-4'>{post.node.frontmatter.Title}</h3>
          </a>
          <p>{post.node.frontmatter.Author} - {post.node.frontmatter.Date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default LatestArticles;
