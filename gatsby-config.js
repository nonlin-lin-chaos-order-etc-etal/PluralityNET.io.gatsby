const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PluralityNET',
        short_name: 'PluralityNET',
        start_url: '/',
        icon: 'src/images/logo/vector/isolated-layout.svg',
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-remote-images`,
      options: {
        filter: node => node.internal.type === `UnsplashImagesYaml`,
      },
    },
  ],
};
