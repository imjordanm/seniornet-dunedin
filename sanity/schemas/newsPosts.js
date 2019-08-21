import Grid from "react-icons/lib/ti/th-large"

export default {
  title: "Posts",
  name: "newsPosts",
  type: "object",
  icon: Grid,
  fields: [
    {
      title: "No. of Posts",
      name: "numPosts",
      type: "number",
      description:
        "The number of news posts to show by default (1-6 for each page).",
    },
  ],

  preview: {
    select: {
      title: "newsPosts",
    },
  },
}
