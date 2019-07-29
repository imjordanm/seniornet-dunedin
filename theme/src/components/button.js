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
  pt: 3,
  pr: 4,
  pb: 3,
  pl: 4,
  textDecoration: "none",
  color: "secondary",
  variant: "textStyles.caps",
  fontSize: [0, 0, 0],
  cursor: "pointer",
}

Button.propTypes = {
  linkUrl: PropTypes.string,
  text: PropTypes.string,
}

export default Button
