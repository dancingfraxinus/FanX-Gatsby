/**
 * @type {import('gatsby').GatsbyConfig}
 */

const { use } = require('react');

module.exports = {
  siteMetadata: {
    title: `Template Comic & Pop Culture Convention `,
    siteUrl: `https://template.fanx.com`
  }, //END siteMetadata

  /** Plug-Ins ----------- **/
  plugins: [
  /* Gatsby Source Wordpress*/ {
    resolve: 'gatsby-source-wordpress',
    options: {
      url: process.env.WPGRAPHQL_URL || 
      'https://temp.fanx.com/graphql',
      verbose: false, 
      debug: {
        preview: false, 
        graphql: {
          showQueryVarsOnError: false,
        }, //END GraphQL 
      }, //End Debug
    }, //End Options  
      production: {
        allow404Images: true,
        allow401Images: true,
        }, //END Production 
      develop: {
        //ACF
        useACF: true,
        useACFfields: true,
        useACFPostTypes: true,
        useACFOptions: true,
        useACFBlocks: true,
      }, //END Develop
      html: {
        createStaticFiles: true,
        generateWebpImages: true,
        imageMaxWidth: 900,
        imageQuality: 90,   
      }, //END HTML  
  }, // END Gatsby Source Wordpress <----

    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-sitemap", 
  
  /** Google Analytics  
   * Activate when sites are ready to go live*
    
  resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
  END Google Analytics ----------- **/


  /* Gatsby Plugin Manifest */{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tamplete Comic & Pop Culture Convention`,
        short_name: `#TCC`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    }, //END Gatsby Plugin Manifest

  ] /** END Plugins -------- **/
}; /** END Module Exports  */
