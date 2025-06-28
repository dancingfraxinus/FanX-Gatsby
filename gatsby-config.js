/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  pathPrefix: "/gatsby",
  siteMetadata: {
    title: `Template Comic & Pop Culture Convention `,
    siteUrl: `https://temp.fanx.com`
  },
  /** Plug-Ins ----------- **/
  plugins: [
    /* Gatsby Source Wordpress*/ {
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://temp.fanx.com/graphql",
      production: {
      allow404Images: true
      },
    }}, 
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
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
      } 
  }] /** END Plugins -------- **/
}; /** END Module Exports  */
