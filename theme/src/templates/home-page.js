import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { SEO } from "../components/seo"
import Layout from "../components/layout"

// Declaring query here allows us to shadow components
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
    }
  }
`

const HomePageTemplate = ({ data }) => {
  let page = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={page.title} />
      <Styled.h1>{page.title}</Styled.h1>
      <p>{page.description}</p>
    </Layout>
  )
}

export default HomePageTemplate
