import React from 'react';
import Layout from '../src/layouts/default-layout';

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    className: 'pvs-theme',
  });
};

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
