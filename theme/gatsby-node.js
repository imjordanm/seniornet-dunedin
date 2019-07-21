const path = require("path")
const fs = require("fs")
const _ = require("lodash")
const mkdirp = require("mkdirp")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions, reporter }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
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
            if (edge.node.frontmatter.templateKey) {
              let template = edge.node.frontmatter.templateKey;
              createPage({
                path: edge.node.fields.slug,
                component: require.resolve("./src/templates/" + `${template}` + ".js"),
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
