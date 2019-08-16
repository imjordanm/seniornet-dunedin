/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Figure from "./figure"

const Grid = props => {
  if (!props.posts && !props.node && !props.node.items) {
    return null
  }
  let grid
  if (props.node && props.node.items) {
    grid = props.node.items
  } else if (props.posts) {
    grid = props.posts.map(post => ({
      heading: post.node.title,
      text: post.node.slug.current,
    }))
  } else {
    return
  }

  let hasImage = grid.some(item => item.hasOwnProperty("itemImage"))
  return (
    <div>
      {hasImage ? <ImageGrid grid={grid} /> : <NoImageGrid grid={grid} />}
    </div>
  )
}

const ImageGrid = props => (
  <div sx={gridStyles}>
    {props.grid.map(item => (
      <div key={item.heading} sx={{ textAlign: "center" }}>
        {item.itemImage.asset ? (
          <div sx={imageStyles}>
            <Figure node={item.itemImage} width={"500"} grid={true} />
          </div>
        ) : null}
        <div sx={{ px: 6 }}>
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
  <div sx={gridStyles}>
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

const gridStyles = {
  display: "grid",
  gridTemplateColumns: ["none", "none", "repeat(2, 1fr)"],
  gridColumnGap: [0, 0, 6, 9],
  gridRowGap: [7, null, null, 9],
  ml: [null, null, null, "-110px"],
  my: 4,
  width: ["100%", null, null, "calc(100% + 220px)"],
}

const itemStyles = {
  bg: "background",
  p: [6, null, null, 8],
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
