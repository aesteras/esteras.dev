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
  ],
}