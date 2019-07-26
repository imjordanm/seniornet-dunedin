export default {
  title: "Button",
  name: "button",
  type: "object",
  fields: [
    {
      type: "string",
      name: "text",
      title: "Button Text",
      description: "Text displayed on the button.",
    },
    {
      type: "url",
      name: "linkUrl",
      title: "Link Url",
      validation: Rule => Rule.uri({ allowRelative: "true" }),
      description: "Link to navigate to when button is clicked.",
    },
  ],
}
