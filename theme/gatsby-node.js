exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityPages {
        edges {
          node {
            title
            description
            _rawContent
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
  pages.forEach((edge, index) => {
    const path = edge.node.slug.current

    if (path === "/") {
      createPage({
        path,
        component: require.resolve("./src/templates/home-page.js"),
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
}
