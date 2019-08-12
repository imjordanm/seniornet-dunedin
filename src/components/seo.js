import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

{
  /*Add this to <Helmet>?:
<link href="https://cdn.sanity.io/" rel="preconnect" crossorigin /> */
}

export function SEO({ description, lang, meta, keywords, title, captcha }) {
  return (
    <StaticQuery
      query={seoQuery}
      render={data => {
        const metaDescription = description || data.sanitySettings.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.sanitySettings.title}`}
            script={
              captcha
                ? [
                    {
                      src: "https://www.google.com/recaptcha/api.js",
                      async: true,
                      defer: true,
                    },
                  ]
                : null
            }
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                /*{
                name: `twitter:creator`,
                content: data.sanitySettings.author,
              }*/
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

const seoQuery = graphql`
  query seo {
    sanitySettings {
      title
      description
    }
  }
`
