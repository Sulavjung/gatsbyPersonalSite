import React, { Component } from 'react'
import './boxContentDisplay.css'
import { Link } from 'gatsby'

export default class BoxContentDisplay extends Component {
	constructor(props){
		super(props)
			this.state ={
				title: props.title,
				icon: props.icon,
				description: props.description,
				link: props.link
			}
		}
	
  render() {
	return (

		<div className="card col col-md-4 col-lg-3 text-center my-4 mx-md-1" id='boxDiv'>
				<h1 className='mt-3' id='h1Icon'>{this.state.icon}</h1>
				<Link className='stretched-link link-dark text-decoration-none' to={this.state.link}>
					<h1 className='mt-2 mb-0' id='h1Title'>{this.state.title}</h1>
				</Link>
				<p className='p-4 p-sm-2' id='pdescription'>{this.state.description}</p>
		</div>
		
	  
	)
  }
}
