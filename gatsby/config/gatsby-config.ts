const config = {
  plugins: [
    {
      resolve: 'gatsby-source-drupal-multilanguage',
      options: {
        baseUrl: 'https://covid.pristup.net/',
        apiBase: 'api',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-stylelint',
    'gatsby-plugin-scss-typescript',
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // develop: true,
        whitelist: ['pvs-theme', 'a'],
      },
    },
  ],
};
export default config;
