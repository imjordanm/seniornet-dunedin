/** @jsx jsx */
import { jsx } from "theme-ui"
import BasePortableText from "@sanity/block-content-to-react"
import { Link } from "gatsby"
import BlockRenderer from "./block-renderer"
import ListRenderer from "./list-renderer"
import Button from "./button"
import Figure from "./figure"
import Grid from "./grid"
import Form from "./form"

const PortableText = ({ blocks }) => {
  if (!blocks) {
    return null
  }

  return blocks.map((section, index, sections) => (
    <div sx={{ bg: section.background }} className={section.background}>
      <BasePortableText
        sx={
          index > 0 &&
          sections[index].background == sections[index - 1].background
            ? {
                variant: "sections.base",
                pt: "0 !important",
              }
            : { variant: "sections.base" }
        }
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
    form: Form,
  },
  // For a full list of magic types that don’t go in the `types` object,
  // see: https://github.com/sanity-io/block-content-to-react#proptypes
  list: ListRenderer,
  //listItem: ListRenderer,
}

export default PortableText
