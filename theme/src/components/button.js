/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = props => {
  let button = props.node
  return (
    <button sx={buttonStyles}>
      <Link sx={linkStyles} to={button.linkUrl}>{button.text}</Link>
    </button>
  )
}

const buttonStyles = {
  border: "2px solid",
  borderColor: "secondary",
  bg: "transparent",
  textTransform: 'uppercase',
  letterSpacing: 'caps',
  padding: 3
}

const linkStyles = {
  textDecoration: "none",
  color: "secondary",
  fontWeight: "bold"
}

Button.propTypes = {
  linkUrl: PropTypes.string,
  text: PropTypes.string,
}

export default Button
