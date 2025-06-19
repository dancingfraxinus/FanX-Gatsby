/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const adapter = require("gatsby-adapter-netlify"); //Gatsby Adapter Netlify 

module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false //Gatsby Adapter Netlify 
  }),
   siteMetadata: { //FanX Template Site 
    title: `FanX Comic & Pop Culture Convention`,
    description: `FanX is a comic and pop culture convention that brings together fans, celebrities, and creators for an unforgettable experience.`,
    author: `@elizabethmoore`,
    siteUrl: `https://temp.fanx.com`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,

    /* Gatsby Source Filesystem */{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /* Gatsby Plugin Manifest */{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },   
    /* Gatsby Source Wordpress */{
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://temp.fanx.com/graphql`,
      },
    },


  ],
}
