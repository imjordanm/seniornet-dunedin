/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"

const Figure = ({ node, grid, width, alt }) => {
  if (!node || !node.asset) {
    return null
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: `${width ? width : 1000}` },
    {
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
    }
  )

  return (
    <figure sx={grid && imageStyles}>
      <Img
        fluid={fluidProps}
        alt={alt ? alt : node.alt}
        imgStyle={{
          left: "50%",
          width: "unset",
          transform: "translateX(-50%)",
        }}
      />
      <figcaption sx={{ opacity: "0" }}>{node.alt}</figcaption>
    </figure>
  )
}

const imageStyles = {
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: ["100px", "175px", null, "270px"],
}

export default Figure
