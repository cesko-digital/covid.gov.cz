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
        whitelistPatterns: [
          /^col/,
          /^justify-content/,
          /^align-items/,
          /^align-self/,
          /^pvs-theme-icon/,
          /btn/,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        path: `${__dirname}/locales`,
        languages: ['cs', 'en'],
        defaultLanguage: 'cs',
        redirect: false,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};

export default config;
