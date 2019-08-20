/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import Button from "./button"
import Img from "gatsby-image"

const Banner = props => {
  if (!props.banner) {
    return null
  }
  let { heading, button, pageImage } = props.banner
  let templateKey = props.templateKey
  let headingWords = heading.split(" ")

  return (
    <div sx={{ bg: "primary" }}>
      <div
        sx={
          pageImage
            ? {
                ...bannerStyles,
                width: ["mobile", null, null, "desktop"],
                maxWidth: "1600px",
              }
            : bannerStyles
        }
      >
        <div sx={{ flex: "1 1" }}>
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
            <Styled.h1 sx={{ color: "background" }}>{heading}</Styled.h1>
          )}

          {button && button.linkUrl ? (
            <Button node={button} style="buttons.primary" />
          ) : null}
        </div>
        {pageImage && pageImage.asset && (
          <Img
            sx={{ width: "100%", mt: [6, 8, null, 0], flex: "1 1" }}
            fluid={pageImage.asset.fluid}
            alt={pageImage.asset.alt}
          />
        )}
      </div>
    </div>
  )
}

const bannerStyles = {
  margin: "0 auto",
  py: [6, 8, null, 9],
  width: [
    "mobile",
    null,
    null,
    theme => `calc(${theme.sizes.desktop} - 220px)`,
  ],
  maxWidth: "content",
  display: "flex",
  flexDirection: ["column", null, null, "row"],
}

export default Banner
