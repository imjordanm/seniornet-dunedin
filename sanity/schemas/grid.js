import Grid from "react-icons/lib/ti/th-large"

export default {
  title: "Grid",
  name: "grid",
  type: "object",
  icon: Grid,
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
