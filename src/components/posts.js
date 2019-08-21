/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const Posts = ({ node }) => {
  const data = useStaticQuery(graphql`
    query {
      sanityPages(templateKey: { eq: "news" }) {
        slug {
          current
        }
      }

      allSanityPosts(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
        edges {
          node {
            title
            description
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
  let posts = data.allSanityPosts.edges

  return (
    <div sx={{ variant: "grid" }}>
      {posts.slice(0, node.numPosts).map(item => (
        <div key={item.node.title} sx={itemStyles}>
          {item.node.title && <Styled.h3>{item.node.title}</Styled.h3>}
          {item.node.publishedAt && <span>{item.node.publishedAt}</span>}
          {item.node.description && (
            <Styled.p
              sx={{ fontSize: [0, 1, null, 2], lineHeight: "smallBody" }}
            >
              {item.node.description}
            </Styled.p>
          )}
          {item.node.slug.current && (
            <Link to={`${parent}/${item.node.slug.current}`}>Read More</Link>
          )}
        </div>
      ))}
    </div>
  )
}

const itemStyles = {
  bg: "background",
  p: [5, 6, null, 8],
  boxShadow: "-2px 3px 8px rgba(150,150,150,0.2)",
}

const imageStyles = {
  bg: "rgba(255,255,255,0.15)",
  boxShadow: theme => `-2px 3px 14px ${theme.colors.text}85`,
  py: 7,
  px: [null, null, 7, 9],
  mb: [5, null, null, 7],
}

export default Posts
