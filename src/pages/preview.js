import React from "react"
import Helmet from "react-helmet"
import PagePreview from "../components/page-preview"

const PreviewTemplate = props => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <PagePreview location={props.location} />
    </>
  )
}

export default PreviewTemplate
