import { Styled } from "theme-ui"
import BlockRenderer from "./block-renderer"
//import Figure from "./figure"
import Button from "./button"

export default {
  marks: {
    code: Styled.code,
  },
  types: {
    // if you want to change headings, etc., you have to edit this component
    block: BlockRenderer,
    button: Button,
    //"page-image": Figure,
  },
  // For a full list of magic types that don’t go in the `types` object,
  // see: https://github.com/sanity-io/block-content-to-react#proptypes
  //list: Styled.ul,
  //listItem: Styled.li,
}
