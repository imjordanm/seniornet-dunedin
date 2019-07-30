import Link from "react-icons/lib/go/link"

export default {
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "The name of the page that will be displayed for search engines.",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description:
        "Describe what the page is about for search engines and social media.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description:
        "The path of the page that you enter in the address bar to find it (use generate button).",
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
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
