import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
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

const HomePageTemplate = ({ pageContext, data }) => (
  <Layout>
    <Styled.h1>{data.markdownRemark.frontmatter.title}</Styled.h1>
    <p>{data.markdownRemark.frontmatter.description}</p>
  </Layout>
)

export default HomePageTemplate
