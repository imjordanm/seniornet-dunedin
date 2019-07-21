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

const DefaultTemplate = ({ pageContext, data }) => (
  console.log(data),
  (
    <Layout>
      <Styled.h1>data.markdownRemark.frontmatter.title</Styled.h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.frontmatter.description,
        }}
      />
    </Layout>
  )
)

export default DefaultTemplate
