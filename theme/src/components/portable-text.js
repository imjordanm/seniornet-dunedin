/** @jsx jsx */
import { jsx } from "theme-ui"
import BasePortableText from "@sanity/block-content-to-react"
import { Link } from "gatsby"
import BlockRenderer from "./block-renderer"
import Button from "./button"
import Figure from "./figure"
import Grid from "./grid"

const PortableText = ({ blocks }) => {
  if (!blocks) {
    return null
  }

  return blocks.map(section => (
    <div sx={{ bg: section.background }}>
      <BasePortableText
        sx={contentStyles}
        blocks={section.content}
        serializers={serializers}
        projectId={process.env.SANITY_PROJECT_ID}
        dataset={process.env.SANITY_DATASET}
        key={section.sectionName}
        background={section.background}
      />
    </div>
  ))
}

const serializers = {
  marks: {
    Link: ({ mark, children }) => {
      const { blank, url } = mark
      return blank ? (
        <Link to={url} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      ) : (
        <Link to={url}>{children}</Link>
      )
    },
  },
  types: {
    block: BlockRenderer,
    button: Button,
    pageImage: Figure,
    grid: Grid,
  },
  // For a full list of magic types that don’t go in the `types` object,
  // see: https://github.com/sanity-io/block-content-to-react#proptypes
  //list: Styled.ul,
  //listItem: Styled.li,
}

const contentStyles = {
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  width: ["mobile", null, "desktop"],
  maxWidth: "content",
  py: [9, null, 12],
}

export default PortableText
