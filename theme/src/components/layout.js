import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Main } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderWrapper as Header } from "../components/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      sanitySettings {
        title
        description
        headerPages {
          title
          slug {
            current
          }
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
      <Header pages={data.sanitySettings.headerPages} />
      <Main>{children}</Main>
    </StyledLayout>
  )
}

export default Layout
