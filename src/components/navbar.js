import React, { Component } from "react"
import "./navbarcss.css"
import { Link } from "gatsby-link"
import "./index.css"
import logo from "../assets/LogoInPng.svg"

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div id="navbar">
          <nav className="navbar navbar-expand bg-body-tertiary p-0 m-0">
            <div className="container-xxl ">
              <Link
                to="/"
                className="navbar-brand fs-1 py-0 cursor-pointer"
                id="logoName"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="logo-image pt-2 p-1"
                  style={{ height: "50px", width: "auto" }}
                />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  {/* <li className="nav-item mx-2">
                    <Link
                      className="nav-link fw-bold text-dark cursor-pointer"
                      to="/"
                    >
                      Home
                    </Link>
                  </li> */}
                  <li className="nav-item mx-2">
                    <Link
                      className="nav-link fw-bold text-dark cursor-pointer"
                      to="/blogs"
                    >
                      Blogs
                    </Link>
                  </li>
                  {/* <li class="nav-item mx-2">
								<Link className="nav-link" to="/bucketlist">Bucketlist</Link>
							</li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    )
  }
}
