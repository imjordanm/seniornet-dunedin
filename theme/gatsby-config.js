module.exports = options => ({
  siteMetadata: {
    title: "SeniorNet Dunedin Theme",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.contentPath || "content/",
      },
    },
  ],
})
