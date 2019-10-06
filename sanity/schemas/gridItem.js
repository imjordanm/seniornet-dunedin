export default {
  title: "Item",
  name: "gridItem",
  type: "object",
  fields: [
    { title: "Item Image", name: "itemImage", type: "image" },
    {
      type: "string",
      name: "title",
      title: "Title",
      description: "Text displayed on the button.",
    },
    {
      type: "text",
      name: "description",
      title: "Description",
    },

    {
      title: "Item Button",
      name: "itemButton",
      validation: Rule => Rule.max(1),
      type: "array",
      of: [
        {
          type: "button",
          name: "button",
          options: { collapsible: true, collapsed: true },
        },
      ],
    },
  ],
}
