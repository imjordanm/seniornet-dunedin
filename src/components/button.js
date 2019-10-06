/** @jsx jsx */
import { jsx } from "theme-ui"
//import { keyframes } from '@emotion/core'
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = props => {
  if (!props.node) {
    return null
  }
  console.log(props)
  let button = props.node
  return (
    <Link
      to={button.linkUrl}
      title={button.text}
      sx={
        props.image
          ? {
              display: "inline-block",
              width: ["100%", "initial"],
              alignSelf: button.alignment,
              flex: [null, null, null, "4 1"],
              textAlign: "right",
            }
          : {
              display: "inline-block",
              width: ["100%", "initial"],
              alignSelf: button.alignment,
              ...props.gridButton,
            }
      }
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
