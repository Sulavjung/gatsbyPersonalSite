import React from "react"
import Navbar from "../components/navbar"

import Eyecatcher from "../components/eyecatcher"
import ExploreAndBlog from "../components/exploreAndBlog"
import BoxesContents from "../components/boxesContents"
import Footer from "../components/footer"

import "../components/index.css"
import FreeJavaCheatSheet from "../components/freeJavaCheatSheet"
import { Helmet } from "react-helmet"
import Project from "../components/projectComponent/project"



const indexPage = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8"/>
        <title>Sulav</title>
        <meta
          name="description"
          content="Myself Sulav here. A fellow Computer Science student. Follow me on my website for computer science related topics, blog on recent learnings, and much more!"
        />
      </Helmet>
      <Navbar />
      <Eyecatcher />
      <BoxesContents />
      <FreeJavaCheatSheet />
      <Project />
      <ExploreAndBlog />
      <Footer />

    </>
  )
}

export default indexPage
