import React, { Component } from "react"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import './footer.css'

const appleEmbed = `<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:1320px;overflow:hidden;border-radius:25px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/sulavs-daily/pl.u-pMylg4bI4RRY987"></iframe>`

class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="container-xxl mb-5 px-xxl-0 px-2 dailyVibes">
            <h2 className="m-0 fw-bold fs-1 mt-5 pt-2">Daily Vibes</h2>
            <hr className="mt-0" />
            <div className="p-0 m-0">
              <div
                dangerouslySetInnerHTML={{ __html: appleEmbed }}
                className="shadow-sm p-0 m-0 projectCont height450"
              ></div>
            </div>
          </div>
        </div>
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
