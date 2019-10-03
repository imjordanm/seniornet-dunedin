/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import PortableText from "../components/portable-text"
import Grid from "../components/grid"
import Button from "../components/button"

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
      }
      delete items[item].node
    }
  }

  items = { items, numColumns: "one" }

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
        <div sx={{ mt: [-7, -9, null, -10] }}>
          <Grid node={items} parent={parent} />
          <div sx={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ textAlign: "center" }}>
              {newsPages.currentPage === 2 && (
                <Button
                  node={{
                    text: "Prev",
                    linkUrl: `${parent}#newsList`,
                    alignment: "center",
                  }}
                />
              )}
              {newsPages.currentPage > 2 && (
                <Button
                  node={{
                    text: "Prev",
                    linkUrl: `${parent}/${newsPages.currentPage - 1}#newsList`,
                    alignment: "center",
                  }}
                />
              )}
              {newsPages.currentPage < newsPages.numPages && (
                <Button
                  node={{
                    text: "Next",
                    linkUrl: `${parent}/${newsPages.currentPage + 1}#newsList`,
                    alignment: "center",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NewsTemplate
