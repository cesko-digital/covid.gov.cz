const { generateConfig } = require('gatsby-plugin-ts-config');

module.exports = generateConfig({
  configDir: 'config',
  projectRoot: __dirname,
});
