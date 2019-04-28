module.exports = {
  siteMetadata: {
    title: `LondonNectar.com`,
    description: `Raw, Pure and Local Honey`,
    author: `@AlfFiccadenti`,
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
        name:'contact',
        link:'/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/honey.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/honey.png",
      },
    }  
  ],
}
