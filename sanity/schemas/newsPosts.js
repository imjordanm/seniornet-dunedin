import Posts from "react-icons/lib/io/android-list"

export default {
  title: "Posts",
  name: "newsPosts",
  type: "object",
  icon: Posts,
  fields: [
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
