/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import List from "../components/list"

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
    <>
      {props.node.formatType === "grid" ? (
        <Grid posts={posts} parent={parent} />
      ) : (
        <List posts={posts} parent={parent} />
      )}
    </>
  )
}

const Grid = props => (
  <div sx={{ variant: "grid.two" }}>
    {props.posts.map(item => (
      <div key={item.node.title} sx={itemStyles}>
        <div>
          <Styled.h3>
            <Link
              to={`${props.parent}/${item.node.slug.current}`}
              title={item.node.title}
              style={{ color: "inherit" }}
            >
              {item.node.title}
            </Link>
          </Styled.h3>
          {item.node.publishedAt && (
            <span sx={{ variant: "smallcaps" }}>{item.node.publishedAt}</span>
          )}
          {item.node.excerpt && (
            <Styled.p
              sx={{ fontSize: [0, 1, null, 2], lineHeight: "smallBody" }}
            >
              {`${item.node.excerpt}..`}
            </Styled.p>
          )}
        </div>
        {item.node.slug.current && (
          <Link
            sx={linkStyles}
            to={`${props.parent}/${item.node.slug.current}`}
            title={item.node.title}
          >
            Read More
          </Link>
        )}
      </div>
    ))}
  </div>
)

const itemStyles = {
  bg: "background",
  p: [5, 6, null, 8],
  boxShadow: theme => `-1px 1px 6px rgba(150,150,150,0.4)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}

const linkStyles = {
  mt: [6, 7, 8, 9],
  fontSize: ["0.633em", 0],
  color: "primary",
  textDecoration: "none",
  variant: "textStyles.caps",
  cursor: "pointer",
  display: "block",
  textAlign: "right",
  position: "relative",
  alignSelf: "flex-end",

  "::before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "-4.5em",
    px: 5,
    bg: "primary",
    height: [2, 3],
    transition: "transform 0.25s 0.1s",
  },
  ":hover": {
    "::before": {
      transform: "translateY(-50%) translateX(20%)",
    },
  },
}

export default Posts
