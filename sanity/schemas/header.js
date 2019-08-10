export default {
  title: "Header",
  name: "header",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      title: "Logo",
      name: "logo",
      type: "image",
    },
    {
      title: "Header",
      name: "headerPages",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "pages" }],
        },
      ],
    },
  ],
}
