/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import PortableText from "../components/portable-text"

// Declaring query here allows us to shadow components
export const query = graphql`
  query($slug: String!) {
    sanityPages(slug: { current: { eq: $slug } }) {
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
            fluid(maxWidth: 1000) {
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

const NewsTemplate = ({ data }) => {
  let page = data.sanityPages

  return (
    <Layout>
      <SEO title={page.title} description={page.description} />
      <Banner banner={page.banner} />
      <PortableText blocks={page._rawSections} />
    </Layout>
  )
}

export default NewsTemplate
