import { IoIosAddCircle as Link } from "react-icons/io"

export default {
  title: "Section",
  name: "section",
  type: "object",
  fieldsets: [{ name: "background", title: "Background" }],
  fields: [
    {
      title: "Section Name",
      name: "sectionName",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Background",
      name: "background",
      type: "string",
      fieldset: "background",
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: "Background", value: "background" },
          { title: "Muted Background", value: "muted" },
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
        ],
      },
    },
    {
      title: "Waves?",
      name: "waves",
      type: "boolean",
      fieldset: "background",
    },
    {
      title: "Wave Direction",
      name: "waveDirection",
      type: "boolean",
      fieldset: "background",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h2" },
            { title: "Subheading", value: "h3" },
            { title: "Quote", value: "quote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "u" },
              { title: "Strikethrough", value: "s" },
            ],
            annotations: [
              {
                title: "Link",
                name: "Link",
                type: "object",
                blockEditor: {
                  icon: Link,
                },
                fields: [
                  {
                    title: "URL",
                    name: "url",
                    type: "url",
                    validation: Rule =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ["https", "http", "mailto", "tel"],
                      }),
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
        { type: "pageImage" },
        { type: "button" },
        { type: "grid" },
        { type: "form" },
        { type: "newsPosts" },
      ],
    },
  ],

  preview: {
    select: {
      title: "sectionName",
    },
  },
}
