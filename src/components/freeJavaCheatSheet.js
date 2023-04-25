import img from "../assets/FreeJavaCheatSheet.png"
import img1 from "../assets/Java Cheat Sheet 2.jpg"
import "./freeJavaCheatSheet.css"
import React, { useState } from "react"

export default function FreeJavaCheatSheet() {
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(false);

  // handle change event for email input field
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(event.target.checkValidity());
  };

  // handle form submission on clicking download button
  const handleSubmit = (event) => {
    event.preventDefault();
    // open pdf download link in new window
    window.open('https://drive.google.com/file/d/1QYn0UBDd4EzpARIPNnF28rsGbaT1Urn4/view?usp=sharing')
    setShowPopup(false)
  };

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
      <h1 className="mt-5 mb-0 fw-bold">Free Java Cheat Sheet</h1>
      <hr className="mt-0" />
      <div className="freeJavaContent">
        <img
          className="javacheat img-fluid rounded shadow"
          src={img}
          id="classes"
          alt="Hello"
        />
        <div className="labelText text-start">
          <h1>
            <strong>Cheat Sheet</strong>
          </h1>
          <p>
            This Java cheat sheet is a quick reference guide created by me
            during my journey of learning Java programming language. It contains
            essential Java concepts, syntax, and examples to help beginners and
            experienced programmers quickly review and remember the language
            features.
          </p>
          <p>
            <button onClick={handleDownloadClick} >
              <p className="px-2 m-0" id="download">🎉 Download for FREE 🎉</p>{" "}
            </button>
          </p>
        </div>
      </div>
      <br />
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <img
              className="img-fluid rounded"
              src={img1}
              id="classes"
              alt="Hello"
            />
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
              <button type="submit" className="btn btn-primary mx-auto d-block" id="downloadable" >Download</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
