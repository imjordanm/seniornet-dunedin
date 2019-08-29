/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
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

export default Grid
