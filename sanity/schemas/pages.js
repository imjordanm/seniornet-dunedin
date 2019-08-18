import Pages from "react-icons/lib/io/android-document"

export default {
  name: "pages",
  title: "Pages",
  type: "document",
  icon: Pages,
  fields: [
    {
      name: "templateKey",
      title: "Template Key",
      type: "string",
      hidden: true,
      readOnly: true,
    },
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
    { type: "banner", name: "banner", title: "Banner" },
    {
      title: "Sections",
      name: "sections",
      type: "array",
      of: [{ type: "section" }],
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
