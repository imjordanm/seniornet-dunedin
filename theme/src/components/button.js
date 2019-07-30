/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = props => {
  let button = props.node
  return (
    <Link to={button.linkUrl}>
      <button sx={buttonStyles}>{button.text}</button>
    </Link>
  )
}

const buttonStyles = {
  border: "3px solid",
  borderColor: "secondary",
  bg: "transparent",
  pt: [4, 4, 5],
  pr: [6, 6, 7],
  pb: [4, 4, 5],
  pl: [6, 6, 7],
  textDecoration: "none",
  color: "secondary",
  variant: "textStyles.caps",
  cursor: "pointer",
}

Button.propTypes = {
  linkUrl: PropTypes.string,
  text: PropTypes.string,
}

export default Button
