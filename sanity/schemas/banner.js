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
      validation: Rule => Rule.required(),
    },
    { type: "button", name: "button", description: "Optional" },
    { type: "pageImage", name: "pageImage", description: "Optional" },
  ],
}
