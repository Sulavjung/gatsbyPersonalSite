import React, { Component } from "react"
import { Link } from "gatsby-link"
import logo from "../assets/LogoInPng.svg"
import ThemeButton from "./ThemeButton"

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="fixed top-0 left-0 right-0 flex items-center justify-center z-50 pt-2 px-2">
          <nav className="w-full max-w-7xl p-0 m-0 rounded-pill flex items-center bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 shadow-lg">
            <div className="w-full flex flex-row items-center justify-between px-6 py-3">
              <Link
                to="/"
                className="flex items-center text-lg font-bold text-gray-900 dark:text-white cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img src={logo} alt="Logo" className="h-6 w-auto dark:invert" />
              </Link>

              <div className="flex flex-row items-center gap-6">
                <ThemeButton />
                <ul className="hidden md:flex flex-row gap-2">
                  {/* <li className="nav-item mx-2">
                    <Link
                      className="nav-link fw-bold text-dark cursor-pointer"
                      to="/"
                    >
                      Home
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      className="text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-200"
                      to="/blogs"
                      activeClassName="bg-gray-900 dark:bg-white text-white dark:text-gray-900"
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
