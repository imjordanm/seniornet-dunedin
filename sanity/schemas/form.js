import Form from "react-icons/lib/ti/th-list"

export default {
  title: "Form",
  name: "form",
  type: "object",
  icon: Form,
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
