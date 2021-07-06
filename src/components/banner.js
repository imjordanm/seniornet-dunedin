/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import Button from "./button"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"

const Banner = props => {
  if (!props.banner) {
    return null
  }
  let { heading, button, pageImage } = props.banner
  let templateKey = props.templateKey
  let headingWords = heading.split(" ")
  let fluidProps = null
  let sanityImage = false

  if (
    pageImage &&
    pageImage.asset &&
    !pageImage.asset.fluid &&
    pageImage.asset._ref
  ) {
    sanityImage = true
    fluidProps = getFluidGatsbyImage(
      pageImage.asset._ref,
      { maxWidth: 1000 },
      {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      }
    )
  }

  return (
    <div sx={bannerStyles}>
      {/*<div sx={{ flex: "1 1" }}>
        {templateKey === "home" && (
          <Styled.h1
            sx={{
              color: "secondary",
              whiteSpace: "pre-wrap",
            }}
          >
            {headingWords.map((word, index) =>
              index === 1 ? (
                <span key={word} sx={{ color: "secondary" }}>
                  {word}
                  {"\n"}
                </span>
              ) : (
                <span key={word}>
                  {word}
                  {"\n"}
                </span>
              )
            )}
          </Styled.h1>
        )}

        {button && button.linkUrl && (
          <Button node={button} style="buttons.secondary" />
        )}
        </div>*/}
      {!sanityImage && pageImage && pageImage.asset && pageImage.asset.fluid ? (
        <Img
          sx={{ width: "100%", mt: [6, 8, null, 0], flex: "1 1" }}
          fluid={pageImage.asset.fluid}
          alt={pageImage.alt}
        />
      ) : sanityImage && fluidProps !== "null" ? (
        <Img
          sx={{ width: "100%", mt: [6, 8, null, 0], flex: "1 1" }}
          fluid={fluidProps}
          alt={pageImage.alt}
        />
      ) : null}
    </div>
  )
}

const bannerStyles = {
  margin: "0 auto",
  pt: [8, 10, null, 11, 12],
  width: [
    "mobile",
    "tablet",
    "tablet",
    theme => `calc(${theme.sizes.desktop} - 220px)`,
  ],
  maxWidth: ["maxSmall", null, null, "maxLarge"],
  display: "flex",
  flexDirection: "column",
  textAlign: ["center", "left"],
}

export default Banner
