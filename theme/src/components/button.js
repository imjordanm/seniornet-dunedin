/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = props => {
  let button = props.node
  return (
    <button
      sx={{
        variant: "button",
      }}
    >
      <Link to={button.linkUrl}>{button.text}</Link>
    </button>
  )
}

Button.propTypes = {
  linkUrl: PropTypes.string,
  text: PropTypes.string,
}

export default Button
