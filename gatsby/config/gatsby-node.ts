import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
export { createPages } from './create-pages';

export const onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage !== 'develop') {
    return;
  }

  actions.setWebpackConfig({
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          enabled: true,
          files: './src/**/*.{ts,tsx,js,jsx}',
        },
        async: false,
        formatter: 'codeframe',
      }),
    ],
  });
};
