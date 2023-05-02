import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const ClassTopics = props => {
  const { Class, slug } = props
  const data = useStaticQuery(graphql`
    query ($class: String!, $slug: String!) {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            Class: { eq: $class }
            slug: { eq: $slug }
          }
        }
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
    }
  `, { class: Class, slug })

  return (
    <div>
      <h4>Related Topics</h4>
      <hr className="mt-0" />
      <div className="border rounded p-0 mt-1 shadow">
        {data.allMarkdownRemark.edges.map(tab => (
          <Link
            to={`/programming/${tab.node.frontmatter.Class}/${tab.node.frontmatter.slug}`}
            className="text-decoration-none"
            key={tab.node.frontmatter.slug}
          >
            <div className="border-top border-bottom p-3">
              <h5 className="p-0 m-0">{tab.node.frontmatter.Title}</h5>
              <p className="p-0 m-0">{tab.node.frontmatter.Description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ClassTopics
