import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { SEO } from "../components/seo"
import Layout from "../components/layout"

// Declaring query here allows us to shadow components
export const query = graphql`
  query($slug: String!) {
    sanityPage(slug: { current: { eq: $slug } }) {
      title
      description
      slug {
        current
      }
    }
  }
`

const DefaultTemplate = ({ data, props }) => {
  let page = data.sanityPage
  console.log(props)
  return (
    <Layout>
      <SEO title={page.title} description={page.description} />
      <Styled.h1>{page.title}</Styled.h1>
      <p>{page.description}</p>
    </Layout>
  )
}

export default DefaultTemplate
