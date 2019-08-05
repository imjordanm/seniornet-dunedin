/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Img from "gatsby-image"

const Grid = props => {
  if (!props.node && !props.node.items) {
    return null
  }
  let grid = props.node.items
  return (
    <div sx={gridStyles}>
      {grid.map(item => (
        <div key={item.heading} sx={itemStyles}>
          {item.itemImage && item.itemImage.asset ? (
            <Img fluid={item.image.asset.fluid} alt={item.image.asset.alt} />
          ) : null}
          {item.heading ? <Styled.h3>{item.heading}</Styled.h3> : null}
          {item.text ? (
            <Styled.p sx={{ fontSize: [0, 1, 2], lineHeight: "smallBody" }}>
              {item.text}
            </Styled.p>
          ) : null}
        </div>
      ))}
    </div>
  )
}

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: [6, 8],
  ml: [null, null, "-110px"],
  width: ["100%", null, "calc(100% + 220px)"],
}

const itemStyles = {}

export default Grid
