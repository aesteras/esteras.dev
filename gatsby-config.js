const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `esteras.dev`,
    description: `Personal website of Andreu Esteras.`,
    author: `Andreu Esteras`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}