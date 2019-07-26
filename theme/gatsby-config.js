module.exports = {
  siteMetadata: {
    title: `SeniorNet Dunedin`,
    description: `SeniorNet Dunedin Description to change`,
    siteUrl: `https://seniornetdunedin.co.nz`,
    author: `imjordanm@gmail.com`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "7rdxbykg",
        dataset: "production",
        overlayDrafts: true,
        watchMode: true,
      },
    },
  ],
}
