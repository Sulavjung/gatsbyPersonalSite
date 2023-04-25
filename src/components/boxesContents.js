import React, { Component } from "react"
import BoxContentDisplay from "./boxContentDisplay"
//Importing the json file to use it to create the div boxes.
import Interests from "../jsonfiles/interest.json"
import "./boxesContents.css"

export default class BoxesContents extends Component {
  render() {
    return (
      <div className="container-xxl">
        <div className="wrapper">
          {Interests &&
            Interests.map(record => {
              return (
                <BoxContentDisplay
                  icon={record.icons}
                  title={record.title}
                  description={record.description}
                  link={record.link}
                />
              )
            })}
        </div>
      </div>
    )
  }
}

//row-cols-sm-2 row-cols-lg-3
