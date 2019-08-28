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

  if (pageImage && !pageImage.asset.fluid && pageImage.asset._ref) {
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
    <div
      sx={{
        bg: "primary",
        "::after": {
          display: "block",
          height: "5vw",
          mt: "-2vw",
          transform: "scaleX(-1) scaleY(1.02)",
          content: '""',
          mask: `url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22654%20312.5%201920%2083.5%22%3E%0D%0A%20%20%3Cpath%20d%3D%22M654%20737.5h1920V387.3s-304.7%206.5-676.9-32-906.6-42.8-906.6-42.8H654v425z%22%2F%3E%0D%0A%3C%2Fsvg%3E) no-repeat 100%`,
          maskSize: "cover",
          bg: "background",
        },
      }}
    >
      <div
        sx={
          pageImage
            ? {
                ...bannerStyles,
                width: ["mobile", null, null, "desktop"],
                maxWidth: "navigation",
              }
            : bannerStyles
        }
      >
        <div sx={{ flex: "1 1", pb: [4, 6, null, 8, 9] }}>
          {templateKey === "home" ? (
            <Styled.h1
              sx={{
                color: "background",
                whiteSpace: "pre-wrap",
                mr: [0, null, 3],
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
          ) : (
            <Styled.h1 sx={{ color: "background", mb: "0" }}>
              {heading}
            </Styled.h1>
          )}

          {button && button.linkUrl && (
            <Button node={button} style="buttons.primary" />
          )}
        </div>
        {!sanityImage && pageImage && pageImage.asset.fluid ? (
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
    </div>
  )
}

const bannerStyles = {
  margin: "0 auto",
  pt: [6, 8, null, 10],
  width: ["mobile", null, theme => `calc(${theme.sizes.desktop} - 220px)`],
  maxWidth: "outer",
  display: "flex",
  flexDirection: ["column", null, "row"],
}

export default Banner
