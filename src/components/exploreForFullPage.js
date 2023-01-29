import React from 'react';
import LatestArticles from './latestArticles';

const ExploreForFullPage = () => {
	return (

			<div className="container">
			<h1 className='m-0 fw-bold'>Latest Articles</h1>
			<hr className='mt-0'/>
			{/* Here will go the most recent articles. At least four recent. Or we could have all these taken care from the home page.*/}
			<LatestArticles />
	</div>

	);
}

export default ExploreForFullPage;
