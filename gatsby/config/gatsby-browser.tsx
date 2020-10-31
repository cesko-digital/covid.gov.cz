import 'assets/ds/scss/front.scss';
import React from 'react';
import Layout from '../src/layouts/default-layout';
export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
