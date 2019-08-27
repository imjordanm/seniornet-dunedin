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
import Posts from "./posts"

const PortableText = ({ blocks }) => {
  if (!blocks) {
    return null
  }

  return blocks.map((section, index, sections) => (
    <div
      sx={
        index > 0 && section.waves
          ? {
              bg: section.background,
              "::before": {
                display: "block",
                height: "5vw",
                mt: "-2vw",
                transform: `scaleX(${
                  section.waveDirection ? 1 : -1
                }) scaleY(-1.02)`,
                content: '""',
                mask: `url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22654%20312.5%201920%2083.5%22%3E%0D%0A%20%20%3Cpath%20d%3D%22M654%20737.5h1920V387.3s-304.7%206.5-676.9-32-906.6-42.8-906.6-42.8H654v425z%22%2F%3E%0D%0A%3C%2Fsvg%3E) no-repeat 100%`,
                maskSize: "cover",
                bg: sections[index - 1].background,
              },
            }
          : { bg: section.background }
      }
      className={section.background}
    >
      <BasePortableText
        sx={
          index > 0 &&
          sections[index].background === sections[index - 1].background
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
    newsPosts: Posts,
  },
  // For a full list of magic types that don’t go in the `types` object,
  // see: https://github.com/sanity-io/block-content-to-react#proptypes
  list: ListRenderer,
  //listItem: ListRenderer,
}

export default PortableText
