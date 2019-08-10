/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Button from "./button"
import Img from "gatsby-image"

const Banner = props => {
  if (!props.banner) {
    return null
  }
  let { heading, button, pageImage } = props.banner
  return (
    <div sx={{ bg: "primary" }}>
      <div sx={bannerStyles}>
        <div sx={{ marginBottom: [7, 0] }}>
          <Styled.h1 sx={{ color: "background" }}>{heading}</Styled.h1>
          {button && button.linkUrl ? (
            <Button node={button} style="buttons.primary" />
          ) : null}
        </div>
        {pageImage && pageImage.asset ? (
          <Img
            sx={{ width: "100%" }}
            fluid={pageImage.asset.fluid}
            alt={pageImage.asset.alt}
          />
        ) : null}
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
