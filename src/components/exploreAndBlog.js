import React, { Component } from 'react';
import LatestArticles from './latestArticles';

class ExploreAndBlog extends Component {
	render() {
		return (

			<div className='container-xxl overflow-none'>
				<div className="d-flex text-center row">
					<div className="text-start px-xxl-0 mx-xxl-0 pt-3">
					<h2 className='m-0 fw-bold fs-1'>Latest Post</h2>
						<hr className='mt-0'/>
						{/* Here will go the most recent articles. At least four recent. Or we could have all these taken care from the home page.*/}
						<LatestArticles />
					</div>
					
				</div>
			</div>

		);
	}
}

export default ExploreAndBlog;
