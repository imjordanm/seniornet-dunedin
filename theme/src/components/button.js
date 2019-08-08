/** @jsx jsx */
import { jsx } from "theme-ui"
//import { keyframes } from '@emotion/core'
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = props => {
  if (!props.node) {
    return null
  }
  let button = props.node
  return (
    <Link
      to={button.linkUrl}
      sx={{
        display: "inline-block",
        alignSelf: button.alignment,
        mt: [7, null, 9],
      }}
    >
      <button sx={props.style ? { variant: props.style } : buttonStyles}>
        {button.text}
      </button>
    </Link>
  )
}

const buttonStyles = {
  border: theme => `3px solid ${theme.colors.secondary}`,
  bg: "transparent",
  py: [4, 5],
  px: [6, 7],
  fontSize: 0,
  textDecoration: "none",
  color: "#bfca1d",
  variant: "textStyles.caps",
  position: "relative",
  cursor: "pointer",

  "::before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: -6,
    px: [0, 5],
    bg: "#bfca1d",
    height: 3,
    transition: "transform 0.25s 0.1s",
  },
  ":hover": {
    "::before": {
      transform: "translateY(-50%) translateX(20%)",
    },
  },
}

Button.propTypes = {
  linkUrl: PropTypes.string,
  text: PropTypes.string,
}

export default Button
