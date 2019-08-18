import Settings from "react-icons/lib/io/android-settings"

export default {
  name: "settings",
  type: "document",
  title: "Settings",
  icon: Settings,
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
    { type: "colours", name: "colours", title: "Colours" },
    { type: "header", name: "header" },
    { type: "footer", name: "footer" },
  ],
}
