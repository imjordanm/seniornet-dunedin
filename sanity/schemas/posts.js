import Posts from "react-icons/lib/io/android-list"

export default {
  name: "posts",
  title: "Posts",
  type: "document",
  icon: Posts,
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
      title: "Excerpt",
      name: "excerpt",
      type: "text",
      description:
        "This is the short description of the post that shows up on previews of the post (max 150 characters).",
      validation: Rule => Rule.required().max(150),
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
