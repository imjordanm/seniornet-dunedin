let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
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
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProduction,
        watchMode: !isProduction,
      },
    },
  ],
}
