/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import Button from "./button"
import Img from "gatsby-image"

const Banner = props => {
  if (!props.banner) {
    return null
  }
  let { heading, button, pageImage, templateKey } = props.banner
  let headingWords = heading.split(" ")
  return (
    <div sx={{ bg: "primary" }}>
      <div sx={bannerStyles}>
        <div sx={{ mb: [7, 0] }}>
          {templateKey === "home" ? (
            <Styled.h1 sx={{ color: "background" }}>
              {headingWords.map((word, index) =>
                index === 1 ? (
                  <span key={word} sx={{ color: "secondary" }}>
                    {word}{" "}
                  </span>
                ) : (
                  <>{word} </>
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
            sx={{ width: "100%" }}
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
  py: [8, 10],
  width: "mobile",
  maxWidth: "outer",
  display: "flex",
  flexDirection: ["column", "row"],
}

export default Banner
