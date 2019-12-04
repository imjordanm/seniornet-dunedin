/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Grid from "../components/grid"

const Posts = props => {
  const data = useStaticQuery(graphql`
    query {
      sanityPages(templateKey: { eq: "news" }) {
        slug {
          current
        }
      }

      allSanityPosts(limit: 2, sort: { fields: [publishedAt], order: DESC }) {
        edges {
          node {
            title
            description
            excerpt
            mainImage {
              asset {
                fluid(maxWidth: 400) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            slug {
              current
            }
            publishedAt(formatString: "MMMM DD, YYYY")
            _rawSections
          }
        }
      }
    }
  `)
  let parent = data.sanityPages.slug.current
  let items = data.allSanityPosts.edges

  for (var item in items) {
    if (items[item].node) {
      items[item] = {
        title: items[item].node.title,
        description: `${items[item].node.excerpt}..`,
        slug: { current: `${parent}/${items[item].node.slug.current}` },
        publishedAt: items[item].node.publishedAt,
        itemImage: { _type: "image" }, //items[item].node.mainImage,
      }
      delete items[item].node
    }
  }

  items = { items, numColumns: `${props.node.numColumns}` }

  return <Grid node={items} parent={parent} />
}

export default Posts
