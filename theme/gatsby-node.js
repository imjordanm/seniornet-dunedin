const path = require("path")
const fs = require("fs")
const _ = require("lodash")
const mkdirp = require("mkdirp")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions, reporter }) => {
  const { createNodeField } = actions
  reporter.warn(node.internal.type)
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    reporter.warn(slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

/*const postNodes = []

exports.onCreateNode = ({ node, actions, reporter }) => {
  const { createNodeField } = actions
  let slug

  reporter.warn("HELLO THERE!")
  reporter.warn(node.internal.type)
  if (node.internal.type === "SitePage") {
    const fileNode = node.path
    reporter.warn(node.path)
    const parsedFilePath = path.parse(fileNode)
    if (parsedFilePath.name === "/index") {
      slug = `/`
    } else if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }

    createNodeField({ node, name: "slug", value: slug })
    postNodes.push(node)
  }
}*/

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const defaultPage = require.resolve("./src/templates/default.js")
    const homePage = require.resolve("./src/templates/home-page.js")
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    templateKey
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      )
        .then(result => {
          if (result.errors) {
            /* eslint no-console: "off" */
            console.log(result.errors)
            reject(result.errors)
          }

          result.data.allMarkdownRemark.edges.forEach(edge => {
            if (edge.node.frontmatter.templateKey === "default") {
              createPage({
                path: edge.node.fields.slug,
                component: defaultPage,
                context: {
                  slug: edge.node.fields.slug,
                  id: edge.node.id,
                },
              })
            } else if (edge.node.frontmatter.templateKey === "home-page") {
              createPage({
                path: edge.node.fields.slug,
                component: homePage,
                context: {
                  slug: edge.node.fields.slug,
                  id: edge.node.id,
                },
              })
            }
          })
          resolve()
        })
        .catch(err => {
          console.log(err)
        })
    )
  })
}

/*
  Runs before Gatsby does things
  check if there's a content directory and if not create one
*/
exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState()
  const basePath = options.basePath || "content"
  const dir = path.join(program.directory, basePath)
  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir)
  }
}
