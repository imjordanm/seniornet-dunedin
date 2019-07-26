require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const isProduction = process.env.NODE_ENV === "production"

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
    "gatsby-transformer-remark",
    /*{{
      
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
    },*/
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "7rdxbykg",
        dataset: "production",
        overlayDrafts: !isProduction,
        watchMode: !isProduction,
      },
    },
  ],
}
