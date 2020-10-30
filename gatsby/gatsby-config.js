/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [ 
   {
      resolve: 'gatsby-source-drupal-multilanguage',
      options: {
        baseUrl: 'https://covid.pristup.net/',
      }
    }
  ],
}
