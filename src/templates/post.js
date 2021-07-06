import React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import PortableText from "../components/portable-text"

// Declaring query here allows us to shadow components
export const query = graphql`
  query($slug: String!) {
    sanityPosts(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      publishedAt(formatString: "DD.MM.YYYY")
      _rawSections
    }
  }
`

const NewsTemplate = ({ data }) => {
  let post = data.sanityPosts
  return (
    <Layout>
      <SEO title={post.title} description={post.description} />
      <PortableText blocks={post._rawSections} />
    </Layout>
  )
}

export default NewsTemplate
