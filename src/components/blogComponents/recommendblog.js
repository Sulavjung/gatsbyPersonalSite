//This creates the recommendation section of the blogs post. This component is primary supposed to use to create the blogs recommendation and it does have limitation of 10 and is descending order in sorting. So, the latest articles are supposed to come in the front in the recommendation phase.



import React from 'react';
import img from '../../assets/helloImage.png'
import { Link } from 'gatsby'

const Recommendblog = (props) => {
	return (
		<>
			<div className="card col-lg-6 text-center border border-0">
						<div id='blogPostBoxes'>
							<img className ='img-fluid' src={img} alt="" />
							<h2 className='text-start px-3 fw-bold '>{props.Genera}</h2>
							<Link className='stretched-link link-dark' to={props.Path}>
								<h3 className='text-start px-3 pb-3'>{props.title}  </h3>
							</Link>
							
							<div className="horizontalLine pb-0 m-0 p-0 text-dark ">
								<hr className='border border-1 opacity-75 m-0 p-0' />
							</div>
							<p className='text-start px-3 m-0 '>{props.Date} . {props.Author}</p>
						</div>

			</div>
		</>
	);
}

export default Recommendblog;
