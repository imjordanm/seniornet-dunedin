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
        mt: [6, 7, 9],
      }}
    >
      <button
        sx={
          props.style
            ? { variant: props.style }
            : { variant: "buttons.secondary" }
        }
      >
        {button.text}
      </button>
    </Link>
  )
}

Button.propTypes = {
  linkUrl: PropTypes.string,
  text: PropTypes.string,
}

export default Button
