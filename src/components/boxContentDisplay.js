import React, { Component } from "react"
import "./boxContentDisplay.css"

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

  handleButtonClick = () => {
    if (this.state.link.startsWith("/")) {
      // Link starts with a forward slash, indicating a relative path within the same website
      window.location.href = this.state.link
    } else {
      // Link is external, open in a new tab
      window.open(this.state.link, "_blank")
    }
  }

  render() {
    return (
      <button
        className="boxes column pt-4"
        id={this.state.title}
        key={this.state.title}
        onClick={this.handleButtonClick}
      >
        <div id="links">
          <h2 className="mt-3 pt-2 pb-2 text-xxl" id="h2Icon">
            {this.state.icon}
          </h2>
          <h2 className="mt-2 mb-0" id="h2Title">
            {this.state.title}
          </h2>
          <p className="p-4 m-4 mt-0 p-sm-2" id="pdescription">
            {this.state.description}
          </p>
        </div>
      </button>
    )
  }
}
