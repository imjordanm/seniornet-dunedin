import React from "react"
import { Styled } from "theme-ui"

const BlockRenderer = ({ node, children }) => {
  const style = node.style || "normal"

  switch (style) {
    case "h1":
      return <Styled.h1>{children}</Styled.h1>

    case "h2":
      return <Styled.h2>{children}</Styled.h2>

    case "h3":
      return <Styled.h3>{children}</Styled.h3>

    default:
      return <Styled.p>{children}</Styled.p>
  }
}

export default BlockRenderer
