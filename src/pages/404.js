/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import { Styled } from "theme-ui"
import Banner from "../components/banner"

let banner = { button: null, heading: "Page Not Found", pageImage: null }

const NotFoundTemplate = () => (
  <Layout>
    <Banner banner={banner} />
    <div sx={{ variant: "sections.base" }}>
      <Styled.h2>Get Back On Track</Styled.h2>
      <Styled.p>
        You have stumbled on a page that does not exist. Please try looking at
        the pages at the bottom of the page to get back on track.
      </Styled.p>
    </div>
  </Layout>
)

export default NotFoundTemplate
