import React from "react"
import { Styled } from "theme-ui"

const ListRenderer = ({ children }) => (
  <Styled.ul>
    {children.map(item => (
      <Styled.li key={item.props.children}>{item.props.children}</Styled.li>
    ))}
  </Styled.ul>
)

export default ListRenderer
