const config = {
  plugins: [
    {
      resolve: 'gatsby-source-drupal-multilanguage',
      options: {
        baseUrl: 'https://covid.pristup.net/',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-stylelint',
    'gatsby-plugin-scss-typescript',
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-eslint',
  ],
};
export default config;
