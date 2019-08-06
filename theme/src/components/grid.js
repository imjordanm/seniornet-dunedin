/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Figure from "./figure"

const Grid = props => {
  if (!props.node && !props.node.items) {
    return null
  }
  let grid = props.node.items
  return (
    <div sx={gridStyles}>
      {grid.map(item => (
        <div key={item.heading}>
          {item.itemImage && item.itemImage.asset ? (
            <div sx={imageStyles}>
              <Figure node={item.itemImage} width={"1200"} grid={true} />
            </div>
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
  gridTemplateColumns: [null, "repeat(2, 1fr)"],
  gridColumnGap: [null, 8, 10],
  gridRowGap: [7, null, 9],
  ml: [null, null, "-110px"],
  my: 4,
  width: ["100%", null, "calc(100% + 220px)"],
  textAlign: "center",
}

const imageStyles = {
  bg: "rgba(255,255,255,0.15)",
  boxShadow: theme => `-2px 3px 14px ${theme.colors.text}85`,
  py: [8, 5, 7],
  px: [9, 7, 9],
  mb: [5, null, 7],
}

export default Grid
