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
import { useStaticQuery, graphql } from "gatsby"



const IndexPage = () => {

  var data = useStaticQuery(graphql`query MyQuery {
  fourArticles: allMarkdownRemark(
    sort: {frontmatter: {Date: DESC}}
    filter: {frontmatter: {slug: {ne: ""}}}
    limit: 4
  ) {
    edges {
      node {
        frontmatter {
          Author
          Date
          Fun_Meter
          Genera
          Status
          Tag
          slug
          Title
          Type
        }
        id
      }
    }
  }
}`);


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
      <ExploreAndBlog fourArticles={data.fourArticles} />
      <Footer />

    </>
  )
}

export default IndexPage
