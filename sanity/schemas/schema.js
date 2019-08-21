// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

//components
import button from "./button"
import pageImage from "./pageImage"
import banner from "./banner"
import gridItem from "./gridItem"
import grid from "./grid"
import formField from "./formField"
import form from "./form"
import newsPosts from "./newsPosts"

// We import object and document schemas
import colours from "./colours"
import section from "./section"
import header from "./header"
import footer from "./footer"
import social from "./social"
import pages from "./pages"
import settings from "./settings"
import posts from "./posts"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    colours,
    button,
    pageImage,
    banner,
    gridItem,
    grid,
    formField,
    newsPosts,
    form,
    header,
    footer,
    social,
    settings,
    pages,
    posts,
    section,
  ]),
})
