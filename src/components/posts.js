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
      {node.formatType === "grid" ? (
        <Grid posts={posts} numPosts={node.numPosts} parent={parent} />
      ) : (
        <List posts={posts} numPosts={node.numPosts} parent={parent} />
      )}
    </>
  )
}

const Grid = props => (
  <div sx={{ variant: "grid" }}>
    {props.posts.slice(0, props.numPosts).map(item => (
      <div key={item.node.title} sx={itemStyles}>
        <div>
          {item.node.title && <Styled.h3>{item.node.title}</Styled.h3>}
          {item.node.publishedAt && (
            <span sx={{ variant: "span" }}>{item.node.publishedAt}</span>
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

const List = props => (
  <div>
    {props.posts.slice(0, props.numPosts).map(item => (
      <div key={item.node.title} sx={itemStyles}>
        <div>
          {item.node.title && <Styled.h3>{item.node.title}</Styled.h3>}
          {item.node.publishedAt && (
            <span sx={{ variant: "span" }}>{item.node.publishedAt}</span>
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
  boxShadow: "-2px 3px 8px rgba(150,150,150,0.2)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}

const imageStyles = {
  bg: "rgba(255,255,255,0.15)",
  boxShadow: theme => `-2px 3px 14px ${theme.colors.text}85`,
  py: 7,
  px: [null, null, 7, 9],
  mb: [5, null, null, 7],
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
