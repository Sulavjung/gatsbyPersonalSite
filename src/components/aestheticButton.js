import React, { Component } from "react"
import "./aestheticButton.css"


export default class AestheticButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonName: props.name,
    }
  }
  render() {
    return (
      <div className="sign-up ">
        <a
          className="sign"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdfep5ckUOnM6fPO6A81dNSMwZMTveitIMTHT8Fye4N1qy7xw/viewform?usp=sf_link"
        >
          <button className="signups">
            	<h4 className="sign p-0 m-0 mx-4 fs-4 fw-bold">{this.state.buttonName}</h4>
          </button>
        </a>
      </div>
    )
  }
}
