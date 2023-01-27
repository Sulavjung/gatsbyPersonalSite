import React, { Component } from 'react'
import './aestheticButton.css'

export default class AestheticButton extends Component {
	constructor(props){
		super(props);
		this.state = {
			buttonName: props.name
		}
	}
  render() {
	return (
		<div className="sign-up text-center text-sm-start">
			<button class="signups">
				<a class="sign" href="https://docs.google.com/forms/d/e/1FAIpQLSdfep5ckUOnM6fPO6A81dNSMwZMTveitIMTHT8Fye4N1qy7xw/viewform?usp=sf_link">
					{this.state.buttonName}
				</a>
			</button>
		</div>
	)
  }
}
