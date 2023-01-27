import React, { Component } from 'react'
import BoxContentDisplay from './boxContentDisplay'
//Importing the json file to use it to create the div boxes. 
import Interests from '../jsonfiles/interest.json'

export default class BoxesContents extends Component {
  render() {
	return (
		<div className="container">
			<div className="row row-cols-1  flex-column flex-sm-row p-3 p-sm-0 m-1 m-sm-0 justify-content-evenly ">
			{
				Interests && Interests.map(record => {
					return(
						<BoxContentDisplay icon = {record.icons} title = {record.title} description = {record.description} link = {record.link}/>
					)
				})
				
			}	
				
			</div>
		</div>
	)
  }
}


//row-cols-sm-2 row-cols-lg-3