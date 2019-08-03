/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Button from "./button"
import Figure from "./figure"

const Banner = props => {
  if (!props.node) {
    return null
  }
  let banner = props.node
  return (
    <div sx={{ bg: "primary" }}>
      <div sx={bannerStyles}>
        <Styled.h1 sx={{ color: "background" }}>{banner.heading}</Styled.h1>
        {typeof banner.button != "undefined" && banner.button.linkUrl ? (
          <Button node={banner.button} />
        ) : null}
        {typeof banner.pageImage != "undefined" && banner.pageImage.asset ? (
          <Figure node={banner.pageImage} />
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
