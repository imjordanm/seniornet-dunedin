import Link from "react-icons/lib/go/link"

export default {
  title: "Button",
  name: "button",
  type: "object",
  icon: Link,
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
    {
      title: "Alignment",
      name: "alignment",
      type: "string",
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
    },
  ],
}
