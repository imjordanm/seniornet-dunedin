/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Figure from "./figure"

const Grid = props => {
  console.log(props)
  if (!props.node && !props.node.items) {
    return null
  }

  let grid = props.node.items
  let hasImage = grid.some(item => item.itemImage.hasOwnProperty("asset"))
  return (
    <NoImageGrid
      grid={grid}
      hasImage={hasImage}
      numColumns={props.node.numColumns}
    />
  )
}

const NoImageGrid = props => (
  <div sx={{ variant: `grid.${props.numColumns}` }}>
    {props.grid.map(item => (
      <div
        key={item.title}
        sx={props.hasImage ? { textAlign: "center" } : itemStyles}
      >
        {props.hasImage && item.itemImage.asset ? (
          <div sx={imageStyles}>
            <Figure
              node={item.itemImage}
              alt={item.title}
              width={"500"}
              grid={true}
            />
          </div>
        ) : null}
        <div sx={props.hasImage && { px: [3, 4] }}>
          {item.title && (
            <Styled.h3>
              {item.slug ? (
                <Link
                  to={item.slug.current}
                  title={item.title}
                  style={{ color: "inherit" }}
                >
                  {item.title}
                </Link>
              ) : (
                item.title
              )}
            </Styled.h3>
          )}
          {item.publishedAt && (
            <span sx={{ variant: "smallcaps" }}>{item.publishedAt}</span>
          )}
          {item.description && (
            <Styled.p
              sx={{ fontSize: [0, 1, null, 2], lineHeight: "smallBody" }}
            >
              {item.description}
            </Styled.p>
          )}
        </div>
        {!props.hasImage && item.slug.current && (
          <Link sx={linkStyles} to={item.slug.current} title={item.title}>
            Read More
          </Link>
        )}
      </div>
    ))}
  </div>
)

const itemStyles = {
  boxShadow: "-2px 3px 8px rgba(150,150,150,0.2)",
  bg: "background",
  p: [5, 6, null, 8],
  //boxShadow: theme => `-1px 1px 6px rgba(150,150,150,0.4)`,
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
  mt: [6, 7, 8],
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

export default Grid
