export default {
  title: "Footer",
  name: "footer",
  type: "object",
  fieldsets: [{ name: "social", title: "Social Details" }],
  fields: [
    {
      title: "Left Heading",
      name: "leftHeading",
      type: "string",
    },
    {
      title: "Pages",
      name: "footerPages",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "pages" }],
        },
      ],
    },
    {
      title: "Right Heading",
      name: "rightHeading",
      type: "string",
    },
    {
      title: "Mailing List",
      name: "mailingList",
      type: "string",
    },
    {
      title: "Social Link",
      name: "socialLinks",
      type: "array",
      fieldset: "social",
      of: [{ type: "social", name: "social" }],
    },
  ],
}
