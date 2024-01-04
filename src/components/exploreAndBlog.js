import React from 'react';
import LatestArticles from './latestArticles';

const ExploreAndBlog = ({ fourArticles }) => {


  return (
    <div className='container-xxl overflow-none'>
      <div className="d-flex text-center row">
        <div className="text-start px-xxl-0 mx-xxl-0 pt-3">
          <h2 className='m-0 fw-bold fs-1 latestPostMainHeading'>Latest Post</h2>
          <hr className='mt-0' />
          {/* Pass the slug as a prop to LatestArticles */}
          <LatestArticles fourArticles = {fourArticles} />
        </div>
      </div>
    </div>
  );
}

export default ExploreAndBlog;
