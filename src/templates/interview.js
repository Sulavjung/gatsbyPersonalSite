import { graphql, Link } from "gatsby"
import React, { useEffect } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "./interview.css"
import Prism from "prismjs"
import "./prism.css"
import ExploreAndBlog from "../components/exploreAndBlog"
import { Helmet } from "react-helmet"
import ClassTopics from "../components/classComponents/relatedClassTopics"
import "prismjs/components/prism-java"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-jsx"
import { extractAndRemoveH3WithContent, onClickOFTheEachQuestion} from "../scripts/inteviewformat"
require(`katex/dist/katex.min.css`)

const ClassTemplate = ({ data }) => {
  const { html, tableOfContents } = data.markdownRemark
  const { Title, tags, Description, slug, Author } =
    data.markdownRemark.frontmatter
  const { allMarkdownRemark } = data

  var buttonHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>`

  useEffect(() => {

	const h3AndContet = extractAndRemoveH3WithContent();

	onClickOFTheEachQuestion(h3AndContet);

	
    const preElements = document.getElementsByTagName("pre")

    if (preElements.length > 0) {
      for (let i = 0; i < preElements.length; i++) {
        const preElement = preElements[i]
        const preElementText = preElement.innerText

        // Create a "Copy" button
        const copyButton = document.createElement("button")
        copyButton.className = "copy-button"

        // Set the button's innerHTML
        copyButton.innerHTML = buttonHtml

        const copiedMessage = document.createElement("p")
        copiedMessage.textContent = "Copied"

        // Add a click event listener to the button
        copyButton.addEventListener("click", () => {
          navigator.clipboard.writeText(preElementText)

          console.log(preElementText);


          copyButton.appendChild(copiedMessage)

          // Hide the "Copied" message and remove it after 5 seconds
          setTimeout(() => {
            copiedMessage.style.display = "none"

            // Check if the "Copied" message is still a child of the button
            if (copiedMessage.parentNode === copyButton) {
              copyButton.removeChild(copiedMessage)
            }
          }, 3000) // 5000 milliseconds (5 seconds)
        })

        // Append the button to the <pre> element
        preElement.appendChild(copyButton)
      }
    }
    Prism.highlightAll()
  }, [])

  let tagsString = ""

  if (tags && tags.length > 0) {
    tagsString = tags.join(", ")
  } else {
    tagsString =
      "web technologies, react, web development, tech, news, update, ios, apple, macbook"
  }

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="robots" content="nofollow" />
        <meta name="keywords" />

        <meta name="keywords" content={tagsString} />

        <meta name="title" property="og:title" content={Title} />
        <meta
          property="og:url"
          content={`https://sulavhamal.com/blogs/${slug}/`}
        />

        <meta
          name="description"
          property="og:description"
          content={Description}
        />
        <meta
          name="image"
          property="og:image"
          content="https://source.unsplash.com//M5s9Ffs1KqU/1320x400"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="author" content={Author} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={Title} />
        <meta name="twitter:description" content={Description} />
        <meta
          name="twitter:image"
          content="https://source.unsplash.com//M5s9Ffs1KqU/1320x400"
        />
        <meta name="twitter:site" content="@sulav_J_hamal" />
        <meta name="twitter:creator" content="@sulav_J_hamal" />
      </Helmet>
      <Navbar />
      <div className="px-2">
        <div className="container-xxl p-0" id="interview">
          <div className="row">
            <div>
              {/* Content */}
              <div
                className="notes"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
            {/* <div className="tableOfContent col-lg-3">
              {/* Table of Contents */}
              {/* Render your table of contents here */}
              {/* <div className="toc-container py-5">
                <div className="border-start">
                  <h2 className="p-2 link-underline-primary">Contents</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: tableOfContents }}
                  ></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <ExploreAndBlog fourArticles={data.fourArticles} />
      <Footer />
    </>
  )
}

export default ClassTemplate

export const classQuery = graphql`
  query ClassBySlug($Class: String, $slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents(maxDepth: 2)
      frontmatter {
        Description
        Title
        Author
        Date
        Cover_Image
        slug
        Class
        tags
        Author
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: {
          slug: { ne: $slug }
          Class: { eq: $Class }
          Type: { eq: "Class" }
        }
      }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            Title
            Description
            slug
            Class
          }
        }
      }
    }
    fourArticles: allMarkdownRemark(
      sort: { frontmatter: { Date: DESC } }
      filter: { frontmatter: { slug: { ne: "" } } }
      limit: 5
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
`
