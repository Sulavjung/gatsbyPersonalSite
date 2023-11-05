/* const path = require('path')

exports.createPages = async({ graphql, actions }) => {

  const {data} = await graphql(
    `query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }`
  )

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/blogs/' + node.frontmatter.slug, 
      component: path.resolve('./src/templates/blogTemplate.js'), 
      context: { slug: node.frontmatter.slug }
    })
  })
} */

/* const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            Type
            Class
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach(node => {
    const { slug, Type, Class} = node.frontmatter;
    let basePath = Type === 'Class' ? '/programming' : '/blogs';
    if (Class) {
      basePath += `/${Class}`;
    }
    actions.createPage({
      path: `${basePath}/${slug}`,
      component: path.resolve('./src/templates/blogTemplate.js'),
      context: { slug }
    });
  });
}; */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            Type
            Class
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    const { slug, Type, Class } = node.frontmatter


    //This is creating the pages from the md files depending on the frontmatter Type. Type could only be: [Interview, Class, Blog, Class_overview]

    if (Type === "Interview") {
      actions.createPage({
        path: `/programming/${Type}/${slug}`,
        component: path.resolve("src/templates/interview.js"),
        context: { Class: Class, slug: slug },
      })
    }



    if (Type === "Class") {
      actions.createPage({
        path: `/programming/${Class}/${slug}`,
        component: path.resolve("./src/templates/classTemplate.js"),
        context: { Class: Class, slug: slug },
      })
    }

    if (Type === "Blog") {
      actions.createPage({
        path: `blogs/${slug}`,
        component: path.resolve("./src/templates/blogTemplate.js"),
        context: { Class: Class, slug: slug },
      })
    }

    if (Type === "Class_overview") {
      actions.createPage({
        path: `/programming/${slug}`,
        component: path.resolve("./src/templates/classOverviewTemplate.js"),
        context: { slug, Class },
      })
    }
  })
}
