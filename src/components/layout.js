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
        colours {
          colourBG {
            hex
          }
          colourPrimary {
            hex
          }
          colourSecondary {
            hex
          }
          colourText {
            hex
          }
        }
        header {
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
                fluid(maxWidth: 50) {
                  ...GatsbySanityImageFluid
                }
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
          ${globalStyles}
        `}
      />
      <Header
        pages={data.sanitySettings.header.headerPages}
        logo={data.sanitySettings.header.logo.asset.url}
      />
      <Main>{children}</Main>
      <Footer footer={data.sanitySettings.footer} />
    </StyledLayout>
  )
}

const globalStyles = `
  body, div, ul, ol, li, h1, h2, h3, p, form, figure, fieldset, button, input, textarea { 
    margin: 0; padding: 0; font: inherit; 
  } 
  button { 
    font: initial; 
  } 
  .primary {
    h3 {
      color: #fff;
    }
    p {
      color: rgba(255, 255, 255, 0.9);
    }
}`

export default Layout
