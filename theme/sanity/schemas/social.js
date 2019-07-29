export default {
  title: "Social",
  name: "social",
  type: "object",
  fields: [
    { title: "Social Icon", name: "icon", type: "image" },
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    },
  ],
}
