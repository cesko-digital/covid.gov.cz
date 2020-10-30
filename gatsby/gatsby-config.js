module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-ts-config',
      options: {
        projectRoot: __dirname,
        configDir: 'config',
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        path: `${__dirname}/locales`,
        languages: ['cz', 'en'],
        defaultLanguage: 'cz',
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
