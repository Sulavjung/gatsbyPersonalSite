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
          <nav className="container-sm p-0 m-0 mx-2 mt-2 rounded-pill flex align-center" draggable="true">
            <div className="container-xxl navCont ">
              <Link
                to="/"
                className="navbar-brand fs-1 py-0 cursor-pointer"
                id="logoName"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="logo-image pt-2 p-1"
                  style={{ height: "40px", width: "auto" }}
                />
              </Link>

            
              <div>
                <ul className="navbar-nav" >
                  {/* <li className="nav-item mx-2">
                    <Link
                      className="nav-link fw-bold text-dark cursor-pointer"
                      to="/"
                    >
                      Home
                    </Link>
                  </li> */}
                  <li className="nav-item" id="navbar-button">
                    <Link 
                      className="navButton"
                      to="/blogs"
                      activeClassName="active"
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
