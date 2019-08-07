/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"

const Figure = ({ node, grid, width }) => {
  if (!node || !node.asset) {
    return null
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: `${width ? width : 1200}` },
    {
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
    }
  )

  return (
    <figure sx={grid ? imageStyles : { mt: [6, 8, 10] }}>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption sx={{ opacity: "0" }}>{node.alt}</figcaption>
    </figure>
  )
}

const imageStyles = {
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: [null, "250px", "350px"],
  maxWidth: ["250px", null, "none"],
}

export default Figure
