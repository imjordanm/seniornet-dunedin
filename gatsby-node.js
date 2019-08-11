exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityPages {
        edges {
          node {
            templateKey
            title
            description
            slug {
              current
            }
          }
        }
      }

      allSanityPosts {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const pages = result.data.allSanityPages.edges || []
  let parentDir

  pages.forEach((edge, index) => {
    const path = edge.node.slug.current
    const templateKey = edge.node.templateKey

    if (templateKey === "home") {
      createPage({
        path,
        component: require.resolve("./src/templates/home-page.js"),
        context: { slug: edge.node.slug.current },
      })
    } else if (templateKey === "news") {
      parentDir = edge.node.slug.current
      createPage({
        path,
        component: require.resolve("./src/templates/news.js"),
        context: { slug: edge.node.slug.current },
      })
    } else {
      createPage({
        path,
        component: require.resolve("./src/templates/default.js"),
        context: { slug: edge.node.slug.current },
      })
    }
  })

  const posts = result.data.allSanityPosts.edges || []
  posts.forEach((edge, index) => {
    const path = `${parentDir}/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/post.js"),
      context: { slug: edge.node.slug.current },
    })
  })
}
