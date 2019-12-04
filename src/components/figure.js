/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import Button from "./button"
import { getFluidGatsbyImage } from "gatsby-source-sanity"

const Figure = ({ node, grid, width, alt }) => {
  if (!node || !node.asset) {
    return null
  }

  let button
  if (node.text && node.linkUrl) {
    button = { text: node.text, linkUrl: node.linkUrl }
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
    <>
      {!button ? (
        <Image grid={grid} image={fluidProps} node={node} alt={alt} />
      ) : (
        <ImageButton image={fluidProps} node={node} alt={alt} button={button} />
      )}
    </>
  )
}

const Image = ({ grid, image, node, alt }) => (
  <figure sx={grid && imageStyles}>
    <Img
      fluid={image}
      alt={alt ? alt : node.alt}
      imgStyle={{
        left: "50%",
        width: "unset",
        transform: "translateX(-50%)",
      }}
    />
    <figcaption sx={{ opacity: "0" }}>{node.alt}</figcaption>
    {node.overhang && <div sx={{ mb: [-6, -11, null, -12] }}></div>}
  </figure>
)

const ImageButton = ({ image, node, alt, button }) => (
  <div
    sx={{
      display: ["block", null, null, "flex"],
      justifyContent: [null, null, null, "space-between"],
      flexDirection: [null, null, null, "row-reverse"],
    }}
  >
    <Button node={button} image={true} />
    <figure
      sx={{
        flex: "7 1",
        ml: [null, "0", "0", "-108px"],
        pt: [null, 7, 7, "unset"],
      }}
    >
      <Img fluid={image} alt={alt ? alt : node.alt} />
      <figcaption sx={{ opacity: "0" }}>{node.alt}</figcaption>
      {node.overhang && <div sx={{ mb: [-10, -11, null, -12, -13] }}></div>}
    </figure>
  </div>
)

const imageStyles = {
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: ["100px", "175px", null, "270px"],
}

export default Figure
