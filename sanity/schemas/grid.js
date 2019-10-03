import Grid from "react-icons/lib/ti/th-large"

export default {
  title: "Grid",
  name: "grid",
  type: "object",
  icon: Grid,
  fields: [
    {
      title: "Columns",
      name: "numColumns",
      type: "string",
      validation: Rule => Rule.required(),
      options: {
        list: [{ title: "1", value: "one" }, { title: "2", value: "two" }],
      },
    },
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
