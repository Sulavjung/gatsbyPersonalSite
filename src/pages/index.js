import React from "react"
import Navbar from "../components/navbar"

import Eyecatcher from "../components/eyecatcher"
import ExploreAndBlog from "../components/exploreAndBlog"
import BoxesContents from "../components/boxesContents"
import Footer from "../components/footer"

import "../components/index.css"
import FreeJavaCheatSheet from "../components/freeJavaCheatSheet"
import { Helmet } from "react-helmet"

const indexPage = () => {
  return (
    <>
      <Helmet>
        <title>Sulav: Hello. How are you? </title>
        <meta
          name="description"
          content="Myself Sulav here. A fellow Computer Science student. Follow me on my website for computer science related topics, blog on recent learnings, and much more!"
        />
      </Helmet>
      <Navbar />
      <Eyecatcher />
      <BoxesContents />
      <FreeJavaCheatSheet />
      <ExploreAndBlog />
      <Footer />
    </>
  )
}

export default indexPage
