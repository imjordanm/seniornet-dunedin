import { IoIosList as Form } from "react-icons/io"

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
