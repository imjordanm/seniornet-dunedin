/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Grid from "../components/grid"
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

    allSanityPosts(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          title
          description
          slug {
            current
          }
          publishedAt(formatString: "DD.MM.YYYY")
          _rawSections
        }
      }
    }
  }
`

const NewsTemplate = ({ data }) => {
  let posts = data.allSanityPosts.edges
  let page = data.sanityPages

  return (
    <Layout>
      <SEO title={page.title} description={page.description} />
      <Banner banner={page.banner} />
      <div>
        <div sx={{ variant: "sections.base" }}>
          <Styled.h2>{page.title}</Styled.h2>
          <Grid posts={posts} />
        </div>
      </div>
    </Layout>
  )
}

export default NewsTemplate
