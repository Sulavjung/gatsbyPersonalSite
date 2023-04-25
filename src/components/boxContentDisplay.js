import React, { Component } from "react"
import "./boxContentDisplay.css"
import { Link } from "gatsby"

export default class BoxContentDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      icon: props.icon,
      description: props.description,
      link: props.link,
    }
  }

  render() {
    return (
      <div className="column pt-4" id={this.state.title}>
        <Link id="links" to={this.state.link}>
          <h1 className="mt-3 pt-2 pb-2 text-xxl" id="h1Icon">
            {this.state.icon}
          </h1>
          <h1 className="mt-2 mb-0" id="h1Title">
            {this.state.title}
          </h1>
          <p className="p-4 m-4 mt-0 p-sm-2" id="pdescription">
            {this.state.description}
          </p>
        </Link>
      </div>
    )
  }
}
