import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Main, Container } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderWrapper as Header } from "../components/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledLayout>
  )
}

export default Layout
