/** @jsx jsx */
import { jsx } from "theme-ui"
import { navigate } from "gatsby"

const Button = props => {
  return (
    <button
      as="button"
      onClick={() => {
        if (props.node.linkUrl) {
          navigate(props.node.linkUrl)
        }
      }}
      sx={{
        variant: "buttons.primary",
      }}
    >
      {props.node.text}
    </button>
  )
}

export default Button
