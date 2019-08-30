import React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import PortableText from "../components/portable-text"

// Declaring query here allows us to shadow components
export const query = graphql`
  query($slug: String!) {
    sanityPosts(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      banner {
        heading
        button {
          text
          linkUrl
        }
        pageImage {
          alt
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
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
      <Banner banner={post.banner} />
      <PortableText blocks={post._rawSections} />
    </Layout>
  )
}

export default NewsTemplate
