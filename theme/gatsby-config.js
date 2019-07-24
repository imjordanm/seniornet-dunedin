module.exports = options => ({
  siteMetadata: {
    title: `SeniorNet Dunedin`,
    description: `SeniorNet Dunedin Description to change`,
    siteUrl: `https://seniornetdunedin.co.nz`,
    author: `imjordanm@gmail.com`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.contentPath || "content/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.contentPath || "config/",
      },
    },
  ],
})
