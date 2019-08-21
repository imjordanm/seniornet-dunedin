import Image from "react-icons/lib/ti/image"

export default {
  title: "Image",
  name: "pageImage",
  type: "image",
  icon: Image,
  options: {
    hotspot: true,
  },
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
  ],

  preview: {
    select: {
      title: "pageImage",
      media: "pageImage",
    },
  },
}
