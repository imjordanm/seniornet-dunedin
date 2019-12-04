/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import PortableText from "../components/portable-text"
import PostOptions from "../components/postoptions"
import Button from "../components/button"

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

    allSanityPosts(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          title
          description
          category
          mainImage {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
          excerpt
          slug {
            current
          }
          publishedAt
          _rawSections
        }
      }
    }
  }
`

const NewsTemplate = props => {
  let page = props.data.sanityPages
  let items = props.data.allSanityPosts.edges
  let parent = props.data.sanityPages.slug.current
  let newsPages = props.pageContext

  for (var item in items) {
    if (items[item].node) {
      items[item] = {
        title: items[item].node.title,
        description: `${items[item].node.excerpt}..`,
        slug: { current: `${parent}/${items[item].node.slug.current}` },
        publishedAt: items[item].node.publishedAt,
        itemImage: { _type: "image" },
        category: items[item].node.category,
      }
      delete items[item].node
    }
  }

  items = { items, numColumns: "one" }
  //filter based on tag, sort based on tag, publisheddate, title - make a postsOptions component and call Grid with updated items

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
        <div sx={{ mt: [-6, -9, null, -10, -11] }}>
          <PostOptions posts={items} parent={parent} />
        </div>
      </div>
    </Layout>
  )
}

export default NewsTemplate
