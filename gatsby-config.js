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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
