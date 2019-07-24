import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import { Styled, Header } from "theme-ui"

//GraphQL Data
export const query = graphql`
  query MyQuery {
    file(name: { eq: "settings" }) {
      name
      childMarkdownRemark {
        frontmatter {
          header {
            logoImage
            logoTitle
            pages {
              title
              url
            }
          }
        }
      }
    }
  }
`

//Menu Component
export const HeaderWrapper = () => (
  <Header>
    <StaticQuery
      query={query}
      render={data => {
        const settings = data.file.childMarkdownRemark.frontmatter.header || []
        return (
          <React.Fragment>
            <div className="logo">
              <Link to="/" title="Home">
                <div>logo here</div>
              </Link>
            </div>
            <Styled.ul>
              {settings.pages.map(page => (
                <Styled.li>
                  <Link to={page.url} key={page.title}>
                    {page.title}
                  </Link>
                </Styled.li>
              ))}
            </Styled.ul>
          </React.Fragment>
        )
      }}
    />
  </Header>
)
