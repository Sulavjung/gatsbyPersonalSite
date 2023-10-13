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

    if(Type === "interview"){        //To create an interview page for a certain language you should have at least a Type metadata with interview as the type. Also, have slug. 
      actions.createPage({
        path: `/programming/${Type}/${slug}`,
        component: path.resolve("src/templates/interview.js"),
        context: {Class: Class, slug: slug},
      })
    }


    //IF type is class, the slug part should be programming. If not: The slug should start with blogs. 
    //So, have Type = Class to create class path
    //Or, have Type = anythig other than class to have the slug start with blogs. 
    //Read this: If you have type of just Class, then that means, it is a page of one of the class. But if the type is class overview, then it is the part of the class main page.
    //But if the type is anything other than the class or class overiew or interview, it is blogpost. 
    let basePath = Type === "Class" ? "/programming" : "/blogs" 
    if (Class) {
      basePath += `/${Class}`
    }

    //If Type is not Class_overview then 
    if (Type !== "Class_overview") {
      actions.createPage({
        path: `${basePath}/${slug}`,
        component: path.resolve(
          "./src/templates/" +
            (Type === "Class" ? "classTemplate.js" : "blogTemplate.js")
        ),
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
