import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Main } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderWrapper as Header } from "../components/header"
import { FooterWrapper as Footer } from "../components/footer"

if (typeof window !== "undefined") {
  if ("fonts" in document) {
    // Optimization for Repeat Views
    if (sessionStorage.fontsLoadedCriticalFoftDataUri) {
      // only stage 2 needed here, the subset isn’t needed anymore
      document.documentElement.className += " fonts-loaded-2"
      // return;
    } else {
      document.fonts.load("800 1em GilroySubset").then(() => {
        document.documentElement.className += " fonts-loaded-1"
        Promise.all([
          document.fonts.load("400 1em Inter"),
          document.fonts.load("800 1em Gilroy"),
        ]).then(() => {
          document.documentElement.className += " fonts-loaded-2"
          // Optimization for Repeat Views
          sessionStorage.fontsLoadedCriticalFoftDataUri = true
        })
      })
    }
  }
}

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

    @font-face {
      font-family: "GilroySubset";
      font-display: auto;
      src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');
    font-weight: 800;
    font-style: normal;
  }

    @font-face {
      font-family: "Gilroy";
      font-display: auto;
      font-weight: 800;
      src: url("../../src/resources/fonts/Gilroy-ExtraBold.woff2")
          format("woff2"),
          url("../../src/resources/fonts/Gilroy-ExtraBold.woff") format("woff");
  }
  
  @font-face {
      font-family: "Inter";
      font-display: auto;
      font-weight: 400;
      src: url("../../src/resources/fonts/Inter-Regular.woff2")
          format("woff2"),
          url("../../src/resources/fonts/Inter-Regular.woff") format("woff");
  }
  
  .fonts-loaded-1 body {
      font-family: "GilroySubset;
  }
  
  .fonts-loaded-2 body {
      font-family: "Inter";
  }
}`

export default Layout
