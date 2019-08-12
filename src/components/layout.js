import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Main } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderWrapper as Header } from "../components/header"
import { FooterWrapper as Footer } from "../components/footer"
import Helmet from "react-helmet"

import Gilroy from "../fonts/Gilroy-ExtraBold.woff2"
import Inter from "../fonts/Inter-Regular.woff2"

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
          as="font"
          href={Gilroy}
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href={Inter}
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style type="text/css" href="../fonts/fonts.css" />
        <script type="text/javascript">{`(function() {
  if ("fonts" in document) {
    // Optimization for Repeat Views
    if (sessionStorage.fontsLoadedCriticalFoftPreload) {
      document.documentElement.className += " fonts-loaded-2"
    } else {
    document.fonts.load("800 1em Gilroy").then(function() {
      document.documentElement.className += " fonts-loaded-1"
      Promise.all([document.fonts.load("400 1em Inter")]).then(function() {
        document.documentElement.className += " fonts-loaded-2"
        // Optimization for Repeat Views
        sessionStorage.fontsLoadedCriticalFoftPreload = true
      })
    })
    }
  }
})()`}</script>
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
