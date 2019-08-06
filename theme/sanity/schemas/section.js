import Link from "react-icons/lib/go/link"

export default {
  title: "Section",
  name: "section",
  type: "object",
  fields: [
    { title: "Section Name", name: "sectionName", type: "string" },
    {
      title: "Background",
      name: "background",
      type: "string",
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
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
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
      ],
    },
  ],

  preview: {
    select: {
      title: "sectionName",
    },
  },
}
