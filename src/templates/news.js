/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import PortableText from "../components/portable-text"
import List from "../components/list"

// Declaring query here allows us to shadow components
export const query = graphql`
  query($slug: String!, $skip: Int!, $limit: Int!) {
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

    allSanityPosts(
      limit: $limit
      skip: $skip
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          title
          description
          excerpt
          slug {
            current
          }
          publishedAt(formatString: "MMMM DD, YYYY")
          _rawSections
        }
      }
    }
  }
`

const NewsTemplate = props => {
  let page = props.data.sanityPages
  let posts = props.data.allSanityPosts.edges
  let parent = props.data.sanityPages.slug.current
  let newsPages = props.pageContext

  return (
    <Layout>
      <SEO title={page.title} description={page.description} />
      <Banner banner={page.banner} />
      <PortableText blocks={page._rawSections} />
      <div
        sx={{
          variant: "sections.base",
          pt: "0 !important",
        }}
      >
        <List
          posts={posts}
          parent={parent}
          currentPage={newsPages.currentPage}
          numPages={newsPages.numPages}
        />
      </div>
    </Layout>
  )
}

export default NewsTemplate
