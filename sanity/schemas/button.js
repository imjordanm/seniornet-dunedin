import { IoIosShare as Button } from "react-icons/io"

export default {
  title: "Button",
  name: "button",
  type: "object",
  icon: Button,
  fields: [
    {
      type: "string",
      name: "text",
      title: "Button Text",
      description: "Text displayed on the button.",
      validation: Rule => Rule.required(),
    },
    {
      type: "url",
      name: "linkUrl",
      title: "Link Url",
      description: "Link to navigate to when button is clicked.",
      validation: Rule => Rule.required().uri({ allowRelative: "true" }),
    },
    {
      title: "Alignment",
      name: "alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "flex-start" },
          { title: "Center", value: "center" },
          { title: "Right", value: "flex-end" },
        ],
      },
    },
  ],

  preview: {
    select: {
      title: "text",
      subtitle: "linkUrl",
    },
  },
}
