import React, { Component } from "react"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-dark text-light text-center p-4 ">
          <div className="container-xxl">
            <div className="flex d-flex justify-content-evenly px-sm-5 mx-sm-5">
              <a
                href="https://www.linkedin.com/in/sulavjunghamal/"
                className="link-info"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://www.facebook.com/mesulavjunghamal/"
                className="facebook link-light"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/sulav_hamal/"
                className="link-danger"
              >
                <BsInstagram />
              </a>
              <a href="https://github.com/Sulavjung" className="link-warning">
                <BsGithub />
              </a>
              <a href="https://twitter.com/sulav_J_hamal" className="link-info">
                <BsTwitter />
              </a>
            </div>

            <div className="div copyright justify-content-center text-center pb-0 pt-4 d-sm-flex">
              <p className="fs-6 m-0 p-0"> &copy; Sulav Jung Hamal. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
