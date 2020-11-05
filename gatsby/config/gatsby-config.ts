const config = {
  plugins: [
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'https://covid.pristup.net',
        apiBase: 'api',
        translation: true,
        languageConfig: {
          defaultLanguage: 'cs',
          enabledLanguages: ['en', 'cs'],
          translatableEntities: [
            { type: 'taxonomy_term', bundle: 'area', id: 'area' },
            { type: 'block_content', bundle: 'basic_content', id: 'block_content--basic_content' },
            { type: 'file', bundle: 'file', id: 'file--file' },
            { type: 'node', bundle: 'homepage', id: 'homepage' },
            { type: 'node', bundle: 'measure', id: 'measure' },
            { type: 'node', bundle: 'page', id: 'page' },
            { type: 'path_alias', bundle: 'path_alias', id: 'path_alias--path_alias' },
            { type: 'taxonomy_term', bundle: 'region', id: 'region' },
            { type: 'node', bundle: 'situation', id: 'situation' },
            { type: 'taxonomy_term', bundle: 'measure_type', id: 'taxonomy_term--measure_type' },
          ],
        },
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
