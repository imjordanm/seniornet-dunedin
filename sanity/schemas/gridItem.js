export default {
  title: "Item",
  name: "gridItem",
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
    { type: "button", name: "Button" },
  ],
}
