import React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import PortableText from "../components/portable-text"

// Declaring query here allows us to shadow components
export const query = graphql`
  query($slug: String!) {
    sanityPages(slug: { current: { eq: $slug } }) {
      title
      description
      _rawBody(resolveReferences: { maxDepth: 10 })
      slug {
        current
      }
    }
  }
`

const HomePageTemplate = ({ data, title }) => {
  let page = data.sanityPages
  return (
    <Layout>
      <SEO title={page.title} description={page.description} />
      <PortableText blocks={page._rawBody} />
    </Layout>
  )
}

export default HomePageTemplate
