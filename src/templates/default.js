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
      _rawSections
      slug {
        current
      }
    }
  }
`

const DefaultTemplate = ({ data }) => {
  let page = data.sanityPages

  return (
    <Layout>
      <SEO title={page.title} description={page.description} captcha={true} />
      <PortableText blocks={page._rawSections} />
    </Layout>
  )
}

export default DefaultTemplate
