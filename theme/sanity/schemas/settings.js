export default {
  name: "settings",
  type: "document",
  title: "Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your blog for search engines and social media.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your blog.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      title: "Header Pages",
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
