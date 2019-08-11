export default {
  title: "Field",
  name: "formField",
  type: "object",
  fields: [
    { title: "Label", name: "label", type: "string" },
    {
      type: "string",
      name: "input",
      title: "Input Field",
      options: {
        list: [
          { title: "Short Text", value: "text" },
          { title: "Long Message", value: "message" },
          { title: "Email", value: "email" },
          { title: "Number", value: "number" },
        ],
      },
    },
    {
      title: "Required?",
      name: "required",
      type: "boolean",
      description: "Select if this field must be entered.",
    },
  ],
}
