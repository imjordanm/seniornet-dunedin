import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Main } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderWrapper as Header } from "../components/header"
import { FooterWrapper as Footer } from "../components/footer"
import Helmet from "react-helmet"

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
      <Helmet>
        <link
          rel="preload"
          href="/static/gilroy-extrabold-e30bf7c3b3a5e81c36ad69840c17ff5e.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        ></link>
        <link
          rel="preload"
          href="/static/inter-regular-0b0b3f3c5998ada1b7cb56f675598fc2.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        ></link>
      </Helmet>
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
