import { StaticImage } from "gatsby-plugin-image"
import "./freeJavaCheatSheet.css"
import React, { useState } from "react"

export function Img() {
  return (
    <StaticImage
      className="javacheat img-fluid"
      src="../assets/JavaCheatSheetMockup.png"
      alt="A Cheatsdfs"
    />
  )
}

export function Img1() {
  return (
    <StaticImage
      className="javacheat img-fluid rounded"
      src="../assets/Java Cheat Sheet 2.jpg"
      alt="A Cheat"
    />
  )
}

export default function FreeJavaCheatSheet() {
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(false)

  // handle change event for email input field
  const handleEmailChange = event => {
    setEmail(event.target.value)
    setIsEmailValid(event.target.checkValidity())
  }

  // handle form submission on clicking download button
  const handleSubmit = event => {
    event.preventDefault()
    // open pdf download link in new window
    window.open("https://sulavhamal.com/cheatsheet/")
    setShowPopup(false)
  }

  // handle click event for download button to show popup
  const handleDownloadClick = () => {
    setShowPopup(true)
  }

  // handle click event for closing popup
  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="container-xxl py-2 px-xxl-0">
      <div className="mt-5 mb-0 row">
        <div className="col-lg-6 order-lg-2">{Img()}</div>
        <div className="col-lg-6 order-lg-1 d-flex align-items-center">
          <div className="freeJavaContent p-1 p-sm-0">
            <div className="labelcheat text-start">
              <h1>
                <strong>Get a Free Java Cheat Sheet</strong>
              </h1>
              <p className="fs-">🚀 Essential Java concepts and syntax</p>
              <p>🧑‍💻 Examples for quick reference</p>
              <p>📚 Understandable explanations of each topic</p>
              <p>🆓 Easy to remember.</p>
              <p>
                <button onClick={handleDownloadClick}>
                  <p className="px-2 m-0" id="download">
                    🎉 Download for FREE 🎉
                  </p>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            {Img1()}
            <form onSubmit={handleSubmit}>
              <div>
                {/* email input field with bootstrap styling */}
                <p></p>
                <input
                  type="email"
                  className={`form-control${isEmailValid ? "" : " is-invalid"}`}
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email Address"
                  required
                />
              </div>
              <br />
              {/* download button with bootstrap styling */}
              <button
                type="submit"
                className="btn btn-primary mx-auto d-block"
                id="downloadable"
              >
                Download
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
