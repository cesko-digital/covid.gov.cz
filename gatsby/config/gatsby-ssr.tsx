import React from 'react';
import { GatsbySSR } from 'gatsby';
import RootLayout from '../src/components/root-layout';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes({
    className: 'pvs-theme',
    lang: 'cs',
  });
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
