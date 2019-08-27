import React from "react"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import PortableText from "../components/portable-text"

const PreviewTemplate = ({ data }) => {
  let page = data
  let captcha = false
  if (page.templateKey === "contact") {
    captcha = true
  }

  return (
    <Layout>
      <SEO
        title={page.title}
        description={page.description}
        captcha={captcha}
      />
      <Banner banner={page.banner} templateKey={page.templateKey} />
      <PortableText blocks={page.sections} />
    </Layout>
  )
}

export default PreviewTemplate
