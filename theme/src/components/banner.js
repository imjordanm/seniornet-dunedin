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
        <Styled.h1 sx={{ color: "background" }}>{heading}</Styled.h1>
        {button && button.linkUrl ? <Button node={button} /> : null}
        {pageImage && pageImage.asset ? (
          <Img fluid={pageImage.asset.fluid} alt={pageImage.asset.alt} />
        ) : null}
      </div>
    </div>
  )
}

const bannerStyles = {
  margin: "0 auto",
  pt: 11,
  pb: 10,
  width: ["mobile", "desktop"],
}

export default Banner
