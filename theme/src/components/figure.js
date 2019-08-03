import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"

const Figure = ({ node }) => {
  if (!node || !node.asset) {
    return null
  }
  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 1200 },
    {
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
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
