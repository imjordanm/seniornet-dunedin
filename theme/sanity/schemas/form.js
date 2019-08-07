export default {
  title: "Form",
  name: "form",
  type: "object",
  fields: [
    {
      title: "Fields",
      name: "fields",
      type: "array",
      of: [
        {
          title: "Field",
          name: "field",
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
            { title: "Required?", name: "required", type: "boolean" },
          ],
        },
      ],
    },
    {
      title: "Email to Receive",
      name: "receivingEmail",
      type: "string",
      description: "The email address that will receive these emails.",
    },
  ],

  preview: {
    select: {
      title: "Contact Form",
    },
  },
}
