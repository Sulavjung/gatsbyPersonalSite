import React from "react"
import Navbar from "../components/navbar"

import Eyecatcher from "../components/eyecatcher"
import ExploreAndBlog from "../components/exploreAndBlog"
import BoxesContents from "../components/boxesContents"
import Footer from "../components/footer"

import "../components/index.css"
import { Helmet } from "react-helmet"
import Project from "../components/projectComponent/project"
import { useStaticQuery, graphql } from "gatsby"
import CustomCursor from "../components/CustomCursor"
import BookSection from "../components/BooksSection"
import ProjectShowcase from "../components/projectComponent/ProjectShowcase"

const IndexPage = () => {
  var data = useStaticQuery(graphql`
    query MyQuery {
      fourArticles: allMarkdownRemark(
        sort: { frontmatter: { Date: DESC } }
        filter: { frontmatter: { Type: { eq: "Blog" } } }
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
    }
  `)

  return (
    <div className="cursor-none">
      <CustomCursor />
      <Helmet>
        {/* ✅ Basic Metadata */}
        <meta charSet="UTF-8" />
        <title>Sulav Hamal — Computer Science Student & Developer</title>
        <meta
          name="description"
          content="I'm Sulav, a Computer Science student passionate about the art and science of programming. I share insights on web technologies, AI, and creative coding."
        />
        <meta
          name="keywords"
          content="Sulav Hamal, Computer Science, Software Engineering, React, JavaScript, AI, Machine Learning, Tech Blog, Web Development"
        />
        <link rel="canonical" href="https://sulavhamal.com/" />

        {/* ✅ Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sulav Hamal — Computer Science Student & Developer"
        />
        <meta
          property="og:description"
          content="Exploring the intersection of logic, design, and technology — one project at a time. Follow along for blogs, projects, and ideas."
        />
        <meta property="og:url" content="https://sulavhamal.com/" />
        <meta property="og:site_name" content="Sulav Hamal" />
        <meta
          property="og:image"
          content="https://sulavhamal.com/images/profile-cover.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sulav Hamal — Computer Science Student & Developer"
        />
        <meta
          name="twitter:description"
          content="I'm Sulav, a Computer Science student sharing thoughts on technology, creativity, and code."
        />
        <meta
          name="twitter:image"
          content="https://sulavhamal.com/images/profile-cover.png"
        />
        <meta name="twitter:site" content="@sulav_J_hamal" />
        <meta name="twitter:creator" content="@sulav_J_hamal" />

        {/* ✅ Mobile + Robots */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Apple Touch */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* ✅ Fallback favicon */}
        <link
          rel="icon"
          href="https://sulavhamal.com/images/favicon.png"
          type="image/png"
        />

        {/* ✅ Schema.org (Google Rich Results) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sulav Jung Hamal",
      "url": "https://sulavhamal.com",
      "image": "https://sulavhamal.com/images/profile-cover.png",
      "jobTitle": "Computer Science Student & Full Stack Developer",
      "sameAs": [
        "https://www.linkedin.com/in/sulavjunghamal/",
        "https://github.com/sulavjung",
      ],
      "description": "I'm Sulav, a Computer Science student passionate about web technologies, programming, and AI."
    }
    `}
        </script>
      </Helmet>

      <Navbar />
      <Eyecatcher />
      <BoxesContents />
      <ProjectShowcase />
      <BookSection
        books={[
          {
            title: "Atomic Habits",
            author: "James Clear",
            review: "One of the best books on consistency and building systems."
          },
          {
            title: "Deep Work",
            author: "Cal Newport",
            review: "Helped me rethink focus and distraction completely."
          },
          {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            review: "Changed how I approach writing maintainable software."
          }
        ]}
        metadata={{ title: "Books that Changed My Thinking ", subtitle: "A small collection of books that shaped how I think, build, learn, and approach life." }}
      />
      <BookSection
        metadata={{
          title: "Three Books Every Programmer should Read",
          subtitle:
            "A collection of books influencing how I think about software engineering, algorithms, and modern AI systems."
        }}
        books={[
          {
            title: "Software Engineering at Google",
            author: "Titus Winters, Tom Manshreck & Hyrum Wright",
            review:
              "Completely changed how I think about large-scale engineering, maintainability, testing, and building systems that survive years rather than months."
          },
          {
            title: "Algorithms in a Nutshell",
            author: "George T. Heineman",
            review:
              "Currently reading this to strengthen my understanding of algorithms beyond interviews—focusing on practical implementation, tradeoffs, and deeper intuition."
          },
          {
            title: "Deep Learning with Python",
            author: "François Chollet",
            review:
              "A fascinating bridge between theory and practice. Helped me understand how modern neural networks actually work while building real projects."
          }
        ]}
      />

      <ExploreAndBlog fourArticles={data.fourArticles} />
      <Footer />
    </div>
  )
}

export default IndexPage
