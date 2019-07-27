import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"

const Figure = ({ node }) => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 1200 },
    {
      projectId: "7rdxbykg",
      dataset: "production",
    }
  )

  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.alt}</figcaption>
    </figure>
  )
}

export default Figure
