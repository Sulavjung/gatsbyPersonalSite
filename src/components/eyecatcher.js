import React from "react"
import "./eyecatcher.css"
import img from "../assets/helloImage.png"
import AestheticButton from "./aestheticButton"

export default function Eyecatcher() {
  return (
    <div className="container-xxl justify-content-between px-4 px-sm-0">
      <div className="row flex-column flex-sm-row">
        <div className="col col-lg-6">
          <br />
          <img className="img-fluid" src={img} id="helloImage" alt="Hello" />
        </div>
        <div className="col cold-lg-6 p-lg-5">
          <div className="p-xl-5">
            <br />
            <br />
            <h1 id="eyecatcher">Hey,</h1>
            <p id="paragraph">
              Myself <strong>Sulav</strong> here. A fellow{" "}
              <strong>Computer Science</strong> student. Happy to see you.
              Enough with introduction. Right?
            </p>
            <br />
            <p id="paragraph">
              On this site we explore life and help each other out. Join my
              Circle and enjoy it's perks. I will send out monthly newsletter
              and extra tips and tricks for life.
            </p>
            <AestheticButton name={"Sign Up for Circle"} />
            <br />
            <p id="paragraph">
              Let's start with some basic things that you might be interested
              in.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}
