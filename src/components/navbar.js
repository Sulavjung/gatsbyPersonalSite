import React, { Component } from 'react'
import './navbarcss.css'
import { Link } from 'gatsby-link'
import './index.css'





export default class Navbar extends Component {
  render() {
	return (
	  <><div id='navbar'>
			<nav class="navbar navbar-expand bg-body-tertiary p-0 m-0">
				<div class="container ">
					
						<Link to='/' className="navbar-brand fs-1 py-0" id='logoName'>Sulav</Link> 
					
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
						<ul class="navbar-nav">
							<li class="nav-item mx-2">

								<Link className='nav-link' to="/">Home</Link>

							</li>
							<li class="nav-item mx-2">

								<Link className='nav-link' to="/blogs">Blogs</Link>

							</li>
							{/* <li class="nav-item mx-2">
								<Link className="nav-link" to="/bucketlist">Bucketlist</Link>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>


		</div>
	
		</>
	  
	)
  }
}
