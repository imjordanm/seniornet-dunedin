import { IoMdListBox as Posts } from "react-icons/io"

export default {
  title: "Posts",
  name: "newsPosts",
  type: "object",
  icon: Posts,
  fields: [
    {
      title: "Columns",
      name: "numColumns",
      type: "string",
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: "1", value: "one" },
          { title: "2", value: "two" },
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
