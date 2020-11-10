import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
export { createPages } from './create-pages';

export const onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage !== 'develop' || process.env.DISABLE_TYPE_CHECK === 'TRUE') {
    return;
  }

  actions.setWebpackConfig({
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
        formatter: 'codeframe',
      }),
    ],
  });
};
