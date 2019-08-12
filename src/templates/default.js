import React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import PortableText from "../components/portable-text"

// Declaring query here allows us to shadow components
export const query = graphql`
  query($slug: String!) {
    sanityPages(slug: { current: { eq: $slug } }) {
      templateKey
      title
      description
      banner {
        heading
        button {
          text
          linkUrl
        }
        pageImage {
          alt
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      _rawSections
      slug {
        current
      }
    }
  }
`

const DefaultTemplate = ({ data }) => {
  let page = data.sanityPages
  let captcha = false
  if (page.templateKey === "contact") {
    captcha = true
  }

  return (
    <Layout>
      <SEO
        title={page.title}
        description={page.description}
        captcha={captcha}
      />
      <Banner banner={page.banner} />
      <PortableText blocks={page._rawSections} />
    </Layout>
  )
}

export default DefaultTemplate
