export default {
  name: "posts",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
    },
    { type: "banner", name: "banner", title: "Banner" },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
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
      media: "mainImage",
    },
  },
}
