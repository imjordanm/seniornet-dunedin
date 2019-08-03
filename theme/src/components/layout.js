import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Main } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderWrapper as Header } from "../components/header"
import { FooterWrapper as Footer } from "../components/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      sanitySettings {
        title
        description
        logo {
          asset {
            url
          }
        }
        headerPages {
          title
          slug {
            current
          }
        }
        footer {
          leftHeading
          rightHeading
          mailingList
          footerPages {
            title
            slug {
              current
            }
          }
          socialLinks {
            icon {
              asset {
                url
              }
            }
            label
            url
          }
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Global
        styles={css`
          body,
          div,
          ul,
          ol,
          li,
          h1,
          h2,
          h3,
          p,
          form,
          figure,
          fieldset,
          button {
            margin: 0;
            padding: 0;
            font: inherit;
          }
        `}
      />
      <Header
        pages={data.sanitySettings.headerPages}
        logo={data.sanitySettings.logo.asset.url}
      />
      <Main>{children}</Main>
      <Footer footer={data.sanitySettings.footer} />
    </StyledLayout>
  )
}

export default Layout
