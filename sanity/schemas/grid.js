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
      of: [{ type: "gridItem" }],
    },
  ],

  preview: {
    select: {
      title: "Grid Items",
    },
  },
}
