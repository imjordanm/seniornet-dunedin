import Posts from "react-icons/lib/io/android-list"

export default {
  title: "Posts",
  name: "newsPosts",
  type: "object",
  icon: Posts,
  fields: [
    {
      title: "No. of Posts",
      name: "numPosts",
      type: "number",
      description:
        "The number of news posts to show by default (1-6 for each page).",
    },
    {
      title: "Format Type",
      name: "formatType",
      type: "string",
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: "Grid", value: "grid" },
          { title: "List", value: "list" },
        ],
      },
    },
  ],

  preview: {
    select: {
      title: "newsPosts",
    },
  },
}
