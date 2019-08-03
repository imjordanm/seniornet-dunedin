export default {
  title: "Banner",
  name: "banner",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
      description: "Heading to describe the page.",
    },
    { type: "button", name: "button" },
    { type: "pageImage", name: "pageImage" },
  ],
}
