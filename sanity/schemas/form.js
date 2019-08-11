export default {
  title: "Form",
  name: "form",
  type: "object",
  fields: [
    {
      title: "Fields",
      name: "formFields",
      type: "array",
      of: [{ type: "formField" }],
    },
  ],

  preview: {
    select: {
      title: "Contact Form",
    },
  },
}
