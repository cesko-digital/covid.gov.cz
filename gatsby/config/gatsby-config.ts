const config = {
  plugins: [
    {
      resolve: 'gatsby-source-drupal',
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
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        documentPaths: ['./src/**/*.{ts,tsx}', './config/**/*.{ts,tsx}'],
        codegenConfig: {
          // key-value configs that will be applied to every plugins.
          // Note: The example below is completely unnecessary, just a demonstration.
          typesPrefix: 'I', // -> import { HiImageQuery } from '../../graphql-types'
        },
        codegenPlugins: [
          {
            // built-in plugin.
            // Use `typescript` for `@graphql-codegen/typescript`
            // and `operations` for `@graphql-codegen/typescript-operations`
            resolve: 'typescript',
            options: {
              namingConvention: `pascal-case#pascalCase`,
            },
          },
        ],
      },
    },
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
