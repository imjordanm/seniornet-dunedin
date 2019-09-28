/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Figure from "./figure"

const Grid = props => {
  if (!props.node && !props.node.items) {
    return null
  }
  let grid = props.node.items
  let hasImage = grid.some(item => item.hasOwnProperty("itemImage"))

  return (
    <>{hasImage ? <ImageGrid grid={grid} /> : <NoImageGrid grid={grid} />}</>
  )
}

const ImageGrid = props => (
  <div sx={{ variant: "grid.two" }}>
    {props.grid.map(item => (
      <div key={item.heading} sx={{ textAlign: "center" }}>
        {item.itemImage.asset ? (
          <div sx={imageStyles}>
            <Figure
              node={item.itemImage}
              alt={item.heading}
              width={"500"}
              grid={true}
            />
          </div>
        ) : null}
        <div sx={{ px: [3, 4] }}>
          {item.heading && <Styled.h3>{item.heading}</Styled.h3>}
          {item.text && (
            <Styled.p
              sx={{ fontSize: [0, 1, null, 2], lineHeight: "smallBody" }}
            >
              {item.text}
            </Styled.p>
          )}
        </div>
      </div>
    ))}
  </div>
)

const NoImageGrid = props => (
  <div sx={{ variant: "grid.two" }}>
    {props.grid.map(item => (
      <div key={item.heading} sx={itemStyles}>
        {item.heading && <Styled.h3>{item.heading}</Styled.h3>}
        {item.text && (
          <Styled.p sx={{ fontSize: [0, 1, null, 2], lineHeight: "smallBody" }}>
            {item.text}
          </Styled.p>
        )}
        {item.Button && (
          <Link
            sx={linkStyles}
            to={item.Button.linkUrl}
            title={item.Button.heading}
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
