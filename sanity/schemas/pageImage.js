import { IoIosCamera as Image } from "react-icons/io"

export default {
  title: "Image",
  name: "pageImage",
  type: "image",
  icon: Image,
  fieldsets: [{ name: "button", title: "Button" }],
  fields: [
    {
      type: "string",
      name: "alt",
      title: "Alt text",
      description:
        "Add a description of the image content for the visually impaired.",
      options: {
        isHighlighted: true,
      },
    },
    {
      title: "Overhang",
      name: "overhang",
      type: "boolean",
      description:
        "This will hang part of the image below the section background if it's at the bottom.",
    },
    {
      type: "string",
      name: "text",
      title: "Button Text",
      fieldset: "button",
      description: "Text displayed on the button.",
    },
    {
      type: "url",
      name: "linkUrl",
      title: "Link Url",
      fieldset: "button",
      validation: Rule => Rule.uri({ allowRelative: "true" }),
      description: "Link to navigate to when button is clicked.",
    },
  ],

  preview: {
    select: {
      title: "pageImage",
      media: "pageImage",
    },
  },
}
