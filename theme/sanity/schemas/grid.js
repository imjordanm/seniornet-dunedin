import Link from "react-icons/lib/go/link"

export default {
  title: "Grid",
  name: "grid",
  type: "object",
  icon: Link,
  fields: [
    {
      title: "Items",
      name: "items",
      type: "array",
      of: [
        {
          title: "Item",
          name: "item",
          type: "object",
          fields: [
            { title: "Item Image", name: "itemImage", type: "image" },
            {
              type: "string",
              name: "heading",
              title: "Heading",
              description: "Text displayed on the button.",
            },
            {
              type: "text",
              name: "text",
              title: "Text",
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "Grid Items",
    },
  },
}
