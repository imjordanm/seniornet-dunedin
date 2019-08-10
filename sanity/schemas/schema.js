// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

//components
import button from "./button"
import pageImage from "./pageImage"
import banner from "./banner"
import grid from "./grid"
import form from "./form"

// We import object and document schemas
import colours from "./colours"
import section from "./section"
import header from "./header"
import footer from "./footer"
import social from "./social"
import pages from "./pages"
import settings from "./settings"
import post from "./post"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    colours,
    button,
    pageImage,
    banner,
    grid,
    form,
    header,
    footer,
    social,
    settings,
    pages,
    post,
    section,
  ]),
})
